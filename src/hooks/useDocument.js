import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // Realtime Data for document
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    // OnSnapshot function
    const unsubsribe = ref.onSnapshot(
      (snapshot) => {
        // Check if url ID doesn't exist
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("404 - Content doesn't exist");
        }
      },
      (err) => {
        console.log(err.message);
        setError("Failed to get Documents");
      }
    );

    // Clean up function
    return () => {
      unsubsribe();
    };
  }, [collection, id]);

  return { document, error };
};

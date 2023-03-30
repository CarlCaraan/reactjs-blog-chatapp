import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // Realtime Data for document
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    // OnSnapshot
    const unsubsribe = ref.onSnapshot(
      (snapshot) => {
        setDocument({ ...snapshot.data(), id: snapshot.id });
        setError(null);
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

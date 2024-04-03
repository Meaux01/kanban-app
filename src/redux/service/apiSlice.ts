import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query";
import { getSession } from "next-auth/react";
import { collection, getDocs } from "firebase/firestore";
import { onMessage } from "firebase/messaging";
import { db } from "@/components/utils/firebaseConfig";

export const fireStoreApi = createApi({
    reducerPath: "firestoreApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Tasks"],
    endpoints: (builder) => ({
        fetchDataFromDb: builder.query<{ [key: string]: any }[], void>({
            async queryFn() {
                try {
                    const session = await getSession();
                    const { user } = session!;
                    const ref = collection(db, `users/${user?.email}/task`);
                    const querySnapshot = await getDocs(ref);
                    return { data: querySnapshot.docs.map(doc => doc.data()) }
                } catch (error) {
                    console.error("Error executing query :", error)
                    return { error: error }
                }
            },
            providesTags: ["Tasks"]
        })
    })
})

export const { useFetchDataFromDbQuery } = fireStoreApi
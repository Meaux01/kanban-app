'use client'
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import BoardTasks from "./components/BoardTasks";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { data } from "../utils/data";
import { Just_Me_Again_Down_Here } from "next/font/google";

export default function Home() {
  const [userDetails, setUserDetails] = useState<{[key:string]:any}>();

  const getUserSession = async () => {
    const session = await getSession();
    if (session) {
      setUserDetails(session.user);
    }
  };

  const handleAddDoc = async () => {
    if (userDetails) {
      const docRef = collection(db, "users", userDetails.email, "tasks");
      const getDos = await getDocs(docRef);

      if (getDos.docs.length > 0){
        return
      } else {
        try {
          await addDoc(
            collection(db, "users", userDetails.email,"tasks"),
            data
          )
        } catch (error) {
          console.error("Error adding document:", error)
        }
      }
    }
  }

  useEffect(()=>{
    getUserSession()
  }, [])

  useEffect (() => {
    handleAddDoc()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails])

  return (
   <main className="flex h-full">
    <Sidebar/>
    <BoardTasks/>
   </main>
  );
}

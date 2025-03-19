import React from "react";
import { useState, useEffect } from "react";

const Hooks = () => {
  // constructor
  const [nilai, setNilai] = useState(0);

  // Lifecycle component
  useEffect(
    () => {
      // didMount & didUpdate
      document.title = `Nilai Ubah: ${nilai}`;
      console.log("didMount & didUpdate");

      return () => {
        //willUnmount
        console.log("willUnmount");
        document.title = `Inixindo`;
      };
    }, // willUpdate
    [nilai]
  );

  return (
    <>
      <div>LifecycleComp</div>
      <p>Nilai saat ini adalah: {nilai}</p>
      <button onClick={() => setNilai(nilai + 1)}>Update Nilai</button>
    </>
  );
};

export default Hooks;

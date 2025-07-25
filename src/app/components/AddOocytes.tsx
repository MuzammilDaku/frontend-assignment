import Image from "next/image";
import styles from "./../page.module.css";

export default function AddOocytes() {
  return (
    <div className="container-fluid px-2">
      <div className={`${styles.wrapper} ${styles.bgImage} my-4`}>
        <div className={`d-flex pt-4 align-items-center justify-content-between px-4`}>
         <div className="d-flex align-items-center">
           <Image src={"/Logo.png"} alt="Logo" height={18} width={18}  className="mx-2"/>
          <span className="text-white" style={{fontSize:"16px"}}>OPU & Oocytes</span>
         </div>
         <div className="text-center" style={{cursor:"pointer"}}>
          <Image src={'/share.png'} alt="Share Report" height={16} width={16}/>
         </div>
        </div>
        <div className="text-center text-white py-1" style={{fontSize:'16px'}}>
          OPU Scheduled for <span className="text-decoration-underline">Friday 24 Jun 10:30 am</span>
        </div>
        <div className="text-center" style={{color:"#B2BEE0",fontSize:'12px'}}>
          Oocytes can be added here once OPU has successfully occurred
        </div>
        <div className="text-center pt-4">
          <button className={`${styles.button} p-2`}>
            Add oocytes & OPU details
          </button>
        </div>
        <div className="text-center text-white pb-4 pt-2" style={{fontSize:'14px'}}>
          No oocytes collected, <span style={{color:'#7F6BF3',cursor:'pointer'}}>close cycle</span>
        </div>
      </div>
    </div>
  );
}

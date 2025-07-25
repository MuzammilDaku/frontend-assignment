"use client";
import Image from "next/image";
import styles from "./../page.module.css";

export default function Reports() {
  return (
    <div className="container-fluid px-2">
      <div className={`${styles.wrapper} my-4 px-4`}>
        <div className="d-flex align-items-center  py-3">
          <Image src={"/pregnant.png"} alt="Pregnant" height={18} width={18} />
          <div className="text-white px-2 f-16">Semen</div>
          <div className="text-white f-14">Sample 19A43A</div>
          <div
            className={`${styles.pills} d-flex align-items-center px-2 mx-1 py-1`}
          >
            <Image
              src={"/Avatar.png"}
              height={12}
              width={12}
              alt="Avatar"
              className="mx-1"
            />
            <span className="f-12">Partner: PESA Testicular</span>
          </div>
          <div
            className={`${styles.pills} d-flex align-items-center px-2 mx-1 py-1`}
          >
            <Image
              src={"/snowflake.png"}
              height={12}
              width={12}
              alt="Avatar"
              className="mx-1"
            />
            <span className="f-12">Frozen</span>
          </div>
          <div
            className={`${styles.pills} d-flex align-items-center px-2 mx-1 py-1`}
          >
            <Image
              src={"/labs.png"}
              height={12}
              width={12}
              alt="Avatar"
              className="mx-1"
            />
            <span className="f-12">12:56 PM 10 Jun 2024</span>
          </div>
        </div>
        <div className="row pb-4">
          <div className={`card-wrapper col py-3 me-3`}>
            <div className="title d-flex align-items-center">
              <Image
                src={"/microscope.png"}
                height={16}
                width={16}
                alt="Microscope"
              />
              <span className="f-14 text-white px-1">Pre-processing</span>
            </div>
            <div className="d-flex">
              <div className={`${styles.tab} p-2 my-2 me-2`}>
                <div className="f-16 text-white">15 ml</div>
                <div style={{ color: "#929DB7" }} className="f-12">
                  Volume
                </div>
              </div>
              <div className={`${styles.tab} p-2 my-2 ms-2`}>
                <div className="f-16 text-white">15 M/mL</div>
                <div style={{ color: "#929DB7" }} className="f-12">
                  Concentration
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className={`${styles.tab} p-2 me-2`}>
                <div className="f-16 text-white">4%</div>
                <div style={{ color: "#929DB7" }} className="f-12">
                  Normal Morphology
                </div>
              </div>
              <div className={`${styles.tab} p-2 ms-2`}>
                <div className="f-16 text-white">40%</div>
                <div style={{ color: "#929DB7" }} className="f-12">
                  Progressive Motility
                </div>
              </div>
            </div>
            <div
              className={`${styles.tab} p-2 my-2 d-flex align-items-center `}
            >
              <Image src={"/file.png"} height={16} width={16} alt="File" />
              <span className="text-white f-12 px-2">
                Minimal bleeding noted at puncture site resolved...
              </span>
            </div>
          </div>

          <div className={`card-wrapper col py-3 me-3`}>
            <div className="title d-flex align-items-center">
              <Image
                src={"/calculator.png"}
                height={16}
                width={16}
                alt="Calculator"
              />
              <span className="f-14 text-white px-1">Post Preparation</span>
              <div
                className={`${styles.pills} d-flex align-items-center px-2 mx-1 py-1`}
              >
                <span className="f-12">microfluidics</span>
              </div>
            </div>
            <div className="d-flex">
              <div className={`${styles.tab} p-2 my-2 me-2`}>
                <div className="f-16 text-white">15 ml</div>
                <div style={{ color: "#929DB7" }} className="f-12">
                  Volume
                </div>
              </div>
              <div className={`${styles.tab} p-2 my-2 ms-2`}>
                <div className="f-16 text-white">15 M/mL</div>
                <div style={{ color: "#929DB7" }} className="f-12">
                  Concentration
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className={`${styles.tab} p-2 me-2`}>
                <div className="f-16 text-white">4%</div>
                <div style={{ color: "#929DB7" }} className="f-12">
                  Normal Morphology
                </div>
              </div>
              <div className={`${styles.tab} p-2 ms-2`}>
                <div className="f-16 text-white">40%</div>
                <div style={{ color: "#929DB7" }} className="f-12">
                  Progressive Motility
                </div>
              </div>
            </div>
            <div
              className={`${styles.tab} p-2 my-2 d-flex align-items-center `}
            >
              <Image src={"/file.png"} height={16} width={16} alt="File" />
              <span className="text-white f-12 px-2">
                Minimal bleeding noted at puncture site resolved...
              </span>
            </div>
          </div>

          <div className={`card-wrapper col py-3`}>
            <div
              className="d-flex align-items-center justify-content-center text-white flex-column"
              style={{ height: "100%" }}
            >
              <div className="f-14">No insemination details yet</div>
              <div className="f-12 py-2 pb-3" style={{ color: "#B3C1E0" }}>
                This will come after OPU has been verified
              </div>
              <div>
                <button className={`${styles.button} p-2`}>
                  Add insemination details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

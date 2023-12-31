import "../../app/globals.css";
import "../../app/css/main.css";
import "flowbite";
import langDic from "../../app/lang.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LangType } from "../main";

export default function Done() {
  const [langData, setLangData] = useState<any>();
  const [lang, setlang] = useState<LangType>("en");
  useEffect(() => {
    let tempLang: LangType = "en";
    const nowLang = localStorage.getItem("lang");
    if (nowLang === null || nowLang === undefined) {
      localStorage.setItem("lang", "en");
    } else {
      tempLang = nowLang as LangType;
    }
    setlang(tempLang);
    setLangData(langDic[tempLang]);
  }, []);

  if (langData === undefined) {
    return "Loading...";
  }
  return (
    <div className='bg-[#212e56] w-[860px] h-[1570px] relative overflow-hidden'>
      <div className='bg-[rgba(234,247,255,0.50)] rounded-[50%] w-[180px] h-[180px] absolute left-[340px] top-[353px]'></div>

      <div className='bg-[rgba(19,105,249,0.50)] rounded-[50%] w-[200px] h-[200px] absolute left-[330px] top-[343px]'></div>

      <svg
        className='absolute left-[-22px] top-[528px] overflow-visible'
        style={{}}
        width='904'
        height='583'
        viewBox='0 0 904 583'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M61.5994 422.676C57.2646 422.67 52.9353 423.307 48.6459 424.582L48.027 424.767C34.3007 429.243 21.8496 443.766 13.0123 465.609C4.17503 487.452 -0.440343 515.111 0.0331269 543.391L0.197174 554.03C0.305355 560.755 0.420552 567.986 0.515513 576.007C0.526854 577.874 0.899725 579.655 1.553 580.965C2.20627 582.274 3.0871 583.006 4.00394 583H697.875C746.797 581.953 795.541 580.635 842.745 579.083C851.635 579.142 860.508 577.521 869.25 574.242C882.368 568.769 891.474 557.921 897.088 541.077C904.071 520.19 904.292 493.887 903.87 464.17C903.01 404.164 902.157 341.127 901.306 278.28C900.554 222.892 899.805 167.652 899.057 114.765C898.594 83.3801 897.565 55.677 889.636 34.5043C881.042 11.6062 865.368 1.73705e-07 843.049 1.73705e-07C842.779 1.73705e-07 842.511 -8.64662e-05 842.238 0.00361017C772.292 0.880822 702.987 85.658 669.782 210.961C665.958 225.39 662.395 240.837 658.949 255.779C654.044 278.197 648.489 300.001 642.312 321.077C639.092 331.781 635.414 341.886 631.322 351.274C631.052 351.931 630.744 352.635 630.418 353.303C629.671 355.018 628.891 356.671 628.13 358.144C623.937 366.793 619.228 374.339 614.114 380.606L613.623 381.187C613.253 381.653 612.852 382.118 612.452 382.544C609.67 385.697 606.776 388.423 603.795 390.699C591.138 400.533 576.745 402.89 561.019 397.699C546.097 392.464 531.717 382.135 518.486 367.147C503.924 350.924 490.293 330.697 477.11 311.138C471.32 302.543 465.331 293.659 459.35 285.24C458.225 283.655 457.12 282.107 455.997 280.558C448.692 270.522 442.069 262.234 435.75 255.22C420.862 238.266 404.456 227.555 387.501 223.719C370.105 220.361 354.775 226.693 341.947 242.494C338.278 247.037 334.828 252.277 331.643 258.144C316.45 285.955 307.083 327.001 298.026 366.696C286.759 416.07 275.109 467.13 252.103 493.598C225.557 524.168 186.808 511.468 159.394 489.382C150.774 482.436 142.166 474.448 133.84 466.718C130.478 463.596 127.115 460.477 123.746 457.415C117.129 451.394 111.714 446.78 106.704 442.885L105.119 441.643C104.238 440.968 103.355 440.293 102.457 439.651C96.906 435.495 91.2479 431.958 85.5078 429.055L84.2167 428.391C81.6283 427.189 79.2084 426.189 76.8337 425.348L75.8858 425.016C71.1627 423.449 66.3848 422.666 61.5994 422.676Z'
          fill='#1369F9'
        />
      </svg>

      <svg
        className='absolute left-[-22px] top-[597px] overflow-visible'
        style={{}}
        width='904'
        height='583'
        viewBox='0 0 904 583'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M61.5994 422.676C57.2646 422.67 52.9353 423.307 48.6459 424.582L48.027 424.767C34.3007 429.243 21.8496 443.766 13.0123 465.609C4.17503 487.452 -0.440343 515.111 0.0331269 543.391L0.197174 554.03C0.305355 560.755 0.420552 567.986 0.515513 576.007C0.526854 577.874 0.899725 579.655 1.553 580.965C2.20627 582.274 3.0871 583.006 4.00394 583H697.875C746.797 581.953 795.541 580.635 842.745 579.083C851.635 579.142 860.508 577.521 869.25 574.242C882.368 568.769 891.474 557.921 897.088 541.077C904.071 520.19 904.292 493.887 903.87 464.17C903.01 404.164 902.157 341.127 901.306 278.28C900.554 222.892 899.805 167.652 899.057 114.765C898.594 83.3801 897.565 55.677 889.636 34.5043C881.042 11.6062 865.368 1.73705e-07 843.049 1.73705e-07C842.779 1.73705e-07 842.511 -8.64662e-05 842.238 0.00361017C772.292 0.880822 702.987 85.658 669.782 210.961C665.958 225.39 662.395 240.837 658.949 255.779C654.044 278.197 648.489 300.001 642.312 321.077C639.092 331.781 635.414 341.886 631.322 351.274C631.052 351.931 630.744 352.635 630.418 353.303C629.671 355.018 628.891 356.671 628.13 358.144C623.937 366.793 619.228 374.339 614.114 380.606L613.623 381.187C613.253 381.653 612.852 382.118 612.452 382.544C609.67 385.697 606.776 388.423 603.795 390.699C591.138 400.533 576.745 402.89 561.019 397.699C546.097 392.464 531.717 382.135 518.486 367.147C503.924 350.924 490.293 330.697 477.11 311.138C471.32 302.543 465.331 293.659 459.35 285.24C458.225 283.655 457.12 282.107 455.997 280.558C448.692 270.522 442.069 262.234 435.75 255.22C420.862 238.266 404.456 227.555 387.501 223.719C370.105 220.361 354.775 226.693 341.947 242.494C338.278 247.037 334.828 252.277 331.643 258.144C316.45 285.955 307.083 327.001 298.026 366.696C286.759 416.07 275.109 467.13 252.103 493.598C225.557 524.168 186.808 511.468 159.394 489.382C150.774 482.436 142.166 474.448 133.84 466.718C130.478 463.596 127.115 460.477 123.746 457.415C117.129 451.394 111.714 446.78 106.704 442.885L105.119 441.643C104.238 440.968 103.355 440.293 102.457 439.651C96.906 435.495 91.2479 431.958 85.5078 429.055L84.2167 428.391C81.6283 427.189 79.2084 426.189 76.8337 425.348L75.8858 425.016C71.1627 423.449 66.3848 422.666 61.5994 422.676Z'
          fill='#EAF7FF'
        />
      </svg>

      <div
        className='text-[#ffffff] text-center absolute left-[191px] top-[229px]'
        style={{ font: "700 50px/60px 'Cairo', sans-serif" }}
      >
        {langData["done-h1"]}
      </div>

      <div className='absolute' style={{ inset: "0" }}>
        <div className='bg-[#ffffff] rounded-[10px] w-[720px] h-[390px] absolute left-[70px] top-[625px]'></div>

        <div className='w-[638px] h-[284px] static'>
          {lang === "jp" ? (
            <>
              <div
                className='text-[#1369f9] text-left absolute left-[108px] top-[668px]'
                style={{ font: "700 60px 'Inter', sans-serif" }}
              >
                01
              </div>
            </>
          ) : (
            <div
              className='text-[#1369f9] text-left absolute left-[108px] top-[668px]'
              style={{ font: "700 60px 'Inter', sans-serif" }}
            >
              01
            </div>
          )}

          <div
            className='text-[#1369f9] text-left absolute left-[104px] top-[771px]'
            style={{ font: "700 60px 'Inter', sans-serif" }}
          >
            02
          </div>

          <div
            className='text-[#1369f9] text-left absolute left-[103px] top-[874px]'
            style={{ font: "700 60px 'Inter', sans-serif" }}
          >
            03
          </div>

          {lang === "jp" ? (
            <>
              <div
                className='break-words text-[#000000] text-left absolute left-[214px] top-[665px] w-[527px] h-[84px]'
                style={{ font: "400 30px/40px 'Cairo', sans-serif " }}
              >
                {langData["done-h2"]}
                <br />
              </div>
            </>
          ) : (
            <div
              className='break-words text-[#000000] text-left absolute left-[214px] top-[663px] w-[527px] h-[84px]'
              style={{ font: "400 32px/40px 'Cairo', sans-serif " }}
            >
              {langData["done-h2"]}
              <br />
            </div>
          )}

          <div
            className='text-[#000000] text-justified absolute left-[214px] top-[767px] w-[527px] h-[71px]'
            style={{ font: "400 32px/40px 'Cairo', sans-serif" }}
          >
            {langData["done-h3"]}
            <br />
          </div>

          <div
            className='text-[#000000] text-left absolute left-[212px] top-[866px] w-[529px] h-[71px]'
            style={{ font: "400 32px/40px 'Cairo', sans-serif" }}
          >
            {langData["done-h4"]}
            <br />
          </div>
        </div>
      </div>

      <svg
        className='absolute left-[355px] top-[368px] overflow-visible'
        style={{}}
        width='150'
        height='150'
        viewBox='0 0 150 150'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='75' cy='75' r='75' fill='white' />
        <path
          d='M117.933 56.4127L69.5303 104.815C68.8516 105.495 68.0454 106.035 67.1579 106.403C66.2704 106.771 65.319 106.96 64.3582 106.96C63.3974 106.96 62.4461 106.771 61.5586 106.403C60.6711 106.035 59.8649 105.495 59.1861 104.815L32.0794 77.7045C30.7359 76.3292 29.9889 74.4797 30.0001 72.5572C30.0114 70.6347 30.7801 68.7941 32.1396 67.4347C33.499 66.0753 35.3396 65.3066 37.2621 65.2953C39.1846 65.284 41.034 66.0311 42.4093 67.3745L64.3576 89.3124L107.589 46.0672C108.967 44.7286 110.817 43.9861 112.738 44.0002C114.66 44.0143 116.499 44.7839 117.857 46.1426C119.216 47.5013 119.986 49.3401 120 51.2615C120.014 53.183 119.271 55.0341 117.933 56.4127Z'
          fill='#212E56'
        />
      </svg>

      <div className='bg-[#eaf7ff] rounded-[10px] w-[1025px] h-[478px] absolute left-[-22px] top-[1138px]'></div>

      <Image
        width={200}
        height={197}
        className='absolute left-[330px] top-[1311px]'
        src={
          lang === "en"
            ? "/img/english.png"
            : lang === "cnb"
            ? "/img/chinab.png"
            : lang === "cns"
            ? "/img/chinas.png"
            : lang === "jp"
            ? "/img/Japan_qu_moneybox_new.png"
            : ""
        }
        alt={""}
      />

      <div className='absolute' style={{ inset: "0" }}>
        <div className='w-[50px] h-[50px] static'>
          <div className='w-[50px] h-[50px] static'>
            <div className='bg-[#ffef61] rounded-[50%] w-[50px] h-[50px] absolute left-[214px] top-[1138px]'></div>
          </div>

          <svg
            className='absolute left-[236.14px] top-[1149.43px] overflow-visible'
            style={{}}
            width='6'
            height='28'
            viewBox='0 0 6 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.00027 18.7143C3.60648 18.7143 4.18786 18.4735 4.61651 18.0448C5.04517 17.6162 5.28598 17.0348 5.28598 16.4286V2.7143C5.28598 2.10809 5.04517 1.52671 4.61651 1.09806C4.18786 0.669405 3.60648 0.428589 3.00027 0.428589C2.39406 0.428589 1.81268 0.669405 1.38403 1.09806C0.955372 1.52671 0.714556 2.10809 0.714556 2.7143V16.4286C0.714556 17.0348 0.955372 17.6162 1.38403 18.0448C1.81268 18.4735 2.39406 18.7143 3.00027 18.7143ZM3.00027 27.8572C3.56536 27.8572 4.11776 27.6896 4.58761 27.3756C5.05747 27.0617 5.42367 26.6155 5.63992 26.0934C5.85617 25.5713 5.91276 24.9968 5.80251 24.4426C5.69227 23.8884 5.42015 23.3793 5.02057 22.9797C4.621 22.5801 4.1119 22.308 3.55767 22.1978C3.00344 22.0875 2.42896 22.1441 1.90689 22.3604C1.38481 22.5766 0.938589 22.9428 0.624642 23.4127C0.310696 23.8825 0.143127 24.4349 0.143127 25C0.143127 25.7578 0.444147 26.4845 0.979965 27.0203C1.51578 27.5561 2.24251 27.8572 3.00027 27.8572Z'
              fill='white'
            />
          </svg>
        </div>

        <div
          className='break-wor text-[#1369f9] text-left absolute left-[285px] top-[1100px] w-[392px]'
          style={{ font: "700 35px/40px 'Cairo', sans-serif" }}
        >
          {langData["done-h5"]}
        </div>
      </div>

      <div className='absolute' style={{ inset: "0" }}>
        <svg
          className='absolute left-[485.89px] top-[1287px] overflow-visible'
          style={{ transform: "translate(-104.45px, -38.94px)" }}
          width='113'
          height='52'
          viewBox='0 0 113 52'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M56.9116 52L8.43419 13.0577L105.389 13.0577L56.9116 52Z'
            fill='#212E56'
          />
        </svg>

        <div className='bg-[#212e56] rounded-[10px] w-[180px] h-[48.46px] absolute left-[340px] top-[1227px]'></div>

        <div className='w-[102px] h-9 static'>
          <div
            className='text-[#ffffff] text-left absolute left-[340px] top-[1233px] w-[180px]'
            style={{ font: "400 30px 'Inter', sans-serif" }}
          >
            <div className='text-center'>{langData["qr-lang"]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

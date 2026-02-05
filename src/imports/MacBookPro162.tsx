import svgPaths from "./svg-211rcsmznl";
import imgMacBookPro162 from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgImage2 from "figma:asset/96575ac4ad952542028b52d143d1a6735166da7d.png";

function Frame11() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Configuration</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Reset board</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[32px] text-white">Card Sort</p>
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Gear() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="gear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_482)" id="gear">
          <path d={svgPaths.pa554980} fill="var(--fill-0, white)" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_482">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stackname() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Stackname">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white">Stack name</p>
      <Gear />
    </div>
  );
}

function Pencil() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil />
      <TrashCan />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame />
    </div>
  );
}

function Pencil1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] relative self-stretch shrink-0 w-[16px]">
      <Pencil1 />
      <TrashCan1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[320px]">
      <div className="content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[inherit] w-full">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
          <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
        </div>
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#14455c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Pencil2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil2 />
      <TrashCan2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Pencil3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil3 />
      <TrashCan3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Pencil4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil4 />
      <TrashCan4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Pencil5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil5 />
      <TrashCan5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Pencil6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil6 />
      <TrashCan6 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame 13">
          <rect fill="var(--fill-0, white)" fillOpacity="0.3" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
          <rect height="31" rx="15.5" stroke="var(--stroke-0, white)" width="31" x="0.5" y="0.5" />
          <path d={svgPaths.p273f9180} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function AddButtonDefault() {
  return (
    <div className="content-stretch flex items-center p-[16px] relative shrink-0" data-name="Add button/Default">
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center opacity-0 px-[16px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Add card</p>
    </div>
  );
}

function AddButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative shrink-0 w-[206.2px]" data-name="Add button">
      <AddButtonDefault />
      <Frame20 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <AddButton />
    </div>
  );
}

function Well() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[8px] shrink-0" data-name="well">
      <Stackname />
      <Frame4 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame18 />
    </div>
  );
}

function Gear1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="gear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_482)" id="gear">
          <path d={svgPaths.pa554980} fill="var(--fill-0, white)" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_482">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stackname1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Stackname">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white">Stack name</p>
      <Gear1 />
    </div>
  );
}

function Pencil7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil7 />
      <TrashCan7 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame22 />
    </div>
  );
}

function Pencil8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil8 />
      <TrashCan8 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame24 />
    </div>
  );
}

function Pencil9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil9 />
      <TrashCan9 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame26 />
    </div>
  );
}

function Pencil10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil10 />
      <TrashCan10 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame28 />
    </div>
  );
}

function Pencil11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil11 />
      <TrashCan11 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame30 />
    </div>
  );
}

function Pencil12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil12 />
      <TrashCan12 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame32 />
    </div>
  );
}

function Pencil13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil13 />
      <TrashCan13 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame34 />
    </div>
  );
}

function Pencil14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil14 />
      <TrashCan14 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame 13">
          <rect fill="var(--fill-0, white)" fillOpacity="0.3" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
          <rect height="31" rx="15.5" stroke="var(--stroke-0, white)" width="31" x="0.5" y="0.5" />
          <path d={svgPaths.p273f9180} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function AddButtonDefault1() {
  return (
    <div className="content-stretch flex items-center p-[16px] relative shrink-0" data-name="Add button/Default">
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center opacity-0 px-[16px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Add card</p>
    </div>
  );
}

function AddButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative shrink-0 w-[206.2px]" data-name="Add button">
      <AddButtonDefault1 />
      <Frame39 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <AddButton1 />
    </div>
  );
}

function Well1() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[8px] shrink-0" data-name="well">
      <Stackname1 />
      <Frame21 />
      <Frame23 />
      <Frame25 />
      <Frame27 />
      <Frame29 />
      <Frame31 />
      <Frame33 />
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function Gear2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="gear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_482)" id="gear">
          <path d={svgPaths.pa554980} fill="var(--fill-0, white)" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_482">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stackname2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Stackname">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white">Stack name</p>
      <Gear2 />
    </div>
  );
}

function Pencil15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil15 />
      <TrashCan15 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame41 />
    </div>
  );
}

function Pencil16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil16 />
      <TrashCan16 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame43 />
    </div>
  );
}

function Pencil17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil17 />
      <TrashCan17 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame45 />
    </div>
  );
}

function Pencil18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil18 />
      <TrashCan18 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame47 />
    </div>
  );
}

function Pencil19() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil19 />
      <TrashCan19 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame49 />
    </div>
  );
}

function Pencil20() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="pencil">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-1/2 top-[calc(50%-0.02px)] w-[15.999px]" data-name="Primary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9992 16.0023">
          <path d={svgPaths.p1e21cb00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </svg>
      </div>
    </div>
  );
}

function TrashCan20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="trash-can">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_477)" id="trash-can">
          <path d={svgPaths.p113cbd00} fill="var(--fill-0, black)" fillOpacity="0.4" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_1_477">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between min-h-[56px] opacity-0 relative self-stretch shrink-0 w-[16px]">
      <Pencil20 />
      <TrashCan20 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-[320px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#14455c] text-[18px]">
        <p className="leading-[normal] whitespace-pre-wrap">Card data</p>
      </div>
      <Frame51 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame 13">
          <rect fill="var(--fill-0, white)" fillOpacity="0.3" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
          <rect height="31" rx="15.5" stroke="var(--stroke-0, white)" width="31" x="0.5" y="0.5" />
          <path d={svgPaths.p273f9180} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function AddButtonDefault2() {
  return (
    <div className="content-stretch flex items-center p-[16px] relative shrink-0" data-name="Add button/Default">
      <Frame53 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center opacity-0 px-[16px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Add card</p>
    </div>
  );
}

function AddButton2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative shrink-0 w-[206.2px]" data-name="Add button">
      <AddButtonDefault2 />
      <Frame54 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <AddButton2 />
    </div>
  );
}

function Well2() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[8px] shrink-0" data-name="well">
      <Stackname2 />
      <Frame40 />
      <Frame42 />
      <Frame44 />
      <Frame46 />
      <Frame48 />
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame 13">
          <rect fill="var(--fill-0, white)" fillOpacity="0.3" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
          <rect height="31" rx="15.5" stroke="var(--stroke-0, white)" width="31" x="0.5" y="0.5" />
          <path d={svgPaths.p273f9180} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function AddButtonDefault3() {
  return (
    <div className="content-stretch flex items-center p-[16px] relative shrink-0" data-name="Add button/Default">
      <Frame56 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center opacity-0 px-[16px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Add cloumn</p>
    </div>
  );
}

function AddButton3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[229px]" data-name="Add button">
      <AddButtonDefault3 />
      <Frame57 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AddButton3 />
    </div>
  );
}

function WellContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Well container">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] relative size-full">
        <Well />
        <Well1 />
        <Well2 />
        <Frame55 />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">{`Save as .txt `}</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[rgba(255,255,255,0.25)] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Save as .csv</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative w-full">
          <Frame59 />
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="MacBook Pro 16' - 2">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro162} />
      <div className="absolute h-[1309px] left-[-88px] top-[-67px] w-[1975px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Frame5 />
      <WellContainer />
      <Frame58 />
    </div>
  );
}
/* Image data for each Sommerfest year */
export const sommerfestData: Record<number, { images: string[]; note?: string }> = {
  2000: {
    images: [
      "105-0562_IMG.jpg","106-0634_IMG.jpg","106-0630_IMG.jpg","105-0588_IMG.jpg",
      "106-0643_IMG.jpg","105-0569_IMG.jpg","106-0641_IMG.jpg","106-0633_IMG.jpg",
      "106-0637_IMG.jpg","106-0631_IMG.jpg","106-0638_IMG.jpg","105-0595_IMG.jpg",
      "106-0663_IMG.jpg","107-0729_IMG.jpg","106-0656_IMG.jpg","106-0620_IMG.jpg"
    ]
  },
  2001: {
    images: ["01.gif","02.gif","03.gif","04.gif","05.gif","06.gif"]
  },
  2002: { images: [], note: "Keine Fotos vorhanden." },
  2003: { images: [], note: "Keine Fotos vorhanden." },
  2004: { images: [], note: "Keine Fotos vorhanden." },
  2005: {
    images: [
      "bild105.jpg","bild116.jpg","bild112.jpg","bild073.jpg","bild114.jpg",
      "bild090.jpg","bild113.jpg","bild130.jpg","bild4288.JPG","bild4310.JPG",
      "bild4265.JPG","bild4306.JPG","bild4294.JPG","bild4286.JPG","bild4307.JPG",
      "bild4284.JPG","bild4273.JPG","bild4276.JPG","bild4311.JPG","bild4312.JPG",
      "bild4257.JPG","bild4262.JPG","bild4333.JPG","bild4326.JPG","bild4332.JPG",
      "bild4331.JPG","bild4266.JPG","bild4283.JPG","bild126.jpg","bild136.jpg",
      "bild129.jpg","bild124.jpg"
    ]
  },
  2008: {
    images: [
      "BILD0751.jpg","BILD0758.jpg","BILD0760.jpg","BILD0759.jpg","BILD0767.jpg",
      "BILD0766.jpg","BILD0768.jpg","BILD0826.jpg","BILD0771.jpg","BILD0772.jpg",
      "BILD0776.jpg","BILD0779.jpg","BILD0785.jpg","BILD0788.jpg","BILD0789.jpg",
      "BILD0791.jpg","BILD0792.jpg","BILD0794.jpg","BILD0796.jpg","BILD0799.jpg",
      "BILD0801.jpg","BILD0802.jpg","BILD0805.jpg","BILD0804.jpg","BILD0818.jpg",
      "BILD0825.jpg","BILD0808.jpg","PICT1675.jpg","PICT1669.jpg","BILD0827.jpg",
      "PICT1679.jpg","PICT1681.jpg"
    ]
  },
  2009: {
    images: [
      "Bild10.JPG","Bild09.JPG","Bild08.JPG","Bild01.jpg","Bild07.JPG",
      "Bild02.jpg","Bild05.jpg","Bild03.jpg","Bild06.jpg","Bild20.jpg",
      "Bild04.jpg","Bild19.JPG","Bild17.JPG","Bild18.JPG","Bild16.jpg",
      "Bild14.JPG","Bild13.JPG","Bild15.JPG","Bild12.JPG","Bild11.JPG",
      "Bild30.JPG","Bild29.JPG","Bild28.JPG","Bild27.JPG","Bild26.JPG",
      "Bild21.jpg","Bild22.JPG","Bild25.JPG","Bild24.jpg","Bild23.JPG",
      "Bild36.jpg","Bild33.jpg","Bild32.jpg","Bild35.JPG","Bild34.JPG","Bild31.JPG"
    ]
  },
  2010: {
    images: [
      "PICT2222.JPG","PICT2215.JPG","PICT2218.JPG","PICT2219.JPG","PICT2213.JPG",
      "PICT2234.jpg","PICT2208.JPG","PICT2231.jpg","PICT2206.JPG","PICT2237.JPG",
      "PICT2192.JPG","PICT2223.jpg","PICT2205.JPG","PICT2202.JPG","PICT2204.JPG","PICT2197.JPG"
    ]
  },
  2011: {
    images: [
      "Bild 299.jpg","Bild 281.jpg","Bild 284.jpg","Bild 275.jpg",
      "Bild 286.jpg","Bild 274.jpg","Bild 293.jpg","Bild 295.jpg",
      "Bild 290.jpg","Bild 315.jpg","Bild 316.jpg","Bild 307.jpg",
      "Bild 301.jpg","Bild 310.jpg","Bild 314.jpg","Bild 327.jpg",
      "Bild 329.jpg","Bild 337.jpg","Bild 340.jpg","Bild 328.jpg",
      "Bild 330.jpg","Bild 335.jpg"
    ]
  }
};

export const sommerfestYears = [2011, 2010, 2009, 2008, 2005, 2004, 2003, 2002, 2001, 2000];

/* Map year to the subfolder name on disk (public/bilder/sofestYYYY/) */
export function folderForYear(year: number): string {
  return `sofest${year}`;
}

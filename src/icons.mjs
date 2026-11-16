const paths={
 heart:'M20.8 4.6a5.6 5.6 0 0 0-7.9 0L12 5.5l-.9-.9a5.6 5.6 0 0 0-7.9 7.9L12 21l8.8-8.5a5.6 5.6 0 0 0 0-7.9Z',
 comment:'M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z',
 send:'m22 2-7 20-4-9-9-4 20-7Zm0 0L11 13',bookmark:'M19 21l-7-4-7 4V3h14v18Z',
 more:'M5 12h.01M12 12h.01M19 12h.01',close:'m6 6 12 12M6 18 18 6',chevron:'m6 9 6 6 6-6',plus:'M12 5v14M5 12h14',
 'arrow-up':'m6 12 6-6 6 6M12 6v14','arrow-down':'m6 12 6 6 6-6M12 18V4','arrow-left':'m12 5-7 7 7 7M5 12h15',
 search:'M21 21l-4.3-4.3M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z',check:'m5 12 4 4L19 6',
 copy:'M9 9h12v12H9V9ZM15 9V3H3v12h6',mic:'M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0V5ZM5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8',
 headphones:'M3 14v-3a9 9 0 0 1 18 0v3M3 13h4v8H3v-8Zm14 0h4v8h-4v-8Z',
 paperclip:'m21 11-8.5 8.5a6 6 0 0 1-8.5-8.5L13 2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8L15 6',
 globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c4 5 4 13 0 18-4-5-4-13 0-18Z',sliders:'M4 7h9m4 0h3M4 17h3m4 0h9M13 4v6M7 14v6',
 play:'m8 4 13 8-13 8V4Z',pause:'M7 4v16M17 4v16',music:'M9 18V5l12-2v13M9 8l12-2M9 18c0 2-2 3-4 3s-3-1-3-2.5S4 16 6 16c1.5 0 3 1 3 2Zm12-2c0 2-2 3-4 3s-3-1-3-2.5S16 14 18 14c1.5 0 3 1 3 2Z',
 share:'M12 16V3m-5 5 5-5 5 5M5 12v9h14v-9',home:'m3 10 9-7 9 7v11h-6v-7H9v7H3V10Z',grid:'M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z',video:'M3 5h12v14H3V5Zm12 5 6-4v12l-6-4',
 refresh:'M21 4v6h-6M3 20v-6h6M5 8a8 8 0 0 1 13-3l3 5M3 14l3 5a8 8 0 0 0 13-3',
 'thumbs-up':'M7 10v11H3V10h4Zm0 0 5-7h2v7h5a2 2 0 0 1 2 2l-2 7a2 2 0 0 1-2 2H7',
 'thumbs-down':'M7 14V3H3v11h4Zm0 0 5 7h2v-7h5a2 2 0 0 0 2-2l-2-7a2 2 0 0 0-2-2H7',
 download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',external:'M14 3h7v7m0-7L10 14M10 3H3v18h18v-7',
 sparkles:'m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Z',menu:'M3 6h18M3 12h18M3 18h18',edit:'m16 3 5 5-12 12-6 1 1-6L16 3Z',stop:'M5 5h14v14H5V5Z',
 volume:'m11 4-6 5H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14',bell:'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4',image:'M3 3h18v18H3V3Zm0 14 5-5 4 4 4-6 5 7M8 7h.01',
 verified:'m12 2 3 2 4 1 1 4 2 3-2 3-1 4-4 1-3 2-3-2-4-1-1-4-2-3 2-3 1-4 4-1 3-2Zm-5 10 3 3 7-7',link:'m10 13 4-4M8 16l-2 2a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m2 1 2-2a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0'
};
export function icon(name,size=24){return `<svg width="${Number(size)||24}" height="${Number(size)||24}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.sparkles}"/></svg>`;}
export function logo(app,size=24){
 const base=`width="${Number(size)||24}" height="${Number(size)||24}" viewBox="0 0 24 24" aria-hidden="true"`;
 if(app==='instagram')return `<svg ${base} fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`;
 if(app==='tiktok')return `<svg ${base} fill="currentColor"><path d="M16.1 2c.3 2.6 1.8 4.2 4.4 4.5v3.3a10.2 10.2 0 0 1-4.4-1.3v7a6.5 6.5 0 1 1-5.6-6.4v3.5a3 3 0 1 0 2.2 2.9V2h3.4Z"/></svg>`;
 if(app==='claude')return `<svg ${base} fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m12 2 .6 6.5M17.8 3.8 14.5 9M22 9l-6.3 2M21 15l-6.5-1M17.8 21l-4-6M10 22l1-6.5M4 18.5l5.5-4M2 12l6.5.5M4 5l5.5 5M10 2l1 6.5"/></svg>`;
 return `<svg ${base} fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3a5 5 0 0 1 7 4 5 5 0 0 1 1 8 5 5 0 0 1-6 6 5 5 0 0 1-8-1 5 5 0 0 1-3-7 5 5 0 0 1 2-8 5 5 0 0 1 7-2Z"/><path d="m12 6 6 3v7l-6 3-6-3V9l6-3Zm0 0v7l6 3M6 9l6 4v6"/></svg>`;
}

// =================================================================
// ❤️ OUR MEMORIES & LITTLE MOMENTS
// =================================================================
// Shared history elements from our chats, calls and memories.

const lovieAI_Data_Pool = {
    openings: [
        "Hey Lovie, aaj jab kaam ke beech tumhara khayal aaya, toh mood automatic accha ho gaya.",
        "Lovie, subah se hi dimaag me hamari kal wali baaton ka chota sa loop chal raha hai.",
        "Ghar par baith kar jab bhi phone dekhta hoon, tumhari cute baatein yaad aa jaati hain.",
        "Naya din shuru hote hi mera focus bas tumhare text dekhne par chala jata hai.",
        "Lovie, mujhe bohot accha lagta hai jahan hum dono bina kisi formality ke ghanto baat karte hain.",
        "Aaj randomly purani chats scroll kar raha thaa aur tumhari baatein dekh kar smile aa gayi.",
        "Late night socha tumhein ek chota sa text bhej doon, aaj din kaisa gaya tumhara?",
        "Tumhara care karne ka tareeka mujhe bohot pasand hai, bohot comfort feel hota hai."
    ],
    memories: [
        "Wo baat main kabhi nahi bhool sakta jahan tumne itni fikr me kaha thaa ki 'Mujhe laga aapne block kar diya aur sachi me aakho me aasu aa gae', tumhara wo haq jatana mujhe bohot achha laga thaa.",
        "Pehle jahan main kaam ke beech tumhein apni photo bhejta thaa aur tum turant check karke reels share karti thin, wo reels dekh kar sath me hasna hamari life ka sabse best part hai.",
        "Tum jo dopehar me apni kadi duty par chali jaati ho, aur late raat tak kadi mehnat karti ho na, wo dekh kar mujhe tum par bohot proud feel hota hai.",
        "Jab tumhari tabiyat sahi nahi hoti, periods ke time dard hota hai fir bhi tum duty par jaane ki zidd karti ho, aur jahan main thoda dant deta hoon toh tum mera gussa bhi kitne aaram se jhel leti ho.",
        "Mujhe aaj bhi yaad hai jahan tumne choti si baat par zidd ki thi ki ghar ja kar hi phone charge karungi aur laptop se chat karne ko bola thaa, wo haseen moment thaa.",
        "Wo raat yaad hai jahan main trading ka chart dekh raha thaa aur tum baby photos dekh kar bol rahi thin kitna cute hai ye... aur jahan maine tumhe badam ka ped dikhaya thaa, wo moments bohot sukoon wale the.",
        "Tumhara baat-baat par haq jatana aur bolna na ki 'mar khani hai kya aap ko, mujhse dar nhi lagta kya'... sach me tumhara aisa bolna hi sabse bada sukoon lagta hai.",
        "Jab tum busy schedule me kehti ho na ki 'aap mujhse kuch chupa rhe ho, jhuth bol rhe ho', wo dher saari sweet queries aur tumhara baar-baar sorry sorry likhna mujhe bohot accha lagta hai.",
        "Kal jahan tumne ek reel share ki aur maine thoda late reply kiya, toh tumhara wo gussa hona aur bolna ki ignore kar rahe ho, sach me bohot cute argument thaa.",
        "Wo day yaad hai jahan hum dono ne phone par chalte hue ek hi samay par chaay peene ka decide kiya thaa? WhatsApp par photo exchange karna aur compare karna bohot genuine moment thaa.",
        "Jab tum late night shift se aati ho aur bus stop par waiting ke time mujhe continuous voice notes bhejti ho takin safe feel ho, main tumhari har ek baat ko bohot dhyan se sunta hoon.",
        "Tumhara wo status par choti si line lagana aur check karna ki maine dekha ya nahi, aur jahan main dekhte hi screenshot bhejta hoon toh tumhara smile karna hamesha se day better bana deta hai."
    ],
    thoughts: [
        "Jab bhi zarurat ho text kar dena, main hoon hamesha baat karne ke liye.",
        "Halaat chahe jo bhi hon, hum milkar baat kar lenge aur sab theek ho jayega.",
        "Zindagi ke har mod par poore vishwas ke sath, main hamari understanding ko samajhne ki koshish karunga.",
        "Main ghar par rahoon, ya busy rahoon, jahan bhi tum pareshan hogi, main sab kaam side rakh kar tumhari baat sununga.",
        "Tumhari har ek nok-jok aur bacho ki tarah zidd karna mujhe bohot pyaara lagta hai, tum bata dena jo bhi baat ho."
    ]
};

function generateInfiniteLoveMessage() {
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    let seed1 = (currentDay * 9) + (currentMonth * 17) + (currentYear % 100);
    let seed2 = (currentDay * 13) + (currentMonth * 19) + (currentYear % 10);
    let seed3 = (currentDay * 5) + (currentMonth * 29) + Math.floor(currentYear / 50);

    const opIndex = Math.abs(seed1) % lovieAI_Data_Pool.openings.length;
    const memIndex = Math.abs(seed2) % lovieAI_Data_Pool.memories.length;
    const thIndex = Math.abs(seed3) % lovieAI_Data_Pool.thoughts.length;

    const patterns = [
        `${lovieAI_Data_Pool.openings[opIndex]} ${lovieAI_Data_Pool.memories[memIndex]} Aaj tumse baat karke mood accha ho gaya.`,
        `${lovieAI_Data_Pool.openings[opIndex]} Mujhse baat karke tumhara mood kaisa rehta hai? ${lovieAI_Data_Pool.thoughts[thIndex]}`,
        `${lovieAI_Data_Pool.openings[opIndex]} Waise, kal jo reel share ki thi tumne, wo abhi dimaag me ghoom rahi hai.`,
        `Randomly ek khayal aaya Lovie. ${lovieAI_Data_Pool.memories[memIndex]} Hum dono kitna be-wajah ladd padte hain kabhi kabhi.`,
        `${lovieAI_Data_Pool.openings[opIndex]} Tumhara care karne ka tareeka mujhe genuinely bohot pasand hai. ${lovieAI_Data_Pool.thoughts[thIndex]}`,
        `Aaj ka din thoda busy rahega shayad. ${lovieAI_Data_Pool.openings[opIndex]} Time mile toh ek message drop kar dena.`
    ];

    return patterns[(currentDay + currentMonth + currentYear) % patterns.length];
}

const dailyLetters = {
    1: { clue: "Month ki starting number?", text: "Aaj ka din thoda busy rahega shayad. Time mile toh message kar dena, apna dhyan rakhna." },
    2: { clue: "Ek aur ek kitne hote hain?", text: "Kal tumhari baat yaad aayi toh hasi aa gayi. Tum sach me kabhi kabhi bacho jaisi baatein karti ho Lovie." },
    3: { clue: "Traffic light me kitne colors hote hain?", text: "Apna dhyan rakhna aur khana time se kha lena bacha. Aaj weather thoda accha hai idhar." },
    4: { clue: "Ek gaadi me kitne tyre hote hain?", text: "Tum busy thi phir bhi reply kiya, accha laga. Jab free ho jao toh batana, thodi der baat karenge." },
    5: { clue: "Haath me kitni ungliyan hote hain?", text: "Pata nahi kyun lekin tumse baat karke mood better ho jata hai. Tumhari ek aadat si ho gayi hai mujhe." },
    6: { clue: "Chhah (6) ko English me kya kehte hain?", text: "Aaj subah uthte hi achanak tumhari yaad aa gayi thi. Socha ek pyaara sa text drop kar doon tumhare liye." },
    7: { clue: "Ek week me kitne din hote hain?", text: "Tumhara care karne ka tareeka mujhe genuinely pasand hai. Hamesha bohot safe aur comfortable feel hota hai tumse baat karke." },
    8: { clue: "Oat (8) ko Hindi me?", text: "Kal jo hum dono be-wajah ladd rahe the na, wo abhi soch kar mujhe bohot hasi aa rahi hai. Tum kitni ziddi ho." },
    9: { clue: "Nau (9) number ki english spelling short?", text: "Aaj mood thoda normal thaa, but tumhara notification dekhte hi automatically chehre par smile aa gayi. Have a good day." },
    10: { clue: "Ek decade me kitne saal?", text: "Gusse me jab tum bolti ho na ki baat nahi karungi, toh sach me mood off ho jata hai. Aise mat bola karo Lovie." },
    11: { clue: "Aayu ka birthday day number?", text: "Aaj jaldi uth gaya thaa, socha tumhein good morning wish kar doon. Khana time par kha lena aaj." },
    12: { clue: "Ek saal me kitne mahine?", text: "Tumhari sensible thinking aur baatein mujhe bohot noticeable lagti hain. Tum hai bohot mature ladki ho." },
    13: { clue: "Lovie ki birthday date?", text: "Aaj ka din thoda special hai, yaad hai ye date? Aaj thoda extra smile kar lena mere liye, Lovie. 👑" },
    14: { clue: "Valentine's Day date?", text: "Jab bhi zarurat ho ya mood off ho, bina soche ek text drop kar dena. Main hamesha sunne ke liye hoon." },
    15: { clue: "Half month kitne din ka?", text: "Tumhara mujhpar pure haq se gussa karna aur dher saari reels share karke sath me hasna hi kaafi accha lagta hai." },
    16: { clue: "Satarah (17) se ek kam?", text: "Main kahin bhi busy rahoon, jab tum pareshaan hoti ho na, main sab kaam side rakh kar sabse pehle tumhari baat sunta hoon." },
    17: { clue: "Khatre ka nishan kon sa number?", text: "Main khuleaam sabke samne bade proud se kehta hoon ki tum meri life ka sabse important part ho aur hamesha rahogi." },
    18: { clue: "Voting legal age?", text: "Zindagi me chahe jo bhi situations hon, main hamesha tumhare decisions ki respect karunga aur sath khada milunga." },
    19: { clue: "Unnees (19) number ki value?", text: "Kaam karte hue bhi har lamha tumhari cute baatein aur tumhara innocent chehra dimaag me ghoomta rehta hai. Have a great day." },
    20: { clue: "Bees (20) ko English me?", text: "Lovie, tumse ek din baat na ho toh routine ekdum track se utar jata hai. Tumhari aadat bohot gehri ho gayi hai." },
    21: { clue: "Ekkis (21) number?", text: "Jab main sab tasks khatam karke tumhare paas jaldi se aaunga na, tab jitna man kare utni lambi baatein kar lena tum." },
    22: { clue: "Do aur Do side by side?", text: "Tumhari har ek sweet nok-jok aur bacho ki tarah zidd karna mujhe genuinely pyaara lagta hai. Main hamesha tumhara hoon." },
    23: { clue: "Teis (23) number?", text: "Agar tum gusse me mujhse thoda ladd bhi logi na Lovie, toh bhi main tumhara hath kabhi nahi chhodunga, hum dono ka bond bohot strong hai. 🔒" },
    24: { clue: "Chubbis (24) ghante ek din me?", text: "Lovie bacha, meri har ek khushi tumhari simple real smile se judi hai, isliye hamesha aise ekdum chill aur happy raha karo." },
    25: { clue: "Christmas day date?", text: "Main hamesha har situation me tumhare decisions ke sath aligned rahoonga aur tumhara poora sath dunga. Trust rakhna." },
    26: { clue: "Chabbis (26) January day name?", text: "Tumhari wajah se kaafi din better lagta hai Lovie. Hamne jo sath nibhane ka decision liya hai, use main hamesha nibhaunga." },
    27: { clue: "Anniversary code starting date?", text: "Aaj ka din thoda extra special hai Lovie! Yaad hai ye date? Tum meri life ka sabse aur beautiful part ho. 💍" },
    28: { clue: "February normal days number?", text: "Tumhara wo call par dhyan se poochna na ki 'kya kar rahe ho abhi, khana khaya ya nahi', sachi me har baar bohot safe feel karwata hai." },
    29: { clue: "Leap year February days number?", text: "Meri life tumhare aane ke baad se bohot sorted aur meaningful ban gayi hai Lovie. Main is connection ke liye bohot glad feel karta hoon." },
    30: { clue: "Teis plus saat?", text: "Zindagi ke har mod par hamara ye sath aur understanding poori honesty se maintain rakhunga, tum bas mujhpar hamesha bharosa rakhna. ❤️" },
    31: { clue: "Saal ka aakhri din date?", text: "Yeh month close ho raha hai bacha par hamara coordination har naye din ek fresh chat ki tarah clear aur solid hota jayega. Love you hamesha! ♾️💖" }
};

const dynamicLoveQuizPool = [
    { q: "Hamare beech ka wo kaun sa favorite nickname hai jo main tumhein pyaar se bolta hoon?", options: ["Pari", "Lovie ❤️", "Pihu", "Rani"], correct: 1 },
    { q: "Hamari pure chat history me kaun si aisi favorite habit hai tumhari jo mujhe sabse zyada noticeable lagti hai?", options: ["Baat-baat par reels share karna 📲", "Late reply dena", "Gussa ho kar so jana", "Bina wajah rona"], correct: 0 },
    { q: "Wo raat jahan main trading ka chart dekh raha thaa, tab tum kya dekh kar bol rahi thin ki kitna cute hai ye baby?", options: ["Chulbuli ki photo dekh kar 🐶", "Koi random video", "Apni bachpan ki photo", "Ek cute sticker"], correct: 0 },
    { q: "Maine jahan video call par tumhein ek khoobsurat ped dikhaya thaa, wo kis cheez ka thaa?", options: ["Kaju ka ped", "Badam ka ped 🌳", "Aam ka ped", "Neem ka ped"], correct: 1 },
    { q: "Tum baat-baat par mujhpar apna poora haq jatate huye pyaar se kya danti ho?", options: ["Aap bohot bure ho", "mar khani hai kya aap ko, mujhse dar nhi lagta kya? 😡🥰", "Main block kar dungi", "Mujhse baat mat karo"], correct: 1 },
    { q: "Jab main thoda busy hota hoon, tab tum hamari conversation me sweet queries me gusse me kya kehti ho?", options: ["Aap mujhse kuch chupa rhe ho, jhuth bol rhe ho 🔒", "Aap mujhe bhool gae", "Main busy hu abhi", "Aap kahan gae the"], correct: 0 },
    { q: "Hamari sabse favorite discussion points me se kaun sa aisa food item hai jo hum dono ko bohot pasand hai?", options: ["Burger pizza", "Garam Garam Chaay ☕", "Chole bhature", "Momo testing"], correct: 1 }
];

window.dailyLetters = dailyLetters;
window.dynamicLoveQuizPool = dynamicLoveQuizPool;

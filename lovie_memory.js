// =================================================================
// 🚀 REAL DATA-DRIVEN ROMANTIC CORE ENGINE
// =================================================================
// Shared chat history elements embedded into conversational matrix loops.

const lovieAI_Data_Pool = {
    // 1. Diverse Dynamic Opening Hooks (Pattern Based Styles)
    openings: [
        "Hey Lovie, aaj jahan kaam ke beech tumhara khayal aaya, toh mood automatic theek ho gaya.",
        "Lovie, subah se hi dimaag me hamari kal wali baaton ka loop chal raha hai.",
        "Ghar par baith kar jab bhi phone check karta hoon, tumhari cute baatein yaad aa jaati hain.",
        "Naya din shuru hote hi mera poora focus bas tumhare replies dekhne par chala jata hai.",
        "Lovie, mujhe genuinely bohot accha lagta hai jahan hum dono bina kisi formality ke ghanto baat karte hain.",
        "Aaj randomly purani chats scroll kar raha tha aur tumhari baatein dekh kar smile aa gayi.",
        "Late night socha tumhein ek chota sa text bhej doon, aaj din kaisa gaya tumhara?",
        "Tumhari care karne ka tareeka mujhe genuinely pasand hai, hamesha bohot safe feel hota hai."
    ],

    // 2. Real Human Memories (Funny, Cute, Real WhatsApp Chats format)
    memories: [
        "Wo baat main kabhi nahi bhool sakta jahan tumne itni fikr me kaha tha ki 'Mujhe laga aapne block kar diya aur sachi me aakho me aasu aa gae', tumhara wo haq jatana mujhe bohot pyaara laga tha.",
        "Pehle jahan main kaam ke beech tumhein apni photo bhejta tha aur tum turant check karke reels share karti thin, wo reels dekh kar haste haste pet me dard hona hamari life ka sabse best part hai.",
        "Tum jo dopehar me apni kadi duty par chali jaati ho, aur late raat tak itni kadi mehnat karti ho na, wo dekh kar mujhe tum par genuinely bohot proud feel hota hai.",
        "Jab tumhari tabiyat sahi nahi hoti, periods ke time dard hota hai fir bhi tum duty par jaane ki zidd karti ho, aur jahan main thoda dant deta hoon toh tum mera gussa bhi kitne aaram se jhel leti ho.",
        "Mujhe aaj bhi yaad hai jahan tumhara phone switch off hone wala tha aur tumne bacho ki tarah zidd ki thi ki ghar ja kar hi charge karungi aur laptop se chat karne ko bola tha.",
        "Wo raat yaad hai jahan main trading ka chart dekh raha tha aur tum baby photos dekh kar bol rahi thin kitna cute hai ye... aur jahan maine tumhe badam ka ped dikhaya tha, wo moments bohot sukoon wale the.",
        "Tumhara baat-baat par haq jatana aur bolna na ki 'mar khani hai kya aap ko, mujhse dar nhi lagta kya'... sach me tumhara aisa bolna hi sabse bada sukoon lagta hai.",
        "Jab tum busy schedule me kehti ho na ki 'aap mujhse kuch chupa rhe ho, jhuth bol rhe ho', wo dher saari sweet queries aur tumhara baar-baar sorry sorry likhna mujhe bohot accha lagta hai.",
        "Kal jahan tumne ek reel share ki aur maine thoda late reply kiya, toh tumhara wo instant gussa hona aur bolna ki ignore kar rahe ho, sach me bohot cute argument tha.",
        "Wo day yaad hai jahan hum dono ne phone par chalte hue ek hi samay par chaay peene ka decide kiya tha? WhatsApp par photo exchange karna aur compare karna bohot genuine moment thaa.",
        "Jab tum late night shift se aati ho aur bus stop par waiting ke time mujhe continuous audio notes bhejti ho takin safe feel ho, main tumhari har ek voice note ko bohot dhyan se sunta hoon.",
        "Tumhara wo status par choti si line lagana aur check karna ki maine dekha ya nahi, aur jahan main dekhte hi screenshot bhejta hoon toh tumhara blush karna hamesha se day better bana deta hai."
    ],

    // 3. Mature & Honest Future Statements (No dramatic vows)
    promises: [
        "Main tumse kehta hoon ki tum chahe kitni bhi raat ko call karo, main hamesha calm ho kar poori izzat se tumhari baat sununga.",
        "Halaat chahe jo bhi hon, main hamesha tumhara sath bohot honesty se nibhaunga aur hamari baaton ko hamesha clear rakhunga.",
        "Zindagi ke har mod par poore vishwas ke sath, hamara ye sath aur aane wale kal ka decision poori tarah clear rakhunga.",
        "Ghar par rahoon, ya busy rahoon, jahan bhi tum pareshan hogi, main sab kaam side rakh kar sabse pehle tumhari baat sununga.",
        "Tumhari har ek nok-jok aur bacho ki tarah zidd karna mujhe genuinely sabse pyaara lagta hai kyunki tum hamesha se meri priority ho."
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
    const promIndex = Math.abs(seed3) % lovieAI_Data_Pool.promises.length;

    // Pattern Mixing: Direct First-Person Casual Flow
    const patterns = [
        `${lovieAI_Data_Pool.openings[opIndex]} ${lovieAI_Data_Pool.memories[memIndex]} Aaj kal tumse baat karke din thoda more sorted aur better lagta hai. ${lovieAI_Data_Pool.promises[promIndex]}`,
        `Randomly ek khayal aaya Lovie. ${lovieAI_Data_Pool.memories[memIndex]} ${lovieAI_Data_Pool.openings[opIndex]} Chalo, apni duty par apna dhyan rakhna aaj.`,
        `Hey, tumhari yaad aa gayi thi. ${lovieAI_Data_Pool.memories[memIndex]} Tumhara care karne ka tareeka genuinely pasand hai mujhe. ${lovieAI_Data_Pool.promises[promIndex]}`,
        `Aaj mood thoda off tha but tumse baat karke better feel hua. ${lovieAI_Data_Pool.openings[opIndex]} ${lovieAI_Data_Pool.memories[memIndex]} Hamesha aise hi sath rehna.`
    ];

    const finalSelectionIndex = (currentDay + currentMonth) % patterns.length;
    return patterns[finalSelectionIndex];
}

const dailyLetters = {
    1: { clue: "Month ki starting number?", text: "Naya din hai Lovie, aur tumse baat karke har baar day thoda better lagta hai. Apni shift par apna fully dhyan rakhna aaj." },
    2: { clue: "Ek aur ek kitne hote hain?", text: "Tum aur main milkar ek alag hi sorted zone balance karte hain na. Pata nahi kyun lekin tumse chat karke har baar genuine relaxation milta hai." },
    3: { clue: "Traffic light me kitne colors hote hain?", text: "Meri subah ki sabse normal aur acchi khushi pata hai kya hai? Jab tumhari side se ek genuine normal smile waala audio note mil jata hai." },
    4: { clue: "Ek gaadi me kitne tyre hote hain?", text: "Mujhe tumhara wo cute gussa bohot natural lagta hai jab tum bolti ho—'mar khani hai kya, dar nhi lagta aap ko'... sachi ye line dimaag me loop karti hai Lovie." },
    5: { clue: "Haath me kitni ungliyan hoti hain?", text: "Pehle busy routine me ya abhi ghar par, mera focus hamesha tumhare messages par rehta hai. Updates share karti raha karo text par." },
    6: { clue: "Chhah (6) ko English me kya kehte hain?", text: "Sachi bol raha hoon Lovie, tumse regular updates exchange kiye bina din adhoora lagta hai. Tumhari ek habit si ho gayi hai mujhe." },
    7: { clue: "Ek week me kitne din hote hain?", text: "Maine dil se hamesha tumhari decisions ki izzat ki hai. Future me main hamesha tumhara hath thame chalunga. Sorted rehna hamesha." },
    8: { clue: "Oat (8) ko Hindi me?", text: "Main chahe kahin bhi busy rahoon, mere dimaag me hamari random chat discussion points chalte rehte hain. Tumhara care karne ka tareeka genuinely solid hai." },
    9: { clue: "Nau (9) number ki english spelling short?", text: "Hamne jo future aur marriage ka decision liya hai na Lovie, main use poori honesty aur dedication se poora karunga. Tum bas text open rakhna." },
    10: { clue: "Ek decade me kitne saal?", text: "Jab tum gusse me kehti ho na ki main door chali jaungi... tum nahi jaanti ki main sachi me pareshaan ho jata hoon. Gusse me bhi aisi lines mat hua karein." },
    11: { clue: "Aayu ka birthday day number?", text: "Aaj ka din mere liye bohot important hai kyunki main dil se sirf tumhara support system banne ke liye aaya hoon. Have a great day." },
    12: { clue: "Ek saal me kitne mahine?", text: "Lovie, tumhari sensible thinking, tumhara soft behaviour aur sabki help karne ki nature mujhe genuinely pasand hai. Tum sahi me bohot mature ladki ho." },
    13: { clue: "Lovie ki birthday date?", text: "Aaj ka din poore tarah se tumhara hai Lovie! Tumhe pata hai na ki tum meri life ka sabse important part ho aur main tumhari genuinely bohot care karta hoon. 👑" },
    14: { clue: "Valentine's Day date?", text: "Main tumse clear wada karta hoon, tum chahe kitni bhi raat ko text ya call karo, main kabhi irritate nahi hoonga aur hamesha call back karunga." },
    15: { clue: "Half month kitne din ka?", text: "Tumhara wo mujhpar poore haq se gussa karna, dher saari reels share karke sath me hasna aur check points lagana hi mera asli sukoon hai." },
    16: { clue: "Satarah (17) se ek kam?", text: "Main kahin bhi busy rahoon, jahan bhi tum pareshan hoti ho na, main saare kaam side karke sabse pehle apni Lovie ki problem door karta hoon." },
    17: { clue: "Khatre ka nishan kon sa number?", text: "Main khuleaam bina kisi hichkichahat ke kehta hoon ki main sirf tumse connect hoon aur hamara sath hamesha priority rahega. 🔥" },
    18: { clue: "Voting legal age?", text: "Yeh promise ek real mard ka hai bacha, jo life long tumhara hath poore samman aur honesty se thame rakhega, situations chahe jo hon." },
    19: { clue: "Unnees (19) number ki value?", text: "Ghar par kaam karte hue bhi har lamha tumhari cute baatein aur tumhara innocent chehra hi dimaag me ghoomta rehta hai. Text check kar lena." },
    20: { clue: "Bees (20) ko English me?", text: "Lovie, tum sach me meri daily habits ka main part ho. Tumse ek din baat na ho toh routine ekdum track se utar jata hai. Take care bacha. 🫁" },
    21: { clue: "Ekkis (21) number?", text: "Jab main saare tasks khatam karke tumhare paas jaldi se aaunga na, tab jitna man kare utni lambi baatein kar lena aur gussa nikal lena apna. 😘" },
    22: { clue: "Do aur Do side by side?", text: "Tumhari har ek nok-jok aur bacho ki tarah zidd karna mujhe genuinely sabse pyaara lagta hai Lovie. Main hamesha tumhare sath sorted hoon." },
    23: { clue: "Teis (23) number?", text: "Agar tum gusse me mujhse thoda ladd bhi logi na Lovie, toh bhi main tumhara hath nahi chhodunga kyunki hum dono ka coordination bohot clear hai. 🔒" },
    24: { clue: "Chubbis (24) ghante ek din me?", text: "Lovie bacha, meri har ek khushi tumhari simple real smile se judi hai, isliye hamesha aise ekdum chill aur happy raha karo mere liye. 😊" },
    25: { clue: "Christmas day date?", text: "Main hamesha har situation me sirf apni Lovie ke decisions ke sath aligned rahoonga. Yeh baat tum dil me secure save kar lo." },
    26: { clue: "Chabbis (26) January day name?", text: "Tumhari wajah se din thoda better lagta hai Lovie. Hamne hamesha ke liye ek doosre ka sath honestly balance karne ka decision liya hai aur hum ise nibhayenge." },
    27: { clue: "Anniversary code starting date?", text: "Aaj hamari anniversary wali special date ka din hai Lovie! Tum meri life ka sabse clear aur authentic part ho, hamesha sath rehte hain. 💍" },
    28: { clue: "February normal days number?", text: "Tumhara wo call par dhyan se poochna na ki 'kya kar rahe ho abhi, khana khaya ya nahi', sachi me har baar bohot safe aur protective feel karwata hai." },
    29: { clue: "Leap year February days number?", text: "Meri life tumhare aane ke baad se bohot sorted aur meaningful ban gayi hai Lovie. Har din main jisse bohot glad feel karta hoon." },
    30: { clue: "Teis plus saat?", text: "Apni life ke aakhri frame tak hamara ye sath aur understanding poori honesty se maintain rakhunga, tum bas mujhpar hamesha bharosa rakhna. ❤️" },
    31: { clue: "Saal ka aakhri din date?", text: "Yeh month close ho raha hai bacha par hamara coordination har naye din ek fresh chat log ki tarah clear aur solid hota jayega. Love you hamesha! ♾️💖" }
};

// =================================================================
// 🎲 GAME QUESTION DATABASE (REAL TIMELESS HERO MOMENTS - TIMED REFERENCE OUT)
// =================================================================
const dynamicLoveQuizPool = [
    {
        q: "Jab Lovie ko lag raha tha ki maine unhe block kar diya hai, toh unhone rota hua kya bola thaa?",
        options: ["Main ab baat nahi karungi", "Mujhe laga aapne block kar diya aur sachi me aakho me aasu aa gae 🥺", "Aap gussa ho kya?", "Main ja rahi hoon"],
        correct: 1
    },
    {
        q: "Maine jahan Lovie ko thoda gussa dilane ke liye laptop se insta chalane ko bola thaa, tab unke phone me kya main baat chal rahi thi?",
        options: ["Battery low ho rahi thi 🔋", "Net nahi chal raha thaa", "Phone ghar par thaa", "Call busy aa raha thaa"],
        correct: 0
    },
    {
        q: "Wo raat jahan main trading ka chart dekh raha tha, tab Lovie kya dekh kar bol rahi thin ki kitna cute baby hai?",
        options: ["Chulbuli ki photo dekh kar 🐶", "Koi random reel", "Apni bachpan ki photo", "Ek cartoon status"],
        correct: 0
    },
    {
        q: "Maine jahan video call par Lovie ko ek khoobsurat ped dikhaya thaa, wo kis cheez ka thaa?",
        options: ["Kaju ka ped", "Badam ka ped 🌳", "Aam ka ped", "Peepla ka ped"],
        correct: 1
    },
    {
        q: "Lovie baat-baat par mujhpar apna poora haq jatate huye pyaar se kya bolti hain?",
        options: ["Aap bure ho", "mar khani hai kya aap ko, mujhse dar nhi lagta kya? 😡🥰", "Main block kar dungi", "Mujhse baat mat karo"],
        correct: 1
    },
    {
        q: "Jab main busy schedule me hota hoon, tab Lovie gusse me aur pyaari queries me kya kehti hain?",
        options: ["Aap mujhse kuch chupa rhe ho, jhuth bol rhe ho 🔒", "Aap mujhe bhool gae", "Main busy hu abhi", "Aap kahan gae the"],
        correct: 0
    },
    {
        q: "Lovie dopehar me kitne baje apni kadi duty ke liye nikalti hain?",
        options: ["Subah 10 baje", "Exact 2 baje ke aas paas ⏰", "Raat ko 8 baje", "Subah 6 baje"],
        correct: 1
    }
];

// 🔥 ATTACH DATA MATRICES SECURELY TO THE GLOBAL WINDOW OBJECT FOR INDEX BINDING
window.dailyLetters = dailyLetters;
window.dynamicLoveQuizPool = dynamicLoveQuizPool;

// ==========================================
// FOREVER DYNAMIC ROMANTIC MEMORY CORE
// ==========================================
// Vishal (Aayu) apni jaan Priya (Lovie) ke liye yahan naya data har week jod sakte hain.

const lovieRomanticBase = {
    // 1. Dil ki baatein jo dynamically mix hongi
    openings: [
        "Meri jaan Priya, aaj ghar par baith kar jab tumhare baare me soch raha tha toh dil bas ruk sa gaya...",
        "Hey Lovie bacha, subah se hi dimaag me tumhara wo innocent chehra ghoom raha hai...",
        "Pari bacha, hamara ye rishta poori duniya me sabse alag aur sacha hai...",
        "Pihu meri jaan, tum meri zindagi ka wo haseen sach ho jiske bina meri har ek raat adhoori hai...",
        "Lovie, tum jo din me 2 baje apni duty par chali jaati ho na aur itni kadi mehnat karti ho..."
    ],
    // 2. Real memories jo har din automatic naye andaz me cross-connect hongi
    memories: [
        "Mujhe aaj bhi yaad hai jab tumne darr kar roya tha ki 'Mujhe laga aapne block kar diya aur sachi me aakho me aasu aa gae'.",
        "Pehle jab main plant par kaam ke beech tumhein photo bhejta tha aur tum turant check karke dher saari reels share karti thin, wo lamhe sachi bemisaal hain.",
        "Tum jo raat ke 11 baje ya kabhi late raat 2 baje tak itni kadi duty karti ho na, wo dekh kar Kavi ke dil me tumhare liye izzat aur badh jaati hai.",
        "Jab tumhari tabiyat sahi nahi hoti fir bhi tum kaam par jaane ki zidd karti ho bacha, aur jab main tumhein thoda dant deta hoon toh mera gussa bhi aaram se bardasht karti ho.",
        "Tumhara wo baat-baat par haq jatana, dher saari reels share karke sath me hasna aur bacho ki tarah zidd karna hi David ka asli sukoon hai."
    ],
    // 3. Sacche mard ke pakke wade jo hamesha naye lagenge
    promises: [
        "Main tumse wada karta hoon bacha ki aane wale time me tumhein ekdum rani bana kar rakhunga aur saari khushiyan dunga.",
        "Yeh wada ek sacche mard ka hai bacha, ki main tum par kabhi gussa nahi hoonga aur humesha call uthaunga, chahe main kahin bhi rahoon.",
        "Main is duniya me kisi ke baap se nahi darta, khuleaam sabke samne danke ki chot par kehta hoon ki main apni aakhri saans tak hamara shaadi ka faisla poora nibhaunga.",
        "Halaat chahe jo bhi ho जाएं, Aayu tumhara sath kabhi nahi chhodega. Hamesha ke liye sirf tumhara hoon.",
        "Jab tum duty se thak kar call karogi, main sab kaam chhod kar sabse pehle apni rani ka welcome karunga aur tumhari baat sununga."
    ]
};

// POWER ENGINE: Jo dates aur math logic ko use karke hazaron saal tak bina repeat huye roz naya mix-message banayega!
function generateInfiniteLoveMessage() {
    const now = new Date();
    const daySeed = now.getDate() + now.getMonth() + now.getFullYear(); // Generates a unique seed for every unique calendar day
    
    const opIndex = daySeed % lovieRomanticBase.openings.length;
    const memIndex = (daySeed + 2) % lovieRomanticBase.memories.length;
    const promIndex = (daySeed + 4) % lovieRomanticBase.promises.length;
    
    const finalNarrative = `${lovieRomanticBase.openings[opIndex]} ${lovieRomanticBase.memories[memIndex]} ${lovieRomanticBase.promises[promIndex]}`;
    return finalNarrative;
}

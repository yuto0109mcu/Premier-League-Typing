const wordsToType = [
   "BOURNEMOUTH",
   "ARSENAL",
   "ASTON VILLA",
   "BRIGHTON AND HOVE ALBION",
   "BURNLEY",
   "CHELSEA",
   "CRYSTAL PALACE",
   "EVERTON",
   "LEICESTER CITY",
   "LIVERPOOL",
   "MANCHESTER CITY",
   "MANCHESTER UNITED",
   "NEWCASTLE UNITED",
   "NORWICH CITY",
   "SHEFFIELD UNITED",
   "SOUTHAMPTON",
   "TOTTENHAM HOTSPUR",
   "WATFORD",
   "WEST HAM UNITED",
   "WOLVERHAMPTON WANDERERS",
   "VAR",
   "VAR NO GOAL OFFSIDE",
   "VAN DIJK",
   "ALISSON",
   "ROBERTSON",
   "ALEXANDER ANOLD",
   "MILNER",
   "FABINHO",
   "WIJNALDUM",
   "HENDERSON",
   "FIRMINO",
   "MANE",
   "SALAH",
   "MINAMINO",
   "ORIGI",
   "EDERSON",
   "WALKER",
   "LAPORTE",
   "MENDY",
   "DE BRUYNE",
   "DAVID SILVA",
   "FERNANDINHO",
   "RODRI",
   "BERNARDO SILVA",
   "STERLING",
   "JESUS",
   "SANE",
   "AGUERO",
   "MAHREZ",
   "SCHMEICHEL",
   "CHILWELL",
   "EVANS",
   "RICARDO PEREIRA",
   "TIELEMANS",
   "MADDISON",
   "NDIDI",
   "VARDY",
   "ALBRIGHTON",
   "KEPA",
   "ZOUMA",
   "RUDIGER",
   "EMERSON",
   "AZPILICUETA",
   "REECE JAMES",
   "JORGINHO",
   "KANTE",
   "KOVACIC",
   "MOUNT",
   "PULISIC",
   "WILLIAN",
   "PEDRO",
   "ABRAHAM",
   "HUDSON ODOI",
   "LLORIS",
   "ALDERWEIRELD",
   "VERTONGHEN",
   "TANGANGA",
   "AURIER",
   "SANCHEZ",
   "WINKS",
   "LAMELA",
   "SISSOKO",
   "LO CELSO",
   "DELE ALLI",
   "LUCAS MOURA",
   "NDOMBELE",
   "SON",
   "KANE",
   "DEAN HENDERSON",
   "JOHN FLECK",
   "MOUSSET",
   "NORWOOD",
   "DE GEA",
   "LINDELOF",
   "PHIL JONES",
   "MAGUIRE",
   "WAN BISSAKA",
   "POGBA",
   "MATA",
   "LINGARD",
   "FRED",
   "BRUNO FERNANDES",
   "DANIEL JAMES",
   "MATIC",
   "MARTIAL",
   "RASHFORD",
   "RUI PATRICIO",
   "COADY",
   "JONNY",
   "NEVES",
   "MOUTINHO",
   "JIMENEZ",
   "JOTA",
   "ADAMA TRAORE",
   "PICKFORD",
   "KEANE",
   "DIGNE",
   "COLEMAN",
   "DELPH",
   "SIGURDSSON",
   "RICHARLISON",
   "IWOBI",
   "KEAN",
   "WOLCOTT",
   "LENO",
   "BELLERIN",
   "SOKRATIS",
   "MUSTAFI",
   "DAVID LUIZ",
   "KOLASINAC",
   "OZIL",
   "CEBALLOS",
   "TORREIRA",
   "GUENDOUZI",
   "XHAKA",
   "LACAZETTE",
   "AUBAMEYANG",
   "PEPE",
   "MARTINELLI",
   "SAKA",
   "HART",
   "LONG",
   "WOOD",
   "BARNES",
   "DANNY ROSE",
   "YEDLIN",
   "SHELVEY",
   "ALMIRON",
   "LONGSTAFF",
   "CARROLL",
   "JOELINTON",
   "SAINT MAXIMIN",
   "MUTO",
   "VESTERGAARD",
   "ARMSTRONG",
   "REDMOND",
   "INGS",
   "CAHILL",
   "WARD",
   "MILIVOJEVIC",
   "TOWNSEND",
   "AYEW",
   "ZAHA",
   "BENTEKE",
   "JAHANBAKHSH",
   "MURRAY",
   "MOOY",
   "AKE",
   "COOK",
   "FRASER",
   "KING",
   "REINA",
   "MINGS",
   "DRINKWATER",
   "TREZEGUET",
   "GREALISH",
   "EL GHAZI",
   "FABIANSKI",
   "OGBONNA",
   "MASUAKU",
   "FELIPE ANDERSON",
   "LANZINI",
   "CARLOS SANCHEZ",
   "NOBLE",
   "WILSHERE",
   "RICE",
   "ANTONIO",
   "YARMOLENKO",
   "HALLER",
   "BEN FOSTER",
   "DOUCOURE",
   "DEULOFEU",
   "WELBECK",
   "DEENEY",
   "KRUL",
   "AARONS",
   "BUENDIA",
   "PUKKI",
   "OLE AT THE WHEEL",
   "KLOPP",
   "PEP",
   "MOURINHO",
   "HODGSON",
   "ROGERS",
   "NUNO",
   "ANCELOTTI",
   "ARTETA",
   "LAMPARD",
   "DANIEL FRANKE",
   "MOYSE",
   "PELLEGRINI"
]

let wordToType = wordsToType[Math.floor(Math.random() * wordsToType.length)]
let i = 0
let already = 0
let yet = 0
let correct = 0
let wrong = 0
const typedLetter = "-"
const letterCount = document.querySelector("#letters")
const missCount = document.querySelector("#miss")

const typedLetters = (e) => {
   console.log(e.code[3]);
   if (e.code[3] === wordToType[i]) {
      i++
      already++
      yet++
      clickStart.textContent = typedLetter.repeat(already) + wordToType.substring(yet)
      correct++
      letterCount.textContent = correct
      if (already === wordToType.length) {
         i = 0
         yet = 0
         already = 0
         wordToType = wordsToType[Math.floor(Math.random() * wordsToType.length)]
         clickStart.textContent = wordToType
      }
   } else if (e.code[3] === "c") {
      i++
      yet++
      already++
      clickStart.textContent = typedLetter.repeat(already) + wordToType.substring(yet)
      letterCount.textContent = correct
   } else {
      wrong++
      missCount.textContent = wrong
   }
}
window.addEventListener("keydown", typedLetters)






const clickStart = document.querySelector("#typing")
const yourScore = document.querySelector("#your-score")
const yourMiss = document.querySelector("#your-miss")
const finalScore = document.querySelector("#final-score")
const finalMiss = document.querySelector("#final-miss")
const scoreBox = document.querySelector("#scores")
const againBtn = document.querySelector("#again")
const stop = () => {
   setTimeout(finish, 30000)
}
const finish = () => {
   clickStart.style.display = "none"
   scoreBox.style.display = "none"
   yourScore.style.display = "block"
   yourMiss.style.display = "block"
   finalScore.textContent = correct
   finalMiss.textContent = wrong
   againBtn.style.display ="block"
}
const start = () => {
   clickStart.textContent = wordToType
}

window.addEventListener("click", start)
window.addEventListener("click", stop)

const reload = () => {
   window.location.reload();
}
againBtn.addEventListener("click", reload)

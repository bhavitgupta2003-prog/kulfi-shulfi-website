/* ============================================================
   KULFI SHULFI — SITE CONTENT
   This is the ONE file you edit to update the website:
   flavours, stores, job openings, contact details, form setup.
   ============================================================ */

window.KS = {

  /* ---------- 1. SETTINGS ---------- */
  config: {
    // FORMS: paste your form endpoint here (e.g. a Formspree / Web3Forms / Getform URL).
    // Until you do, the enquiry & careers forms show a "not connected yet" message
    // so no enquiry is silently lost.
    businessFormEndpoint: "",   // e.g. "https://formspree.io/f/xxxxxxx"
    careersFormEndpoint:  "",   // can be the same or a different endpoint (needs file-upload support for resumes)

    // CONTACT DETAILS — leave "" to hide. They appear in the footer.
    email:     "",
    phone:     "",
    address:   "",
    instagram: "",   // full URL
    facebook:  "",
    youtube:   "",
    linkedin:  "",
    whatsapp:  ""
  },

  /* ---------- 2. KULFI RANGE ----------
     name  : flavour name shown on the card
     image : path to the photo (assets/img/<category>/<file>.jpg)
     desc  : short description (optional — shown only when filled in)
     To add a flavour: copy one line, change name/image, add the photo to the folder.
     To remove one: delete its line. */
  stick: [
    { name: "Malai",             image: "assets/img/stick/malai.jpg",             desc: "" },
    { name: "Sugar-Free Malai",  image: "assets/img/stick/sugar-free-malai.jpg",  desc: "" },
    { name: "Kesar Pista",       image: "assets/img/stick/kesar-pista.jpg",       desc: "" },
    { name: "Kesar Badam",       image: "assets/img/stick/kesar-badam.jpg",       desc: "" },
    { name: "Pista",             image: "assets/img/stick/pista.jpg",             desc: "" },
    { name: "Gulkand",           image: "assets/img/stick/gulkand.jpg",           desc: "" },
    { name: "Paan",              image: "assets/img/stick/paan.jpg",              desc: "" },
    { name: "Mango",             image: "assets/img/stick/mango.jpg",             desc: "" },
    { name: "Tender Coconut",    image: "assets/img/stick/tender-coconut.jpg",    desc: "" },
    { name: "Litchi",            image: "assets/img/stick/litchi.jpg",            desc: "" },
    { name: "Strawberry",        image: "assets/img/stick/strawberry.jpg",        desc: "" },
    { name: "Blackcurrant",      image: "assets/img/stick/blackcurrant.jpg",      desc: "" },
    { name: "Chilli Guava",      image: "assets/img/stick/chilli-guava.jpg",      desc: "" },
    { name: "Butterscotch",      image: "assets/img/stick/butterscotch.jpg",      desc: "" },
    { name: "Chocolate",         image: "assets/img/stick/chocolate.jpg",         desc: "" },
    { name: "Choco Almond",      image: "assets/img/stick/choco-almond.jpg",      desc: "" },
    { name: "Death by Chocolate",image: "assets/img/stick/death-by-chocolate.jpg",desc: "" }
  ],

  slice: [
    { name: "Malai",             image: "assets/img/slice/malai.jpg",             desc: "" },
    { name: "Kesar Pista",       image: "assets/img/slice/kesar-pista.jpg",       desc: "" },
    { name: "Kesar Badam",       image: "assets/img/slice/kesar-badam.jpg",       desc: "" },
    { name: "Pista",             image: "assets/img/slice/pista.jpg",             desc: "" },
    { name: "Gulkand",           image: "assets/img/slice/gulkand.jpg",           desc: "" },
    { name: "Paan",              image: "assets/img/slice/paan.jpg",              desc: "" },
    { name: "Mango",             image: "assets/img/slice/mango.jpg",             desc: "" },
    { name: "Tender Coconut",    image: "assets/img/slice/tender-coconut.jpg",    desc: "" },
    { name: "Litchi",            image: "assets/img/slice/litchi.jpg",            desc: "" },
    { name: "Strawberry",        image: "assets/img/slice/strawberry.jpg",        desc: "" },
    { name: "Blackcurrant",      image: "assets/img/slice/blackcurrant.jpg",      desc: "" },
    { name: "Chilli Guava",      image: "assets/img/slice/chilli-guava.jpg",      desc: "" },
    { name: "Butterscotch",      image: "assets/img/slice/butterscotch.jpg",      desc: "" },
    { name: "Chocolate",         image: "assets/img/slice/chocolate.jpg",         desc: "" },
    { name: "Choco Almond",      image: "assets/img/slice/choco-almond.jpg",      desc: "" },
    { name: "Death by Chocolate",image: "assets/img/slice/death-by-chocolate.jpg",desc: "" }
  ],

  family: [
    { name: "Malai",             image: "assets/img/family/malai.jpg",             desc: "" },
    { name: "Kesar Pista",       image: "assets/img/family/kesar-pista.jpg",       desc: "" },
    { name: "Kesar Badam",       image: "assets/img/family/kesar-badam.jpg",       desc: "" },
    { name: "Pista",             image: "assets/img/family/pista.jpg",             desc: "" },
    { name: "Gulkand",           image: "assets/img/family/gulkand.jpg",           desc: "" },
    { name: "Paan",              image: "assets/img/family/paan.jpg",              desc: "" },
    { name: "Mango",             image: "assets/img/family/mango.jpg",             desc: "" },
    { name: "Tender Coconut",    image: "assets/img/family/tender-coconut.jpg",    desc: "" },
    { name: "Litchi",            image: "assets/img/family/litchi.jpg",            desc: "" },
    { name: "Strawberry",        image: "assets/img/family/strawberry.jpg",        desc: "" },
    { name: "Blackcurrant",      image: "assets/img/family/blackcurrant.jpg",      desc: "" },
    { name: "Chilli Guava",      image: "assets/img/family/chilli-guava.jpg",      desc: "" },
    { name: "Butterscotch",      image: "assets/img/family/butterscotch.jpg",      desc: "" },
    { name: "Chocolate",         image: "assets/img/family/chocolate.jpg",         desc: "" },
    { name: "Choco Almond",      image: "assets/img/family/choco-almond.jpg",      desc: "" },
    { name: "Death by Chocolate",image: "assets/img/family/death-by-chocolate.jpg",desc: "" }
  ],

  /* Coming soon — protein kulfis. Set image to a photo path when you have one. */
  protein: [
    { name: "Malai",       image: "" },
    { name: "Kesar Pista", image: "" },
    { name: "Chocolate",   image: "" }
  ],

  /* ---------- 3. STORES ----------
     Add one block per outlet:
       { name: "Kulfi Shulfi – Indiranagar",
         area: "Indiranagar",
         address: "Full address here",
         mapsUrl: "https://maps.google.com/...",   <- the Google Maps link
         lat: 12.9719, lng: 77.6412 }              <- OPTIONAL: add to show the store on the interactive map
     Leave the list empty to show the "stores coming online" message. */
  stores: [
    // { name: "", area: "", address: "", mapsUrl: "", lat: null, lng: null },
  ],

  /* ---------- 4. JOB OPENINGS ----------
     { title: "Production Associate", location: "Bengaluru", type: "Full-time",
       description: "A line or two about the role.",
       applyEmail: "" }       <- optional
     Leave empty to show "no open positions right now". */
  jobs: [
    // { title: "", location: "", type: "", description: "" },
  ]
};

import p1_cow from './p1_cow.png';
import p2_cow from './p2_cow.png';
import p3_cow from './p3_cow.png';
import p4_cow from './p4_cow.png';
import p1_sheep from './p1_sheep.png';
import p2_sheep from './p2_sheep.png';
import p3_sheep from './p3_sheep.png';
import p4_sheep from './p4_sheep.png';
import p1_chicken from './p1_chicken.png';
import p2_chicken from './p2_chicken.png';
import p3_chicken from './p3_chicken.png';
import p4_chicken from './p4_chicken.png';
import p1_horse from './p1_horse.png';
import p2_horse from './p2_horse.png';
import p3_horse from './p3_horse.png';
import p4_horse from './p4_horse.png';
import p1_donkey from './p1_donkey.png';
import p2_donkey from './p2_donkey.png';
import p3_donkey from './p3_donkey.png';
import p4_donkey from './p4_donkey.png';
import p1_dog from './p1_dog.png';
import p2_dog from './p2_dog.png';
import p3_dog from './p3_dog.png';
import p4_dog from './p4_dog.png';



let all_product = [
  {
    id:1,
    name: "Dizene Cattle",
    description:"The use of Dizene Cattle is contraindicated in cases when vaccination against redwater is envisaged. If Dizene Cattle has been used to suppress a redwater vaccine reaction, revaccination of the treated animals is necessary.",
    category:"cow",
    image:p1_cow,
    new_price: 96,
  },
  {
    id:2,
    name: "Foomasule",
    description:"FOOMASULE No. 1 is the best available Homeopathic Veterinary Medicine to prevent the incidence of FOOT & MOUTH DISEASE (FMD) in cattle. It is very helpful when there is an outbreak of the disease in nearby places as it boosts the immunity of animals against viral infection of FMD.",
    category:"cow",
    image:p2_cow,
    new_price: 78,
  },
  {
    id:3,
    name: "Bloat-Go",
    description:"Refit’s Anti Flatulence and Anti Bloat Liquid For Abdominal Discomfort due to Excess Gastrointestinal Gas in Animals",
    category:"cow",
    image:p3_cow,
    new_price: 35,
  },
  {
    id:4,
    name: "Natural LÑiver Tonic",
    description:"Natural Liver tonic as the name suggests it is an liver supplement. It is manufactured by Anfotal Nutritions which is used as a veterinary liver tonic. This supplement is a blended mixture of natural Liver Extracts, along with organic liver stimulating mineral fortified with vitamin B12 which is a major vitamin for a better liver function",
    category:"cow",
    image:p4_cow,
    new_price: 132,
  },
///////////////////////////////////////////
  {
    id:5,
    name: "Diasule",
    description:"DIASULE for Sheep and Goats is the best Homeopathic Veterinary Medicine for Sheep and goats that protects animals from infectious diarrhea. DIASULE for Sheep and Goats is the best combination of different homeopathic medicines which has proven effective in different types of diarrhea in large animals.",
    category:"sheep",
    image:p1_sheep,
    new_price: 59,
  },
  {
    id:6,
    name: "Baytril",
    description:"For the treatment of acute severe mastitis caused by enrofloxacin - susceptible strains ofEscherichia coli in cattle, the second injection of Baytril 100 mg/ml Solution for Injection may now be given subcutaneously, 24 hours after the first dose administered by intravenous injection. In this case, the withdrawal period following subcutaneous injection should be applied.",
    category:"sheep",
    image:p2_sheep,
    new_price: 73,
  },
  {
    id:7,
    name: "Ivermectin Sheep Drench",
    description:"Ivermectin Sheep Drench is a ready-to-use, free-flowing solution of ivermectin. Ivermectin Sheep Drench provides treatment and control of adult and fourth-stage larvae of the following parasites: Gastrointestinal Roundworms – Haemonchus contortus, Ostertagia circumcincta, Trichostrongylus axei, T. colubriformis, Cooperia curticei, Nematodirus spathiger, N. battus, and Oesophagostomum columbianum; Lungworms – Dictyocaulus filaria; and all the larval stages of Nasal Bot",
    category:"sheep",
    image:p3_sheep,
    new_price: 56,
  },
  {
    id:8,
    name: "Sheep Growth Tonic",
    description:"Provides essential nutrients to improve growth in growing animals especially for sheep & goat Helps to increase body weight gain in lamb, kids & calves Helps to maintain general health & to increase milk production in milch animals.",
    category:"sheep",
    image:p4_sheep,
    new_price: 89,
  },
///////////////////////////////////////
{
  id:9,
  name: "Cocciprol",
  description:"It is recommended to separate sick chickens from the flock to administer treatment. Most chicken medicines are oral. Trust Dine a Chook to come up with a simple and easy way of administering poultry medication. The all-new Dine a Chook Poultry Medication Nipple Drinker.",
  category:"chicken",
  image:p1_chicken,
  new_price: 43,
},
{
  id:10,
  name: "Dine a Chook",
  description:"Symptoms of vitamin deficiency in chickens are often mild but any deficiency, no matter how small, will still affect condition and reproductive health. Vitamin and mineral deficiencies have the potential to cause severe problems and if left untreated will decrease the productivity and life expectancy of your birds. ",
  category:"chicken",
  image:p2_chicken,
  new_price: 67,
},
{
  id:11,
  name: "RespiFit",
  description:"Respiratory Tonic & Cough Medicine For Poultry, Chicken, Cattle, Calves, Cow, Buffalo, Sheep, Goat and Livestock Animals",
  category:"chicken",
  image:p3_chicken,
  new_price: 39,
},
{
  id:12,
  name: "HimFlora",
  description:"HimFlora® is the next generation “Synbiotic” formulated for improved productivity and livability of poultry birds. HimFlora® is a unique blend of probiotics, herbal actives as prebiotics, and Phytoactives, which helps improve gut health, immunity, and digestion in birds. HimFlora® is useful for the growth of birds, a better feed conversion ratio, modulation of intestinal microflora, pathogen inhibition, immunomodulation, and improving the broiler meat quality.",
  category:"chicken",
  image:p4_chicken,
  new_price: 92,
},
///////////////////////////////////////////////////////////
{
  id:13,
  name: "Inflam Away EQ",
  description:"InflamAway EQ is an advanced joint support formula made with an exclusive blend of synergistically combined human-grade quality ingredients to provide maximum support for healthy joint function and mobility. ",
  category:"horse",
  image:p1_horse,
  new_price: 132,
},
{
  id:14,
  name: "Underwood ",
  description:"Underwood Horse Medicine is a family owned business operating out of Wynnewood, Oklahoma for the last 30 years. We provide a safe and effective wound care product that is reliable, economical, and easy to use. We will do everything in our power and within our knowledge to help you and more importantly help your animals",
  category:"horse",
  image:p2_horse,
  new_price: 127,
},
{
  id:15,
  name: "Thyro-L",
  description:"Thyro-L is used for inducing rhythmic contractions of the smooth musculature of the uterus and/or milk letdown.",
  category:"horse",
  image:p3_horse,
  new_price: 149,
},
{
  id:16,
  name: "Podi-Liquid",
  description:"A revolutionary antimicrobial chlorine dioxide formula that will quickly kill the bacteria, yeast, viruses and fungi that lead to most hoof problems. Use for the prevention and treatment of thrush, white line disease, hoof canker, abscesses and other infections. Use the gel for daily treatment, and the liquid as a hoof soak twice per week for preventive maintenance.",
  category:"horse",
  image:p4_horse,
  new_price: 122,
},
//////////////////////////////////////////////////////////
{
  id:17,
  name: "Lac Jennius",
  description:"Aadvik Lac Jennius Donkey Milk Powder is a powerhouse of nutrients for the skin and for your body. Hippocrates, the father of medicine, prescribed donkey milk for various diseases, such as fevers, wounds, etc. Donkey milk has four times the amount of Vitamin C than any cow’s milk and can be consumed at any time of the day. It has antimicrobial properties such as Lysozyme and Lactoferrin.",
  category:"donkey",
  image:p1_donkey,
  new_price: 28,
},
{
  id:18,
  name: "Pheno Vue Flour",
  description:"PhenoVue Fluor 555 secondary antibody conjugates exhibit bright green fluorescence and are validated for use in high-content screening applications.",
  category:"donkey",
  image:p2_donkey,
  new_price: 49,
},
{
  id:19,
  name: "Donkey Red Blood Cells Packed",
  description:"Donkey Red Blood Cells Packed 100% from Innovative Research are manufactured from whole blood collections from animals located in the US. The whole blood is washed to remove the platelet-rich plasma, buffy coat layer, and leukocytes. Red blood cells are perishable and are collected and processed upon receipt of order.",
  category:"donkey",
  image:p3_donkey,
  new_price: 126,
},
{
  id:19,
  name: "Aspen scarlet Oil",
  description:"For use as a dressing for simple wounds, cuts and abrasions on horses and mules. Apply freely as open wound treatment or wrap with a clean bandage.",
  category:"donkey",
  image:p4_donkey,
  new_price: 98,
},
/////////////////////////////////////////////////////////////////////////////
{
  id:20,
  name: "Simparica TRIO",
  description:"Simparica Trio Chewable Tablets for Dogs are used to prevent Dirofilaria immitis-related heartworm disease in dogs. It also treats and controls roundworms, adult hookworms, and ticks, kills adult fleas, and prevents and treats flea infestations.",
  category:"dog",
  image:p1_dog,
  new_price: 120,
},
{
  id:21,
  name: "Pet Booster",
  description:"Petvit Power is fulfilling all necessary vitamins requirement of dogs/pets.For weight gain and faster growth of pets , anti ageing & boosting milk in nursing pet.Very helpful for Improving fertility in female & Improving semen quality in male.",
  category:"dog",
  image:p2_dog,
  new_price: 55,
},
{
  id:22,
  name: "Bravecto",
  description:"f you’ve ever had to remove a fully engorged tick from the folds of skin behind your dog’s ear, you know that keeping the tiny pests at bay is a battle, even in the best of times",
  category:"dog",
  image:p3_dog,
  new_price: 23,
},
{
  id:23,
  name: "Frontline",
  description:"Frontline Spot-on Large Dog 20-40kg [3 Pack] is for the treatment and prevention of flea and tick infestations in dogs and as part of a treatment strategy for flea allergy dermatitis where this has been previously diagnosed by a veterinary surgeon. Also for the control of infestations of biting lice on dogs.",
  category:"dog",
  image:p4_dog,
  new_price: 69,
},

];

export default all_product;

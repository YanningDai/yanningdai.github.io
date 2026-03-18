// ============================================================
//  publications.js — YOUR ONLY FILE TO EDIT
//
//  Fields per entry:
//    venue   : string  — journal/conference name shown as colored tag
//    year    : string  — publication year
//    badge   : string | null
//                "cover"      → orange  "Cover Article"
//                "book"       → purple  "Book"
//                "oral"       → green   "Oral"
//                "spotlight"  → blue    "Spotlight"
//                "best-paper" → pink    "Best Paper"
//                null         → no badge
//    title   : string
//    authors : string — separate names with ", "
//                       append * for equal contribution, e.g. "Yanning Dai*"
//    abstract: string — 1–2 sentences shown under authors
//    image   : string — path to teaser image, e.g. "images/pub_foo.png"
//                       set to "" to show grey placeholder
//    links   : array  — { label: "Paper", url: "https://..." }
//                       use url: "#" as placeholder; remove entry to hide link
// ============================================================

const PUBLICATIONS = [
  {
    venue: "ICLR",
    year: "2026",
    badge: null,
    title: "Efficient Morphology-Control Co-Design via Stackelberg Proximal Policy Optimization",
    authors: "Yanning Dai*, Yuhui Wang*, Dylan R Ashley, Jürgen Schmidhuber",
    abstract: "We formulate robot morphology-control co-design as a Stackelberg game and solve it via bilevel optimization with implicit differentiation, enabling efficient co-evolution of body and brain within a single PPO training loop.",
    image: "figures/pub_stackelberg.gif",
    links: [
      { label: "Paper",   url: "https://arxiv.org/pdf/2603.15388" },
      { label: "Project", url: "https://yanningdai.github.io/stackelberg-ppo-co-design/" },
      { label: "Code",    url: "https://github.com/YanningDai/StackelbergPPO" },
    ]
  },
  {
    venue: "arXiv",
    year: "2026",
    badge: null,
    title: "Wearable-Informed Generative Digital Avatars Predict Task-Conditioned Post-Stroke Locomotion",
    authors: "Yanning Dai, Chenyu Tang, Ruizhi Zhang, Wenyu Yang, Yilan Zhang, Yuhui Wang, Junliang Chen, Xuhang Chen, Ruimou Xie, Yangyue Cao, et al.",
    abstract: "A generative avatar framework conditioned on wearable sensor data that predicts individualized post-stroke locomotion patterns across diverse rehabilitation tasks.",
    image: "figures/pub_avatar.gif",
    links: [
      { label: "Paper",   url: "https://arxiv.org/pdf/2512.14329" },
      { label: "Code", url: "https://github.com/YanningDai/StrokeAvatar" },
    ]
  },
  {
    venue: "IROS",
    year: "2025",
    badge: null,
    title: "Towards an Extremely Robust Baby Robot With Rich Interaction Ability for Advanced Machine Learning Algorithms",
    authors: "Mohannad Alhakami*, Dylan R Ashley*, Joel Dunham*, Yanning Dai, Francesco Faccio, Eric Feron, Jürgen Schmidhuber",
    abstract: "We present Baby Robot, a robust low-cost platform designed for safe physical interaction and rapid experimentation, enabling data-efficient reinforcement learning in real-world settings.",
    image: "figures/pub_babyrobot.png",
    links: [
      { label: "Paper",   url: "https://arxiv.org/pdf/2404.08093" },
      { label: "Code",   url: "https://github.com/dylanashley/robot-limb-testai" },
    ]
  },
    {
    venue: "Nature Reviews Electrical Engineering",
    year: "2024",
    badge: null,
    title: "A Roadmap for the Development of Human Body Digital Twins",
    authors: "Chenyu Tang, Wentian Yi, Edoardo Occhipinti, Yanning Dai, Shuo Gao, Luigi G Occhipinti",
    image: "figures/pub_digitaltwin_roadmap.png",
    links: [
        { label: "Paper", url: "#" },
    ]
    },
  {
    venue: "Advanced Intelligent Systems",
    year: "2022",
    badge: "cover",
    title: "Tactile and Vision Perception for Intelligent Humanoids",
    authors: "Shuo Gao, Yanning Dai, Arokia Nathan",
    abstract: "A unified multimodal perception framework combining tactile sensing and computer vision for dexterous manipulation in humanoid robots, selected as cover article.",
    image: "figures/pub_tactile.png",
    links: [
      { label: "Paper",   url: "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aisy.202100074" },
    ]
  },
//   {
//     venue: "Advanced Intelligent Systems",
//     year: "2022",
//     badge: null,
//     title: "Advanced Electronics and Artificial Intelligence: Must-have Technologies toward Human Body Digital Twins",
//     authors: "Yanning Dai, Jiaqi Wang, Shuo Gao",
//     abstract: "A review of emerging electronics and AI technologies — including flexible sensors, edge computing, and generative models — that together enable high-fidelity digital twins of the human body.",
//     image: "figures/pub_digitaltwin.png",
//     links: [
//       { label: "Paper",   url: "#" },
//     ]
//   },
  {
    venue: "Springer-Nature",
    year: "2022",
    badge: "book",
    title: "Wearable Systems based Gait Monitoring and Analysis",
    authors: "Shuo Gao, Junliang Chen, Yanning Dai, Boyi Hu",
    abstract: "A comprehensive monograph covering hardware design, signal processing, and machine learning pipelines for wearable gait analysis systems, from sensor fabrication to clinical deployment.",
    image: "figures/pub_gaitbook.png",
    links: [
      { label: "Book",    url: "https://link.springer.com/book/10.1007/978-3-030-97332-2" },
    ]
  },
  {
    venue: "IEEE Sensors Journal",
    year: "2021",
    badge: null,
    title: "A Flexible Multi-Functional Smart Skin for Force, Touch Position, Proximity, and Humidity Sensing for Humanoid Robots",
    authors: "Yanning Dai, Shuo Gao",
    abstract: "A single flexible skin integrating four sensing modalities — force, touch position, proximity, and humidity — enabling rich tactile awareness for humanoid robot hands.",
    image: "figures/pub_smartskin.png",
    links: [
      { label: "Paper",   url: "https://ieeexplore.ieee.org/document/9336696" },
    ]
  },
  {
    venue: "SID Symposium",
    year: "2021",
    badge: null,
    title: "Force Touch and Machine Learning Based Smart Sensing Techniques for Interactive Displays",
    authors: "Shuo Gao, Yanning Dai, Junliang Chen, Anbiao Huang, Yong Liu",
    abstract: "Machine learning-enhanced force touch sensing pipeline for interactive displays, achieving robust multi-touch classification under varying pressure and contact conditions.",
    image: "figures/pub_forcetouch.png",
    links: [
      { label: "Paper",   url: "https://sid.onlinelibrary.wiley.com/doi/pdf/10.1002/sdtp.14367#" },
    ]
  },
];

// ============================================================
//  Your name — bolded automatically in every author list
// ============================================================
const HIGHLIGHT_AUTHOR = "Yanning Dai";
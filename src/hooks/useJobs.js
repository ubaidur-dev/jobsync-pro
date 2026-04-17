import { useState, useEffect } from 'react';

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('jobSync_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const data = [
      { id: 1, title: "Senior Front-End Developer", company: "Stripe", location: "Remote (Global)", type: "Full-time", salary: "$120k - $150k", desc: "Build Stripe's dashboards. Expert in React.js, Tailwind, System Design.", reqs: ["3+ Yrs React", "UX Focus", "CI/CD Experience"] },
      { id: 2, title: "UX/UI Design Lead", company: "Airbnb", location: "San Francisco, USA", type: "Full-time", salary: "$140k - $180k", desc: "Define user experiences for Airbnb's platform. Lead design sprints.", reqs: ["5+ Yrs Design", "Figma Expert", "Prototyping Skills"] },
      { id: 3, title: "Full Stack Rails Engineer", company: "Actionable.co", location: "Canada, USA", type: "Full-time", salary: "$110k - $140k", desc: "Develop and scale core features for Actionable. Ruby, React.", reqs: ["4+ Yrs Rails", "API Dev", "PostgreSQL"] },
      { id: 4, title: "Data Scientist", company: "Spotify", location: "Stockholm, Sweden", type: "Full-time", salary: "SEK 90k/mo", desc: "Discover insights in music. Python, SQL, ML models.", reqs: ["3+ Yrs Data", "Stats Expert", "A/B Testing"] },
      { id: 5, title: "Cloud Security Architect", company: "Microsoft", location: "Redmond, USA", type: "Full-time", salary: "$160k - $200k", desc: "Secure Microsoft's Azure cloud. Azure, AWS, Cybersecurity.", reqs: ["6+ Yrs Security", "Architecture", "Compliance"] },
      { id: 6, title: "Mobile Flutter Developer", company: "Delivery Hero", location: "Berlin, Germany", type: "Contract", salary: "€60k - €80k", desc: "Build Rider & Customer apps. Flutter, Dart, Mobile Architecture.", reqs: ["2+ Yrs Flutter", "Play Store Pub", "REST APIs"] },
      { id: 7, title: "Senior Backend Engineer", company: "Notion", location: "Worldwide", type: "Full-time", salary: "$130k - $160k", desc: "Scale Notion's backend. Go, Node.js, Performance Tuning.", reqs: ["4+ Yrs Backend", "Scale Exp", "NoSQL"] },
      { id: 8, title: "Growth Marketing Manager", company: "Vercel", location: "Remote (Global)", type: "Full-time", salary: "$100k - $120k", desc: "Drive developer adoption. SEO, Content, Performance Marketing.", reqs: ["3+ Yrs Mktg", "B2B SaaS", "Analytics Tools"] },
      { id: 9, title: "Blockchain Developer", company: "Polygon Labs", location: "Dubai, UAE", type: "Full-time", salary: "$150k - $190k", desc: "Develop Ethereum layer 2 solutions. Solidity, Rust, Cryptography.", reqs: ["4+ Yrs Web3", "Solidity Exp", "Network Scaling"] },
      { id: 10, title: "AI/ML Engineering Lead", company: "OpenAI", location: "San Francisco, USA", type: "Full-time", salary: "$180k - $230k", desc: "Lead development of LLM inference systems. Python, PyTorch, Large Scale Training.", reqs: ["5+ Yrs AI", "LLM Expertise", "Team Lead"] },
      { id: 11, title: "Content Strategist", company: "Duolingo", location: "New York, USA", type: "Full-time", salary: "$90k - $110k", desc: "Craft engaging language content. Content Creation, Localization, UX Writing.", reqs: ["3+ Yrs Content", "SEO Writing", "Linguistics"] },
      { id: 12, title: "DevOps Engineer", company: "Slack", location: "Melbourne, Australia", type: "Full-time", salary: "A$130k", desc: "Manage Slack's infrastructure. Kubernetes, Terraform, AWS, Monitoring.", reqs: ["4+ Yrs DevOps", "K8s Expert", "IaC Focus"] },
    ];
    
    setJobs(data);
  }, []);

  const toggleBookmark = (job) => {
    const isExist = bookmarks.find(b => b.id === job.id);
    const updated = isExist ? bookmarks.filter(b => b.id !== job.id) : [...bookmarks, job];
    setBookmarks(updated);
    localStorage.setItem('jobSync_bookmarks', JSON.stringify(updated));
  };

  return { jobs, bookmarks, toggleBookmark };
};
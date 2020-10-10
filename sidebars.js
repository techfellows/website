module.exports = {
  someSidebar: {
    React: ["doc1", "doc2", "doc3"],
    "React Native": ["doc4", "doc5"],
    "Next.js": ["mdx"],
    "State Management": ["doc8"],
    HTML: ["doc6"],
    CSS: ["doc7"],
    Algorithms: [
      (this.someSidebar = {
        "Coding Interview Questions": ["doc9"],
        Structures: ["doc10"],
        Binary: ["doc11"],
      }),
    ],
  },
};

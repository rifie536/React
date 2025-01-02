export const subjects = [
  {
    id: 1,
    name: "公害総論",
    description: "環境法体系、公害概論など"
  },
  {
    id: 2,
    name: "水質有害物質",
    description: "有害物質の性質、測定方法など"
  },
  {
    id: 3,
    name: "水質汚濁防止技術",
    description: "汚水処理技術、水質管理など"
  },
  {
    id: 4,
    name: "大気汚染防止",
    description: "大気汚染物質、測定技術など"
  },
  {
    id: 5,
    name: "法規制",
    description: "環境関連法規、規制基準など"
  }
];

export const years = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  year: 2024 - i,
}));

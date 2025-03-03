router.get("/", async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const videos = await Video.find(filter);
  res.json(videos);
});

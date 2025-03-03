// Rating a video
router.post("/rate", async (req, res) => {
  const { videoId, rating } = req.body;
  const existingRating = await Rating.findOne({ videoId, userId: req.user._id });

  if (existingRating) {
    existingRating.rating = rating;
    await existingRating.save();
  } else {
    const newRating = new Rating({ videoId, userId: req.user._id, rating });
    await newRating.save();
  }

  res.json({ message: "Rating saved!" });
});

// Comment on a video
router.post("/comment", async (req, res) => {
  const { videoId, comment } = req.body;
  const newComment = new Comment({ videoId, userId: req.user._id, comment });
  await newComment.save();
  res.json({ message: "Comment added!" });
});

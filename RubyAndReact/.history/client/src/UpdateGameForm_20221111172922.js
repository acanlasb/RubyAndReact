function handleUpdateRating(pct) {
  const newRating = pct * 5;
  fetch(`/spices/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rating: newRating }),
  })
    .then((r) => r.json())
    .then(onUpdateSpice);
}

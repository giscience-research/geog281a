function refreshFrame(id) {
  const frame = document.getElementById(id);
  const url = new URL(frame.src, window.location.href);
  url.searchParams.set("_ts", Date.now());
  frame.src = url.toString();
}

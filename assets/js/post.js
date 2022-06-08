// the post scroll bar on top of posts
const scrollListener = () => {
  const scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];
  const scrollBottom = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
  const scrollPercent = scrollTop / scrollBottom * 100 + "%";
  const progressElement = document.getElementById("post-progress-bar");
  progressElement && progressElement.style.setProperty("--scroll", scrollPercent);
};
document.addEventListener("scroll", scrollListener, { passive: true });
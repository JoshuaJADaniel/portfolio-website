const minTime = 0.2;
const maxTime = 1.2;

const getResultCountText = (count: number) => {
  let loadTime = 0;

  try {
    loadTime =
      (window.performance.timing.domContentLoadedEventEnd -
        window.performance.timing.navigationStart) /
      1000;
  } catch (err) {
    console.log(err);
  }

  if (loadTime <= 0) {
    console.warn("Could not compute load time");
    loadTime = Math.random() * (maxTime - minTime) + minTime;
  }

  return `About ${count} results (${loadTime.toFixed(2)} seconds)`;
};

export default getResultCountText;

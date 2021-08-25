export const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(
      reject.bind(
        '_',
        'Please check your internet connection or try again (TIMEOUT ERROR)'
      ),
      sec * 1000
    );
  });
};

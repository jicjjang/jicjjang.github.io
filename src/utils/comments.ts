export const addComments = () => {
  if (typeof document !== 'undefined') {
    const utterancElement = document.createElement('script');
    utterancElement.setAttribute('src', 'https://utteranc.es/client.js');
    utterancElement.setAttribute('repo', 'jicjjang/jicjjang.github.io');
    utterancElement.setAttribute('issue-term', 'pathname');
    utterancElement.setAttribute('label', '✨댓글✨');
    utterancElement.setAttribute('theme', 'github-light');
    utterancElement.setAttribute('async', 'true');

    document.body.appendChild(utterancElement);
  }
};

export const removeComments = () => {
  if (typeof document !== 'undefined') {
    const utterancesElement = document.querySelector('.utterances');
    if (utterancesElement && document.querySelector('.utterances-frame')) {
      utterancesElement.remove();
    }
  }
};

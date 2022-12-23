type SearchResultType = {
  result: string;
  keyWord: string;
};

const formatSearchResult = ({ result, keyWord }: SearchResultType) => {
  const regex = new RegExp(
    keyWord
      .split('')
      .map(function (x: string) {
        return x.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
      })
      .join('[-\\s.]*'),
    'ig',
  );

  return result.replace(regex, '<b>$&</b>');
};

export default formatSearchResult;

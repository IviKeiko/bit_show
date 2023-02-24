const paginate = (shows) => {
  const showsPerPage = 12;
  const pages = Math.ceil(shows.length / showsPerPage);

  const showsPages = Array.from({ length: pages }, (_, index) => {
    const start = index * showsPerPage;
    return shows.slice(start, start + showsPerPage);
  });
  return showsPages;
};

export default paginate;

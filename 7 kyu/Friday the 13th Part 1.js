function killcount(counselors, jason){
  return counselors
    .filter(([, intel]) => intel < jason)
    .map(([name]) => name);
}

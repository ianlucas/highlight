function overwrite(defs) {
  const default_defs = {
    ident: ("  ")
  };
  return Object.freeze(
    Object.assign(
      default_defs,
      defs
    )
  );
}

export default overwrite;
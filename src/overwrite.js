function overwrite(defs) {
  const default_defs = {
    ident: ("  ")
  };
  return Object.assign(default_defs, defs)
}

export default Object.freeze(overwrite);
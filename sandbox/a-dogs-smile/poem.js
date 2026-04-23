// Fragments adapted from the source story about Marie Antoinette and Macaroni.
// Each fragment is tagged with a voice category that drives its style and
// physics in sketch.js. The order is the cycle order — clicking advances
// one step. The cycle loops.

const FRAGMENTS = [
  { text: "Macaroni is dead.",                              tag: "numb"      },
  { text: "and Marie Antoinette is sad.",                   tag: "memory"    },
  { text: "license plate 279RLQ",                           tag: "intrusion" },
  { text: "he used to curl up at the foot of the bed",      tag: "memory"    },
  { text: "putatively protecting her",                      tag: "memory"    },
  { text: "he would lick an intruder's hand",               tag: "memory"    },
  { text: "and make them feel welcomed",                    tag: "memory"    },
  { text: "he was sweet and a baby",                        tag: "memory"    },
  { text: "Kraft Mac n' Cheese",                            tag: "intrusion" },
  { text: "a commercial on her phone screen",               tag: "intrusion" },
  { text: "she cries.",                                     tag: "body"      },
  { text: "old Oprah interviews from the nineties",         tag: "intrusion" },
  { text: "sometimes all she eats is Funyuns",              tag: "body"      },
  { text: "the thought of eating makes her sad",            tag: "body"      },
  { text: "it also makes her throw up",                     tag: "body"      },
  { text: "BIO 1001   ENC 1101   MAT 1000   HIS 1002",      tag: "intrusion" },
  { text: "she hasn't been to class in over two weeks",     tag: "numb"      },
  { text: "she is going to fail",                           tag: "numb"      },
  { text: "she doesn't care",                               tag: "numb"      },
  { text: "15 ½ days",                                 tag: "intrusion" },
  { text: "her parents ask if she wants a new puppy",       tag: "memory"    },
  { text: "she says no.",                                   tag: "numb"      },
  { text: "it made her sad and mad",                        tag: "body"      },
  { text: "i know the death-sting",                         tag: "chorus"    },
  { text: "we should go to the movies",                     tag: "chorus"    },
  { text: "why weren't you in class",                       tag: "chorus"    },
  { text: "course withdrawal deadline",                     tag: "intrusion" },
  { text: "Marie doesn't respond.",                         tag: "numb"      },
  { text: "i'm sorry your dog died",                        tag: "chorus"    },
  { text: "it's okay.",                                     tag: "numb"      },
  { text: "it doesn't have to be okay",                     tag: "chorus"    },
  { text: "you evidently loved him a lot",                  tag: "chorus"    },
  { text: "it doesn't matter",                              tag: "numb"      },
  { text: "it does matter",                                 tag: "chorus"    },
  { text: "it really doesn't",                              tag: "numb"      },
  { text: "nothing does.",                                  tag: "numb"      },
  { text: "he's gone and dead",                             tag: "numb"      },
  { text: "left in the middle of the road",                 tag: "memory"    },
  { text: "like an empty can of coke",                      tag: "memory"    },
  { text: "the driver keeps going",                         tag: "intrusion" },
  { text: "Macaroni doesn't",                               tag: "memory"    },
  { text: "she feels like she's dead too",                  tag: "body"      },
  { text: "something fundamentally wrong with everything",  tag: "numb"      },
  { text: "and none of that even matters",                  tag: "numb"      },
  { text: "on the beige carpet",                            tag: "memory"    },
  { text: "his eyes wide open",                             tag: "memory"    },
  { text: "his tongue hanging out",                         tag: "memory"    },
  { text: "a dog's smile.",                                 tag: "memory"    },
];

// The whisper used during idle — the name of the dog, spoken by the piece
// itself when the reader stops clicking.
const IDLE_WHISPER = "Macaroni";

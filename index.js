// 1. Function with one parameter
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// 2. Function with two parameters
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// 3. Function with a default parameter
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

type ProgrammingLanguagesMap = Record<string, string | Record<string, string>>;

const programmingLanguages: ProgrammingLanguagesMap = {
  Popular: {
    C: "C",
    "C#": "C#",
    "C++": "C++",
    CoffeeScript: "CoffeeScript",
    CSS: "CSS",
    Dart: "Dart",
    DM: "DM",
    Elixir: "Elixir",
    Go: "Go",
    Groovy: "Groovy",
    HTML: "HTML",
    Java: "Java",
    JavaScript: "JavaScript",
    Kotlin: "Kotlin",
    "Objective-C": "Objective-C",
    Perl: "Perl",
    PHP: "PHP",
    PowerShell: "PowerShell",
    Python: "Python",
    Ruby: "Ruby",
    Rust: "Rust",
    Scala: "Scala",
    Shell: "Shell",
    Swift: "Swift",
    TypeScript: "TypeScript",
  },
  "Everything Else": {
    "1C Enterprise": "1C Enterprise",
    "2-Dimensional Array": "2-Dimensional Array",
    "4D": "4D",
    ABAP: "ABAP",
    "ABAP CDS": "ABAP CDS",
    ABNF: "ABNF",
    ActionScript: "ActionScript",
    Ada: "Ada",
    "Adobe Font Metrics": "Adobe Font Metrics",
    Agda: "Agda",
    "AGS Script": "AGS Script",
    AIDL: "AIDL",
    AL: "AL",
    Alloy: "Alloy",
    "Alpine Abuild": "Alpine Abuild",
    "Altium Designer": "Altium Designer",
    AMPL: "AMPL",
    AngelScript: "AngelScript",
    "Ant Build System": "Ant Build System",
    Antlers: "Antlers",
    ANTLR: "ANTLR",
    ApacheConf: "ApacheConf",
    Apex: "Apex",
    "API Blueprint": "API Blueprint",
    APL: "APL",
    "Apollo Guidance Computer": "Apollo Guidance Computer",
    AppleScript: "AppleScript",
    Arc: "Arc",
    AsciiDoc: "AsciiDoc",
    ASL: "ASL",
    "ASN.1": "ASN.1",
    "ASP.NET": "ASP.NET",
    AspectJ: "AspectJ",
    Assembly: "Assembly",
    Astro: "Astro",
    Asymptote: "Asymptote",
    ATS: "ATS",
    Augeas: "Augeas",
    AutoHotkey: "AutoHotkey",
    AutoIt: "AutoIt",
    "Avro IDL": "Avro IDL",
    Awk: "Awk",
    Ballerina: "Ballerina",
    BASIC: "BASIC",
    Batchfile: "Batchfile",
    Beef: "Beef",
    Befunge: "Befunge",
    Berry: "Berry",
    BibTeX: "BibTeX",
    Bicep: "Bicep",
    Bikeshed: "Bikeshed",
    Bison: "Bison",
    BitBake: "BitBake",
    Blade: "Blade",
    BlitzBasic: "BlitzBasic",
    BlitzMax: "BlitzMax",
    Bluespec: "Bluespec",
    Boo: "Boo",
    Boogie: "Boogie",
    Brainfuck: "Brainfuck",
    BrighterScript: "BrighterScript",
    Brightscript: "Brightscript",
    Browserslist: "Browserslist",
    "C-ObjDump": "C-ObjDump",
    "C2hs Haskell": "C2hs Haskell",
    "Cabal Config": "Cabal Config",
    Cadence: "Cadence",
    Cairo: "Cairo",
    CameLIGO: "CameLIGO",
    "CAP CDS": "CAP CDS",
    "Cap'n Proto": "Cap'n Proto",
    CartoCSS: "CartoCSS",
    Ceylon: "Ceylon",
    Chapel: "Chapel",
    Charity: "Charity",
    Checksums: "Checksums",
    ChucK: "ChucK",
    CIL: "CIL",
    Cirru: "Cirru",
    Clarion: "Clarion",
    Clarity: "Clarity",
    "Classic ASP": "Classic ASP",
    Clean: "Clean",
    Click: "Click",
    CLIPS: "CLIPS",
    Clojure: "Clojure",
    "Closure Templates": "Closure Templates",
    "Cloud Firestore Security Rules": "Cloud Firestore Security Rules",
    CMake: "CMake",
    COBOL: "COBOL",
    CODEOWNERS: "CODEOWNERS",
    CodeQL: "CodeQL",
    ColdFusion: "ColdFusion",
    "ColdFusion CFC": "ColdFusion CFC",
    COLLADA: "COLLADA",
    "Common Lisp": "Common Lisp",
    "Common Workflow Language": "Common Workflow Language",
    "Component Pascal": "Component Pascal",
    "CoNLL-U": "CoNLL-U",
    Cool: "Cool",
    Coq: "Coq",
    "Cpp-ObjDump": "Cpp-ObjDump",
    Creole: "Creole",
    Crystal: "Crystal",
    CSON: "CSON",
    Csound: "Csound",
    "Csound Document": "Csound Document",
    "Csound Score": "Csound Score",
    CSV: "CSV",
    Cuda: "Cuda",
    CUE: "CUE",
    "Cue Sheet": "Cue Sheet",
    "cURL Config": "cURL Config",
    Curry: "Curry",
    CWeb: "CWeb",
    Cycript: "Cycript",
    Cython: "Cython",
    D: "D",
    "D-ObjDump": "D-ObjDump",
    Dafny: "Dafny",
    "Darcs Patch": "Darcs Patch",
    DataWeave: "DataWeave",
    "Debian Package Control File": "Debian Package Control File",
    DenizenScript: "DenizenScript",
    desktop: "desktop",
    Dhall: "Dhall",
    Diff: "Diff",
    "DIGITAL Command Language": "DIGITAL Command Language",
    dircolors: "dircolors",
    "DirectX 3D File": "DirectX 3D File",
    "DNS Zone": "DNS Zone",
    Dockerfile: "Dockerfile",
    Dogescript: "Dogescript",
    DTrace: "DTrace",
    Dylan: "Dylan",
    E: "E",
    "E-mail": "E-mail",
    Eagle: "Eagle",
    Earthly: "Earthly",
    Easybuild: "Easybuild",
    EBNF: "EBNF",
    eC: "eC",
    "Ecere Projects": "Ecere Projects",
    ECL: "ECL",
    ECLiPSe: "ECLiPSe",
    EditorConfig: "EditorConfig",
    "Edje Data Collection": "Edje Data Collection",
    edn: "edn",
    Eiffel: "Eiffel",
    EJS: "EJS",
    Elm: "Elm",
    "Emacs Lisp": "Emacs Lisp",
    EmberScript: "EmberScript",
    EQ: "EQ",
    Erlang: "Erlang",
    Euphoria: "Euphoria",
    "F#": "F#",
    "F*": "F*",
    Factor: "Factor",
    Fancy: "Fancy",
    Fantom: "Fantom",
    Faust: "Faust",
    Fennel: "Fennel",
    "FIGlet Font": "FIGlet Font",
    "Filebench WML": "Filebench WML",
    Filterscript: "Filterscript",
    fish: "fish",
    Fluent: "Fluent",
    FLUX: "FLUX",
    Formatted: "Formatted",
    Forth: "Forth",
    Fortran: "Fortran",
    "Fortran Free Form": "Fortran Free Form",
    FreeBasic: "FreeBasic",
    FreeMarker: "FreeMarker",
    Frege: "Frege",
    Futhark: "Futhark",
    "G-code": "G-code",
    "Game Maker Language": "Game Maker Language",
    GAML: "GAML",
    GAMS: "GAMS",
    GAP: "GAP",
    "GCC Machine Description": "GCC Machine Description",
    GDB: "GDB",
    GDScript: "GDScript",
    GEDCOM: "GEDCOM",
    "Gemfile.lock": "Gemfile.lock",
    Genero: "Genero",
    "Genero Forms": "Genero Forms",
    Genie: "Genie",
    Genshi: "Genshi",
    "Gentoo Ebuild": "Gentoo Ebuild",
    "Gentoo Eclass": "Gentoo Eclass",
    "Gerber Image": "Gerber Image",
    "Gettext Catalog": "Gettext Catalog",
    Gherkin: "Gherkin",
    "Git Attributes": "Git Attributes",
    "Git Config": "Git Config",
    "Git Revision List": "Git Revision List",
    Gleam: "Gleam",
    GLSL: "GLSL",
    Glyph: "Glyph",
    "Glyph Bitmap Distribution Format": "Glyph Bitmap Distribution Format",
    GN: "GN",
    Gnuplot: "Gnuplot",
    "Go Checksums": "Go Checksums",
    "Go Module": "Go Module",
    Golo: "Golo",
    Gosu: "Gosu",
    Grace: "Grace",
    Gradle: "Gradle",
    "Grammatical Framework": "Grammatical Framework",
    "Graph Modeling Language": "Graph Modeling Language",
    GraphQL: "GraphQL",
    "Graphviz (DOT)": "Graphviz (DOT)",
    "Groovy Server Pages": "Groovy Server Pages",
    GSC: "GSC",
    Hack: "Hack",
    Haml: "Haml",
    Handlebars: "Handlebars",
    HAProxy: "HAProxy",
    Harbour: "Harbour",
    Haskell: "Haskell",
    Haxe: "Haxe",
    HCL: "HCL",
    HiveQL: "HiveQL",
    HLSL: "HLSL",
    HolyC: "HolyC",
    hoon: "hoon",
    "HTML+ECR": "HTML+ECR",
    "HTML+EEX": "HTML+EEX",
    "HTML+ERB": "HTML+ERB",
    "HTML+PHP": "HTML+PHP",
    "HTML+Razor": "HTML+Razor",
    HTTP: "HTTP",
    HXML: "HXML",
    Hy: "Hy",
    HyPhy: "HyPhy",
    IDL: "IDL",
    Idris: "Idris",
    "Ignore List": "Ignore List",
    "IGOR Pro": "IGOR Pro",
    "ImageJ Macro": "ImageJ Macro",
    "Inform 7": "Inform 7",
    INI: "INI",
    "Inno Setup": "Inno Setup",
    Io: "Io",
    Ioke: "Ioke",
    "IRC log": "IRC log",
    Isabelle: "Isabelle",
    "Isabelle ROOT": "Isabelle ROOT",
    J: "J",
    Janet: "Janet",
    "JAR Manifest": "JAR Manifest",
    Jasmin: "Jasmin",
    "Java Properties": "Java Properties",
    "Java Server Pages": "Java Server Pages",
    "JavaScript+ERB": "JavaScript+ERB",
    "Jest Snapshot": "Jest Snapshot",
    "JetBrains MPS": "JetBrains MPS",
    JFlex: "JFlex",
    Jinja: "Jinja",
    Jison: "Jison",
    "Jison Lex": "Jison Lex",
    Jolie: "Jolie",
    jq: "jq",
    JSON: "JSON",
    "JSON with Comments": "JSON with Comments",
    JSON5: "JSON5",
    JSONiq: "JSONiq",
    JSONLD: "JSONLD",
    Jsonnet: "Jsonnet",
    Julia: "Julia",
    "Jupyter Notebook": "Jupyter Notebook",
    "Kaitai Struct": "Kaitai Struct",
    KakouneScript: "KakouneScript",
    "KiCad Layout": "KiCad Layout",
    "KiCad Legacy Layout": "KiCad Legacy Layout",
    "KiCad Schematic": "KiCad Schematic",
    Kit: "Kit",
    KRL: "KRL",
    Kusto: "Kusto",
    kvlang: "kvlang",
    LabVIEW: "LabVIEW",
    Lark: "Lark",
    Lasso: "Lasso",
    Latte: "Latte",
    Lean: "Lean",
    Less: "Less",
    Lex: "Lex",
    LFE: "LFE",
    LigoLANG: "LigoLANG",
    LilyPond: "LilyPond",
    Limbo: "Limbo",
    "Linker Script": "Linker Script",
    "Linux Kernel Module": "Linux Kernel Module",
    Liquid: "Liquid",
    "Literate Agda": "Literate Agda",
    "Literate CoffeeScript": "Literate CoffeeScript",
    "Literate Haskell": "Literate Haskell",
    LiveScript: "LiveScript",
    LLVM: "LLVM",
    Logos: "Logos",
    Logtalk: "Logtalk",
    LOLCODE: "LOLCODE",
    LookML: "LookML",
    LoomScript: "LoomScript",
    LSL: "LSL",
    "LTspice Symbol": "LTspice Symbol",
    Lua: "Lua",
    M: "M",
    M4: "M4",
    M4Sugar: "M4Sugar",
    Macaulay2: "Macaulay2",
    Makefile: "Makefile",
    Mako: "Mako",
    Markdown: "Markdown",
    Marko: "Marko",
    Mask: "Mask",
    Mathematica: "Mathematica",
    MATLAB: "MATLAB",
    "Maven POM": "Maven POM",
    Max: "Max",
    MAXScript: "MAXScript",
    mcfunction: "mcfunction",
    Mercury: "Mercury",
    Meson: "Meson",
    Metal: "Metal",
    "Microsoft Developer Studio Project": "Microsoft Developer Studio Project",
    "Microsoft Visual Studio Solution": "Microsoft Visual Studio Solution",
    MiniD: "MiniD",
    MiniYAML: "MiniYAML",
    Mint: "Mint",
    Mirah: "Mirah",
    "mIRC Script": "mIRC Script",
    MLIR: "MLIR",
    Modelica: "Modelica",
    "Modula-2": "Modula-2",
    "Modula-3": "Modula-3",
    "Module Management System": "Module Management System",
    Monkey: "Monkey",
    "Monkey C": "Monkey C",
    Moocode: "Moocode",
    MoonScript: "MoonScript",
    Motoko: "Motoko",
    "Motorola 68K Assembly": "Motorola 68K Assembly",
    MQL4: "MQL4",
    MQL5: "MQL5",
    MTML: "MTML",
    MUF: "MUF",
    mupad: "mupad",
    Muse: "Muse",
    Mustache: "Mustache",
    Myghty: "Myghty",
    nanorc: "nanorc",
    NASL: "NASL",
    NCL: "NCL",
    Nearley: "Nearley",
    Nemerle: "Nemerle",
    NEON: "NEON",
    nesC: "nesC",
    NetLinx: "NetLinx",
    "NetLinx+ERB": "NetLinx+ERB",
    NetLogo: "NetLogo",
    NewLisp: "NewLisp",
    Nextflow: "Nextflow",
    Nginx: "Nginx",
    Nim: "Nim",
    Ninja: "Ninja",
    Nit: "Nit",
    Nix: "Nix",
    NL: "NL",
    "NPM Config": "NPM Config",
    NSIS: "NSIS",
    Nu: "Nu",
    NumPy: "NumPy",
    Nunjucks: "Nunjucks",
    NWScript: "NWScript",
    ObjDump: "ObjDump",
    "Object Data Instance Notation": "Object Data Instance Notation",
    "Objective-C++": "Objective-C++",
    "Objective-J": "Objective-J",
    ObjectScript: "ObjectScript",
    OCaml: "OCaml",
    Odin: "Odin",
    Omgrofl: "Omgrofl",
    ooc: "ooc",
    Opa: "Opa",
    Opal: "Opal",
    "Open Policy Agent": "Open Policy Agent",
    OpenCL: "OpenCL",
    "OpenEdge ABL": "OpenEdge ABL",
    OpenQASM: "OpenQASM",
    "OpenRC runscript": "OpenRC runscript",
    OpenSCAD: "OpenSCAD",
    "OpenStep Property List": "OpenStep Property List",
    "OpenType Feature File": "OpenType Feature File",
    Org: "Org",
    Ox: "Ox",
    Oxygene: "Oxygene",
    Oz: "Oz",
    P4: "P4",
    Pan: "Pan",
    Papyrus: "Papyrus",
    Parrot: "Parrot",
    "Parrot Assembly": "Parrot Assembly",
    "Parrot Internal Representation": "Parrot Internal Representation",
    Pascal: "Pascal",
    Pawn: "Pawn",
    "PEG.js": "PEG.js",
    Pep8: "Pep8",
    Pic: "Pic",
    Pickle: "Pickle",
    PicoLisp: "PicoLisp",
    PigLatin: "PigLatin",
    Pike: "Pike",
    PlantUML: "PlantUML",
    PLpgSQL: "PLpgSQL",
    PLSQL: "PLSQL",
    Pod: "Pod",
    "Pod 6": "Pod 6",
    PogoScript: "PogoScript",
    Pony: "Pony",
    Portugol: "Portugol",
    PostCSS: "PostCSS",
    PostScript: "PostScript",
    "POV-Ray SDL": "POV-Ray SDL",
    PowerBuilder: "PowerBuilder",
    Prisma: "Prisma",
    Processing: "Processing",
    Procfile: "Procfile",
    Proguard: "Proguard",
    Prolog: "Prolog",
    Promela: "Promela",
    "Propeller Spin": "Propeller Spin",
    "Protocol Buffer": "Protocol Buffer",
    "Protocol Buffer Text Format": "Protocol Buffer Text Format",
    "Public Key": "Public Key",
    Pug: "Pug",
    Puppet: "Puppet",
    "Pure Data": "Pure Data",
    PureBasic: "PureBasic",
    PureScript: "PureScript",
    "Python console": "Python console",
    "Python traceback": "Python traceback",
    q: "q",
    "Q#": "Q#",
    QMake: "QMake",
    QML: "QML",
    "Qt Script": "Qt Script",
    Quake: "Quake",
    R: "R",
    Racket: "Racket",
    Ragel: "Ragel",
    Raku: "Raku",
    RAML: "RAML",
    Rascal: "Rascal",
    "Raw token data": "Raw token data",
    RDoc: "RDoc",
    "Readline Config": "Readline Config",
    REALbasic: "REALbasic",
    Reason: "Reason",
    ReasonLIGO: "ReasonLIGO",
    Rebol: "Rebol",
    "Record Jar": "Record Jar",
    Red: "Red",
    Redcode: "Redcode",
    "Redirect Rules": "Redirect Rules",
    "Regular Expression": "Regular Expression",
    "Ren'Py": "Ren'Py",
    RenderScript: "RenderScript",
    ReScript: "ReScript",
    reStructuredText: "reStructuredText",
    REXX: "REXX",
    "Rich Text Format": "Rich Text Format",
    Ring: "Ring",
    Riot: "Riot",
    RMarkdown: "RMarkdown",
    RobotFramework: "RobotFramework",
    "robots.txt": "robots.txt",
    Roff: "Roff",
    "Roff Manpage": "Roff Manpage",
    Rouge: "Rouge",
    RPC: "RPC",
    RPGLE: "RPGLE",
    "RPM Spec": "RPM Spec",
    RUNOFF: "RUNOFF",
    Sage: "Sage",
    SaltStack: "SaltStack",
    SAS: "SAS",
    Sass: "Sass",
    Scaml: "Scaml",
    Scheme: "Scheme",
    Scilab: "Scilab",
    SCSS: "SCSS",
    sed: "sed",
    Self: "Self",
    "SELinux Policy": "SELinux Policy",
    ShaderLab: "ShaderLab",
    "ShellCheck Config": "ShellCheck Config",
    ShellSession: "ShellSession",
    Shen: "Shen",
    Sieve: "Sieve",
    Singularity: "Singularity",
    Slash: "Slash",
    Slice: "Slice",
    Slim: "Slim",
    Smali: "Smali",
    Smalltalk: "Smalltalk",
    Smarty: "Smarty",
    SmPL: "SmPL",
    SMT: "SMT",
    Solidity: "Solidity",
    Soong: "Soong",
    SourcePawn: "SourcePawn",
    SPARQL: "SPARQL",
    "Spline Font Database": "Spline Font Database",
    SQF: "SQF",
    SQL: "SQL",
    SQLPL: "SQLPL",
    Squirrel: "Squirrel",
    "SRecode Template": "SRecode Template",
    "SSH Config": "SSH Config",
    Stan: "Stan",
    "Standard ML": "Standard ML",
    STAR: "STAR",
    Starlark: "Starlark",
    Stata: "Stata",
    STL: "STL",
    STON: "STON",
    StringTemplate: "StringTemplate",
    Stylus: "Stylus",
    "SubRip Text": "SubRip Text",
    SugarSS: "SugarSS",
    SuperCollider: "SuperCollider",
    Svelte: "Svelte",
    SVG: "SVG",
    SWIG: "SWIG",
    SystemVerilog: "SystemVerilog",
    Talon: "Talon",
    Tcl: "Tcl",
    Tcsh: "Tcsh",
    Tea: "Tea",
    Terra: "Terra",
    TeX: "TeX",
    Texinfo: "Texinfo",
    Text: "Text",
    Textile: "Textile",
    "TextMate Properties": "TextMate Properties",
    Thrift: "Thrift",
    "TI Program": "TI Program",
    TLA: "TLA",
    TOML: "TOML",
    TSQL: "TSQL",
    TSV: "TSV",
    TSX: "TSX",
    Turing: "Turing",
    Turtle: "Turtle",
    Twig: "Twig",
    TXL: "TXL",
    "Type Language": "Type Language",
    "Unified Parallel C": "Unified Parallel C",
    "Unity3D Asset": "Unity3D Asset",
    "Unix Assembly": "Unix Assembly",
    Uno: "Uno",
    UnrealScript: "UnrealScript",
    UrWeb: "UrWeb",
    V: "V",
    Vala: "Vala",
    "Valve Data Format": "Valve Data Format",
    VBA: "VBA",
    VBScript: "VBScript",
    VCL: "VCL",
    Verilog: "Verilog",
    VHDL: "VHDL",
    "Vim Help File": "Vim Help File",
    "Vim Script": "Vim Script",
    "Vim Snippet": "Vim Snippet",
    "Visual Basic .NET": "Visual Basic .NET",
    Volt: "Volt",
    Vue: "Vue",
    Vyper: "Vyper",
    "Wavefront Material": "Wavefront Material",
    "Wavefront Object": "Wavefront Object",
    wdl: "wdl",
    "Web Ontology Language": "Web Ontology Language",
    WebAssembly: "WebAssembly",
    WebIDL: "WebIDL",
    WebVTT: "WebVTT",
    "Wget Config": "Wget Config",
    Whiley: "Whiley",
    Wikitext: "Wikitext",
    "Win32 Message File": "Win32 Message File",
    "Windows Registry Entries": "Windows Registry Entries",
    wisp: "wisp",
    "Witcher Script": "Witcher Script",
    Wollok: "Wollok",
    "World of Warcraft Addon Data": "World of Warcraft Addon Data",
    "X BitMap": "X BitMap",
    "X Font Directory Index": "X Font Directory Index",
    "X PixMap": "X PixMap",
    X10: "X10",
    xBase: "xBase",
    XC: "XC",
    XCompose: "XCompose",
    XML: "XML",
    "XML Property List": "XML Property List",
    Xojo: "Xojo",
    Xonsh: "Xonsh",
    XPages: "XPages",
    XProc: "XProc",
    XQuery: "XQuery",
    XS: "XS",
    XSLT: "XSLT",
    Xtend: "Xtend",
    Yacc: "Yacc",
    YAML: "YAML",
    YANG: "YANG",
    YARA: "YARA",
    YASnippet: "YASnippet",
    Yul: "Yul",
    ZAP: "ZAP",
    Zeek: "Zeek",
    ZenScript: "ZenScript",
    Zephir: "Zephir",
    Zig: "Zig",
    ZIL: "ZIL",
    Zimpl: "Zimpl",
  },
};

export default programmingLanguages;

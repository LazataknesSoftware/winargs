let dict = {};

function set(flag, description, required) {
    dict[flag] = [ description, required ];
}
helpWhenRunVar = false;
function helpWhenRun(tof) {
	helpWhenRunVar = tof;
};
let argsd;
function parse() {
	if (helpWhenRunVar && process.argv.slice(2).length === 0) {
		console.log("usage: " + process.argv.slice(0, 2).map((exepath)=>'"'+exepath+'"').join(" ") + " arguments...\n");
	    console.log("Required: \n");
	    let raif = Object.entries(dict).filter(reqa => reqa[1][1] === true);
	    for (let j = 0; j < raif.length; ++j) {
	        console.log(raif[j][0] + " - " + raif[j][1][0]);
	    }
	    console.log("\nOptional: \n");
	    let oaif = Object.entries(dict).filter(reqa => reqa[1][1] === false);
	    for (let j = 0; j < oaif.length; ++j) {
	        console.log(oaif[j][0] + " - " + oaif[j][1][0]);
	    }
	    console.log("/? - This help and exit.")
	    process.exit(0);
	}
    let args = process.argv.slice(2);
    let rargs = [];
    let rargso = Object.entries(dict).filter(ar => ar[1][1] === true);
    for (let b = 0; b < rargso.length; ++b) {
        rargs.push(rargso[b][0]);
    }
    rargss = rargs.map((ele)=>ele.toLowerCase()).sort().join("");
    argsd = {};
    let userargs = [];
    args.forEach(arg => {
        g = arg.split(":");
        userargs.push(g[0]);
        if (g.length === 2) {
            argsd[g[0].replace(/\//, "")] = g[1];
        } else if (g[0] === "/?") {
            console.log("usage: " + process.argv.slice(0, 2).map((exepath)=>'"'+exepath+'"').join(" ") + " arguments...\n");
            console.log("Required: \n");
            let raif = Object.entries(dict).filter(reqa => reqa[1][1] === true);
            for (let j = 0; j < raif.length; ++j) {
                console.log(raif[j][0] + " - " + raif[j][1][0]);
            }
            console.log("\nOptional: \n");
            let oaif = Object.entries(dict).filter(reqa => reqa[1][1] === false);
            for (let j = 0; j < oaif.length; ++j) {
                console.log(oaif[j][0] + " - " + oaif[j][1][0]);
            }
            console.log("/? - This help and exit.")
            process.exit(0);
        } else if (g.length === 1) {
            argsd[g[0].replace(/\//, "")] = true;
        }
    });
    rargs = rargs.map((fds)=>fds.toLowerCase()).sort();
    userargs = userargs.map((fdsu)=>fdsu.toLowerCase()).sort();
    if ((userargs.map(elen=>elen.toLowerCase()).sort().join("")).includes(rargss)) {
        return argsd;
    } else {
        console.log("Following arguments required: " + rargs.filter(reqs => !userargs.includes(reqs)) + '\n\nTry ' + process.argv.slice(0, 2).map((exepath)=>'"'+exepath+'"').join(" ") + ' /? to get help.');
        process.exit(1);
    }
}
function get(key) {
	try {
		return Object.entries(argsd).filter((ke)=>new RegExp(key,"i").exec(ke[0]))[0][1]
	} catch(KeyError) {
		return false;
	}
}
exports.parse = parse;
exports.set = set;
exports.get = get;
exports.helpWhenRun = helpWhenRun;
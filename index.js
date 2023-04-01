// code your solution here

function saturdayFun(activity = `roller-skate`){

    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity2 = `go to the office`){
    return `This Monday, I will ${activity2}.`
}

const wrapAdjective = function(flair = `*`){
    return function(adjective = `special`){
        return `You are ${flair}${adjective}${flair}!`
    }
}
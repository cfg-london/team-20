{"filter":false,"title":"Player.js","tooltip":"/models/Player.js","undoManager":{"mark":77,"position":77,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":0},"action":"insert","lines":["'use strict';","const objection = require('objection');","const Model = objection.Model;","","module.exports = class Meetings extends Model {","    static get tableName() {","        return 'meetings';","    }","    ","    static get relationMappings() {","        return {","            agenda: {","                relation: Model.BelongsToOneRelation,","                modelClass: require('./Agenda'),","                join: {","                    from: 'meetings.id',","                    to: 'agenda.meetingId'","                }","            }, userActivity: {","                relation: Model.HasManyRelation,","                modelClass: require('./UserActivity'),","                join: {","                    from: 'useractivity.meetingId',","                    to: 'meetings.id'","                }","            }","        };","    }","};",""],"id":1}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":24},"action":"remove","lines":["meetings"],"id":2},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["p"]}],[{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["l"],"id":3}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["a"],"id":4}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["y"],"id":5}],[{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["e"],"id":6}],[{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["r"],"id":7}],[{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["s"],"id":8}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":31},"action":"remove","lines":["Meetings"],"id":9}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["P"],"id":10}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["l"],"id":11}],[{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["a"],"id":12}],[{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["y"],"id":13}],[{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["e"],"id":14}],[{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["r"],"id":15}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["s"],"id":16}],[{"start":{"row":11,"column":12},"end":{"row":11,"column":18},"action":"remove","lines":["agenda"],"id":17},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["a"],"id":18}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":[","],"id":19}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["s"],"id":20},{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"remove","lines":["e"],"id":21}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"remove","lines":["s"],"id":22}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"remove","lines":[","],"id":23}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["m"],"id":24}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["e"],"id":25}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["s"],"id":26}],[{"start":{"row":18,"column":13},"end":{"row":26,"column":10},"action":"remove","lines":[", userActivity: {","                relation: Model.HasManyRelation,","                modelClass: require('./UserActivity'),","                join: {","                    from: 'useractivity.meetingId',","                    to: 'meetings.id'","                }","            }","        };"],"id":27}],[{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":[";"],"id":28}],[{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"remove","lines":[";"],"id":29}],[{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["}"],"id":30}],[{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"remove","lines":["}"],"id":31}],[{"start":{"row":18,"column":13},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":19,"column":0},"end":{"row":19,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"insert","lines":["}"],"id":33},{"start":{"row":19,"column":0},"end":{"row":19,"column":12},"action":"remove","lines":["            "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":[";"],"id":34}],[{"start":{"row":13,"column":39},"end":{"row":13,"column":45},"action":"remove","lines":["Agenda"],"id":35},{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["G"]}],[{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":["a"],"id":36}],[{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["m"],"id":37}],[{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":["e"],"id":38}],[{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"insert","lines":["s"],"id":39}],[{"start":{"row":12,"column":32},"end":{"row":12,"column":52},"action":"remove","lines":["BelongsToOneRelation"],"id":40},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["H"]}],[{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"insert","lines":["a"],"id":41}],[{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"insert","lines":["s"],"id":42}],[{"start":{"row":12,"column":35},"end":{"row":12,"column":36},"action":"insert","lines":["M"],"id":43}],[{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"insert","lines":["a"],"id":44}],[{"start":{"row":12,"column":37},"end":{"row":12,"column":38},"action":"insert","lines":["n"],"id":45}],[{"start":{"row":12,"column":38},"end":{"row":12,"column":39},"action":"insert","lines":["y"],"id":46}],[{"start":{"row":12,"column":39},"end":{"row":12,"column":40},"action":"insert","lines":["R"],"id":47}],[{"start":{"row":12,"column":40},"end":{"row":12,"column":41},"action":"insert","lines":["e"],"id":48}],[{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"insert","lines":["l"],"id":49}],[{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"insert","lines":["a"],"id":50}],[{"start":{"row":12,"column":43},"end":{"row":12,"column":44},"action":"insert","lines":["t"],"id":51}],[{"start":{"row":12,"column":44},"end":{"row":12,"column":45},"action":"insert","lines":["i"],"id":52}],[{"start":{"row":12,"column":45},"end":{"row":12,"column":46},"action":"insert","lines":["o"],"id":53}],[{"start":{"row":12,"column":46},"end":{"row":12,"column":47},"action":"insert","lines":["n"],"id":54}],[{"start":{"row":15,"column":27},"end":{"row":15,"column":35},"action":"remove","lines":["meetings"],"id":55},{"start":{"row":15,"column":27},"end":{"row":15,"column":28},"action":"insert","lines":["g"]}],[{"start":{"row":15,"column":28},"end":{"row":15,"column":29},"action":"insert","lines":["a"],"id":56}],[{"start":{"row":15,"column":29},"end":{"row":15,"column":30},"action":"insert","lines":["m"],"id":57}],[{"start":{"row":15,"column":30},"end":{"row":15,"column":31},"action":"insert","lines":["e"],"id":58}],[{"start":{"row":15,"column":31},"end":{"row":15,"column":32},"action":"insert","lines":["s"],"id":59}],[{"start":{"row":16,"column":25},"end":{"row":16,"column":31},"action":"remove","lines":["agenda"],"id":60}],[{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"insert","lines":["g"],"id":61}],[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"insert","lines":["a"],"id":62}],[{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":["m"],"id":63}],[{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"remove","lines":["m"],"id":64}],[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"remove","lines":["a"],"id":65}],[{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"remove","lines":["g"],"id":66}],[{"start":{"row":15,"column":33},"end":{"row":15,"column":34},"action":"remove","lines":["i"],"id":67}],[{"start":{"row":15,"column":33},"end":{"row":15,"column":34},"action":"remove","lines":["d"],"id":68}],[{"start":{"row":15,"column":33},"end":{"row":15,"column":34},"action":"insert","lines":["p"],"id":69}],[{"start":{"row":15,"column":34},"end":{"row":15,"column":35},"action":"insert","lines":["l"],"id":70}],[{"start":{"row":15,"column":35},"end":{"row":15,"column":36},"action":"insert","lines":["a"],"id":71}],[{"start":{"row":15,"column":36},"end":{"row":15,"column":37},"action":"insert","lines":["u"],"id":72}],[{"start":{"row":15,"column":37},"end":{"row":15,"column":38},"action":"insert","lines":["e"],"id":73}],[{"start":{"row":15,"column":37},"end":{"row":15,"column":38},"action":"remove","lines":["e"],"id":74}],[{"start":{"row":15,"column":36},"end":{"row":15,"column":37},"action":"remove","lines":["u"],"id":75}],[{"start":{"row":15,"column":36},"end":{"row":15,"column":37},"action":"insert","lines":["y"],"id":76}],[{"start":{"row":15,"column":37},"end":{"row":15,"column":38},"action":"insert","lines":["e"],"id":77}],[{"start":{"row":15,"column":38},"end":{"row":15,"column":39},"action":"insert","lines":["r"],"id":78}]]},"ace":{"folds":[],"scrolltop":38,"scrollleft":0,"selection":{"start":{"row":12,"column":48},"end":{"row":12,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1493417212428,"hash":"6fb26a0fa684d66e70ab27f0a9444e0cb311973a"}
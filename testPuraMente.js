var moment = require('moment');

getRacha = () => {
    let fecha1 = '';
    let fecha2 = '';
    let racha = 0;
    let rachaMax = 0;
    data.forEach(element => {
        if (element.isSessionCompleted) {
            if (fecha1 === '') {
                fecha1 = moment(element.dateSession);
            } else {
                fecha2 = moment(element.dateSession);
                let dif = fecha2.diff(fecha1, 'days');
                //Se dejo en 1 o menos porque puede que la diferencia no complete las 24 horas y saldra 0 en la diferencia
                if (dif <= 1) {
                    if (fecha1.format("DD-MM-YYYY") !== fecha2.format("DD-MM-YYYY")) {
                        racha++;
                    }
                } else {
                    if (racha >= rachaMax) {
                        console.log(`Racha ${racha}`)
                        rachaMax = racha;
                        racha = 0;
                    }
                }
                fecha1 = moment(element.dateSession);
            }
        }
    });
    console.log(`La racha maxima fue de ${rachaMax} dias`)
}

getTime = () => {
    let fecha = moment("1995-12-25") // use una fecha estatica para que no tomara la hora actual y afectar el calculo
    let fechaA = moment("1995-12-25")
    sumaH = 0;
    sumaM = 0;
    sumaS = 0;
    data.forEach(element => {
        let values = element.reproductionTime.split(':')
        // El if es porque algunas horas tenian 00:00:00 y otras 00:00 por eso la validacion
        if (values.length === 3) {
            // Guardo la suma de los tiempos en cada variable
            sumaH = parseInt(sumaH) + parseInt(values[0]);
            sumaM = parseInt(sumaM) + parseInt(values[1]);
            sumaS = parseInt(sumaS) + parseInt(values[2]);
        } else {
            sumaM = parseInt(sumaM) + parseInt(values[0]);
            sumaS = parseInt(sumaS) + parseInt(values[1]);
        }
    });
    // a fecha base agrego horas minutos y segundos
    fecha.hours(sumaH);
    fecha.minutes(sumaM);
    fecha.seconds(sumaS);
    //obtengo diferencia entre fecha base y la que esta con la suma de los tiempos
    let duration = moment.duration(fecha.diff(fechaA));
    let dias = duration.days();
    let horas = duration.hours();
    let minutos = duration.minutes();
    let segundos = duration.seconds();
    console.log(`Tiempo de sesiones ${(dias * 24 + horas)}h ${minutos}m ${segundos}s`)
}

const data = [
    {
        "dateSession": "2018-12-17T11:07:32-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:00",
    },
    {
        "dateSession": "2018-12-17T11:09:58-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:02:13",
    },
    {
        "dateSession": "2018-12-17T11:22:08-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:06",
    },
    {
        "dateSession": "2018-12-17T11:25:00-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:02:16",
    },
    {
        "dateSession": "2018-12-17T11:26:10-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:07",
    },
    {
        "dateSession": "2018-12-17T13:28:53-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:21:15",
    },
    {
        "dateSession": "2018-12-19T10:39:23-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:47:07",
    },
    {
        "dateSession": "2018-12-20T08:23:36-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:30:17",
    },
    {
        "dateSession": "2018-12-20T17:07:17-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:48",
    },
    {
        "dateSession": "2018-12-20T17:51:25-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:14",
    },
    {
        "dateSession": "2018-12-21T22:50:06-03:00",
        "idSession": "hhh73ugal",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "10:00",
    },
    {
        "dateSession": "2018-12-22T10:01:18-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:19",
    },
    {
        "dateSession": "2018-12-23T14:05:01-03:00",
        "idSession": "hhh73ugal",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "10:00",
    },
    {
        "dateSession": "2018-12-24T12:15:00-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:56:01",
    },
    {
        "dateSession": "2018-12-29T10:09:30-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:30:25",
    },
    {
        "dateSession": "2019-01-01T16:43:57-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:04",
    },
    {
        "dateSession": "2019-01-02T08:34:39-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:30:45",
    },
    {
        "dateSession": "2019-01-05T15:33:44-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:03",
    },
    {
        "dateSession": "2019-01-05T18:38:25-03:00",
        "idSession": "n8pcba6r3",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01",
    },
    {
        "dateSession": "2019-01-05T18:53:37-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:30",
    },
    {
        "dateSession": "2019-01-05T18:55:50-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:30",
    },
    {
        "dateSession": "2019-01-05T19:10:25-03:00",
        "idSession": "fz8nwzo53",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "10:00",
    },
    {
        "dateSession": "2019-01-05T19:18:42-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:30",
    },
    {
        "dateSession": "2019-01-06T15:15:41-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:04",
    },
    {
        "dateSession": "2019-01-06T23:47:02-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:30:37",
    },
    {
        "dateSession": "2019-01-07T10:08:48-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:31:51",
    },
    {
        "dateSession": "2019-01-08T08:19:46-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:46:21",
    },
    {
        "dateSession": "2019-01-09T09:57:05-03:00",
        "idSession": "b2jxwrjdp",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "09:50",
    },
    {
        "dateSession": "2019-01-09T21:29:20-03:00",
        "idSession": "i281i0m81",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "12:40",
    },
    {
        "dateSession": "2019-01-11T00:11:00-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:30",
    },
    {
        "dateSession": "2019-01-12T21:41:52-03:00",
        "idSession": "yfz9pjz8y",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "13:05",
    },
    {
        "dateSession": "2019-01-12T23:01:08-03:00",
        "idSession": "bucvflcdg",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "13:05",
    },
    {
        "dateSession": "2019-01-13T12:32:52-03:00",
        "idSession": "tdncvy8cy",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "13:05",
    },
    {
        "dateSession": "2019-01-13T12:51:28-03:00",
        "idSession": "67s29mz1q",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "15:05",
    },
    {
        "dateSession": "2019-01-13T13:11:46-03:00",
        "idSession": "fetk61wms",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "11:30",
    },
    {
        "dateSession": "2019-01-14T10:20:13-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-01-21T20:40:26-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:02:08",
    },
    {
        "dateSession": "2019-01-22T08:33:07-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:17",
    },
    {
        "dateSession": "2019-01-23T08:17:06-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:38:37",
    },
    {
        "dateSession": "2019-01-25T08:30:37-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:45:05",
    },
    {
        "dateSession": "2019-01-26T09:16:37-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:41:21",
    },
    {
        "dateSession": "2019-01-29T00:05:37-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:18",
    },
    {
        "dateSession": "2019-01-29T07:57:42-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:30:28",
    },
    {
        "dateSession": "2019-01-29T21:31:02-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:14",
    },
    {
        "dateSession": "2019-02-01T08:11:56-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:30:08",
    },
    {
        "dateSession": "2019-02-02T18:35:11-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:12:31",
    },
    {
        "dateSession": "2019-02-04T07:03:40-08:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:19:13",
    },
    {
        "dateSession": "2019-02-06T06:13:40-08:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:31:04",
    },
    {
        "dateSession": "2019-02-13T09:34:22-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:20",
    },
    {
        "dateSession": "2019-02-14T09:53:35-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:14",
    },
    {
        "dateSession": "2019-02-16T11:04:14-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:17",
    },
    {
        "dateSession": "2019-02-17T09:29:12-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:30:32",
    },
    {
        "dateSession": "2019-02-17T23:46:27-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:16",
    },
    {
        "dateSession": "2019-02-18T08:56:06-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:15:15",
    },
    {
        "SessionFeedback": {
            "comments": "",
            "rating": 5,
        },
        "dateSession": "2019-02-19T23:37:08-03:00",
        "id": "-LZ7ktB4pmVfVlg6JJlc",
        "idSession": "4qszq7mid",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "02:38",
    },
    {
        "SessionFeedback": {
            "comments": "",
            "rating": 5,
        },
        "dateSession": "2019-02-19T23:39:12-03:00",
        "id": "-LZ7lMX-Hnk6qLOxmmG8",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "SessionFeedback": {
            "comments": "",
            "rating": 0,
        },
        "dateSession": "2019-02-19T23:42:06-03:00",
        "id": "-LZ7m1-a79-317FbVl_a",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-02-20T00:11:40-03:00",
        "id": "-LZ7sn0K76FOiK_HUCOH",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:12:26",
    },
    {
        "dateSession": "2019-02-22T22:19:47-03:00",
        "id": "-LZMvxSgl4GQVGxSsVQs",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:12:32",
    },
    {
        "dateSession": "2019-02-23T23:56:18-03:00",
        "id": "-LZSQcySc0cnttw6gSSB",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:22:36",
    },
    {
        "dateSession": "2019-02-24T09:33:50-03:00",
        "id": "-LZUUop1thpH9nzV_eqj",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:32:36",
    },
    {
        "dateSession": "2019-02-25T20:34:16-03:00",
        "id": "-LZb-Zrl6G21XEJU2Nh0",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:39:29",
    },
    {
        "dateSession": "2019-02-27T07:53:28-03:00",
        "id": "-LZi_c66nz2ZvqZQDLQc",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:54:03",
    },
    {
        "dateSession": "2019-02-28T00:23:53-03:00",
        "id": "-LZm7J5p0TVhOuYOVciP",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:18:39",
    },
    {
        "dateSession": "2019-02-28T20:58:30-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-02-28T21:30:23-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-02-28T21:39:23-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-02-28T21:44:25-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-02-28T21:47:10-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-02-28T21:50:39-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-02-28T21:58:50-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-01T08:20:46-03:00",
        "id": "-LZsz2JzDBuM_brq9vQQ",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:15:13",
    },
    {
        "dateSession": "2019-03-02T09:19:23-03:00",
        "id": "-LZyL2uugZ5tr43BDH8S",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:14",
    },
    {
        "dateSession": "2019-03-02T22:37:12-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-02T22:39:06-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-02T22:42:55-03:00",
        "feedback": {
            "comments": "",
            "rating": 3,
        },
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-02T22:45:36-03:00",
        "feedback": {
            "comments": "",
            "rating": 2,
        },
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-02T23:21:44-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-02T23:26:02-03:00",
        "feedback": {
            "comments": "",
            "rating": 5,
        },
        "idSession": "4qszq7mid",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "02:38",
    },
    {
        "dateSession": "2019-03-02T23:29:34-03:00",
        "idSession": "4qszq7mid",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "02:38",
    },
    {
        "dateSession": "2019-03-03T09:07:03-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:30:56",
    },
    {
        "dateSession": "2019-03-04T10:36:03-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:25",
    },
    {
        "dateSession": "2019-03-04T10:57:37-03:00",
        "feedback": {
            "comments": "",
            "rating": 5,
        },
        "idSession": "45ubod1rj",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "11:35",
    },
    {
        "dateSession": "2019-03-04T11:11:17-03:00",
        "idSession": "v4mhqg3m7",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "10:35",
    },
    {
        "dateSession": "2019-03-04T22:18:59-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-05T10:21:36-03:00",
        "feedback": {
            "comments": "",
            "rating": 5,
        },
        "idSession": "n37hu8enj",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "13:42",
    },
    {
        "dateSession": "2019-03-05T10:40:09-03:00",
        "idSession": "nlb0ni6md",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "10:03",
    },
    {
        "dateSession": "2019-03-05T10:42:45-03:00",
        "idSession": "45ubod1rj",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:13",
    },
    {
        "dateSession": "2019-03-05T10:44:18-03:00",
        "idSession": "jhob6din8",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:02",
    },
    {
        "dateSession": "2019-03-05T10:46:00-03:00",
        "idSession": "rbbdqbx1z",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:15",
    },
    {
        "dateSession": "2019-03-05T10:48:50-03:00",
        "idSession": "vxecb6mtn",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:19",
    },
    {
        "dateSession": "2019-03-05T10:50:36-03:00",
        "idSession": "vcwy1wgfl",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:05",
    },
    {
        "dateSession": "2019-03-05T10:52:10-03:00",
        "idSession": "9u48vo70b",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:10",
    },
    {
        "dateSession": "2019-03-05T11:03:34-03:00",
        "idSession": "ba6bu8ios",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "04:01",
    },
    {
        "dateSession": "2019-03-06T17:55:50-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:10:22",
    },
    {
        "dateSession": "2019-03-07T22:03:03-03:00",
        "idSession": "4rg7r9t1t",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "12:59",
    },
    {
        "dateSession": "2019-03-07T22:12:51-03:00",
        "idSession": "9iagpwxog",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "06:33",
    },
    {
        "dateSession": "2019-03-07T22:31:01-03:00",
        "idSession": "fxv2r75ce",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "09:16",
    },
    {
        "dateSession": "2019-03-08T11:22:52-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:02:01",
    },
    {
        "dateSession": "2019-03-08T11:30:54-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-08T11:32:49-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:05",
    },
    {
        "dateSession": "2019-03-08T11:32:50-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:05",
    },
    {
        "dateSession": "2019-03-08T11:34:21-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:04",
    },
    {
        "dateSession": "2019-03-08T11:36:34-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:33",
    },
    {
        "dateSession": "2019-03-08T11:38:01-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:04",
    },
    {
        "dateSession": "2019-03-08T11:40:05-03:00",
        "feedback": {
            "comments": "",
            "rating": 5,
        },
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-08T11:43:13-03:00",
        "feedback": {
            "comments": "",
            "rating": 5,
        },
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-08T11:46:20-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:02:16",
    },
    {
        "dateSession": "2019-03-08T14:20:35-03:00",
        "idSession": "45ubod1rj",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:13",
    },
    {
        "dateSession": "2019-03-08T18:41:57-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:03",
    },
    {
        "dateSession": "2019-03-09T18:45:09-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:02",
    },
    {
        "dateSession": "2019-03-09T18:53:36-03:00",
        "idSession": "04au5oogj",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "09:56",
    },
    {
        "dateSession": "2019-03-09T19:08:45-03:00",
        "idSession": "swpv45loi",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "10:49",
    },
    {
        "dateSession": "2019-03-09T19:24:49-03:00",
        "idSession": "0jn731d6y",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "08:30",
    },
    {
        "dateSession": "2019-03-09T19:50:24-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-09T19:52:09-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:06",
    },
    {
        "dateSession": "2019-03-09T19:52:11-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:06",
    },
    {
        "dateSession": "2019-03-09T19:52:11-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:06",
    },
    {
        "dateSession": "2019-03-10T23:45:22-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:21:23",
    },
    {
        "dateSession": "2019-03-14T20:24:56-03:00",
        "idSession": "lmtw2h37h",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "01:36",
    },
    {
        "dateSession": "2019-03-16T08:47:39-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:19",
    },
    {
        "dateSession": "2019-03-16T08:47:39-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:19",
    },
    {
        "dateSession": "2019-03-16T08:47:42-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:19",
    },
    {
        "dateSession": "2019-03-16T08:47:42-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:19",
    },
    {
        "dateSession": "2019-03-17T22:54:45-03:00",
        "idSession": "bok094417",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "19:05",
    },
    {
        "dateSession": "2019-03-18T09:42:19-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:31:33",
    },
    {
        "dateSession": "2019-03-18T09:42:22-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:31:33",
    },
    {
        "dateSession": "2019-03-19T20:18:20-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:03",
    },
    {
        "dateSession": "2019-03-19T21:24:55-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:31",
    },
    {
        "dateSession": "2019-03-19T21:24:56-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:31",
    },
    {
        "dateSession": "2019-03-19T21:25:08-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:31",
    },
    {
        "dateSession": "2019-03-19T21:25:50-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:00:02",
    },
    {
        "dateSession": "2019-03-24T08:43:09-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:47:36",
    },
    {
        "dateSession": "2019-03-27T23:05:22-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:32",
    },
    {
        "dateSession": "2019-03-28T09:37:13-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:16",
    },
    {
        "dateSession": "2019-03-28T09:37:17-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:20:16",
    },
    {
        "dateSession": "2019-03-28T18:25:28-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:10:13",
    },
    {
        "dateSession": "2019-03-29T23:01:56-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:01:06",
    },
    {
        "dateSession": "2019-03-30T09:58:00-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:22:53",
    },
    {
        "dateSession": "2019-04-01T09:05:29-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:17:53",
    },
    {
        "dateSession": "2019-04-08T09:33:05-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:15:15",
    },
    {
        "dateSession": "2019-04-09T09:31:08-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:10:09",
    },
    {
        "dateSession": "2019-04-10T09:33:02-03:00",
        "idSession": "n0fffccc003",
        "idUser": "-LLPtkBoQwVRpsenFA-k",
        "isSessionCompleted": true,
        "reproductionTime": "00:21:16",
    },
]

getRacha();

getTime();
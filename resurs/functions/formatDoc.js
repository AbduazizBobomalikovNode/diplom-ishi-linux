const { number } = require("joi");

var temp = {
    uz: {
        doc1: {
            id: "",
            name: "",
            date1: "",
            date1_1: "",
            date1_2: "",
            line1: "",//57
            line2: "",//65
            line3: "",//55
            line4: "",//64
            line5: "",//74
            line6: "",//34
            line7: "",//72
            line8: "",//54
            line9: "",//62
            line10: "",//74
            line11: "",//52
            date2: "",
            date2_1: "",
            date2_2: "",
            line12: "",//15
            line13: "",//15
        },
        doc2: {
            id: "",
            name: "",
            line1: "",
            line2: "",
            line3: "",
            line4: "",
            line5: "",
            line6: "",
            line7: "",
            line8: "",
            line9: "",
            line10: "",
            line11: "",
            line12: "",
            line13: "",
            line14: "",
            line15: "",
            line16_name: "",
            line16: "",
            line16_1: "",
            line16_2: "",
            line17_name: "",
            line17: "",
            line17_1: "",
            line17_2: "",
            line18_name: "",
            line18: "",
            line18_1: "",
            line18_2: "",
            line19_name: "",
            line19: "",
            line19_1: "",
            line19_2: "",
            line20_name: "",
            line20: "",
            line20_1: "",
            line20_2: "",
            line21_name: "",
            line21: "",
            line21_1: "",
            line21_2: "",
            line22_name: "",
            line22: "",
            line22_1: "",
            line22_2: "",
            line23_name: "",
            line23: "",
            line23_1: "",
            line23_2: "",
            jami: "",
            jami_1: "",
            jami_2: "",
            line24: "",
            line25: "",
            line26: "",
            line27: "",
            line28: "",
            line29: "",
        },
        doc3: {
            id: "",
            name: "",
            line1: "",//42
            line2: "",//75
            line3: "",//28
            line4: "",//74
            line5: "",//70
            line6: "",//76
            line7: "",//56
            line8: "",//20
            line9: "",//15
            date1: "",
            date1_1: "",
            date1_2: "",
            date2: "",
            date2_1: "",
            date2_2: "",
            son: "",
            date3: "",
            date3_1: "",
            date3_2: "",
        },
        doc4: {
            id: "",
            line1: "",//62
            line2: "",//65
            line3: "",//55
            line4: "",//55
            line5: "",//74
            line6: "",//35
            line7: "",//75
            line8: "",//55
            line9: "",//62
            line10: "",//76
            line11: "",//53
            line12: "",//15
            line13: "",//15
            date1: "",
            date1_2: "",
            date1_3: "",
        },
        doc5: {
            id: " ",
            date1: "",
            date1_1: "",
            date1_2: "",
            line1: "",//58
            line2: "",//76
            line3: "",//40
            date1: "",
            date1_1: "",
            date1_2: "",
            son: "",
            line4: "",//66
            line5: "",//74
            line6: "",//15
            line7: "",//15
        },
        doc6: {
            id: "",
            name: "",
            line1: "",
            line1_1: "",
            line1_2: "",
            line1_3: "",
            line1_4: "",
            line2: "",
            line2_1: "",
            line2_2: "",
            line2_3: "",
            line2_4: "",
            line3: "",//84
            line1: "",
            line1_1: "",
            line1_2: "",
            line1_3: "",
        }
    },
    ru: {
        doc1: {
            id: "",
            name: "",
            date1: "",
            date1_1: "",
            date1_2: "",
            line1: "",//57
            line2: "",//65
            line3: "",//55
            line4: "",//64
            line5: "",//74
            line6: "",//34
            line7: "",//72
            line8: "",//54
            line9: "",//62
            line10: "",//74
            line11: "",//52
            date2: "",
            date2_1: "",
            date2_2: "",
            line12: "",//15
            line13: "",//15
        },
        doc2: {
            id: "",
            name: "",
            line1: "",
            line2: "",
            line3: "",
            line4: "",
            line5: "",
            line6: "",
            line7: "",
            line8: "",
            line9: "",
            line10: "",
            line11: "",
            line12: "",
            line13: "",
            line14: "",
            line15: "",
            line16_name: "",
            line16: "",
            line16_1: "",
            line16_2: "",
            line17_name: "",
            line17: "",
            line17_1: "",
            line17_2: "",
            line18_name: "",
            line18: "",
            line18_1: "",
            line18_2: "",
            line19_name: "",
            line19: "",
            line19_1: "",
            line19_2: "",
            line20_name: "",
            line20: "",
            line20_1: "",
            line20_2: "",
            line21_name: "",
            line21: "",
            line21_1: "",
            line21_2: "",
            line22_name: "",
            line22: "",
            line22_1: "",
            line22_2: "",
            line23_name: "",
            line23: "",
            line23_1: "",
            line23_2: "",
            jami: "",
            jami_1: "",
            jami_2: "",
            line24: "",
            line25: "",
            line26: "",
            line27: "",
            line28: "",
            line29: "",
        },
        doc3: {
            id: "",
            name: "",
            line1: "",//42
            line2: "",//75
            line3: "",//28
            line4: "",//74
            line5: "",//70
            line6: "",//76
            line7: "",//56
            line8: "",//20
            line9: "",//15
            date1: "",
            date1_1: "",
            date1_2: "",
            date2: "",
            date2_1: "",
            date2_2: "",
            son: "",
            date3: "",
            date3_1: "",
            date3_2: "",
        },
        doc4: {
            id: "",
            line1: "",//62
            line2: "",//65
            line3: "",//55
            line4: "",//55
            line5: "",//74
            line6: "",//35
            line7: "",//75
            line8: "",//55
            line9: "",//62
            line10: "",//76
            line11: "",//53
            line12: "",//15
            line13: "",//15
            date1: "",
            date1_2: "",
            date1_3: "",
        },
        doc5: {
            id: " ",
            date1: "",
            date1_1: "",
            date1_2: "",
            line1: "",//58
            line2: "",//76
            line3: "",//40
            date1: "",
            date1_1: "",
            date1_2: "",
            son: "",
            line4: "",//66
            line5: "",//74
            line6: "",//15
            line7: "",//15
        },
        doc6: {
            id: "",
            name: "",
            line1: "",
            line1_1: "",
            line1_2: "",
            line1_3: "",
            line1_4: "",
            line2: "",
            line2_1: "",
            line2_2: "",
            line2_3: "",
            line2_4: "",
            line3: "",//84
            line1: "",
            line1_1: "",
            line1_2: "",
            line1_3: "",
        }
    }
}

function getMonth(month, lang) {
    let months = {
        ru: [
            "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ],
        uz: [
            "Январь", "Февраль", "Март", "Апрель", "Май", "июнь", "Июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",
        ]
    };
    console.log(month, lang)
    return months[lang][month];
}

function replaser(str, num) {
    let char_num = num - str.length;
    if (char_num > 0) {
        char_num = char_num % 2 == 0 ? char_num : char_num - 1;
        let sult = '_'.repeat(char_num / 2);
        return [[str, sult], ''];
    }
    return [[str.slice(0, num), ''], str.slice(num, str.length)];
}
function formatDate(date, lang) {
    return [date.slice(2, 4), date.slice(8, 10), getMonth(Number(date.slice(5, 7))-1, lang)]
}


function formatDoc(data) {
    console.log(data);
    let template = temp[data.lang][`doc${data.doc}`];
    switch (parseInt(data.doc)) {
        case 1:
            let dates = [formatDate(data.date1, data.lang), formatDate(data.date2, data.lang)];
            // console.log("dates :",dates);
            template.date1 = dates[0][0];
            template.date1_1 = dates[0][1];
            template.date1_2 = dates[0][2];
            template.date2 = dates[1][0];
            template.date2_1 = dates[1][1];
            template.date2_2 = dates[1][2];

            template.name = data.name;
            if (data.lang == 'uz') {
                let line1 = replaser(data.line1, 57)[0];
                template.line1 = line1[0];
                template.line1_end = line1[1];

                let line2 = replaser(data.line2, 65)[0];
                template.line2 = line2[0];
                template.line2_end = line2[1];

                let line3 = replaser(data.line3, 55)[0];
                template.line3 = line3[0];
                template.line3_end = line3[1];

                let line4 = replaser(data.line4, 64)[0];
                template.line4 = line4[0];
                template.line4_end = line4[1];

                let line5 = replaser(data.line5, 74)[0];
                template.line5 = line5[0];
                template.line5_end = line5[1];

                let line6 = replaser(data.line6, 36)[0];
                template.line6 = line6[0];
                template.line6_end = line6[1];

                let line7 = replaser(data.line7, 76)[0];
                template.line7 = line7[0];
                template.line7_end = line7[1];

                let line8 = replaser(replaser(data.line7, 72)[1], 54)[0];
                template.line8 = line8[0];
                template.line8_end = line8[1];

                let line9 = replaser(data.line9, 62)[0];
                template.line9 = line9[0];
                template.line9_end = line9[1];

                let line10 = replaser(data.line10, 78)[0];
                template.line10 = line10[0];
                template.line10_end = line10[1];

                let line11 = replaser(replaser(data.line10, 78)[1], 54)[0];
                template.line11 = line11[0];
                template.line11_end = line11[1];

                let line12 = replaser(data.line12, 15)[0];
                template.line12 = line12[0];
                template.line12_end = line12[1];

                let line13 = replaser(data.line13, 15)[0];
                template.line13 = line3[0];
                template.line13_end = line13[1];
            }
            return template;
        case 2:
            template.name = data.name;
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    switch (key) {
                        case "line17_name":
                            template.line17_name = data['line17'].length > 0 ||
                                data['line17_1'].length > 0 ||
                                data['line17_2'].length > 0 ? line17_name : '';

                            break;
                            case "line18_name":
                                template.line18_name = data['line18'].length > 0 ||
                                data['line18_1'].length > 0 ||
                                data['line18_2'].length > 0 ? line18_name : '';
                                break;
                                case "line19_name":
                                    template.line19_name = data['line19'].length > 0 ||
                                    data['line19_1'].length > 0 ||
                                    data['line19_2'].length > 0 ? line19_name : '';
                            break;
                        case "line20_name":
                            template.line20_name = data['line20'].length > 0 ||
                                data['line20_1'].length > 0 ||
                                data['line20_2'].length > 0 ? line20_name : '';
                                break;
                                case "line21_name":
                                    template.line21_name = data['line21'].length > 0 ||
                                    data['line21_1'].length > 0 ||
                                    data['line21_2'].length > 0 ? line21_name : '';
                                    break;
                                    case "line22_name":
                            template.line22_name = data['line22'].length > 0 ||
                                data['line22_1'].length > 0 ||
                                data['line22_2'].length > 0 ? line22_name : '';
                                break;
                                case "line23_name":
                                    template.line23_name = data['line23'].length > 0 ||
                                    data['line23_1'].length > 0 ||
                                    data['line23_2'].length > 0 ? line23_name : '';
                                    break;
                                    default:
                            template[key] = data[key];
                            break;
                        }
                        // console.log(`template[key] = ${template[key]} ; data[key] = ${data[key]}`);
                    }
                }
            return template;
        case 3:
            let dates2 = [formatDate(data.date1, data.lang), formatDate(data.date2, data.lang), formatDate(data.date3, data.lang)];
            template.date1 = dates2[0][0];
            template.date1_1 = dates2[0][1];
            template.date1_2 = dates2[0][2];

            template.date2 = dates2[1][0];
            template.date2_1 = dates2[1][1];
            template.date2_2 = dates2[1][2];

            template.date3 = dates2[2][0];
            template.date3_1 = dates2[2][1];
            template.date3_2 = dates2[2][2];

            template.name = data.name;
            if (data.lang == 'uz') {
                let line1 = replaser(data.line1, 42)[0];
                template.line1 = line1[0];
                template.line1_end = line1[1];
                
                let line2 = replaser(data.line2, 79)[0];
                template.line2 = line2[0];
                template.line2_end = line2[1];
                
                let line3 = replaser(data.line3, 32)[0];
                template.line3 = line3[0];
                template.line3_end = line3[1];
                
                let line4 = replaser(data.line4, 74)[0];
                template.line4 = line4[0];
                template.line4_end = line4[1];
                
                let line5 = replaser(data.line5, 70)[0];
                template.line5 = line5[0];
                template.line5_end = line5[1];
                
                let line6 = replaser(data.line6, 76)[0];
                template.line6 = line6[0];
                template.line6_end = line6[1];
                
                let line7 = replaser(replaser(data.line6, 76)[1], 56)[0];
                template.line7 = line7[0];
                template.line7_end = line7[1];
                
                let line8 = replaser(data.line8, 20)[0];
                template.line8 = line8[0];
                template.line8_end = line8[1];
                
                let line9 = replaser(data.line9, 15)[0];
                template.line9 = line9[0];
                template.line9_end = line9[1];
            }
            return template;
        case 4:
            let dates3 = [formatDate(data.date1, data.lang)];
            template.date1 = dates3[0][0];
            template.date1_1 = dates3[0][1];
            template.date1_2 = dates3[0][2];

            if (data.lang == 'uz') {
                
                let line1 = replaser(data.line1, 62)[0];
                template.line1 = line1[0];
                template.line1_end = line1[1];

                let line2 = replaser(data.line2, 65)[0];
                template.line2 = line2[0];
                template.line2_end = line2[1];

                let line3 = replaser(data.line3, 55)[0];
                template.line3 = line3[0];
                template.line3_end = line3[1];

                let line4 = replaser(data.line4, 64)[0];
                template.line4 = line4[0];
                template.line4_end = line4[1];

                let line5 = replaser(data.line5, 74)[0];
                template.line5 = line5[0];
                template.line5_end = line5[1];

                let line6 = replaser(data.line6, 35)[0];
                template.line6 = line6[0];
                template.line6_end = line6[1];

                let line7 = replaser(data.line7, 75)[0];
                template.line7 = line7[0];
                template.line7_end = line7[1];

                let line8 = replaser(data.line8, 55)[0];
                template.line8 = line8[0];
                template.line8_end = line8[1];

                let line9 = replaser(data.line9, 62)[0];
                template.line9 = line9[0];
                template.line9_end = line9[1];

                let line10 = replaser(data.line10, 76)[0];
                template.line10 = line10[0];
                template.line10_end = line10[1];

                let line11 = replaser(data.line11, 53)[0];
                template.line11 = line11[0];
                template.line11_end = line11[1];

                let line12 = replaser(data.line12, 15)[0];
                template.line12 = line12[0];
                template.line12_end = line12[1];

                let line13 = replaser(data.line12, 15)[0];
                template.line13 = line13[0];
                template.line13_end = line13[1];
            }
            return template;
        case 5:
            let dates4 = [formatDate(data.date1, data.lang), formatDate(data.date2, data.lang)];
            template.date1 = dates4[0][0];
            template.date1_1 = dates4[0][1];
            template.date1_2 = dates4[0][2];

            template.date2 = dates4[1][0];
            template.date2_1 = dates4[1][1];
            template.date2_2 = dates4[1][2];

            if (data.lang == 'uz') {
                let line1 = replaser(data.line1, 58)[0];
                template.line1 = line1[0];
                template.line1_end = line1[1];

                let line2 = replaser(data.line2, 76)[0];
                template.line2 = line2[0];
                template.line2_end = line2[1];

                let line3 = replaser(data.line3, 40)[0];
                template.line3 = line3[0];
                template.line3_end = line3[1];

                let line4 = replaser(data.line4, 66)[0];
                template.line4 = line4[0]; 
                template.line4_end = line4[1]; 

                let line5 = replaser(data.line5, 74)[0];
                template.line5 = line5[0];
                template.line5_end = line5[1];

                let line6 = replaser(data.line6, 15)[0];
                template.line6 = line6[0];
                template.line6_end = line6[1];

                let line7 = replaser(data.line7, 15)[0];
                template.line7 = line7[0];
                template.line7_end = line7[1];
            }
            return template;
        case 6:
            template.name = data.name;
            if (data.lang == 'uz') {
                template.line1 = data.line1;
                template.line2 = data.line2;
                template.line2_1 = data.line2_1;
                template.line2_2 = data.line2_2;
                template.line2_3 = data.line2_3;
                template.line2_4 = data.line2_4;
                template.line3 = data.line3;
                template.line3_1 = data.line3_1;
                template.line3_2 = data.line3_2;
                template.line3_3 = data.line3_3;
                template.line3_4 = data.line3_4;
                let line4 = replaser(data.line4, 84)[0];
                template.line4 = line4[0];
                template.line4_end = line4[1];
                template.line5 = data.line5;
                template.line5_1 = data.line5_1;
                template.line5_2 = data.line5_2;
                template.line5_3 = data.line5_3;
            }
            return template;
        default: console.log("topilmadi....");
            break;
    }
}
module.exports = formatDoc;
var searchError = require('../../resurs/functions/erors');

function Static(table) {
    this.getStatic = async (id) => {
        const result = await table.findOne({ id: id }, { projection: { _id: 0 } })
            .then(result => {
                return result;
            })
            .catch(err => {
                console.error(`malumotlar topilmadi: ${err}`)
                return false;
            })
        return result;
    };
    this.add = async (data) => {
        let doc =(await table.find({},{ projection: { _id: 0 } }).toArray())[0];
        let respons_data = null;
        if (!doc) {
            const result = await table
                .insertOne({
                    add: data==1?1:0,
                    update: data==2?1:0,
                    delete: data==3?1:0,
                    view: data==4?1:0,
                    doc1: data=="doc1"?1:0,
                    doc2: data=="doc2"?1:0,
                    doc3: data=="doc3"?1:0,
                    doc4: data=="doc4"?1:0,
                    doc5: data=="doc5"?1:0,
                    doc6: data=="doc6"?1:0,
                    doc7: data=="doc7"?1:0,
                })
                .catch((err) => {
                    let error = { error: [] };
                    searchError(err, null, error);
                    return error;
                });
            return 1;
        }
        if (data == 1) {
            doc.add++;
        }
        if (data == 2) {
            doc.update++;
        }
        if (data == 3) {
            doc.delete++;
        }
        if (data == 4) {
            doc.view++;
        }
        if (data == "doc1") {
            doc.doc1++;
            respons_data = doc.doc1;
        }
        if (data == "doc2") {
            doc.doc2++;
            respons_data = doc.doc2;
        }
        if (data == "doc3") {
            doc.doc3++;
            respons_data = doc.doc3;
        }
        if (data == "doc4") {
            doc.doc4++;
            respons_data = doc.doc4;
        }
        if (data == "doc5") {
            doc.doc5++;
            respons_data = doc.doc5;
        }
        if (data == "doc6") {
            doc.doc6++;
            respons_data = doc.doc6;
        }
        if (data == "doc7") {
            doc.doc7++;
            respons_data = doc.doc7;
        }

        this.update(doc.id,doc);
        return respons_data;
    };
    this.update = async (id, data) => {
        const result = await table
            .updateMany({ id: id }, {
                $set: data,
                $currentDate: { lastModified: true }
            }).catch(err => {
                let error = { error: [] };
                searchError(err, null, error);
                return error;
            });
        const history_demo = await this.getStatic(id);
        return history_demo;
    };
    
}

module.exports = Static;

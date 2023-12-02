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
        if (!doc) {
            const result = await table
                .insertOne({
                    add: data==1?1:0,
                    update: data==2?1:0,
                    delete: data==1?1:0,
                    view: data==1?1:0,
                })
                .catch((err) => {
                    let error = { error: [] };
                    searchError(err, null, error);
                    return error;
                });
            return ;
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
        this.update(doc.id,doc);
        return ;
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

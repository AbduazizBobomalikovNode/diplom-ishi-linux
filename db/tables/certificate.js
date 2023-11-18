var searchError = require('../../resurs/functions/erors');

function Certificate(table) {
    this.getCertificateObj = async (obj) => {
        const result = await table.find(obj, {
            projection: { _id: 0 }
        }).toArray();
        return result;
    };
    this.getCertificate = async (id) => {
        const result = await table.findOne({ id: id }, { projection: { _id: 0 } })
            .then(result => {
                return result;
            })
            .catch(err => {
                console.error(`Task topilmadi: ${err}`)
                return false;
            })
        return result;
    };
    this.getCertificateAll = async () => {
        const result = await table.find({}, { projection: { _id: 0 } })
            .sort({ date: -1 }).toArray()
        return result;
    };
    this.addCertificate = async (certificate) => {
        const result = await table
            .insertOne(certificate)
            .catch((err) => {
                let error = { error: [] };
                searchError(err, null, error);
                return error;
            });
        return result;
    };
    this.update = async (id, certificate) => {
        const result = await table
            .updateMany({ id: id }, {
                $set: certificate,
                $currentDate: { lastModified: true }
            }).catch(err => {
                let error = { error: [] };
                searchError(err, null, error);
                return error;
            });
        const history_demo = await this.getCertificate(id);
        return history_demo;
    };
    this.delete = async (id) => {
        const result = await table.deleteOne({ id: id })
        return result;
    }
}

module.exports = Certificate;
/*
getCertificate()
getCertificateAll()
addCertificate()
update()
delete()
*/
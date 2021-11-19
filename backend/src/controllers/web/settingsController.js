class SettingsController {
    static getSetting = (req, res, next) => {
        res.send('Product');
    } 

    static settings = (req, res, next) => {
        res.send('Settings');
    }   
    
    static delete = (req, res, next) => {
        res.send('Delete');
    }   

    static edit = (req, res, next) => {
        res.send('Edit');
    }   

    static update = (req, res, next) => {
        res.send('Update');
    }   
}

module.exports = SettingsController;
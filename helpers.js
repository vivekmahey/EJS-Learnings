module.exports={
    formatDate: function(date){
        return new Date(date).toLocaleDateString(en-IN,{
            date:'numaric',
            month:'short',
            year:'numaric',
        });

    },
        truncate: function(text,length=100){
            return text.langth > length ? text.substring(0,length) + "..." : text ;
        },

        toUpper: function(str){
            return str.toUpperCase();
        }
    
};
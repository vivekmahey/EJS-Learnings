module.exports={
    formatDate: function(date){
        return new Date(date).toLocaleDateString("en-IN",{
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    },
        truncate: function(text,length=100){
            return text.langth > length ? text.substring(0,length) + "..." : text ;
        },

        toUpperCase: function(str){
            return str.toUpperCase();
        }
    
};
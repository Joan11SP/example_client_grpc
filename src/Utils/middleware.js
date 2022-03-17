
const inyection_sql = async (req,res,next) => 
{

    if(req.originalUrl == '/cliente_sql/basic_query')
    {
        
    }

    next();

}

module.exports = 
{
    inyection_sql
}
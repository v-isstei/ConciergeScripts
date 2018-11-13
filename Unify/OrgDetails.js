function getOrgDetails()
{
/*
* Available items: Organization Id, Friendly Name, Unique Name, Status,
* Is Suspended?, Type, Datacenter, Base Language Code, Online Version(DB),
* Scale Group, Scale Group Type, Scale Group Version, Pod, Geo, Tenant Id,
* Is Multi-Geo?, Billing Platform, Licensed Users, User Count, Database Name,
* SQL Server Name, Mirrored Sql Server Name, Availability Group,
* Availability Group Listener, Org DB Size (MB), Data Size (MB), Index Size (MB),
* Max Org DB Size (MB),
*/
let want = ["Organization Id", "Friendly Name", "Datacenter", "Tenant Id"];
let dict = { };
 
$(".align-dashboard-left .form-label").each(function(i)
{
if (!(/\#$/.test($(this).next(".col-xs-8.col-md-7").text().trim())))
dict[$(this).text()] = $(this).next(".col-xs-8.col-md-7").text().trim();
}
);
 
$(".align-dashboard-right .form-label").each(function(i)
{
if (!(/\#$/.test($(this).next(".col-xs-8.col-md-7").text().trim())))
dict[$(this).text()] = $(this).next(".col-xs-8.col-md-7").text().trim();
}
);
 
for (x in dict)
if (want.includes(x.trim()))
console.log(x.trim() + " : " + dict[x].trim());
 
}
getOrgDetails();
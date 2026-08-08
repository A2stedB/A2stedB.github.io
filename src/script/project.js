export function project_button_query(id)
{
    const uid = "." + id
    return document.querySelector(uid)
}

/**
 * 
 * @param {String} project_name 
 */
export function project_button_generate_uid(project_name) 
{
    let uid = "button-" + parse_project_name(project_name)
    return uid.toLowerCase()
}

/**
 * 
 * @param {String} project_name 
 */
function parse_project_name(project_name)
{
    let parsed_project_name = project_name.replaceAll(" ","-")
    return parsed_project_name
}

export function project_get_modal(project_name) 
{
  return project_name.replaceAll(' ', '-') + '-modal'
}
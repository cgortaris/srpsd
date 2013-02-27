Ext.ns('I18n_es');
I18n_es = {
    busqueda: {
        acreedor: 'Acreedor',
        constituyentes: 'Constituyente(s)',
        repertorioPrenda: 'Repertorio Prenda',
        repertorioNotaria: 'Repertorio Notar&iacute;a',
        fechaIngreso: 'Fecha Ingreso',
        fechaDesde: 'Fecha Desde',
        fechaHasta: 'Fecha Hasta',
        fecha: 'Fecha',
        fechaRepertorio: 'Fecha Repertorio',
        buscando: 'Buscando Actuaciones...',
        tipo: 'Tipo',
        tipoBusqueda: 'Tipo',
        tipoContratante: 'Contratante',
        tipoCalidad: 'Calidad',
        run: 'RUN',
        rut: 'RUT',
        identificador: 'ID',
        pais: 'País',
        ou: 'Origen'
    },
    common: {
        button: {
            actualizar: {
                constituyente: 'Actualizar Constituyente',
                deudor: 'Actualizar Deudor'
            },
            agregar: {
                constituyente: 'Agregar Constituyente',
                deudor: 'Agregar Deudor'
            },
            eliminar: {
                constituyente: 'Eliminar Constituyente(s)',
                deudor: 'Eliminar Deudor(es)'
            }
        },
        contratantes: {
            constituyente: 'Constituyente',
            deudor: 'Deudor'
        }
    },
    component: {
        combo: {
            emptyText: 'Seleccione',
            loadingText: 'Cargando...'
        },
        panel: {
            documentoFormPanel: {
                title: 'Antecedentes'
            }
        },
        grid: {
            noResults: 'No se encontraron resultados'
        }
    },
    documento: {
        ppu: 'PPU',
        prohibicion: 'Prohibici&oacute;n de gravar/enajenar'
    },
    menu: {
        opciones: 'Menú',
        title: {
            informeRecaudacion: 'Inf. Rec. Diario',
            informeRecaudacionMasivo: 'Inf. Rec. por Período'
        },
        tooltip: {
            tareas: 'Ver mis tareas',
            inscripcion: 'Ingresar una nueva Inscripción',
            modificacion: 'Ingresar una nueva Modificación',
            alzamiento: 'Ingresar un nuevo Alzamiento',
            anotacion: 'Ingresar una nueva Anotación',
            recepcionar: 'Recepcionar Solicitudes',
            busqueda: 'Ingresar filtros para buscar Actuaciones',
            crearNotaria: 'Ingresar datos para crear una nueva notaría',
            informeRecaudacion: 'Informe de Recaudación e Ingresos Diario',
            informeRecaudacionMasivo: 'Informe de Recaudación e Ingresos por Período',
            aceptarRechazada: 'Aceptar una actuación en estado RECHAZADA',
            rechazarAceptada: 'Rechazar una actuación en estado VIGENTE',
            asignarTareas: 'Permite asignar tareas a un usuario seleccionado',
            quitarTareas: 'Permite liberar tareas tomados por algún usuario'
        },
        options: {
            asignarTareas: 'Asignar Tareas',
            quitarTareas: 'Quitar Tareas'
        },
        firma: 'Cargando Firma Electrónica Avanzada'
    },
    mensajes: {
        confirm: {
            eliminarContratante: '¿Est&aacute; seguro que desea eliminar el contratante?',
            eliminarContratantes: '¿Est&aacute; seguro que desea eliminar los contratantes?',
            registrarPago: '¿Est&aacute; seguro que desea registrar el pago?',
            enviarAFirma: '¿Est&aacute; seguro que desea enviar a firma?',
            realizarEgreso: "¿Está seguro que realizó el egreso y entregó los documentos al requirente?",
            actuacionRevisadaAprobada: 'Se ha revisado y aprobado la actuación.',
            aceptarActuacionRechazada: '¿Est&aacute; seguro que desea ACEPTAR la actuaci&oacute;n actualmente RECHAZADA,<br/>cuyo n&ordm; repertorio prenda es %repertorio?',
            rechazarActuacionVigente: '¿Est&aacute; seguro que desea rechazar la solicitud %repertorio,<br/>actualmente en estado VIGENTE?'
        },
        error: {
            taskAlreadyTaken: 'No fue posible tomar la tarea.',
            errorTomarTarea: 'Error al tratar de tomar la tarea.',
            actuacionConModificacionesPendientes: 'Contrato con solicitudes pendientes, no es posible modificar o alzar.',
            revisionAutomatica: 'Se encontraron errores en la revisión automática.',
            archivoRepetido: "No puede subir el mismo archivo 2 veces.",
            archivoNoEsPdf: "Sólo puede subir contratos formato PDF.",
            archivoNombreInvalido: "El nombre del archivo no puede contener los caracteres \\ / : * ? \" < > |",
            PRD001: 'Error interno código PRD-001 (WSO2 caído).<br/> Contáctese con el administrador.',
            PRD002: 'Ha ocurrido un error al registrar el ingreso en Caja (WSO2).<br/>Intente más tarde.',
            PRD003: 'Ha ocurrido un error al grabar la actuación (Alfresco).<br/>Intente más tarde.',
            PRD004: 'Ha ocurrido un error al obtener el terminal.<br/>Intente más tarde.',
            PRD005: 'El terminal %terminal no es reconocido por el sistema.',
            crearCarro: "Se ha producido un error al crear carro de compra.<br/>Intente más tarde.",
            avanzarCarro: "Se ha producido un error al avanzar carro de compra.<br/>Contáctese con el administrador.",
            procesarPago: "Se ha producido un error al mover el carro<br/>de compra a estado 'confirmaci&oacute;n de pago'.<br/>Contáctese con el administrador.",
            procesarAnotaciones: "Se ha producido un error al procesar las anotaciones al RVM.<br/>Contáctese con el administrador.",
            reconsiderar: "Se ha producido un error en el proceso de reintento.<br/>Contáctese con el administrador.",
            aceptarActuacionRechazada: 'Se ha producido un error en el proceso de Aceptar una actuaci&oacute;n Rechazada.<br/>Contáctese con el administrador.',
            alzarInscripcionAsociadaAlzamiento: 'Se ha producido un error al dejar Vigente la Inscripción asociada al Alzamiento.<br/>Contáctese con el administrador.',
            inicioWorkflowRechazo: 'Se ha producido un error al iniciar proceso de Rechazo.<br/>Contáctese con el administrador.',
            actacionNoRechazada: 'La actuación ingresada no se encuentra<br/> en estado RECHAZADA',
            actacionNoVigente: 'La actuación ingresada no se encuentra<br/> en estado VIGENTE',
            inscripcionNoVigente: 'La actuación ingresada está relacionada con una Inscripción en estado %estado.<br/>La Inscripción debe estar en estado VIGENTE.',
            actuacionNoExiste: 'No existe actuación con el repertorio dado.',
            validacionPPUs: 'Por favor revisar sección Anotaciones al RVM.',
            validacionPPUsEnGrupo: 'Se han encontrado problemas al validar las ppus en RVM.<br/>Por favor revisar las actuaciones indicadas.',
            actuacionSolicitudPendiente: 'Inscripción tiene solicitudes pendientes <br/> Repertorio Prenda: {numeroRepertorio}-{agnoRepertorio}<br/>  Repertorio Notaria: {numeroRepertorioNotaria}-{agnoRepertorioNotaria} <br/> Notaria/Oficina Ingreso: {ou}'
        },
        alert: {
            actuacionDevueltaAEdicion: 'Se ha devuelto la actuaci&oacute;n a edición, para su corrección.',
            actuacionRechazada: 'Se ha rechazado la actuación'
        },
        ok: {
            revisionAutomatica: 'Revisión automática ok.',
            actuacionRechazadaAceptadaExitosamente: 'La actuación fue Aceptada exitosamente.',
            inicioWorkflowRechazo: 'El estado de la solicitud se ha cambiado a PENDIENTE<br/> y se ha iniciado el proceso de rechazo.'
        },
        aviso: 'Aviso',
        confirmacion: 'Confirmaci&oacute;n',
        pagoPorConvenio: 'Notar&iacute;a con Pago por Convenio',
        espere: 'Por favor espere',
        errorComunicacionAlfresco: 'Error de comunicación con el Servidor.',
        errorSesionInvalida: 'Sesión inválida. Debe reconectarse.',
        errorComunicacionRVMCreaAnotacion: 'Error de comunicación con RVM.<br/>Sus anotaciones se intentarán más tarde.',
        errorComunicacionRVMGetAnotaciones: 'Error de comunicación con RVM.<br/>Intente más tarde.',
        inscripcionNoEncontrada: 'No se ha encontrado una inscripción vigente.',
        actuacionDeModificacion: 'La actuación encontrada es una modificación, debe ingresar una inscripción.',
        actuacionDeAlzamiento: 'La actuación encontrada es un alzamiento, debe ingresar una inscripción.',
        inscripcionPendiente: 'La inscripción encontrada está en estado pendiente, debe ingresar una vigente.',
        inscripcionAlzada: 'La inscripción encontrada está en estado alzada, debe ingresar una vigente.',
        inscripcionConstituyenteNoEncontrado: 'La inscripción encontrada no coincide con el constituyente ingresado.',
        inscripcionEncontrada: 'Se encontró una inscripción.',
        inscripcionBuscando: 'Buscando inscripción vigente.',
        contratanteExiste: 'Acreedor ingresado no puede aparecer como Constituyente o Deudor.',
        perderDatos: '¿Est&aacute; seguro que desea dejar la actuaci&oacute;n?\nSe perder&aacute;n todos los datos no guardados.',
        perderDatosRecepcion: '¿Est&aacute; seguro que desea dejar la recepci&oacute;n?\nSe perder&aacute; el listado de actuaciones.',
        perderDatosContratantes: '¿Est&aacute; seguro que desea sobreescribir el listado de contratantes?',
        confirmacionRechazoContrato: '¿Est&aacute; seguro que desea rechazar el contrato?',
        problemasComunicacion: "Problemas de comunicación.",
        procesandoPago: 'Procesando Pago.',
        confirmarSalir: '¿Est&aacute; seguro que desea salir de la aplicaci&oacute;n?',
        procesando: 'Procesando',
        textoRechazoModificado: "Texto rechazo modifcado exitosamente",
        confirmacionEditarRechazoContrato: '¿Est&aacute; seguro que desea modificar el texto de rechazo contrato?',
        cerrandoSesion: 'Cerrando Sesi&oacute;n',
        actualizandoMontos: 'Actualizando montos',
        buscandoMontos: 'Buscando Montos',
        ppuVacia: 'Debe ingresar una PPU',
        ppuExists: 'La PPU ingresada ya est&aacute; en el listado',
        runNombreInvadido: "RUN no coincide con el nombre",
        runNombreNoEncontrado: "No se encontró nombre asociado a este RUN",
        repertorioNotariaYaIngresado: "El n&uacute;mero de repertorio notaria ya ha sido ingresado.",
        repertorioNotariaDesconocido: "No se ha v&aacute;lidado a&uacute;n el n&uacute;mero de repertorio notaria.",
        version: "Versión %version",
        cargandoTareas: 'Recuperando tareas...',
        numeroRepertorioYaIngresado: 'Ya se ingreso el número de repertorio.',
        cargandoActuacion: 'Cargando Actuación',
        cargandoWorkflowHistory: 'Cargando bitácora',
        grabandoActuacion: 'Grabando Actuación',
        procesandoRechazo: 'Procesando rechazo.',
        buscandoActuacion: 'Buscando Actuación',
        rechazandoActuacion: 'Rechazando Actuación',
        aceptandoActuacion: 'Aceptando Actuación',
        actualizandoEstadoInscripcion: 'Actualizando estado de inscripción a Vigente',
        inciandoWorkflowRechazo: 'Iniciando proceso de Rechazo',
        validandoInscripcion: 'Validando Inscripción asociada a Alzamiento',
        validandoPPUs: 'Validando PPUs',
        usuarioNoSeleccionado: 'Seleccione un usuario',
        validandoSolicitudesPendientes: 'Validando Solicitudes Pendientes'
    },
    oai: {
        actuacion: {
            wizard: {
                title: {
                    contratantes: 'contratantes'
                }
            }
        }
    },
    notaria: {
        actuacion: {
            anotaciones: {
                titulo: 'Anotaciones al RVM'
            },
            contratantes: {
                acreedor: 'Acreedor',
                copiarDesde: 'Copiar desde'
            },
            calidad: 'Calidad',
            wizard: {
                button: {
                    anterior: 'Anterior',
                    cancelar: 'Cancelar',
                    grabarYSalir: 'Grabar y Salir',
                    grabar: 'Grabar',
                    siguiente: 'Siguiente'
                },
                checkbox: {
                    prohibicion: 'Prohibici&oacute;n de gravar/enajenar'
                },
                combo: {
                    emptyText: 'Seleccione',
                    tipoDocumento: {
                        fieldLabel: 'Tipo de Documento',
                        store: {
                            escrituraPublica: 'Escritura Pública',
                            contratoPrivado: 'Contrato Privado'
                        }
                    }
                },
                datefield: {
                    autorizacion: 'Fecha de Autorización',
                    suscripcion: 'Fecha de Suscripción',
                    otorgamiento: 'Fecha de Otorgamiento',
                    protocolizacion: 'Fecha de Protocolización'
                },
                numberfield: {
                    agnoRepertorio: 'A&ntilde;o de Repertorio Notar&iacute;a'
                },
                textfield: {
                    numeroRepertorio: 'N&uacute;mero de Repertorio Notar&iacute;a'
                },
                title: {
                    acreedor: 'Acreedor',
                    constituyentes: 'Constituyente(s)',
                    contratantes: 'Contratantes',
                    antecedentes: 'Antecedentes',
                    archivos: 'Archivos',
                    deudores: 'Deudore(s)'
                }
            },
            reinscripcion: {
                repertorio: 'Número Repertorio Notaría',
                agno: 'Año Repertorio Notaría',
                nombre: 'Nombre notario',
                run: 'RUN notario'
            },
            comentariosNotario: 'Comentarios del Notario',
            motivosRechazo: 'Motivo Rechazo'
        },
        modificacion: {
            wizard: {
                title: {
                    antecedentes: 'Antecedentes',
                    contratoInscripcion: 'Contrato Inscripción'
                },
                tipoModificacion: 'Tipo Modificación'
            }
        },
        firma: {
            sent: 'La actuaci&oacute;n ha sido enviada a Firma Electr&oacute;nica Avanzada.'
        }
    },
    unidadPrendas: {
        agno: 'Año',
        anotacion: 'Anotación',
        aprobarAnotacion: 'Aprobar Anotación al Margen',
        button: {
            verContrato: 'Ver Contrato',
            enviarAprobacion: 'Enviar a aprobación',
            cancelar: 'Cancelar',
            enviar: 'Enviar',
            imprimirOficio: 'Imprimir Oficio',
            reconsiderar: 'Reconsiderar'
        },
        contrato: 'Contrato',
        contratoInscripcion: 'Contrato Inscripción',
        descripcion: 'Descripción',
        docReferencia: 'Doc. de Referencia',
        ingresoAnotacion: 'Ingreso Anotación al Margen',
        nRepertorio: 'Nº Repertorio RPsD',
        sindico: 'Síndico',
        solicitante: 'Solicitante',
        tipoSolicitante: 'Tipo Solicitante',
        tipoAnotacion: 'Tipo Anotacion',
        tribunal: 'Tribunal',
        idConstituyente: 'RUN/RUT/ID Constituyente',
        mensajes: {
            contratoNoEncontrado: 'No se encontró contrato',
            anotacionGuardadaExitosamente: 'La anotación al margen ha sido guardada con éxito.',
            anotacionGuardadaFallida: 'La anotación no pudo ser guardada.'
        }
    },
    format: {
        amount: {
            textfield: '$ 0.000/i',
            list: '0.000/i'
        },
        date: 'd/m/Y',
        fullDate: 'd/m/Y H:i',
        completeDate: 'd/m/Y H:i:s',
        dateBandeja: 'd/m/Y H:i:0s'
    },
    commons: {
        inscripcion: 'Inscripción',
        modificacion: 'Modificación',
        alzamiento: 'Alzamiento',
        repertorio: 'Repertorio',
        acreedor: 'Acreedor',
        adjuntos: 'Adjuntos',
        agno: 'A&ntilde;o',
        anexos: 'Anexos',
        anotacionesRVM: 'Anotaciones al RVM',
        aprobacionAnotacionMargen: 'Aprobación Anotación al Margen',
        revisionAnotacionMargen: 'Revisión Anotación al Margen',
        antecedentes: 'Antecedentes',
        cambioAcreedor: 'Cambio de Acreedor',
        caracteristicasContrato: 'Tipo de Contrato',
        constituyente: 'Constituyente',
        constituyentes: 'Constituyentes',
        contratantes: 'Contratantes',
        contrato: 'Contrato',
        deudor: 'Deudor',
        deudores: 'Deudores',
        estado: 'Estado',
        identificador: 'Identificador',
        informacionNotaria: 'Información Notaría',
        notaria: 'Notar&iacute;a',
        nuevoAcreedor: 'Nuevo Acreedor',
        prohibicionActo: 'Prohibición de Acto',
        oficina: 'Oficina',
        OU: 'Unidad Organizacional',
        tipoOU: 'Tipo U.O',
        otraModificacion: 'Otra',
        reinscripcion: 'Reinscripción',
        resumen: 'Resumen',
        resumenContrato: 'Resumen Contrato',
        tipoModificacion: 'Tipo Modificación',
        tipoAlzamiento: 'Alzamiento parcial',
        inscripcionContratoPrendas: "Inscripci&oacute;n de Contrato de Prenda",
        modificacionContratoPrendas: "Modificación de Contrato de Prenda",
        alzamientoContratoPrendas: "Alzamiento de Contrato de Prenda",
        listadoTareas: "Listado de Tareas",
        revisarContratoPrendas: "Revisar Contrato de Prendas",
        pagarContratoPrendas: "Pagar Contrato de Prendas",
        firmarContratoPrendas: "Firmar Contrato de Prendas",
        recepcionarContratoPrendas: "Recepcionar Contrato de Prenda",
        pagoGrupo: "Pago en Grupo",
        digitarlizarAdjuntarArchivos: "Digitalizar y Adjuntar Archivos",
        confirmarPagoContratoPrendas: "Confirmar Pago Contrato de Prenda",
        actuacionPorRecepcionar: "Actuación por recepcionar",
        actuacionRecepcionada: "Actuación recepcionada",
        actuacionErrorAlRecepcionar: "Error en la recepción de la actuación",
        formularioConErrores: 'El formulario contiene errores.',
        campoObligatorio: "Este campo es obligatorio",
        informeRecaudacion: 'Informe de Recaudación e Ingresos Diario',
        informeRecaudacionMasivo: 'Informe de Recaudación e Ingresos Por Período',
        aceptarActuacionRechazada: 'Aceptar Actuación en estado Rechazada',
        rechazarActuacionVigente: 'Rechazar Actuación en estado Vigente',
        revisarRechazoContratoPrendas: 'Examinación para Rechazo Contrato de Prendas',
        validacionRVM: 'RVM',
        crearOU: 'Crear nueva OU',
        nombreOU: 'Nombre',
        grou: 'Identificador GROU',
        direccion: 'Dirección',
        rechazoContrato: 'Rechazo Contrato',
        procesarRechazoActuacion: 'Procesar Rechazo Actuación',
        tomaConocimientoRechazo: 'Toma de Conocimiento Rechazo',
        resolucionRechazo: 'Resolución de Rechazo',
        abortarPagoContratoPrendas: 'Abortar Pago Contrato de Prendas',
        descripcion: 'Descripción',
        nRepertorio: 'N° Repertorio',
        numeroRepertorio: 'Número Repertorio',
        tipoDocumento: 'Tipo Documento',
        numero: 'Identificador',
        fechaProtocolizacion: 'Fecha de Protocolización',
        fechaAutorizacion: 'Fecha de Autorización',
        fechaSuscripcion: 'Fecha de Suscripción',
        fechaOtorgamiento: 'Fecha de Otorgamiento',
        agno: 'Año',
        agnoRepertoria: 'Año Repertorio',
        prohibicionGravarEnajenar: 'Prohibición de Gravar/Enajenar',
        nRepertorioNotaria: 'Nº Repertorio Notaría',
        ppu: 'PPU',
        prohibicion: 'Prohibición',
        monto: 'Monto ($)',
        nombreArchivo: 'Nombre del Archivo',
        montoTotal: 'Total a pagar',
        montoActuacion: 'Monto %actuacion',
        montoAnotacionesRVM: 'Monto Anotaciones al RVM',
        nombreArchivos: 'Nombre Archivos ',
        nombreNotario: "Nombre Notario",
        runNotario: "RUN Notario",
        calidad: 'Calidad',
        nombres: 'Nombres',
        razonSocial: 'Razón Social',
        tipoDocumento: 'Tipo Documento',
        pais: 'País',
        tipoIdentificador: 'Tipo Identificador',
        apellidos: 'Apellidos',
        email: 'E-mail',
        medioPago: 'Medio de Pago',
        enviarAnotacionesRVM: 'Enviar Anotaciones al RVM',
        alzamientoGrillaMensaje: 'Se alzarán anotaciones de prenda en RVM de estas PPU.',
        taskid: 'TaskId',
        buscadorActuaciones: 'Buscador de Actuaciones',
        help: 'Ayuda',
        contact: 'Contacto',
        prohibicionActoGridBbar: "Marque la PPU y agregue la prohibición",
        pagar: "Pagar",
        firmar: "Firmar",
        pago: 'Registrar Pago',
        cerrar: 'Cerrar',
        aprobar: 'Aprobar',
        rechazar: 'Rechazar',
        aprobarRevisar: 'Aprobar Revisión',
        rechazarRevision: 'Rechazar Revisión',
        devolverEdicion: 'Devolver a Edici&oacute;n',
        buscar: 'Buscar',
        limpiar: 'Limpiar',
        recepcionar: 'Recepcionar',
        cancelar: 'Cancelar',
        aceptar: 'Aceptar',
        confirmarPago: 'Confimar Pago',
        abortarPago: 'Abortar Pago',
        enviarAprobacion: 'Enviar a Aprobación',
        guardar: 'Guardar',
        terminar: 'Terminar',
        comprobante: 'Comprobante',
        rechazarContrato: 'Rechazar Contrato',
        editarRechazoContrato: 'Editar Texto Rechazo',
        contratanteNoAgregado: 'No se ha agregado ningún ',
        contratanteValido: 'Contratante válido (Srcei)',
        contratanteInvalido: 'Contratante inválido (Srcei)',
        contratanteBuscando: 'Validando contratante (Srcei) ...',
        contratanteIndefinido: 'Contratante aún no validado',
        contratanteLocalInvalido: 'Contratante inválido',
        contratanteLocalValido: 'Contratante válido',
        ppuValida: "Placa Patente Única inválida",
        ppuInvalida: "Placa Patente Única inválida",
        ppuBloqueada: "No puede modificar la prohibición",
        erroresEnPPUs: 'Se han encontrado errores en las placas patentes únicas ingresadas',
        contratanteEnGrilla: 'El %contratante ya ha sido ingresado en el listado',
        actuacionNoTieneActuacion: 'La actuación no aparece en ningún carro.',
        actuacionMovidaARepagar: 'Se ha abortado el pago. Ahora puede repagar la actuación.',
        actuacionEnviadaAOu: 'Se ha enviado la actuación rechazada.',
        reconsiderarExitosamente: 'Se ha devuelto la actuación para revisión.',
        firmaTimbre: 'Firma y Timbre del<br/>Funcionario Responsable',
        seleccioneNotaria: 'Seleccione una notaría...',
        historial: {
            titulo: 'Bitácora',
            tarea: 'Tarea',
            fechaCreacion: 'Fecha creación',
            asignado: 'Asignado',
            fechaTermino: 'Fecha completada',
            outcome: 'Resultado'
        },
        quitarTareas: 'Quitar Tareas Asignadas',
        asignarTareas: 'Asignar Tareas'
    },
    vtype: {
        numeroRepertorioNotaria: 'N&uacute;mero de Repertorio no v&aacute;lido.',
        agno: 'A&ntilde;o no v&aacute;lido. Ejemplo: 2011',
        numeroRepertorioPrendas: 'N&uacute;mero de Repertorio no v&aacute;lido. Deben ser doce (12) d&iacute;gitos',
        contratanteIngresado: 'Este contratante ya ha sido ingresado. Revise todos los contratantes'
    },
    contact: {
        mailto: 'info@example.com',
        message: 'Contacte con nosotros!'
    },
    reportes: {
        titulos: {
            formato: 'Formato',
            tipoInforme: 'Tipo Pago',
            tipoDetalle: 'Tipo Informe'
        },
        buttons: {
            pdf: 'Pdf',
            excel: 'Excel',
            informe: 'Generar&nbsp;&nbsp;&nbsp;',
            descargar: 'Descargar'
        },
        mensajes: {
            iniciando: 'Iniciando generaci&oacute;n de archivo..',
            progreso: "Procesando Datos del %fecha (%porcentaje%)",
            tituloReporte: "Informe período %fechaDesde a %fechaHasta tipo %tipo"
        },
        errores: {
            generarArchivo: 'Se ha producido un error al generar el archivo.<br/>Intente más tarde.',
            monitoreoGeneracionArchivo: 'Se ha producido un error en el monitoreo del archivo.<br/>Intente más tarde.'
        }
    },
    bandejaTareas: {
        titulos: {
            taskid: 'Taskid',
            repertorioPrendas: 'Rep. Prendas',
            agnoPrendas: 'Año Prendas',
            repertorioNotaria: 'Rep. Notaria',
            agnoNotaria: 'Año Notaria',
            fecha: 'Fecha',
            acreedor: 'Acreedor',
            constituyentes: 'Constituyentes',
            tipo: 'Tipo',
            actividad: 'Actividad',
            revisionAutomatica: 'RA',
            usuario: 'Usuario',
            ou: 'Origen'
        }
    }
};
I18n = I18n_es;
var TODAY = new Date();
Ext.override(Ext.form.ComboBox, {
    setValue: function (v) {
        var text = v;
        if (this.valueField) {
            if (this.mode == 'remote' && !Ext.isDefined(this.store.totalLength)) {
                this.store.on('load', this.setValue.createDelegate(this, arguments), null, {
                    single: true
                });
                if (this.store.lastOptions === null) {
                    var params;
                    if (this.valueParam) {
                        params = {};
                        params[this.valueParam] = v;
                    } else {
                        var q = this.allQuery;
                        this.lastQuery = q;
                        this.store.setBaseParam(this.queryParam, q);
                        params = this.getParams(q);
                    }
                    this.store.load({
                        params: params
                    });
                }
                return;
            }
            var r = this.findRecord(this.valueField, v);
            if (r) {
                text = r.data[this.displayField];
            } else if (this.valueNotFoundText !== undefined) {
                text = this.valueNotFoundText;
            }
        }
        this.lastSelectionText = text;
        if (this.hiddenField) {
            this.hiddenField.value = v;
        }
        Ext.form.ComboBox.superclass.setValue.call(this, text);
        this.value = v;
    }
});
Ext.util.JSON.encodeDate = function (o) {
    return o.format('"m/d/Y"');
};
Ext.override(Ext.Component, {
    findParentBy: function (fn) {
        for (var p = this.ownerCt;
        (p != null) && !fn(p); p = p.ownerCt);
        return p;
    },
    findParentByType: function (xtype) {
        return typeof xtype == 'function' ? this.findParentBy(function (p) {
            return p.constructor === xtype;
        }) : this.findParentBy(function (p) {
            return p.constructor.xtype === xtype;
        });
    }
});
Ext.override(Ext.form.Field, {
    initComponent: function () {
        Ext.apply(this, {
            validator: this.validarAllowBlank
        });
        Ext.form.Field.superclass.initComponent.call(this);
    },
    validarAllowBlank: function (value) {
        if (this.mandatory && Ext.isEmpty(value)) {
            return I18n.commons.campoObligatorio;
        }
        return true;
    }
});
Ext.grid.CheckboxSelectionModel = Ext.extend(Ext.grid.RowSelectionModel, {
    header: '<div class="x-grid3-hd-checker"> </div>',
    width: 20,
    sortable: false,
    menuDisabled: true,
    fixed: true,
    hideable: false,
    dataIndex: '',
    id: 'checker',
    initEvents: function () {
        Ext.grid.CheckboxSelectionModel.superclass.initEvents.call(this);
        this.grid.on('render', function () {
            var view = this.grid.getView();
            Ext.fly(view.innerHd).on('mousedown', this.onHdMouseDown, this);
        }, this);
    },
    handleMouseDown: function (grid, rowIndex, e) {
        if (e.button === 0 && e.getTarget().className == 'x-grid3-row-checker') {
            e.stopEvent();
            if (this.isSelected(rowIndex)) {
                this.deselectRow(rowIndex);
            } else {
                this.selectRow(rowIndex, true);
                grid.getView().focusRow(rowIndex);
            }
            return;
        }
        if (!this.checkOnly) {
            Ext.grid.CheckboxSelectionModel.superclass.handleMouseDown.apply(this, arguments);
        }
    },
    onHdMouseDown: function (e, t) {
        if (t.className == 'x-grid3-hd-checker') {
            e.stopEvent();
            var hd = Ext.fly(t.parentNode);
            var isChecked = hd.hasClass('x-grid3-hd-checker-on');
            if (isChecked) {
                hd.removeClass('x-grid3-hd-checker-on');
                this.clearSelections();
            } else {
                hd.addClass('x-grid3-hd-checker-on');
                this.selectAll();
            }
        }
    },
    renderer: function (v, p, record) {
        return '<div class="x-grid3-row-checker"> </div>';
    }
});
Ext.override(Ext.data.Store, {
    addField: function (field) {
        field = new Ext.data.Field(field);
        this.recordType.prototype.fields.replace(field);
        if (typeof field.defaultValue != 'undefined') {
            this.each(function (r) {
                if (typeof r.data[field.name] == 'undefined') {
                    r.data[field.name] = field.defaultValue;
                }
            });
        }
    },
    removeField: function (name) {
        this.recordType.prototype.fields.removeKey(name);
        this.each(function (r) {
            delete r.data[name];
            if (r.modified) {
                delete r.modified[name];
            }
        });
    }
});
Ext.override(Ext.grid.ColumnModel, {
    addColumn: function (column, colIndex) {
        if (typeof column == 'string') {
            column = {
                header: column,
                dataIndex: column
            };
        }
        var config = this.config;
        this.config = [];
        if (typeof colIndex == 'number') {
            config.splice(colIndex, 0, column);
        } else {
            colIndex = config.push(column);
        }
        this.setConfig(config);
        return colIndex;
    },
    removeColumn: function (colIndex) {
        var config = this.config;
        this.config = [config[colIndex]];
        config.splice(colIndex, 1);
        this.setConfig(config);
    }
});
Ext.override(Ext.grid.GridPanel, {
    addColumn: function (field, column, colIndex) {
        if (!column) {
            if (field.dataIndex) {
                column = field;
                field = field.dataIndex;
            } else {
                column = field.name || field;
            }
        }
        this.store.addField(field);
        return this.colModel.addColumn(column, colIndex);
    },
    removeColumn: function (name, colIndex) {
        this.store.removeField(name);
        if (typeof colIndex != 'number') {
            colIndex = this.colModel.findColumnIndex(name);
        }
        if (colIndex >= 0) {
            this.colModel.removeColumn(colIndex);
        }
    }
});
String.prototype.capitalize = function () {
    value = this.toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
};
Ext.LinkButton = Ext.extend(Ext.Button, {
    template: new Ext.Template('<table cellspacing="0" class="x-btn {3}"><tbody class="{1}">', '<tr>', '<td class="x-btn-tl"><i>&#160;</i></td>', '<td class="x-btn-tc"></td>', '<td class="x-btn-tr"><i>&#160;</i></td>', '</tr>', '<tr>', '<td class="x-btn-ml"><i>&#160;</i></td>', '<td class="x-btn-mc">', '<em class="{2}" unselectable="on">', '<a href="{5}" style="display:block" target="_blank" class="x-btn-text">{0}</a>', '</em>', '</td>', '<td class="x-btn-mr"><i>&#160;</i></td>', '</tr>', '<tr>', '<td class="x-btn-bl"><i>&#160;</i></td>', '<td class="x-btn-bc"></td>', '<td class="x-btn-br"><i>&#160;</i></td>', '</tr>', '</tbody></table>').compile(),
    buttonSelector: 'a:first',
    baseParams: {},
    params: {},
    getTemplateArgs: function () {
        return Ext.Button.prototype.getTemplateArgs.apply(this).concat([this.getHref(), this.target]);
    },
    onClick: function (e) {
        if (e.button != 0) {
            return;
        }
        if (this.disabled) {
            this.el.child(this.buttonSelector, true).target = '_self';
        } else {
            if (this.fireEvent("click", this, e) !== false) {
                if (this.handler) {
                    this.handler.call(this.scope || this, this, e);
                }
            }
        }
    },
    getHref: function () {
        if (this.disabled) {
            return "javascript:;";
        }
        var result = this.href;
        var p = Ext.urlEncode(Ext.apply(Ext.apply({}, this.baseParams), this.params));
        if (p.length) {
            result += ((this.href.indexOf('?') == -1) ? '?' : '&') + p;
        }
        return result;
    },
    setParams: function (p) {
        this.params = p;
        this.el.child(this.buttonSelector, true).href = this.getHref();
    }
});
Ext.reg('linkbutton', Ext.LinkButton);
String.prototype.br2nl = function () {
    var nl;
    if (typeof arguments[0] != 'undefined') {
        nl = arguments[0];
    } else {
        nl = '\r\n';
    }
    return this.replace(/\<br(\s*\/|)\>/g, nl);
};
Ext.Ajax.timeout = 600000;
Ext.ns('Srp.conf');
Srp.conf.Release = {
    fecha: '2013-02-28 19:00',
    version: '1.3.22'
};
Srp.conf.FeaClient = {
    fecha: '2012-01-12 19:00',
    version: '1.3.1'
};
TIPO_ACTUACION = 'response.tipoActuacion';
TIPO_ACTUACION_I = 'response.tipoActuacion';
INSCRIPCION = 'response.contratoInscripcion';
NUMERO_REPERTORIO_INSCRIPCION = 'response.contratoInscripcion.numeroRepertorio';
AGNO_REPERTORIO_INSCRIPCION = 'response.contratoInscripcion.agnoRepertorio';
NODE_ID_INSCRIPCION = 'response.contratoInscripcion.nodeId';
NUMERO_REPERTORIO = 'response.numeroRepertorio';
AGNO_REPERTORIO = 'response.agnoRepertorio';
FECHA_REPERTORIO = 'response.fechaRepertorio';
FECHA_PROTOCOLIZACION = 'response.fechaProtocolizacion';
FECHA_AUTORIZACION = 'response.fechaAutorizacion';
FECHA_SUSCRIPCION = 'response.fechaSuscripcion';
FECHA_OTORGAMIENTO = 'response.fechaOtorgamiento';
NOMBRE_NOTARIO = 'response.nombreNotarioRef';
RUN_NOTARIO = 'response.runNotarioRef';
GRUPO_NOTARIA = 'response.grpNotaria';
TIPO_DOCUMENTO = 'response.tipoDocumento';
DESC_TIPO_DOCUMENTO = 'response.descTipoDocumento';
PROHIBICION_GRAVAR_ENAJENAR = 'response.prohibicion';
AGNO_REPERTORIO_NOTARIA = 'response.agnoRepertorioNotaria';
NUMERO_REPERTORIO_NOTARIA = 'response.numeroRepertorioNotaria';
TIPO_OU = 'response.tipoOu';
NOMBRE_OU = 'response.nombreOu';
TIPO_MODIFICACION = 'response.tipoModificacion';
DESC_TIPO_MODIFICACION = 'response.descTipoModificacion';
DESCRIPCION_OTRA_MODIFICACION = 'response.otroDescripcion';
ANOTACIONES_RVM = 'response.vehiculos';
PATENTE_ANOTACIONES_RVM = 'patente';
PROHIBICION_ANOTACIONES_RVM = 'patenteProhibicion';
MONTO_ANOTACIONES_RVM = 'monto';
REINSCRIPCION = "response.reinscripcion";
REINSCRIPCION_TIPO_DOCUMENTO = REINSCRIPCION + '.tipoDocumentoReinscripcion';
REINSCRIPCION_DESC_TIPO_DOCUMENTO = REINSCRIPCION + '.descTipoDocumento';
REINSCRIPCION_PROHIBICION = REINSCRIPCION + '.prohibicion';
REINSCRIPCION_AGNO_REPERTORIO_NOTARIA = REINSCRIPCION + '.agnoRepertorioAnterior';
REINSCRIPCION_NUMERO_REPERTORIO_NOTARIA = REINSCRIPCION + '.numeroRepertorioAnterior';
REINSCRIPCION_FECHA_SUSCRIPCION = REINSCRIPCION + '.fechaSuscripcionReinscripcion';
REINSCRIPCION_FECHA_OTORGAMIENTO = REINSCRIPCION + '.fechaOtorgamientoReinscripcion';
REINSCRIPCION_FECHA_PROTOCOLIZACION = REINSCRIPCION + '.fechaProtocolizacionReinscripcion';
REINSCRIPCION_FECHA_AUTORIZACION = REINSCRIPCION + '.fechaAutorizacionReinscripcion';
REINSCRIPCION_NOMBRE_NOTARIO = REINSCRIPCION + '.nombreCompletoNotario';
REINSCRIPCION_RUN_NOTARIO = REINSCRIPCION + '.runNotario';
CONTRATANTE_REMOVED = 'removed';
ACREEDOR = 'response.acreedor';
DEUDORES = 'response.deudores';
CONSTITUYENTES = 'response.constituyentes';
DEUDOR = 'response.deudores[0]';
CONSTITUYENTE = 'response.constituyentes[0]';
CONTRATANTE_NOMBRES = 'nombres';
CONTRATANTE_APELLIDO_PATERNO = 'apellidoPaterno';
CONTRATANTE_APELLIDO_MATERNO = 'apellidoMaterno';
CONTRATANTE_IDENTIFICADOR = 'identificador';
CONTRATANTE_EMAIL = 'email';
CONTRATANTE_PERSONA_TIPO = 'personaTipo';
CONTRATANTE_RAZON_SOCIAL = 'razonSocial';
CONTRATANTE_IDENTIFICADOR_TIPO = 'identificadorTipo';
CONTRATANTE_PAIS = 'pais';
ACREEDOR_NOMBRES = ACREEDOR + '.' + CONTRATANTE_NOMBRES;
ACREEDOR_APELLIDO_PATERNO = ACREEDOR + '.' + CONTRATANTE_APELLIDO_PATERNO;
ACREEDOR_APELLIDO_MATERNO = ACREEDOR + '.' + CONTRATANTE_APELLIDO_MATERNO;
ACREEDOR_IDENTIFICADOR = ACREEDOR + '.' + CONTRATANTE_IDENTIFICADOR;
ACREEDOR_EMAIL = ACREEDOR + '.' + CONTRATANTE_EMAIL;
ACREEDOR_PERSONA_TIPO = ACREEDOR + '.' + CONTRATANTE_PERSONA_TIPO;
ACREEDOR_RAZON_SOCIAL = ACREEDOR + '.' + CONTRATANTE_RAZON_SOCIAL;
ACREEDOR_IDENTIFICADOR_TIPO = ACREEDOR + '.' + CONTRATANTE_IDENTIFICADOR_TIPO;
ACREEDOR_PAIS = ACREEDOR + '.' + CONTRATANTE_PAIS;
DEUDOR_NOMBRES = DEUDOR + '.' + CONTRATANTE_NOMBRES;
DEUDOR_APELLIDO_PATERNO = DEUDOR + '.' + CONTRATANTE_APELLIDO_PATERNO;
DEUDOR_APELLIDO_MATERNO = DEUDOR + '.' + CONTRATANTE_APELLIDO_MATERNO;
DEUDOR_IDENTIFICADOR = DEUDOR + '.' + CONTRATANTE_IDENTIFICADOR;
DEUDOR_EMAIL = DEUDOR + '.' + CONTRATANTE_EMAIL;
DEUDOR_PERSONA_TIPO = DEUDOR + '.' + CONTRATANTE_PERSONA_TIPO;
DEUDOR_RAZON_SOCIAL = DEUDOR + '.' + CONTRATANTE_RAZON_SOCIAL;
DEUDOR_IDENTIFICADOR_TIPO = DEUDOR + '.' + CONTRATANTE_IDENTIFICADOR_TIPO;
DEUDOR_PAIS = DEUDOR + '.' + CONTRATANTE_PAIS;
CONSTITUYENTE_NOMBRES = CONSTITUYENTE + '.' + CONTRATANTE_NOMBRES;
CONSTITUYENTE_APELLIDO_PATERNO = CONSTITUYENTE + '.' + CONTRATANTE_APELLIDO_PATERNO;
CONSTITUYENTE_APELLIDO_MATERNO = CONSTITUYENTE + '.' + CONTRATANTE_APELLIDO_MATERNO;
CONSTITUYENTE_IDENTIFICADOR = CONSTITUYENTE + '.' + CONTRATANTE_IDENTIFICADOR;
CONSTITUYENTE_EMAIL = CONSTITUYENTE + '.' + CONTRATANTE_EMAIL;
CONSTITUYENTE_PERSONA_TIPO = CONSTITUYENTE + '.' + CONTRATANTE_PERSONA_TIPO;
CONSTITUYENTE_RAZON_SOCIAL = CONSTITUYENTE + '.' + CONTRATANTE_RAZON_SOCIAL;
CONSTITUYENTE_IDENTIFICADOR_TIPO = CONSTITUYENTE + '.' + CONTRATANTE_IDENTIFICADOR_TIPO;
CONSTITUYENTE_PAIS = CONSTITUYENTE + '.' + CONTRATANTE_PAIS;
ADJUNTOS = "response.adjuntos";
ANEXOS = "response.anexos";
NOMBRE_ARCHIVO_ANEXOS = "nombre";
URL_ARCHIVO_ANEXOS = "url";
RESUMEN_MONTO_TOTAL = "response.montoTotal";
RESUMEN_MONTO_INSCRIPCION = "response.valoractuacion";
NOMBRE_ARCHIVO_CONTRATO = "response.nombreArchivoContrato";
URL_ARCHIVO_CONTRATO = "response.urlArchivoContrato";
COMENTARIO_RECHAZO_NOTARIO = 'response.comentariorechazonotario';
COMENTARIO_RECHAZO_ABOGADO = 'response.comentariorechazoabogado';
HISTORIAL_WORKFLOW = "response.workflowHistory";
MEDIO_PAGO = "response.medioPago";
DESC_MEDIO_PAGO = "response.descMedioPago";
MONTO_PAGO = "response.montoPago";
ANOTACION_MARGEN_AGNO_ANOTACION = "response.contratoInscripcion.agnoRepertorio";
ANOTACION_MARGEN_NUMERO_REPERTORIO = "response.contratoInscripcion.numeroRepertorio";
SOLICITANTE_TIPO_ID = "response.solicitanteTipo";
SOLICITANTE_VALOR = "response.solicitante";
DOC_REFERENCIA = "response.accionReferencia";
ACCION_TIPO_ID = "response.accionTipo";
ANOTACION_TIPO_ID = "response.anotacionTipo";
ANOTACION_TIPO_OTRO = "response.otraDescripcion";
ANOTACION_DESCRIPCION = "response.accionDescripcion";
Ext.ns('Srp.conf');
Srp.conf.Services = {
    WS_GET_MENSAJE_MENU: 'd/d/workspace/SpacesStore/NODE_ID_PROPERTY_MENSAJE/mensaje.txt',
    WS_GET_USER: 'service/srpsd/usuario',
    WS_GET_ORGANIZATION: 'service/srpsd/ou',
    WS_GET_TICKET: 'service/api/login',
    WS_TAREA_OBTENER_LISTADO: 'service/srpsd/tareasexpress',
    WS_TAREA_LIBERAR: 'service/srpsd/take',
    WS_TAREA_TOMAR: 'service/srpsd/take',
    WS_TAREAS_OBTENER_LISTADO_TOMADAS: 'service/srpsd/tareasexpress/taken',
    WS_TAREAS_OBTENER_LISTADO_NO_TOMADAS: 'service/srpsd/tareasexpress/nottaken',
    WS_CATEGORIAS: 'service/srpsd/categories',
    WS_OUS: 'service/srpsd/ous',
    WS_ROLES_OBTENER: 'service/srpsd/miembrode',
    WS_GET_USERS_BY_ROLE: 'service/api/groups/{0}/children',
    WS_ACTUACION_GET_BY_NODEID: 'service/srpsd/actuacion/content/',
    WS_ACTUACION_GET_BY_TASKID: 'service/srpsd/actuacion/taskid/',
    WS_ACTUACION_GET_BY_NUMERO_REPERTORIO: 'service/srpsd/actuacionrepertorio',
    WS_ACTUACION_ULTIMA_GET_BY_NODEID: 'service/srpsd/ultimaactuacion',
    WS_WORKFLOW_HISTORY_BY_TASKID: 'service/srpsd/workflowHistoryList',
    WS_WORKFLOW_HISTORY_BY_NUMERO_REPERTORIO: 'service/srpsd/workflowClosedHistoryList',
    WS_ACTUACION_INSCRIPCION_SAVE: 'service/srpsd/updateinscripcion',
    WS_ACTUACION_MODIFICACION_SAVE: 'service/srpsd/content/updatemodificacionalzamiento',
    WS_ACTUACION_ALZAMIENTO_SAVE: 'service/srpsd/content/updatemodificacionalzamiento',
    WS_ACTUACION_UPLOAD_CONTRATO: 'service/srpsd/content/uploadtmp',
    WS_ACTUACION_CONFIRMAR_PAGO: 'service/srpsd/pago',
    WS_ACTUACION_SEARCH: 'service/srpsd/searchactuacion',
    WS_ACTUACION_SEARCH_BY_TYPE: 'service/srpsd/searchactuacionbytype',
    WS_GET_TASKID_BY_NODEID: 'service/srpsd/taskbynodeid',
    WS_ADJUNTO_DOWNLOAD: 'service/api/node/content/workspace/SpacesStore/',
    WS_VALIDACION_SOLICITUDES_PENDIENTES: 'service/srpsd/actuacion/tienesolicitudespendientes/',
    WS_ANOTACION_GET_BY_TASKID: 'service/srpsd/accion/taskid/',
    WS_ANOTACION_SAVE: 'service/srpsd/updateaccion',
    WS_AVANZAR_WORKFLOW: 'service/srpsd/muevetoken',
    WS_RECEPCIONAR_WORKFLOW: 'service/srpsd/codanner',
    WS_TEST: 'services/system/helloworld/hello',
    WS_GET_NOMBRE: 'services/admin/Nombre/getNombre?response=json',
    WS_VALIDA_RUN_NOMBRE: 'services/admin/VerificaRun/verifica?response=json',
    WS_ES_VEHICULO: 'services/admin/RVM/esVehiculo?response=json',
    WS_ES_PROPIETARIO: 'services/admin/RVM/esPropietario?response=json',
    WS_TIENE_SOLICITUDES_PENDIENTES: 'services/admin/RVM/solicitudes?response=json',
    WS_CREA_ANOTACION: 'services/admin/CreaAnotacion/sendAnotacionRVM?response=json',
    WS_GET_ANOTACIONES: 'services/admin/Anotaciones/lista',
    WS_PROCESAR_ANOTACIONES: 'services/admin/Pago/procesarAnotaciones?response=json',
    WS_CREAR_CARRO: 'services/admin/Pago/crearCarro?response=json',
    WS_AVANZAR_CARRO: 'services/admin/Pago/avanzarCarro?response=json',
    WS_CAJA_REGISTAR_INGRESO: 'services/admin/Caja/registrarIngreso?response=json',
    WS_CAJA_REGISTAR_EGRESO: 'services/admin/Caja/registrarEgreso?response=json',
    WS_CAJA_GET_PRECIOS: Srp.conf.Properties.URL_CAJA_WS + 'servicios/precioActuacion',
    WS_CAJA_GET_TERMINAL: Srp.conf.Properties.URL_CAJA_WS + 'getTerminal.jsp',
    PPE_SOLICITUD_PAGO: Srp.conf.Properties.PPE_SOLICITUD_PAGO,
    PPE_ACTION_POST_M1: Srp.conf.Properties.PPE_ACTION_POST_M1,
    INFORME_RECAUDACION: Srp.conf.Properties.URL_REPORTES + '/generarReporteListaActuaciones.do',
    COMPROBANTE: Srp.conf.Properties.URL_REPORTES + '/generarReporteComprobante.do',
    INFORME_RECAUDACION_MASIVO_GENERAR: Srp.conf.Properties.URL_REPORTES + '/generarDatosReporteMasivo.do',
    INFORME_RECAUDACION_MASIVO_MONITOREAR: Srp.conf.Properties.URL_REPORTES + '/monitorearDatosReporteMasivo.do',
    INFORME_RECAUDACION_MASIVO_DESCARGAR: Srp.conf.Properties.URL_REPORTES + '/generarReporteListaActuacionesLocalFile.do',
    WS_GET_CARRO_BY_NODEID: 'service/srpsd/searchcarrito',
    WS_CARRO_REPAGAR: 'service/srpsd/muevetokens',
    WS_LOGS: Srp.conf.Properties.URL_APPS_EXT + 'log',
    WS_RESOLUCION_EXENTA: 'service/srpsd/resolucionexenta/id/',
    WS_CAMBIAESTADO: 'service/srpsd/cambiaestado/nodeid/',
    WS_INICIAR_WORKFLOW_RECHAZO: 'service/srpsd/createWfCancelacion/numero/',
    WS_INICIAR_WORKFLOW_ACEPTACION: 'service/srpsd/createWfAceptacion/numero/',
    WS_VALIDATE_LOGIN_TICKET: 'service/api/login/ticket/',
    WS_CHECK_MODIFICACION_ALZAMIENTO: 'service/srpsd/actuacion/children/'
};
Srp.conf.DummyServices = {
    WS_GET_USER: 'usuario.json',
    WS_GET_ORGANIZATION: 'organization.json',
    WS_GET_PRECIOS: 'precios.json',
    WS_TAREA_OBTENER_LISTADO: 'tareas_editar_actuacion.json',
    WS_TAREA_LIBERAR: 'liberar_tarea.json',
    WS_CATEGORIA_TRIBUNAL: 'listado_tribunales.json',
    WS_CATEGORIA_CALIDAD: 'calidad.json',
    WS_ROLES_OBTENER: 'roles.json',
    WS_VER_CONTRATO: 'ver_contrato.json',
    WS_RESUMEN_ACTUACION: 'actuacion.json',
    WS_ACTUACION_GET_BY_TASKID: 'actuacion_by_taskid.json',
    WS_ACTUACION_BUSCAR: 'actuacion_buscar.json',
    WS_ACTUACION_INSCRIPCION_SAVE: 'actuacion.inscripcion.out.json',
    WS_ACTUACION_UPLOAD_CONTRATO: 'actuacion_upload_contrato.php',
    WS_ACTUACION_MODIFICACION_SAVE: 'actuacion_modificacion_save.php',
    WS_ACTUACION_ALZAMIENTO_SAVE: 'actuacion_alzamiento_save.json',
    WS_ANOTACION_GUARDAR: 'anotacion_guardar.json',
    WS_ANOTACION_OBTENER: 'anotacion_obtener.json',
    WS_ACTUACION_SEARCH: 'actuacion_search.json',
    WS_GET_NOMBRE: 'ws.nombres.json.php',
    WS_VALIDA_RUN_NOMBRE: 'ws.validaRutNombre.json.php',
    WS_GET_CARRO_CONTENT: 'ws.getCarroContent.json.php'
};
Ext.ns('log');
log.Log4JS = function () {
    return {
        debug: function (logValue) {
            try {
                if (console) {
                    console.log('DEBUG: ' + logValue + '\n');
                } else {}
            } catch (e) {}
        }
    }
}();
log.Log4js = log.Log4JS;
log.Log4Js = log.Log4JS;
Log4js = log.Log4JS;
log4js = log.Log4JS;
Ext.ns('util');
util.getUrlParam = function (param) {
    var params = Ext.urlDecode(location.search.substring(1));
    return param ? params[param] : params;
};
util.isEmpty = function (s) {
    if (typeof s === 'undefined') return true;
    else return s === "";
};
util.isRVMValid = function (actuacion) {
    if (actuacion.respuestaRVM == PPU_RESPUESTA_OK) {
        return true;
    } else {
        var mensaje = "";
        switch (actuacion.respuestaRVM) {
            case RVM_RESPUESTA_ERROR_CREA_ANOTACION:
                mensaje = I18n.mensajes.errorComunicacionRVMCreaAnotacion;
                break;
            case RVM_RESPUESTA_ERROR_GET_ANOTACIONES:
                mensaje = I18n.mensajes.errorComunicacionRVMGetAnotaciones;
                break;
            case PPU_RESPUESTA_ERROR_WSO2:
                mensaje = I18n.mensajes.error.PRD001;
        }
        if (mensaje.length > 0) {
            Srp.gui.messageBox.Error({
                msg: mensaje
            });
        }
    }
    return false;
};
util.checkExtension = function (filename, extension) {
    var index = filename.lastIndexOf(".");
    if (index > 0 && filename.substring(index) == extension) {
        return true;
    } else {
        return false;
    }
};
util.checkCaracteresProhibidos = function (val) {
    var fileValid = /\\|\/|:|\*|\?|"|\||<|>/.test(val);
    if (fileValid) {
        return false;
    }
    return true;
};
util.enterToTab = function () {
    if (!event) var event = window.event;
    if (event && event.keyCode == 13) {
        var el = Ext.get(event.srcElement);
        if (!el.hasClass('non-enterToTab')) {
            try {
                event.keyCode = 9;
                return event.keyCode;
            } catch (err) {}
        }
    }
};
util.reverseDate = function (fecha, separador) {
    var items;
    if (fecha.indexOf('/') != -1) {
        items = fecha.split('/');
    } else {
        items = fecha.split('-');
    }
    return items.reverse().join(separador);
};
util.isAvailableComentarioRechazoAbogado = function (actuacion) {
    if (Ext.isDefined(actuacion.comentariorechazoabogado)) {
        return actuacion.comentariorechazoabogado.length > 0 && (actuacion.estado == TIPO_ESTADO_ACTUACION_PENDIENTE || actuacion.estado == TIPO_ESTADO_ACTUACION_RECHAZADO);
    }
    return false;
};
util.hasAvailableComprobante = function (actuacion) {
    if (Ext.isDefined(actuacion.numeroRepertorio) && Ext.isDefined(actuacion.agnoRepertorio)) {
        return true;
    }
    return false;
};
util.crearCookie = function (nombre, valor) {
    var cp = new Ext.state.CookieProvider({
        expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 1)),
        domain: "extjs.com"
    });
    Ext.state.Manager.setProvider(cp);
    Ext.util.Cookies.set(nombre, valor);
};
util.clone = function (o) {
    return Ext.util.JSON.decode(Ext.util.JSON.encode(o));
};
util.Format = function () {
    return {
        test: function () {
            log.Log4JS.debug('format.test');
        },
        tomadoRenderer: function (tomado, column, record, rowIndex, colIndex, store) {
            if (tomado) {
                return '<img src="images/icons/lock.png" class="icon icon-lock" ></img>';
            } else {
                return '';
            }
        },
        prohibicionRenderer: function (prohibicion, column, record, rowIndex, colIndex, store) {
            if (prohibicion) {
                return '<img src="images/icons/tick.png" class="icon icon-tick" ></img>';
            } else {
                return '';
            }
        },
        sinoRenderer: function (valor, column, record, rowIndex, colIndex, store) {
            if (valor) {
                return 'Si';
            } else {
                return 'No';
            }
        },
        estadoRecepcionRenderer: function (valor, column, record, rowIndex, colIndex, store) {
            switch (valor) {
                case 'ok':
                    return '<img src="images/icons/tick.png" class="icon icon-tick" title="' + I18n.commons.actuacionRecepcionada + '"></img>';
                case 'esperando':
                    return '<img src="images/icons/page_white_go.png" class="icon icon-tick" title="' + I18n.commons.actuacionPorRecepcionar + '"></img>';
                case 'error':
                default:
                    return '<img src="images/icons/cross.gif" class="icon icon-tick" title="' + I18n.commons.actuacionErrorAlRecepcionar + '"></img>';
            }
        },
        adjuntoRenderer: function (valor, column, record, rowIndex, colIndex, store) {
            return util.Format.formatAdjuntoLink(record.get('nodeid'), record.get('nombre'));
        },
        personaNaturalStatusRenderer: function (valor, column, record, rowIndex, colIndex, store) {
            switch (valor) {
                case CONTRATANTE_ESTADO_VALIDO:
                    return '<img src="images/icons/tick.png" class="icon icon-tick" title="' + I18n.commons.contratanteValido + '"></img>';
                case CONTRATANTE_ESTADO_INVALIDO:
                    return '<img src="images/icons/cross.gif" class="icon icon-tick" title="' + I18n.commons.contratanteInvalido + '"></img>';
                case CONTRATANTE_ESTADO_DESCONOCIDO:
                    return '<img src="images/icons/help.png" class="icon icon-tick" title="' + I18n.commons.contratanteIndefinido + '"></img>';
                case CONTRATANTE_ESTADO_SPINNER:
                    return '<img src="images/loading.gif" class="icon icon-tick" title="' + I18n.commons.contratanteBuscando + '"></img>';
                case CONTRATANTE_ESTADO_LOCAL_INVALIDO:
                    return '<img src="images/icons/cross.gif" class="icon icon-tick" title="' + I18n.commons.contratanteLocalInvalido + '"></img>';
                case CONTRATANTE_ESTADO_LOCAL_VALIDO:
                    return '<img src="images/icons/tick.png" class="icon icon-tick" title="' + I18n.commons.contratanteLocalValido + '"></img>';
                default:
                    return '';
            }
        },
        ppuValidationRender: function (valor, column, record, rowIndex, colIndex, store) {
            valor = parseInt(valor);
            switch (valor) {
                case PPU_VALIDA:
                    return '<img src="images/icons/tick.png" class="icon icon-tick"></img>';
                case PPU_INVALIDA:
                    return '<img src="images/icons/cross.gif" class="icon icon-tick" title="' + I18n.commons.ppuInvalida + '"></img>';
                case PPU_BUSCANDO:
                    return '<img src="images/loading.gif" class="icon icon-tick"></img>';
                case PPU_UNKNOW:
                    return '<img src="images/s.gif" class="icon icon-tick"></img>';
                default:
                    return '<img src="images/icons/cross.gif" class="icon icon-tick" title="' + I18n.commons.ppuInvalida + '"></img>';
            }
        },
        isValidadoRenderer: function (tomado, column, record, rowIndex, colIndex, store) {
            if (!tomado) {
                return '<img src="images/icons/cross.gif" class="icon icon-tick" title="' + I18n.mensajes.error.revisionAutomatica + '"></img>';
            } else {
                return '<img src="images/icons/tick.png" class="icon icon-tick" title="' + I18n.mensajes.ok.revisionAutomatica + '"></img>';
            }
        },
        ppuBloqueadoRenderer: function (valor, column, record, rowIndex, colIndex, store) {
            if (util.Format.isPPULock(record)) {
                return '<img src="images/icons/lock.png" class="icon icon-lock" title="' + I18n.commons.ppuBloqueada + '"></img>';
            } else {
                return '';
            }
        },
        tipoActuacionRenderer: function (valor, column, record, rowIndex, colIndex, store) {
            var tipoActuacion = valor;
            var index = valor.indexOf('ACTUACION ');
            if (index != -1) {
                tipoActuacion = valor.substring(10);
            }
            var tipoActuaciones = {
                INSCRIPCION: 'Inscripción',
                ALZAMIENTO: 'Alzamiento',
                MODIFICACION: 'Modificación'
            };
            tipoActuacion = tipoActuaciones[tipoActuacion];
            return tipoActuacion;
        },
        estadoActuacionRenderer: function (valor, column, record, rowIndex, colIndex, store) {
            return valor.capitalize();
        },
        ouRenderer: function (valor, column, record, rowIndex, colIndex, store) {
            return valor.capitalize(true);
        },
        isPPULock: function (record) {
            return !record.get('modificar') && record.get('patenteProhibicion');
        },
        pagada: function (isPagada) {
            if (isPagada) {
                return '<img src="images/icons/tick.png" class="icon icon-tick" title="' + 'Actuación ya ha sido pagada.' + '"></img>';
            } else {
                return '<img src="images/icons/cross.gif" class="icon icon-tick" title="' + 'Actuación aún no ha sido pagada.' + '"></img>';
            }
        },
        constituyentes: function (valor, column, record, rowIndex, colIndex, store) {
            var index = valor.indexOf(',');
            if (index != -1) {
                return valor.substring(0, index) + ' ...';
            }
            return valor;
        },
        getTplCondicion: function (field) {
            return new Ext.XTemplate('{' + field + ':this.formatCondicion}', {
                formatCondicion: function (val) {
                    if (val) {
                        return '<img src="images/icons/tick.png" class="icon icon-tick" ></img>';
                    } else {
                        return '';
                    }
                }
            });
        },
        getTplNumber: function (field) {
            return new Ext.XTemplate('{' + field + ':this.formatNumber}', {
                formatNumber: function (val) {
                    return Ext.util.Format.number(val, I18n.format.amount.list);
                }
            });
        },
        getTplRut: function (field) {
            return new Ext.XTemplate('{' + field + ':this.formatRut(val)}', {
                formatRut: function (val) {
                    return util.Format.formatRut(val);
                }
            });
        },
        getTplEnumCalidadPersona: function (field) {
            return new Ext.XTemplate('{' + field + ':this.getEnumText(val)}', {
                getEnumText: function (val) {
                    var category = Srp.CategoryManager.getCategory(Srp.CategoryManager.TIPO_CALIDAD_PERSONA, val);
                    if (category) {
                        return category.text;
                    } else {
                        return val;
                    }
                }
            });
        },
        getTplEnumIdentificadorTipoExt: function (field) {
            return new Ext.XTemplate('{' + field + ':this.getEnumText(val)}', {
                getEnumText: function (val) {
                    var category = Srp.CategoryManager.getCategory(Srp.CategoryManager.IDENTIFICADOR_TIPO_EXTRANJERO, val);
                    if (category) {
                        return category.text;
                    } else {
                        return val;
                    }
                }
            });
        },
        getTplIdentificador: function (fieldCalidad, fieldIdentificador, fieldPais) {
            return new Ext.XTemplate('{' + fieldIdentificador + ':this.formatIdentificador(' + '{' + fieldCalidad + '}' + ')} {' + fieldPais + ':this.formatPais}', {
                formatIdentificador: function (val, row) {
                    if (val) {
                        return util.Format.formatIdentificador(val, row.personaTipo);
                    } else {
                        return '';
                    }
                },
                formatPais: function (val) {
                    var category = Srp.CategoryManager.getCategory(Srp.CategoryManager.PAIS, val);
                    if (Ext.isObject(category) && category.text.length > 0) {
                        return '(' + category.text + ')';
                    } else {
                        return '';
                    }
                }
            });
        },
        getTplPais: function (field) {
            return new Ext.XTemplate('{' + field + ':this.formatPais}', {});
        },
        formatIdentificador: function (identificador, calidad) {
            var val = '';
            if (Ext.isDefined(identificador) && identificador != null && identificador.length > 0) {
                if (calidad != CALIDAD_EXTRANJERA) {
                    val = util.Format.formatRut(identificador);
                } else {
                    val = identificador;
                }
            }
            return val;
        },
        formatShortLink: function (s) {
            var limit = 38;
            if (s.length > limit) {
                return s.substring(0, limit - 3) + '...';
            }
            return s;
        },
        formatAdjuntoLink: function (nodeid, nombre) {
            nombre = util.Format.formatAdjunto(nombre);
            return '<span><a href="' + util.Format.formatURLAdjunto(nodeid, nombre) + '" target="_blank">' + util.Format.formatShortLink(nombre) + '</a></span>';
        },
        formatURLAdjunto: function (nodeid, nombre) {
            nombre = util.Format.formatAdjunto(nombre);
            nombre = escape(nombre);
            var adjunto = nodeid + '/' + nombre;
            return Srp.WebScriptManager.getUrl('WS_ADJUNTO_DOWNLOAD', adjunto);
        },
        formatAdjunto: function (nombre) {
            if (Ext.isIE) {
                if (Ext.isDefined(nombre)) {
                    var index = nombre.lastIndexOf('\\');
                    if (index != -1) {
                        nombre = nombre.substring(index + 1, nombre.length);
                    }
                }
            }
            return nombre;
        },
        formatTipoActuacion: function (tipo) {
            switch (tipo) {
                case TIPO_ACTUACION_INSCRIPCION:
                    return I18n.commons.inscripcion;
                case TIPO_ACTUACION_MODIFICACION:
                    return I18n.commons.modificacion;
                case TIPO_ACTUACION_ALZAMIENTO:
                    return I18n.commons.alzamiento;
            }
        },
        formatDate: function (val) {
            if (!val) {
                return val;
            }
            var formattedDate = val;
            if (typeof (val) === 'string' && val.indexOf('/') == -1) {
                formattedDate = new Date(val).format(I18n.format.date);
            } else if (typeof (val) == 'number') {
                formattedDate = new Date(val).format(I18n.format.date);
            } else if (typeof (val) != 'string') {
                formattedDate = formattedDate.format(I18n.format.date);
            }
            return formattedDate;
        },
        formatDateFormat: function (val, format) {
            if (!val) {
                return val;
            }
            var formattedDate = val;
            if (typeof (val) === 'string' && val.indexOf('/') == -1) {
                formattedDate = new Date(val).format(format);
            } else if (typeof (val) != 'string') {
                formattedDate = formattedDate.format(format);
            }
            return formattedDate;
        },
        formatCondicion: function (val) {
            if (val) {
                return '<img src="images/icons/tick.png" class="icon icon-tick" ></img>';
            } else {
                return '';
            }
        },
        formatRut: function (num) {
            if (!(num)) {
                return;
            }
            var largo = num.length;
            var i, dd, ss, largo2, valor, punto, nvalor;
            dd = this.replace(num, ".", "");
            dd = this.replace(dd, ",", "");
            dd = this.replace(dd, "-", "");
            if (this.len(dd) <= 1) {
                if (this.isNumeric(dd) == false) {
                    num = "";
                    return (num);
                }
            } else {
                if (this.isNumeric(this.left(dd, this.len(dd) - 1)) == false) {
                    num = "";
                    return (num);
                }
            }
            largo2 = this.len(dd);
            i = 3;
            valor = this.left(dd, largo2 - 1);
            largo = this.len(valor);
            nvalor = "";
            if (largo2 >= 4) {
                while (i <= largo) {
                    if (i < largo) {
                        punto = ".";
                    } else {
                        punto = "";
                    }
                    nvalor = punto + this.right(valor, 3) + nvalor;
                    if (this.len(valor) > 1) {
                        valor = this.left(valor, this.len(valor) - 3);
                    }
                    i = i + 3;
                }
                nvalor = valor + nvalor;
                nvalor = nvalor + "-" + this.right(dd, 1);
                return (nvalor);
            } else {
                if (largo2 > 1) {
                    nvalor = this.left(valor, 3) + "-" + this.right(dd, 1);
                } else {
                    nvalor = this.replace(num, "-", "");
                }
                return (nvalor);
            }
        },
        isValidRut: function (num) {
            if (!(num)) {
                return false;
            }
            var largo = num.length;
            var i, dd, ss, largo2, valor, punto, nvalor;
            dd = this.replace(num, ".", "");
            dd = this.replace(dd, ",", "");
            dd = this.replace(dd, "-", "");
            if (this.len(dd) <= 1) {
                if (this.isNumeric(dd) == false) {
                    num = "";
                    return (num);
                }
            } else {
                if (this.isNumeric(this.left(dd, this.len(dd) - 1)) == false) {
                    num = "";
                    return (num);
                }
            }
            largo2 = this.len(dd);
            i = 3;
            valor = this.left(dd, largo2 - 1);
            largo = this.len(valor);
            nvalor = "";
            if (largo2 >= 1) {
                var digito = util.Format.dv(valor);
                var digitoIngresado = this.right(dd, 1);
                if (digito == digitoIngresado.toLowerCase()) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        dv: function dv(T) {
            var M = 0,
                S = 1;
            for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
            return S ? S - 1 : 'k';
        },
        replace: function (valor, n, c) {
            var valor = valor.split(n);
            valor = valor.join(c);
            return valor;
        },
        isNumeric: function (valor) {
            var log = valor.length;
            var sw = "S";
            for (var x = 0; x < log; x++) {
                v1 = valor.substr(x, 1);
                v2 = parseInt(v1);
                if (isNaN(v2)) {
                    sw = "N";
                }
            }
            if (sw == "S") {
                return true;
            } else {
                return false;
            }
        },
        lTrim: function (date) {
            var i = 0;
            var j = date.length - 1;
            if (date == null) return (false);
            for (i = 0; i < date.length; i++) {
                if (date.substr(i, 1) != ' ' && date.substr(i, 1) != '\t') break;
            }
            if (i <= j) return (date.substr(i, (j + 1) - i));
            else return ('');
        },
        rTrim: function (date) {
            var i = 0;
            var j = date.length - 1;
            if (date == null) return (false);
            for (j = date.length - 1; j >= 0; j--) {
                if (date.substr(j, 1) != ' ' && date.substr(j, 1) != '\t') break;
            }
            if (i <= j) return (date.substr(i, (j + 1) - i));
            else return ('');
        },
        trim: function (date) {
            if (date == null) return (false);
            return this.rTrim(this.lTrim(date));
        },
        space: function (n) {
            var t = "";
            for (var i = 1; i <= n; i++)
            t = t + " ";
            return t;
        },
        len: function (d) {
            if (this.trim(d) != "") {
                return (d.length);
            } else {
                return (0);
            }
        },
        right: function (s, n) {
            var t = s.length;
            if (n > t) n = t;
            return s.substring(t - n, t);
        },
        left: function (s, n) {
            if (n > s.length) n = s.length;
            return s.substring(0, n);
        },
        mid: function (s, n, c) {
            var numargs = mid.arguments.length;
            if (numargs < 3) c = s.length - n + 1;
            if (c < 1) c = s.length - n + 1;
            if (n + c > s.length) c = s.length - n + 1;
            if (n > s.length) return "";
            return s.substring(n - 1, n + c - 1);
        },
        strTrim: function (cmp) {
            var value = cmp.getValue();
            var value = value.ctrim();
            var value = value.trim();
            cmp.setValue(value);
            return value;
        },
        formatRutToSave: function (rut) {
            if (rut != undefined && rut.length > 1) {
                var newRut = rut;
                var lengthNewRut = 0;
                newRut = this.replace(newRut, ".", "");
                newRut = this.replace(newRut, ",", "");
                newRut = this.replace(newRut, "-", "");
                lengthNewRut = newRut.length;
                return newRut.substring(0, lengthNewRut - 1) + '-' + newRut.substring(lengthNewRut - 1, lengthNewRut);
            } else {
                return rut;
            }
        },
        changeRutsActuacionToSave: function (actuacion) {
            if (actuacion.constituyentes != undefined && actuacion.constituyentes.length > 0) {
                for (var i = 0; i < actuacion.constituyentes.length; i++) {
                    if (actuacion.constituyentes[i].personaTipo != undefined && actuacion.constituyentes[i].personaTipo.toLowerCase() !== 'extranjero') {
                        actuacion.constituyentes[i].identificador = this.formatRutToSave(actuacion.constituyentes[i].identificador);
                    }
                }
            }
            if (actuacion.deudores != undefined && actuacion.deudores.length > 0) {
                for (var i = 0; i < actuacion.deudores.length; i++) {
                    if (actuacion.deudores[i].personaTipo != undefined && actuacion.deudores[i].personaTipo.toLowerCase() !== 'extranjero') {
                        actuacion.deudores[i].identificador = this.formatRutToSave(actuacion.deudores[i].identificador);
                    }
                }
            }
            if (actuacion.acreedor != undefined && actuacion.acreedor.personaTipo != undefined && actuacion.acreedor.personaTipo.toLowerCase() !== 'extranjero') {
                actuacion.acreedor.identificador = this.formatRutToSave(actuacion.acreedor.identificador);
            }
            return actuacion;
        },
        cleanSafeRunForValidation: function (run) {
            run = util.Format.replace(run, '.', '');
            run = util.Format.replace(run, ',', '');
            run = util.Format.replace(run, '-', '');
            run = run.substring(0, run.length - 1);
            return run;
        }
    };
}();
String.prototype.ctrim = function () {
    return this.replace(/\s+/g, " ");
};
util.Sorter = function () {
    return {
        ous: function (a, b) {
            if (a.text < b.text) return -1;
            if (a.text > b.text) return 1;
            return 0;
        }
    }
}();
Ext.ns('util');
util.ComponentUtils = function () {
    return {
        getHtmlLink: function (fileName, fileUrl) {
            if (fileName) {
                fileUrl = !fileUrl ? 'javascript:alert("No existe url de archivo");' : fileUrl;
                var value = " <a href=\"" + Srp.WebScriptManager.getAuthenticateUrl(fileUrl) + "\" target='_blank' >" + util.Format.formatAdjunto(fileName) + "</a>";
                return value;
            }
            return '';
        },
        createItems: function (response, componentsDefinition, panelCounter) {
            var items = new Array();
            for (var k = 0; k < componentsDefinition.length; k++) {
                if (!(componentsDefinition[k])) {
                    continue;
                }
                var itemsData = eval(componentsDefinition[k][0]);
                if (itemsData) {
                    if (itemsData instanceof Array) {
                        if (itemsData.length <= 0) {
                            continue;
                        }
                    }
                    var component;
                    var index = ((itemsData instanceof Array && itemsData.length == 1) || !(itemsData instanceof Array)) ? 0 : 1;
                    if (componentsDefinition[k][1] instanceof Array && componentsDefinition[k][1].length > 0) {
                        component = eval('new ' + componentsDefinition[k][1][index]);
                    } else {
                        component = eval('new ' + componentsDefinition[k][1]);
                    }
                    if (panelCounter) {
                        if (component.iconCls == 'icon-wizard-step-') {
                            component.iconCls += panelCounter++;
                        }
                    }
                    items.push(component);
                }
            }
            return items;
        },
        buildHorizontalItems: function (itemsDefinitions, title, response) {
            var items = {
                xtype: 'fieldset',
                title: title,
                layout: 'column',
                items: [{
                    xtype: 'fieldset',
                    columnWidth: 0.5,
                    border: false,
                    defaults: {
                        width: 150,
                        labelStyle: 'width:150px;',
                        xtype: 'displayfield'
                    },
                    items: util.Component.buildItems(itemsDefinitions, true)
                }, {
                    xtype: 'fieldset',
                    columnWidth: 0.5,
                    border: false,
                    defaults: {
                        width: 150,
                        labelStyle: 'width:150px;',
                        xtype: 'displayfield'
                    },
                    items: util.Component.buildItems(itemsDefinitions, false)
                }]
            }
            return items;
        },
        buildItems: function (itemsDefinitions, isLeft) {
            var items = [];
            for (var i = 0; i < itemsDefinitions.length; i++) {
                if (isLeft) {
                    items.push({
                        fieldLabel: itemsDefinitions[i][0],
                        name: itemsDefinitions[i][1]
                    });
                }
                isLeft = !isLeft;
            }
            return items;
        },
        loadData: function (items, response) {
            for (var k = 0; k < items.length; k++) {
                try {
                    items.items[k].loadData(response);
                } catch (x) {}
            }
        },
        setValue: function (element, idElement, value) {
            var k = 0;
            if (element.items.items && element.items.items.length) {
                for (k = 0; k < element.items.items.length; k++) {
                    var childElement = element.items.items[k];
                    try {
                        if (childElement.xtype) {
                            if (childElement.xtype == 'textfield' || childElement.xtype == 'displayfield') {
                                if (childElement.name == idElement) {
                                    childElement.value = value;
                                    return;
                                }
                            }
                            if (childElement.xtype && childElement.xtype.indexOf('listview') != -1) {
                                if (childElement.name == idElement) {
                                    childElement.store.loadData(value);
                                    return;
                                }
                            } else if (childElement.xtype == 'fieldset' || childElement.xtype == 'panel') {
                                this.setValue(childElement, idElement, value);
                            }
                        }
                    } catch (x) {}
                }
            } else {}
        },
        isEmptyField: function (element, idElement) {
            return Ext.isEmpty(this.getField(element, idElement).getValue());
        },
        getField: function (element, idElement) {
            var k = 0;
            if (element.items && element.items.items && element.items.items.length) {
                for (k = 0; k < element.items.items.length; k++) {
                    var childElement = element.items.items[k];
                    try {
                        if (childElement.xtype) {
                            if (childElement.xtype == 'textfield' || childElement.xtype == 'displayfield') {
                                if (childElement.name == idElement || childElement.itemId == idElement) {
                                    return childElement
                                }
                            } else if (childElement.xtype instanceof Ext.Container) {
                                this.getField(childElement, idElement);
                            }
                        }
                    } catch (x) {
                        log.Log4JS.debug(x);
                    }
                }
            } else {}
        },
        isValidForms: function (element) {
            var k = 0;
            if (element.items && element.items.items && element.items.items.length) {
                for (k = 0; k < element.items.items.length; k++) {
                    var childElement = element.items.items[k];
                    try {
                        if (childElement.form) {
                            log.Log4JS.debug(childElement.itemId + ': ' + childElement.getForm().isValid())
                        } else if (childElement instanceof Ext.grid.GridPanel) {
                            if (childElement.itemId) {
                                log.Log4JS.debug(childElement.itemId + ', hidden: ' + childElement.hidden)
                            } else {
                                log.Log4JS.debug(childElement.id + ', hidden: ' + childElement.hidden)
                            }
                        } else {
                            util.Component.isValidForms(childElement);
                        }
                    } catch (x) {
                        log.Log4JS.debug('error: ' + x)
                    }
                }
            } else {}
        },
        get: function (element, idElement) {
            var k = 0;
            if (element.items.items && element.items.items.length) {
                for (k = 0; k < element.items.items.length; k++) {
                    var childElement = element.items.items[k];
                    try {
                        if (childElement.xtype) {
                            if (childElement.xtype == 'textfield' || childElement.xtype == 'displayfield' || childElement.xtype == 'listview' || childElement.xtype == 'formpanel') {
                                if (childElement.itemId == idElement) {
                                    return childElement;
                                }
                            } else if (childElement.xtype == 'fieldset' || childElement.xtype == 'panel' || childElement.xtype == 'container' || childElement.xtype == 'tabpanel') {
                                this.get(childElement, idElement);
                            }
                        }
                    } catch (x) {}
                }
            } else {}
        },
        print: function (panel) {
            Log4js.debug('util.ComponentUtils.print()');
            var miventana = new Ext.Window({
                renderTo: document.body,
                title: 'Mi ventana',
                width: 750,
                height: 600,
                maximizable: false,
                modal: true,
                closeAction: 'hide',
                resizable: false,
                minWidth: 640,
                minHeight: 480,
                maximized: false,
                constrain: true,
                autoScroll: true
            })
            miventana.add(panel);
            miventana.doLayout();
            var rederedPanel = miventana.getComponent('resumenActuacionPanel');
            Ext.ux.Printer.print(rederedPanel, miventana.width, miventana.height);
            miventana.destroy();
        },
        printPanel: function (panel) {
            Log4js.debug('util.ComponentUtils.printPanel() panet.itemID:' + panel.getItemId());
            var miventana = new Ext.Window({
                renderTo: document.body,
                title: 'Mi ventana',
                width: 750,
                height: 600,
                maximizable: false,
                modal: true,
                closeAction: 'hide',
                resizable: false,
                minWidth: 640,
                minHeight: 480,
                maximized: false,
                constrain: true
            })
            miventana.add(panel);
            miventana.doLayout();
            var rederedPanel = miventana.getComponent(panel.getItemId());
            Ext.ux.Printer.print(rederedPanel, miventana.width, miventana.height);
        },
        clone: function (obj) {
            if (obj == null || typeof (obj) != 'object') return obj;
            var temp = obj.constructor();
            for (var key in obj)
            temp[key] = clone(obj[key]);
            return temp;
        }
    }
}();
util.Component = util.ComponentUtils;
Ext.ns('util');
util.JSON = function () {
    return {
        addItems: function (json, array) {
            for (e in array) {
                if (e) {
                    json[e] = array[e];
                }
            }
        },
        join: function (jsones) {
            var jsonUnion = {};
            var k = 0;
            for (var i = 0; i < jsones.length; i++) {
                var json = jsones[i];
                for (key in json) {
                    jsonUnion[key] = json[key];
                }
            }
            return jsonUnion;
        },
        print: function (json) {
            if (console) {
                log.Log4JS.debug(Ext.util.JSON.encode(json));
            }
        },
        filterBy: function (array, name, value) {
            var filterArray = new Array();
            if (!array) {
                return filterArray;
            }
            for (var i = 0; i < array.length; i++) {
                if (!array[i][name] || array[i][name] == value) {
                    filterArray.push(array[i]);
                }
            }
            return filterArray;
        },
        getNotEmptyValues: function (json) {
            var cleanedJson = {};
            for (key in json) {
                var value = eval('json.' + key);
                if (Ext.isDefined(value)) {
                    if (typeof value === 'string' && value != '' && value != "") {
                        eval('cleanedJson.' + key + ' = "' + value + '";');
                    } else if (typeof value === 'object' && value != '' && value != "") {
                        eval('cleanedJson.' + key + ' = "' + value + '";');
                    } else if (!(typeof value === 'string') && !(typeof value === 'date')) {
                        eval('cleanedJson.' + key + ' = ' + value + ';');
                    }
                }
            }
            return cleanedJson;
        },
        emptyToNull: function (json) {
            var cleanedJson = {};
            for (key in json) {
                var value = json[key];
                if (Ext.isDefined(value)) {
                    if (typeof value === 'string' && value != '' && value != "") {
                        cleanedJson[key] = value;
                    } else if (typeof value === 'object' && value != '' && value != "") {
                        cleanedJson[key] = value;
                    } else if (!(typeof value === 'string') && !(typeof value === 'date')) {
                        cleanedJson[key] = value;
                    } else {
                        cleanedJson[key] = null;
                    }
                }
            }
            return cleanedJson;
        },
        countObject: function (obj) {
            var count = 0;
            for (k in obj)
            if (obj.hasOwnProperty(k)) count++;
            return count;
        },
        hasNonEmptyValues: function (obj) {
            var nonEmptyValues = false;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    if (k != 'reinscripcion') {
                        var value = obj[k];
                        if (Ext.isDefined(value) && value != null && value.length > 0) {
                            return true;
                        }
                    }
                }
            }
            return nonEmptyValues;
        }
    };
}();
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
Function.method('inherits', function (parent) {
    var d = 0;
    var p = (this.prototype = new parent());
    this.method('base', function base(name) {
        var f;
        var t = d;
        var v = parent.prototype;
        if (t) {
            while (t) {
                v = v.constructor.prototype;
                t -= 1;
            }
            f = v[name];
        } else {
            f = p[name];
            if (f == this[name]) {
                f = v[name];
            }
        }
        d += 1;
        var r = f.apply(this, Array.prototype.slice.apply(arguments, [1]));
        d -= 1;
        return r;
    });
    return this;
});
Function.method('swiss', function (parent) {
    for (var i = 1; i < arguments.length; ++i) {
        var name = arguments[i];
        this.prototype[name] = parent.prototype[name];
    }
    return this;
});
Ext.ns('util');
util.Barcode = (function () {
    var barcodeObjects = null;
    String.format = function (formatString) {
        if (arguments.length < 2) {
            return formatString;
        }
        var replArray = arguments;
        return formatString.replace(/\{(\d+)\}/g, function (match, i) {
            return replArray[+i + 1];
        });
    };

    function createAttribute(name, value) {
        var attr = document.createAttribute(name);
        attr.nodeValue = value;
        return attr;
    };

    function BarCodeUI(nodeID, codigoBarra) {
        var self = this;
        var codigo = codigoBarra;
        log.Log4JS.debug('codigo: ' + codigo)
        var countryDispID = String.format("{0}_countryCode", nodeID);
        var group1DispID = String.format("{0}_group1", nodeID);
        var group2DispID = String.format("{0}_group2", nodeID);
        var descDispID = String.format("{0}_desc", nodeID);
        var countryDisp = document.getElementById(countryDispID).firstChild;
        var group1Disp = document.getElementById(group1DispID).firstChild;
        var group2Disp = document.getElementById(group2DispID).firstChild;
        var descDisp = document.getElementById(descDispID).firstChild;
        var digits = ["", String.format("{0}_digit01", nodeID), String.format("{0}_digit02", nodeID), String.format("{0}_digit03", nodeID), String.format("{0}_digit04", nodeID), String.format("{0}_digit05", nodeID), String.format("{0}_digit06", nodeID), String.format("{0}_digit07", nodeID), String.format("{0}_digit08", nodeID), String.format("{0}_digit09", nodeID), String.format("{0}_digit10", nodeID), String.format("{0}_digit11", nodeID), String.format("{0}_digit12", nodeID)];
        BarCodeUI.method('GetCodeInput', function () {
            return codigo;
        });
        BarCodeUI.method('SetCodeInput', function (value) {
            codigo = value;
        });
        BarCodeUI.method('SetDigit', function (pos, pattern) {
            var digitNode = document.getElementById(digits[pos]);
            var bits = digitNode.getElementsByTagName("div");
            for (var j = 0; j < bits.length; ++j) {
                bits[j].setAttributeNode(createAttribute("class", pattern[j] ? "bitOn" : "bitOff"));
            }
        });
        BarCodeUI.method('DisplayText', function () {
            var code = codigo;
            var countryCode = code.charAt(0);
            var group1 = code.substring(1, 7);
            var group2 = code.substring(7, 13);
            countryDisp.nodeValue = countryCode;
            group1Disp.nodeValue = group1;
            group2Disp.nodeValue = group2;
            descDisp.nodeValue = "";
        });
        BarCodeUI.method('NodeID', function () {
            return nodeID;
        });
        BarCodeUI.method('GetCode', function () {
            return codigo;
        });
        BarCodeUI.method('GetDesc', function () {
            return "";
        });
        BarCodeUI.lengthCheckScheduled = 0;
        BarCodeUI.lengthCheckTimeout = 100;
    };

    function BarCodeGenerator() {
        var self = this;
        BarCodeGenerator.method("Generate", function (ui) {
            var retVal = 0;
            var code = ui.GetCodeInput();
            code = code + this.CalculateChecksumDigit(code);
            for (var i = 1; i < code.length; ++i) {}
            ui.DisplayText();
            return retVal;
        });
        BarCodeGenerator.method("CalculateChecksumDigit", function (code) {
            var checkSum = 0;
            return checkSum;
        });
    };

    function EAN13Generator() {
        var odd = [
            [0, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 0, 1],
            [0, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 0, 1],
            [0, 1, 0, 1, 1, 1, 1],
            [0, 1, 1, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 1],
            [0, 0, 0, 1, 0, 1, 1]
        ];
        var even = [
            [0, 1, 0, 0, 1, 1, 1],
            [0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 0, 0, 0, 1],
            [0, 0, 1, 1, 1, 0, 1],
            [0, 1, 1, 1, 0, 0, 1],
            [0, 0, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 0, 1],
            [0, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 1]
        ];
        var right = [
            [1, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 0, 0, 1, 0],
            [1, 0, 1, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 1, 0],
            [1, 0, 1, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 0],
            [1, 1, 1, 0, 1, 0, 0]
        ];
        var parity = [
            [odd, odd, odd, odd, odd, odd],
            [odd, odd, even, odd, even, even],
            [odd, odd, even, even, odd, even],
            [odd, odd, even, even, even, odd],
            [odd, even, odd, odd, even, even],
            [odd, even, even, odd, odd, even],
            [odd, even, even, even, odd, odd],
            [odd, even, odd, even, odd, even],
            [odd, even, odd, even, even, odd],
            [odd, even, even, odd, even, odd]
        ];
        var self = this;
        EAN13Generator.method("Generate", function (ui) {
            var retVal = 0;
            var code = ui.GetCodeInput();
            if (code.length > 12) {
                code = code.substring(0, 12);
            } else if (code.length == 11) {
                code = "0" + code;
            }
            code = code + this.CalculateChecksumDigit(code);
            log.Log4JS.debug('code: ' + code)
            ui.SetCodeInput(code);
            var parityDigit = parseInt(code.charAt(0));
            var parityTable = parity[parityDigit];
            for (var i = 1; i < code.length; ++i) {
                var num = +code.charAt(i);
                var pattern = null;
                if (i < 7) {
                    pattern = parityTable[i - 1][num];
                } else {
                    pattern = right[num];
                }
                ui.SetDigit(i, pattern);
            }
            ui.DisplayText();
            return retVal;
        });
        EAN13Generator.method("CalculateChecksumDigit", function (code) {
            var sum = 0;
            var digit = 0;
            for (var i = code.length; i >= 1; --i) {
                digit = parseInt(code.substring(i - 1, i));
                if (i % 2 == 0) {
                    sum += digit * 3;
                } else {
                    sum += digit * 1;
                }
            }
            var checkSum = (10 - (sum % 10)) % 10;
            return checkSum;
        });
        EAN13Generator.inherits(BarCodeGenerator);
    };
    return {
        generate: function (codigo) {
            barcodeObjects = {
                "EAN-13": {
                    generator: new EAN13Generator(),
                    ui: new BarCodeUI("EAN-13", codigo)
                }
            };
            barcodeObjects["EAN-13"].generator.Generate(barcodeObjects["EAN-13"].ui);
        }
    };
})();
Ext.apply(Ext.form.VTypes, {
    exclusionNotZero: function (val, field) {
        var pairValue = 0;
        if ((pairValue > 0) && (val > 0)) {
            field.markInvalid('Un movimiento no puede tener a la vez haber y deber');
            return false;
        } else if ((pairValue == 0) && (val == 0)) {
            field.markInvalid('Un movimiento no puede tener haber y deber a cero');
            return false;
        } else {
            field.clearInvalid();
            return true;
        }
        return true;
    },
    rut: function (v, field) {
        if (!v) {
            return false;
        } else {
            if (v.length < 2) {
                return false;
            } else {
                return util.Format.isValidRut(v);
            }
        }
    },
    rutText: 'El identificador ingresado no es válido.',
    rutMask: /[a-z0-9_\.\-@\+]/i,
    identificadorExtranjero: function (val, field) {
        var regex = /^[0-9\.\-]+$/;
        return regex.test(val);
    },
    identificadorExtranjeroText: 'El identificador ingresado no es válido.',
    identificadorExtranjeroMask: /^[0-9\.\-]+$/,
    numeroRepertorioNotaria: function (val, field) {
        var regex = /^[0-9]+$/;
        return regex.test(val);
    },
    numeroRepertorioNotariaText: I18n.vtype.numeroRepertorioNotaria,
    agno: function (val, field) {
        var regex = /^(19|20)\d{2}$/;
        return regex.test(val);
    },
    agnoText: I18n.vtype.agno,
    daterange: function (val, field) {
        var date = field.parseDate(val);
        if (!date) {
            return false;
        }
        if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            var start = Ext.getCmp(field.startDateField);
            start.setMaxValue(date);
            this.dateRangeMax = date;
        } else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            var end = Ext.getCmp(field.endDateField);
            end.setMinValue(date);
            this.dateRangeMin = date;
        }
        return true;
    },
    repertorioagno: function (v) {
        return /^\d{12}$/.test(v);
    },
    repertorioagnoText: I18n.vtype.numeroRepertorioPrendas,
    repertorioagnoMask: /[\d]/i
});
var browsername;
Ext.ns('util');
util.applet_fu = {
    run: function (attributes, parameters, minimumVersion, fallbackContent) {
        var s = "";
        if (util.applet_fu.isIE()) {
            s = util.applet_fu.openTagIE(attributes);
        } else {
            s = util.applet_fu.openTagStandard(minimumVersion || '1.6.0');
        }
        s += util.applet_fu.writeAttributes(attributes);
        s += util.applet_fu.writeParameters(parameters);
        s += (fallbackContent || 'This content requires Java.');
        s += ('</object>');
        return s;
    },
    openTagStandard: function (minimumVersion) {
        return ('<object type="application/x-java-applet;version=' + minimumVersion + '"');
    },
    openTagIE: function (attributes) {
        var classid = attributes['classid'] || "clsid:CAFEEFAC-0016-0000-0000-ABCDEFFEDCBA";
        var codebase = attributes['codebase'] || "http://java.sun.com/update/1.6.0/jinstall-6u22-windows-i586.cab";
        return ('<object classid="' + classid + '" codebase=' + codebase + '"');
    },
    writeAttributes: function (attributes) {
        var s = "";
        for (attribute in attributes) {
            s += (" ");
            s += (attribute + "='" + attributes[attribute] + "'");
        }
        s += ('>');
        return s;
    },
    writeParameters: function (parameters) {
        var s = "";
        for (parameter in parameters) {
            s += ("<param name=" + parameter + " value='" + parameters[parameter] + "'>");
        }
        return s;
    },
    isIE: function () {
        if (navigator == null) return false;
        return navigator.userAgent.match(/MSIE/) != null;
    }
};
util.Signature = function () {
    return {
        obtenerAppletHtml: function (nodeIds, taskIds, isFirmaGrupo) {
            var libs = "lib/" + "fea" + Srp.conf.FeaClient.version;
            var appletHtml = util.applet_fu.run({
                "width": 130,
                "height": 100
            }, {
                "code": "cl.srcei.srpsd.sign.applet.WebSignApplet.class",
                "archive": ' ' + libs + '/fea.jar, ' + libs + '/commons-codec-1.3.jar, ' + libs + '/commons-httpclient-3.1.jar, ' + libs + '/commons-logging.jar ',
                "nodeIds": util.Signature.convertTaskIds(nodeIds),
                "taskIds": util.Signature.convertTaskIds(taskIds),
                "urlAlfresco": Srp.WebScriptManager.getAlfrescoUrl(),
                "isFirmaGrupo": isFirmaGrupo,
                "mayscript": 'true',
                "urlRefreshTarget": 'self',
                "jsCallback": 'Srp.Canvas.clean();',
                "urlRefreshPage": Srp.conf.Properties.LOCAL_URL,
                "sessionid": model.user.Usuario.getJSESSIONID(),
                "ticket": Srp.WebScriptManager.getTicket()
            }, "1.6", 'Debe instalar plugin <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Java v.1.6</a>');
            return appletHtml;
        },
        convertTaskIds: function (taskIds) {
            var taskIds2Tokens = "";
            for (var i = 0; i < taskIds.length; i++) {
                taskIds2Tokens = taskIds2Tokens + taskIds[i];
                if (i + 1 != taskIds.length) {
                    taskIds2Tokens += ";";
                }
            }
            return taskIds2Tokens;
        }
    };
}();
Ext.ns('Srp');
Srp.MessagesManager = function () {
    var messages = new Array();
    return {
        add: function (message) {
            messages.push(message);
        },
        removeAll: function () {
            messages = new Array();
        },
        getErrorMessage: function () {
            var StringError = '';
            if (messages.length > 0) {
                for (var i = 0; i < messages.length; ++i) {
                    var message = messages[i];
                    if (message.children.length > 0) {
                        StringError += '<b>' + message.parent + '</b><ul>';
                        for (var j = 0; j < message.children.length; ++j) {
                            StringError += '<li>&nbsp;&nbsp;&nbsp;-&nbsp;' + message.children[j] + '</li>';
                        }
                        StringError += '</ul>'
                    }
                }
            }
            return StringError;
        },
        getStringMessage: function () {
            var msg = "";
            if (messages.length > 0) {
                msg += messages[0];
            }
            return msg;
        }
    }
}();
Srp.Msg = Srp.MessagesManager;
Ext.ns('Srp');
Srp.WebScriptManager = (function () {
    var urlLocal = Srp.conf.Properties.LOCAL_URL;
    var urlAlfrescoDummy = Srp.conf.Properties.ALFRESCO_DUMMY_URL;
    var urlAlfrescoProxy = Srp.conf.Properties.ALFRESCO_PROXY_URL;
    var urlAlfrescoAdmin = Srp.conf.Properties.ALFRESO_ADMIN_URL;
    var ticket = '';
    var wsTimeout;

    function getQueryStringAlfrescoTicket() {
        var qString = '?alf_ticket=' + ticket;
        return qString;
    };
    return {
        setTicket: function (_ticket) {
            ticket = _ticket;
        },
        getAlfrescoUrl: function () {
            return urlAlfrescoProxy;
        },
        getUrl: function (serviceName, suffixUrl, isDummy) {
            if (isDummy || Srp.conf.Properties.USE_ALFRESCO_DUMMY) {
                var service = urlAlfrescoDummy + Srp.conf.DummyServices[serviceName];
            } else {
                var service = urlAlfrescoProxy + Srp.conf.Services[serviceName];
            }
            var url = service + (typeof suffixUrl != 'undefined' ? suffixUrl : '') + getQueryStringAlfrescoTicket();
            return url;
        },
        getLocalUrl: function (serviceName) {
            var service = urlLocal + 'js/conf/localCategories/' + Srp.conf.Services[serviceName];
            return service;
        },
        connectionError: function (response, options) {
            if (response.status == 401) {
                Srp.gui.messageBox.Error({
                    msg: I18n.mensajes.errorSesionInvalida
                });
                Ext.util.Cookies.set("_ticket", null);
                Srp.WebScriptManager.setTicket(undefined);
                window.location.reload();
            } else {
                Srp.gui.messageBox.Error({
                    msg: I18n.mensajes.errorComunicacionAlfresco
                });
            }
        },
        getAdminUrl: function (serviceName) {
            var service = urlAlfrescoAdmin + Srp.conf.Services[serviceName];
            return service;
        },
        getTicket: function () {
            return ticket;
        },
        checkLoginTicket: function () {
            if (ticket.length > 0) {
                return true;
            }
            return false;
        },
        getAuthenticateUrl: function (url) {
            if (url.indexOf('alf_ticket') == -1) {
                url = url + getQueryStringAlfrescoTicket();
            }
            return url;
        },
        revalidateTicket: function () {
            Log4js.debug('Srp.WebScriptManager.revalidateTicket()');
            Srp.FrontController.fireEvent('onRevalidateTicket');
            var timeoutRevalidateTicketAlfresco = Srp.conf.Properties.TIMEOUT_REVALIDATE_TICKET_ALFRESCO * 1000;
            wsTimeout = setTimeout("Srp.WebScriptManager.revalidateTicket();", timeoutRevalidateTicketAlfresco);
        },
        removeTimeout: function () {
            clearTimeout(wsTimeout);
        },
        onFailureSaveActuacion: function (form, action) {
            var errs = action.result.errors;
            var msg = errs[0];
            if (errs.length > 1) {
                for (var i = 1; i < errs.length; i++) {
                    msg += '<br />' + errs[i];
                }
            }
            var messageRawAlfresco = "hay actuaciones pendientes de inscripcion o modificacion que debe terminar antes de poder modificarlas o alzarlas";
            if (msg.indexOf(messageRawAlfresco) != -1) {
                msg = I18n.mensajes.error.actuacionConModificacionesPendientes;
            }
            Srp.gui.messageBox.Error({
                msg: msg
            });
            Srp.Canvas.goHome();
        },
        registrarEventos: function () {
            var revalidateTicketAlfrescoCmd = new Srp.command.RevalidateTicketAlfrescoCmd();
            revalidateTicketAlfrescoCmd.setParameter('obj', this);
            var removerEventos = new Srp.command.RemoverEventosCmd();
            removerEventos.setParameter('obj', this);
            var eventos = [{
                name: 'onRevalidateTicket',
                command: revalidateTicketAlfrescoCmd
            }, {
                name: 'Menu.onUpdateContent',
                command: removerEventos
            }];
            Srp.FrontController.registerEvents(eventos);
        }
    };
})();
Srp.getWsUrl = Srp.WebScriptManager.getUrl;
Srp.getWsLocalUrl = Srp.WebScriptManager.getLocalUrl;
var RestfulSubmitAction = Ext.extend(Ext.form.Action.Submit, {
    type: "restfulsubmit",
    handleResponse: function (response, action) {
        try {
            var potentialJSON = response.responseText;
            var jsonObj = Ext.util.JSON.decode(potentialJSON);
        } catch (e) {
            var s = response.responseText;
            s = s.trim();
            s = s.toLowerCase();
            var start = '<b>message:</b></td><td>';
            var start = 'message:';
            var startLength = start.length;
            var msgIndex = s.indexOf(start) + startLength;
            var end = '</td></tr>';
            var endIndex = s.indexOf(end, msgIndex);
            var msg = s.substring(msgIndex + 13, endIndex);
            return {
                success: false,
                errors: [msg]
            };
        }
        return {
            success: true,
            errors: null
        };
    },
    failure: function (response) {
        RestfulSubmitAction.superclass.failure.call(this, response);
    }
});
Ext.form.Action.ACTION_TYPES["restfulsubmit"] = RestfulSubmitAction;
Ext.ns('Srp');
Srp.CaratulaManager = (function () {
    return {
        crearCaratula: function (parent) {
            var panel = new Srp.gui.ResumenActuacionPanel({
                autoScroll: true,
                rowHeight: 1,
                hasNotPanelNumber: true
            });
            var response = {};
            if (eval('parent.' + ACREEDOR)) {
                eval(ACREEDOR + ' = parent.' + ACREEDOR);
                var deudores = eval('parent.' + DEUDORES);
                if (deudores && deudores.length > 0) {
                    eval(DEUDORES + ' = {}');
                    eval(DEUDOR + ' = parent.' + DEUDOR);
                }
                var constituyentes = eval('parent.' + CONSTITUYENTES);
                if (constituyentes && constituyentes.length > 0) {
                    eval(CONSTITUYENTES + ' = {}');
                    eval(CONSTITUYENTE + ' = parent.' + CONSTITUYENTE);
                }
            }
            eval(NUMERO_REPERTORIO + ' = parent.' + NUMERO_REPERTORIO);
            eval(AGNO_REPERTORIO + ' = parent.' + AGNO_REPERTORIO);
            eval(FECHA_PROTOCOLIZACION + ' = parent.' + FECHA_PROTOCOLIZACION);
            eval(FECHA_AUTORIZACION + ' = parent.' + FECHA_AUTORIZACION);
            eval(FECHA_SUSCRIPCION + ' = parent.' + FECHA_SUSCRIPCION);
            eval(FECHA_OTORGAMIENTO + ' = parent.' + FECHA_OTORGAMIENTO);
            eval(NOMBRE_NOTARIO + ' = parent.' + NOMBRE_NOTARIO);
            eval(GRUPO_NOTARIA + ' = parent.' + GRUPO_NOTARIA);
            eval(TIPO_DOCUMENTO + ' = parent.' + TIPO_DOCUMENTO);
            eval(DESC_TIPO_DOCUMENTO + ' = parent.' + DESC_TIPO_DOCUMENTO);
            eval(PROHIBICION_GRAVAR_ENAJENAR + ' = parent.' + PROHIBICION_GRAVAR_ENAJENAR);
            eval(AGNO_REPERTORIO_NOTARIA + ' = parent.' + AGNO_REPERTORIO_NOTARIA);
            eval(NUMERO_REPERTORIO_NOTARIA + ' = parent.' + NUMERO_REPERTORIO_NOTARIA);
            if (eval('parent.' + TIPO_MODIFICACION)) {
                var tipoModificacion = eval('parent.' + TIPO_MODIFICACION);
                var descTipoModificacion = Srp.CategoryManager.getCategory(Srp.CategoryManager.TIPO_MODIFICACION_CONTRATO, tipoModificacion).text;
                eval(DESC_TIPO_MODIFICACION + " = '" + descTipoModificacion + "'");
            }
            response.isPrintable = false;
            response.isCaratula = true;
            panel.loadData(response);
            util.Component.print(panel);
        },
        crearComprobante: function (parent) {
            var panel = new Srp.gui.ResumenActuacionPanel({
                autoScroll: true,
                rowHeight: 1,
                hasNotPanelNumber: true
            });
            var response = parent.response;
            response.isPrintable = true;
            response.isCaratula = true;
            panel.loadData(response);
            util.Component.print(panel);
        }
    };
})();
Ext.ns('Srp');
Srp.MontosManager = (function () {
    var precio = {};
    return {
        setPrecio: function (precio2) {
            precio = precio2;
        },
        getPrecioActuacion: function (actuacion) {
            var montoActuacion = 0;
            var tipoActuacion = actuacion.tramite;
            if (!Ext.isDefined(tipoActuacion)) {
                tipoActuacion = Srp.MontosManager.getTipoActuacion(actuacion.tipoActuacion);
            }
            switch (tipoActuacion) {
                case TIPO_ACTUACION_INSCRIPCION:
                    montoActuacion = precio[PRECIO_ACTUACION_INSCRIPCION];
                    break;
                case TIPO_ACTUACION_MODIFICACION:
                    montoActuacion = precio[PRECIO_ACTUACION_MODIFICACION];
                    break;
                case TIPO_ACTUACION_ALZAMIENTO:
                    montoActuacion = precio[PRECIO_ACTUACION_ALZAMIENTO];
                    break;
            }
            return montoActuacion;
        },
        getPrecioAnotacion: function () {
            return precio[PRECIO_ANOTACION];
        },
        getPrecioProhibicion: function () {
            return precio[PRECIO_PROHIBICION];
        },
        getTipoActuacion: function (tipoActuacion) {
            if (tipoActuacion == ACTUACION_MODIFICACION) {
                tipoActuacion = TIPO_ACTUACION_MODIFICACION;
            } else {
                if (tipoActuacion == ACTUACION_ALZAMIENTO) {
                    tipoActuacion = TIPO_ACTUACION_ALZAMIENTO;
                }
            }
            return tipoActuacion;
        },
        populateMontos: function (response, anotaciones) {
            if (!anotaciones) {
                return;
            }
            var vehiculos = new Array();
            var tipoActuacion = Srp.MontosManager.getTipoActuacion(eval(TIPO_ACTUACION));
            for (var i = 0; i < anotaciones.length; i++) {
                var anotacion = anotaciones[i];
                switch (tipoActuacion) {
                    case TIPO_ACTUACION_MODIFICACION:
                        if (anotacion.modificar && anotacion.modificar == true) {
                            var tipoModificacion = eval(TIPO_MODIFICACION);
                            switch (tipoModificacion) {
                                case TIPO_MODIFICACION_ALZAMIENTO_PARCIAL:
                                    anotacion.monto = precio.precioAnotacion;
                                    if (anotacion.patenteProhibicion && anotacion.patenteProhibicion == true) {
                                        anotacion.monto += precio.precioProhibicion;
                                    }
                                    break;
                                case TIPO_MODIFICACION_PROHIBICION_ACTO:
                                    anotacion.monto = precio.precioProhibicion;
                                    break;
                                case TIPO_MODIFICACION_CAMBIO_ACREEDOR:
                                    anotacion.monto = precio.precioAnotacion;
                                    if (anotacion.patenteProhibicion && anotacion.patenteProhibicion == true) {
                                        anotacion.monto += precio.precioProhibicion;
                                    }
                                    break;
                                case TIPO_MODIFICACION_OTRO:
                                    break;
                            }
                            anotacion.valoractuacion = anotacion.monto;
                            vehiculos.push(anotacion);
                        }
                        break;
                    case TIPO_ACTUACION_ALZAMIENTO:
                    default:
                        anotacion.monto = precio.precioAnotacion;
                        if (anotacion.patenteProhibicion && anotacion.patenteProhibicion == true) {
                            anotacion.monto += precio.precioProhibicion;
                        }
                        anotacion.valoractuacion = anotacion.monto;
                        vehiculos.push(anotacion);
                        break;
                }
            }
            eval(ANOTACIONES_RVM + ' = vehiculos');
        },
        calculateMontoAnotaciones: function (anotaciones) {
            var montoAnotaciones = 0;
            if (!anotaciones) {
                return 0;
            }
            for (var i = 0; i < anotaciones.length; i++) {
                var anotacion = anotaciones[i];
                if (anotacion.valoractuacion) {
                    montoAnotaciones = parseInt(montoAnotaciones) + parseInt(anotacion.valoractuacion);
                }
            }
            return montoAnotaciones;
        },
        setMontosActuacion: function (response) {
            response.valoractuacion = Srp.MontosManager.getPrecioActuacion(response);
            Srp.MontosManager.setMontosResumen(response);
        },
        setMontosResumen: function (response) {
            response.montoInscripcion = response.valoractuacion;
            response.montoTotal = Srp.MontosManager.calculateMontoAnotaciones(response.vehiculos) + parseInt(response.valoractuacion);
        },
        hasMontos: function (response) {
            if (Ext.isDefined(response.valoractuacion)) {
                return true;
            }
            return false;
        },
        getMontoTotalActuaciones: function (ListActuaciones) {
            Log4js.debug('Srp.MontosManager.getMontoTotalActuaciones()');
            var monto = 0;
            for (var i = 0; i < ListActuaciones.length; ++i) {
                var actuacion = ListActuaciones[i];
                Srp.MontosManager.setMontosResumen(actuacion);
                monto += parseInt(actuacion.montoTotal);
            }
            return monto;
        },
        requestPrecios: function () {
            precio[PRECIO_ACTUACION_INSCRIPCION] = parseInt(Srp.conf.Properties.PRECIO_ACTUACION_INSCRIPCION_VALOR);
            precio[PRECIO_ACTUACION_MODIFICACION] = parseInt(Srp.conf.Properties.PRECIO_ACTUACION_MODIFICACION_VALOR);
            precio[PRECIO_ACTUACION_ALZAMIENTO] = parseInt(Srp.conf.Properties.PRECIO_ACTUACION_ALZAMIENTO_VALOR);
            precio[PRECIO_ANOTACION] = parseInt(Srp.conf.Properties.PRECIO_ANOTACION_VALOR);
            precio[PRECIO_PROHIBICION] = parseInt(Srp.conf.Properties.PRECIO_PROHIBICION_VALOR);
            this.requestPrecio(PRECIO_ACTUACION_INSCRIPCION, ID_CAJA_ACTUACION_INCRIPCION);
            this.requestPrecio(PRECIO_ACTUACION_MODIFICACION, ID_CAJA_ACTUACION_MODIFICACION);
            this.requestPrecio(PRECIO_ACTUACION_ALZAMIENTO, ID_CAJA_ACTUACION_ALZAMIENTO);
            this.requestPrecio(PRECIO_ANOTACION, ID_CAJA_ANOTACION_RVM);
            this.requestPrecio(PRECIO_PROHIBICION, ID_CAJA_PROHIBICION_RVM);
        },
        requestPrecio: function (atr, id) {
            var conn = new Ext.data.Connection();
            conn.request({
                url: Srp.WebServiceManager.getDirectUrl('WS_CAJA_GET_PRECIOS'),
                method: 'GET',
                params: {
                    actuacion: id
                },
                atr: atr,
                scope: this,
                success: this.onSuccessRequestPrecio,
                failure: this.onFailureRequestPrecio
            });
        },
        onSuccessRequestPrecio: function (response, opts) {
            var respuesta = Ext.util.JSON.decode(response.responseText);
            precio[opts.atr] = parseInt(respuesta.monto);
        },
        onFailureRequestPrecio: function (a, b) {},
        recuperarMontos: function (json, actuacion) {
            json.valoractuacion = actuacion.valoractuacion;
            var vehiculos = {};
            if (Ext.isDefined(actuacion.vehiculos)) {
                if (actuacion.vehiculos.length > 0) {
                    for (var i = 0; i < actuacion.vehiculos.length; ++i) {
                        var vehiculo = actuacion.vehiculos[i];
                        vehiculos[vehiculo.nodeid] = vehiculo;
                    }
                }
            }
            if (Ext.isDefined(json.vehiculos)) {
                if (json.vehiculos.length > 0) {
                    for (var i = 0; i < json.vehiculos.length; ++i) {
                        var vehiculo = json.vehiculos[i];
                        if (Ext.isDefined(vehiculos[vehiculo.nodeid])) {
                            json.vehiculos[i].valoractuacion = vehiculos[vehiculo.nodeid].valoractuacion;
                        }
                    }
                }
            }
        },
        getCopiaActuacionActualMontos: function (actuacion) {
            var actuacionCopia = util.clone(actuacion);
            Srp.MontosManager.setMontosResumen(actuacionCopia);
            return actuacionCopia;
        },
        getCopiaActuacionActualizadaMontos: function (actuacion) {
            var actuacionActualizada = util.clone(actuacion);
            Srp.MontosManager.populateMontos(actuacionActualizada, actuacionActualizada.vehiculos);
            Srp.MontosManager.setMontosActuacion(actuacionActualizada);
            Srp.MontosManager.setMontosResumen(actuacionActualizada);
            return actuacionActualizada;
        },
        chequearCambioMontos: function (actuacionCopia, actuacionActualizada) {
            return actuacionCopia.montoTotal != actuacionActualizada.montoTotal;
        },
        getWsSaveActuacionByTipo: function (actuacion) {
            var urlWS;
            switch (actuacion.tipoActuacion) {
                case TIPO_ACTUACION_INSCRIPCION:
                    urlWS = 'WS_ACTUACION_INSCRIPCION_SAVE';
                    break;
                case TIPO_ACTUACION_MODIFICACION:
                    urlWS = 'WS_ACTUACION_MODIFICACION_SAVE';
                    break;
                case TIPO_ACTUACION_ALZAMIENTO:
                    urlWS = 'WS_ACTUACION_ALZAMIENTO_SAVE';
                    break;
            }
            return urlWS;
        },
        updateMontosActuacion: function (config) {
            var _actuacion = {
                nodeid: config.actuacion.nodeid,
                valoractuacion: config.actuacion.valoractuacion,
                vehiculos: config.actuacion.vehiculos
            };
            var saveFormPanel = config.scope.getComponent('saveFormPanel');
            saveFormPanel.getComponent('info').setValue(Ext.util.JSON.encode(_actuacion));
            if (saveFormPanel.getForm().isValid()) {
                var uploadURL = Srp.WebScriptManager.getUrl(Srp.MontosManager.getWsSaveActuacionByTipo(config.actuacion));
                saveFormPanel.getForm().doAction("restfulsubmit", {
                    clientValidation: true,
                    url: uploadURL,
                    scope: config.scope,
                    success: config.success,
                    failure: config.failure,
                    parameters: config.parameters
                });
            }
        }
    };
})();
Ext.ns('Srp');
Srp.PagoManager = (function () {
    return {
        setActuaciones: function (actuaciones) {
            this.actuaciones = actuaciones;
            this.ListNodeId = [];
            this.ListActuaciones = [];
            for (var i = 0; i < actuaciones.length; ++i) {
                var actuacion = actuaciones[i];
                this.ListNodeId.push(actuacion.nodeid);
                var repertorio = 'NUEVA';
                if (Ext.isDefined(actuacion.numeroRepertorio) && actuacion.numeroRepertorio.length > 0) {
                    repertorio = actuacion.numeroRepertorio + '-' + actuacion.agnoRepertorio;
                }
                this.ListActuaciones.push({
                    nodeid: actuacion.nodeid,
                    type: actuacion.type,
                    repertorio: repertorio
                });
            }
        },
        setCallback: function (callbackReturn) {
            this.callbackReturn = callbackReturn;
        },
        pagar: function () {
            this.crearCarro();
        },
        crearCarro: function () {
            Log4js.debug('Srp.PagoManager.crearCarro()');
            Srp.WebServiceManager.request({
                url: Srp.WebServiceManager.getUrl('WS_CREAR_CARRO'),
                method: 'POST',
                params: {
                    actuaciones: Ext.util.JSON.encode(this.ListNodeId)
                },
                success: function (response) {
                    var result = Ext.util.JSON.decode(response.responseText);
                    var carro = result['ws:crearCarroResponse']['return']['carro'];
                    if (!eval(carro['@success'])) {
                        return this.onFalloCrearCarro();
                    }
                    this.carroId = carro['@carroId'];
                    Srp.Log.info('Srp.PagoManager.crearCarro(): carroId = ' + this.carroId + "; success = true");
                    this.avanzarCarro();
                },
                failure: this.onFalloCrearCarro,
                scope: this
            });
        },
        onFalloCrearCarro: function () {
            Srp.gui.messageBox.Error({
                msg: I18n.mensajes.error.crearCarro
            });
            this.callbackReturn.onFailure();
        },
        avanzarCarro: function () {
            Log4js.debug('Srp.PagoManager.avanzarCarro()');
            Srp.WebServiceManager.request({
                url: Srp.WebServiceManager.getUrl('WS_AVANZAR_CARRO'),
                method: 'POST',
                params: {
                    carroId: Ext.util.JSON.encode(this.carroId)
                },
                success: function (response) {
                    var result = Ext.util.JSON.decode(response.responseText);
                    var carro = result['ws:avanzarCarroResponse']['return']['carro'];
                    if (!eval(carro['@success'])) {
                        return this.onFalloAvanzarCarro();
                    }
                    Srp.Log.info('Srp.PagoManager.avanzarCarro(): carroId = ' + this.carroId + "; success = true");
                    this.PPEEnviarM1();
                    this.callbackReturn.onSuccess();
                },
                failure: this.onFalloAvanzarCarro,
                scope: this
            });
        },
        onFalloAvanzarCarro: function () {
            Srp.gui.messageBox.Error({
                msg: I18n.mensajes.error.avanzarCarro
            });
            this.callbackReturn.onFailure();
        },
        procesarAnotaciones: function () {
            Log4js.debug('Srp.PagoManager.procesarAnotaciones()');
            Srp.Log.info('Srp.PagoManager.procesarAnotaciones(): carroId = ' + this.carroId);
            var notario = model.user.Usuario.getNotario(this.actuaciones[0]);
            Srp.WebServiceManager.request({
                url: Srp.WebServiceManager.getUrl('WS_PROCESAR_ANOTACIONES'),
                method: 'POST',
                params: {
                    carroId: this.carroId,
                    actuaciones: Ext.util.JSON.encode(this.ListActuaciones),
                    notarioRun: notario.run,
                    notarioNombre: notario.nombre
                },
                success: function (response) {
                    var result = Ext.util.JSON.decode(response.responseText);
                    var root = result['ws:procesarAnotacionesResponse']['return']['root'];
                    if (eval(root['@success'])) {
                        Srp.Log.info('Srp.PagoManager.procesarAnotaciones(): carroId = ' + this.carroId + "; success = true");
                        this.callbackReturn.onSuccess();
                    } else {
                        Srp.Log.info('Srp.PagoManager.procesarAnotaciones(): carroId = ' + this.carroId + "; success = false");
                        this.onFalloProcesarAnotaciones();
                    }
                },
                failure: this.onFalloProcesarAnotaciones,
                scope: this
            });
        },
        onFalloProcesarAnotaciones: function () {
            Srp.gui.messageBox.Error({
                msg: I18n.mensajes.error.procesarAnotaciones
            });
            this.callbackReturn.onFailure();
        },
        PPEEnviarM1: function () {
            var monto = Srp.MontosManager.getMontoTotalActuaciones(this.actuaciones);
            var descripcion = 'Pagando SRPSD - SRCEI';
            var tid = String.leftPad(this.carroId, 11, '0');
            var dt = new Date();
            var solicitudPago = "<solicitudPago>" + "<sid>" + PPE_SID + "</sid>" + "<tid>" + tid + "</tid>" + "<monto>" + monto + "</monto>" + "<fecha>" + dt.format('Y-m-d') + "</fecha>" + "<hora>" + dt.format('H:i') + "</hora>" + "<descripcion>" + descripcion + "</descripcion>" + "</solicitudPago>";
            var url = Srp.WebServiceManager.getDirectUrl('PPE_SOLICITUD_PAGO');
            var windowPagoPPEUrl = Srp.WebServiceManager.getDirectUrl('PPE_ACTION_POST_M1') + "?solicitudPago=" + solicitudPago + '&url=' + url;
            Log4js.debug(solicitudPago);
            window.open(windowPagoPPEUrl, "windowId", "width=560,height=500,scrollbars=YES");
        },
        getIdProductoByTipoActuacion: function (tipoActuacion) {
            var idProducto = '';
            switch (tipoActuacion) {
                case TIPO_ACTUACION_INSCRIPCION:
                    idProducto = ID_CAJA_ACTUACION_INCRIPCION;
                    break;
                case TIPO_ACTUACION_MODIFICACION:
                    idProducto = ID_CAJA_ACTUACION_MODIFICACION;
                    break;
                case TIPO_ACTUACION_ALZAMIENTO:
                    idProducto = ID_CAJA_ACTUACION_ALZAMIENTO;
                    break;
            }
            return idProducto;
        },
        registrarIngreso: function (conf) {
            var idProducto = Srp.PagoManager.getIdProductoByTipoActuacion(conf.actuacion.tramite);
            var nAnotaciones = this.getNumeroAnotaciones(conf.actuacion);
            var nActuaciones = 1;
            Srp.WebServiceManager.request({
                url: Srp.WebServiceManager.getUrl('WS_CAJA_REGISTAR_INGRESO'),
                method: 'POST',
                params: {
                    nodeid: conf.actuacion.nodeid,
                    nActuacion: nActuaciones,
                    nAnotaciones: nAnotaciones,
                    terminal: conf.actuacion.terminal,
                    idProducto: idProducto
                },
                scope: conf.scope,
                success: conf.success,
                failure: conf.failure
            });
        },
        registrarEgreso: function (conf) {
            var idProducto = Srp.PagoManager.getIdProductoByTipoActuacion(conf.actuacion.tramite);
            var nAnotaciones = this.getNumeroAnotaciones(conf.actuacion);
            var nActuaciones = 1;
            conf.actuacion.fechaingreso = '20101221';
            Srp.WebServiceManager.request({
                url: Srp.WebServiceManager.getUrl('WS_CAJA_REGISTAR_EGRESO'),
                method: 'POST',
                params: {
                    nActuacion: nActuaciones,
                    nAnotaciones: nAnotaciones,
                    rut: '1',
                    dv: '9',
                    telefono: '9392569',
                    ateIngreso: conf.actuacion.numeroAtencion,
                    fechaIngreso: conf.actuacion.fechaRepertorio,
                    terminal: conf.actuacion.terminal,
                    idProducto: idProducto
                },
                scope: conf.scope,
                success: conf.onSuccess,
                failure: conf.onFailure
            });
        },
        getNumeroAnotaciones: function (actuacion) {
            var nAnotaciones = 0;
            if (actuacion.vehiculos) {
                for (var k = 0; k < actuacion.vehiculos.length; ++k) {
                    var vehiculo = actuacion.vehiculos[k];
                    if (vehiculo.patenteProhibicion) {
                        nAnotaciones += 2;
                    } else {
                        ++nAnotaciones;
                    }
                }
            }
            return nAnotaciones;
        }
    };
})();
Ext.ns('model', 'model.user');
model.user.Permiso = {
    VER_TAREAS: 'VER_TAREAS',
    RESUMEN_ACTUACION: 'RESUMEN_ACTUACION',
    BUSCAR_ACTUACION_UP: 'BUSCAR_ACTUACION_UP',
    VER_ACTUACION_COMPROBANTE: 'VER_ACTUACION_COMPROBANTE',
    VER_ESTADO_REVISION_AUTOMATICA: 'VER_ESTADO_REVISION_AUTOMATICA',
    FIRMAR_ACTUACION: 'FIRMAR_ACTUACION',
    PAGAR_ACTUACION: 'PAGAR_ACTUACION',
    INGRESAR_INSCRIPCION: 'INGRESAR_INSCRIPCION',
    INGRESAR_MODIFICACION: 'INGRESAR_MODIFICACION',
    INGRESAR_ALZAMIENTO: 'INGRESAR_ALZAMIENTO',
    BUSCAR_ACTUACION_NOTARIA: 'BUSCAR_ACTUACION_NOTARIA',
    VER_RECHAZO_ABOGADO: 'VER_RECHAZO_ABOGADO',
    INGRESAR_ANOTACION: 'INGRESAR_ANOTACION',
    APROBAR_ANOTACION: 'APROBAR_ANOTACION',
    RECEPCIONAR: 'RECEPCIONAR',
    CREAR_NOTARIA: 'CREAR_NOTARIA',
    REVISAR_ACTUACION: 'REVISAR_ACTUACION',
    VER_INFORME_RECAUDACION: 'VER_INFORME_RECAUDACION',
    VER_INFORME_RECAUDACION_MASIVO: 'VER_INFORME_RECAUDACION_MASIVO',
    EDITAR_ACTUACION: 'EDITAR_ACTUACION',
    VER_CARTA_RECHAZO: 'VER_CARTA_RECHAZO',
    ACEPTAR_ACTUACION_RECHAZADA: 'ACEPTAR_ACTUACION_RECHAZADA',
    RECHAZAR_ACTUACION_VIGENTE: 'RECHAZAR_ACTUACION_VIGENTE',
    OAI_INGRESAR_INSCRIPCION: 'OAI_INGRESAR_INSCRIPCION',
    OAI_INGRESAR_MODIFICACION: 'OAI_INGRESAR_MODIFICACION',
    OAI_INGRESAR_ALZAMIENTO: 'OAI_INGRESAR_ALZAMIENTO',
    OAI_BUSCAR_ACTUACION: 'OAI_BUSCAR_ACTUACION',
    ASIGNAR_TAREAS: 'ASIGNAR_TAREAS',
    QUITAR_TAREAS: 'QUITAR_TAREAS'
};
Permiso = model.user.Permiso;
Ext.ns('model', 'model.user');
model.user.Roles = {
    FUNCIONARIO_NOTARIA: [Permiso.VER_TAREAS, Permiso.INGRESAR_ALZAMIENTO, Permiso.RESUMEN_ACTUACION, Permiso.INGRESAR_INSCRIPCION, Permiso.INGRESAR_MODIFICACION, Permiso.BUSCAR_ACTUACION_NOTARIA, Permiso.VER_ACTUACION_COMPROBANTE, Permiso.VER_ESTADO_REVISION_AUTOMATICA, Permiso.VER_RECHAZO_ABOGADO],
    FUNCIONARIO_NOTARIA_PAGA: [Permiso.VER_TAREAS, Permiso.PAGAR_ACTUACION, Permiso.BUSCAR_ACTUACION_NOTARIA, Permiso.VER_ACTUACION_COMPROBANTE, Permiso.VER_RECHAZO_ABOGADO],
    FUNCIONARIO_NOTARIA_FIRMA: [Permiso.VER_TAREAS, Permiso.FIRMAR_ACTUACION, Permiso.BUSCAR_ACTUACION_NOTARIA, Permiso.VER_ACTUACION_COMPROBANTE, Permiso.VER_RECHAZO_ABOGADO],
    FUNCIONARIO_OFICINA: [Permiso.VER_TAREAS, Permiso.OAI_INGRESAR_INSCRIPCION, Permiso.OAI_INGRESAR_MODIFICACION, Permiso.OAI_INGRESAR_ALZAMIENTO, Permiso.OAI_BUSCAR_ACTUACION, Permiso.VER_ACTUACION_COMPROBANTE, Permiso.VER_RECHAZO_ABOGADO],
    FUNCIONARIO_PRENDAS: [Permiso.VER_TAREAS, Permiso.RECEPCIONAR],
    FUNCIONARIO_PRENDAS_ABOGADO: [Permiso.VER_TAREAS, Permiso.APROBAR_ANOTACION, Permiso.REVISAR_ACTUACION, Permiso.VER_ESTADO_REVISION_AUTOMATICA, Permiso.VER_RECHAZO_ABOGADO, Permiso.BUSCAR_ACTUACION_UP],
    FUNCIONARIO_PRENDAS_ADMINISTRATIVO: [Permiso.VER_TAREAS, Permiso.VER_RECHAZO_ABOGADO, Permiso.BUSCAR_ACTUACION_UP, Permiso.VER_CARTA_RECHAZO],
    FUNCIONARIO_PRENDAS_RECEPTOR: [Permiso.VER_TAREAS],
    FUNCIONARIO_PRENDAS_JEFE: [Permiso.VER_TAREAS, Permiso.BUSCAR_ACTUACION_UP, Permiso.CREAR_NOTARIA, Permiso.VER_RECHAZO_ABOGADO, Permiso.VER_INFORME_RECAUDACION, Permiso.EDITAR_ACTUACION, Permiso.VER_CARTA_RECHAZO, Permiso.ACEPTAR_ACTUACION_RECHAZADA, Permiso.RECHAZAR_ACTUACION_VIGENTE, Permiso.VER_ACTUACION_COMPROBANTE, Permiso.VER_INFORME_RECAUDACION_MASIVO, Permiso.ASIGNAR_TAREAS, Permiso.QUITAR_TAREAS],
    FUNCIONARIO_PRENDAS_FINANZAS: [Permiso.VER_INFORME_RECAUDACION, Permiso.BUSCAR_ACTUACION_UP, Permiso.VER_INFORME_RECAUDACION_MASIVO],
    OFICINA_INTERNET: [Permiso.VER_TAREAS]
};
Ext.ns('model', 'model.user');
model.user.Usuario = (function () {
    var username = '';
    var name = '';
    var roles = [];
    var permisos = [];
    var organization = {};
    var JSESSIONID = '';
    var systemHandler;

    function setRoles(roles) {
        roles = roles;
        setPermisos(roles);
    };

    function setPermisos(_roles) {
        for (key in _roles) {
            rol = _roles[key];
            if (model.user.Roles[rol]) {
                var aux = permisos.concat(model.user.Roles[rol]);
                permisos = aux;
            }
        }
    };

    function setOrganization() {
        if (organization.id && organization.id.length > 0) {
            requestOrganization();
        } else {
            organization.tipo = 'PRENDAS';
            organization.nombre = 'Unidad de Prendas';
        }
    };

    function requestOrganization() {
        var conn = new Ext.data.Connection();
        conn.request({
            url: Srp.getWsUrl('WS_GET_ORGANIZATION'),
            method: 'GET',
            success: processResponseOrganization,
            failure: Srp.WebScriptManager.connectionError
        });
    };

    function processResponseOrganization(response) {
        var orgObj = Ext.util.JSON.decode(response.responseText);
        organization.tipo = orgObj.tipo;
        organization.nombre = orgObj.nombreOu;
        organization.region = orgObj.direccionOu;
        organization.runNotario = orgObj.runNotarioTemp;
        organization.nombreNotario = orgObj.nombreNotarioTemp;
        organization.convenioPostPago = orgObj.convenioPostPago;
        Srp.FrontController.fireEvent('Usuario.onUserLoad');
    };

    function setJSESSIONID() {
        JSESSIONID = Ext.util.Cookies.get('JSESSIONID');
    };

    function processResponseUser(response) {
        var userObj = Ext.util.JSON.decode(response.responseText);
        username = userObj.username;
        name = userObj.name;
        organization.id = userObj.organizacion;
        processRoles(userObj.memberof);
        setOrganization();
        Srp.MontosManager.requestPrecios();
        systemHandler();
    };

    function processRoles(grupos) {
        var rolesList = [];
        var prefix = 'GROUP_';
        if (organization.id) {
            prefix = prefix + organization.id + '_';
        }
        for (var i = 0; i < grupos.length; ++i) {
            var grupo = grupos[i];
            if (grupo.indexOf(prefix) != -1) {
                rolesList.push(grupo.substring(prefix.length));
            }
        }
        setRoles(rolesList);
        Srp.FrontController.fireEvent('Usuario.onLoadRoles');
    };
    return {
        requestUser: function (handler) {
            systemHandler = handler;
            var conn = new Ext.data.Connection();
            conn.request({
                url: Srp.getWsUrl('WS_GET_USER'),
                method: 'GET',
                success: processResponseUser,
                failure: Srp.WebScriptManager.connectionError
            });
        },
        setUsername: function (_username) {
            username = _username;
        },
        getUsername: function () {
            return username;
        },
        tienePermiso: function (permiso) {
            return permisos.indexOf(permiso) != -1;
        },
        getOrganization: function () {
            return organization;
        },
        getName: function () {
            return name;
        },
        getJSESSIONID: function () {
            return JSESSIONID;
        },
        getNotario: function (actuacion) {
            var ou = model.user.Usuario.getOrganization();
            var runNotario;
            var nombreNotario;
            switch (ou.tipo) {
                case TIPO_OU_NOTARIA:
                    runNotario = ou.runNotario;
                    nombreNotario = ou.nombreNotario;
                    break;
                case TIPO_OU_OFICINA:
                    runNotario = actuacion.runNotarioRef;
                    nombreNotario = actuacion.nombreNotarioRef;
                    break;
                default:
                    if (actuacion.tipoOu == TIPO_OU_NOTARIA) {
                        var idNotaria = actuacion.grpNotariaRef;
                        var notaria = Srp.CategoryManager.notarias[idNotaria];
                        if (Ext.isDefined(notaria)) {
                            runNotario = notaria.runNotario;
                            nombreNotario = notaria.nombreNotario;
                        } else {
                            Log4js.debug(' -> Error: Actuacion con tipoOu cambiado (Insc en NOTARIA; Alz en OFICINA)');
                            runNotario = actuacion.runNotarioRef;
                            nombreNotario = actuacion.nombreNotarioRef;
                        }
                    } else {
                        if (Ext.isDefined(actuacion.runNotarioRef)) {
                            runNotario = actuacion.runNotarioRef;
                            nombreNotario = actuacion.nombreNotarioRef;
                        } else {
                            Log4js.debug(' -> Error: Actuacion con tipoOu cambiado (Insc en OFICINA; Alz en NOTARIA)');
                            var idNotaria = actuacion.grpNotariaRef;
                            var notaria = Srp.CategoryManager.notarias[idNotaria];
                            runNotario = notaria.runNotario;
                            nombreNotario = notaria.nombreNotario;
                        }
                    }
            }
            return {
                nombre: nombreNotario,
                run: runNotario
            };
        }
    };
})();
Ext.ns('Srp.categories');
TIPO_MODIFICACION_ALZAMIENTO_PARCIAL = 'ALZAMIENTO PARCIAL';
TIPO_MODIFICACION_CAMBIO_ACREEDOR = 'CAMBIO ACREEDOR';
TIPO_MODIFICACION_PROHIBICION_ACTO = 'PROHICION ACTO';
TIPO_MODIFICACION_OTRO = 'OTRO';
Srp.categories.TipoModificacionContrato = [{
    "id": "ALZAMIENTO PARCIAL",
    "text": "Alzamiento parcial"
}, {
    "id": "CAMBIO ACREEDOR",
    "text": "Cambio de acreedor"
}, {
    "id": "PROHICION ACTO",
    "text": "Prohibición de acto"
}, {
    "id": "OTRO",
    "text": "Otro"
}];
Srp.categories.Notarias = [{
    "id": 'NOTLG',
    "text": 'Notaría Lazo-Gortaris'
}, {
    "id": 'NOTAU',
    "text": 'Notaría Álamo-Urrutia'
}, {
    "id": 'NOTGRUPO1',
    "text": 'Notaría Grupo 1'
}, {
    "id": 'NOTGRUPO2',
    "text": 'Notaría Grupo 2'
}];
Srp.categories.Oficinas = [{
    "id": 'OFQTAQNORMAL',
    "text": 'Oficina Quinta Normal'
}, {
    "id": 'OFLOBARN',
    "text": 'Oficina Lo Barnechea'
}];
CALIDAD_PERSONA_NATURAL = 'PERSONA NATURAL';
CALIDAD_PERSONA_JURIDICA = 'PERSONA JURIDICA';
CALIDAD_EXTRANJERA = 'EXTRANJERO';
IDENTIFICADOR_TIPO_PERSONA_NATURAL = 'RUN';
IDENTIFICADOR_TIPO_PERSONA_JURIDICA = 'RUT';
CONTRATANTE_ESTADO_VALIDO = '1';
CONTRATANTE_ESTADO_DESCONOCIDO = '0';
CONTRATANTE_ESTADO_INVALIDO = '-1';
CONTRATANTE_ESTADO_SPINNER = '-2';
CONTRATANTE_ESTADO_LOCAL_VALIDO = '-3';
CONTRATANTE_ESTADO_LOCAL_INVALIDO = '-4';
CONTRATANTE_ESTADO_NO_APLICA = '-5';
Srp.categories.TipoCalidadPersona = [{
    "id": "PERSONA NATURAL",
    "text": "Persona Natural"
}, {
    "id": "PERSONA JURIDICA",
    "text": "Persona Jurídica"
}, {
    "id": "EXTRANJERO",
    "text": "Extranjero"
}];
TIPO_DOCUMENTO_ESCRITURA = 'ESCRITURA PUBLICA';
TIPO_DOCUMENTO_CONTRATO = 'CONTRATO PRIVADO';
Srp.categories.TipoDocumento = [{
    "id": "ESCRITURA PUBLICA",
    "text": "Escritura Pública"
}, {
    "id": "CONTRATO PRIVADO",
    "text": "Contrato Privado"
}];
TIPO_MEDIO_PAGO_EFECTIVO = 'EFECTIVO';
TIPO_CONTRATO = 'CONTRATO';
TIPO_ANEXO = 'ANEXO';
TIPO_RESOL_EXENTA = 'RESOLUCION EXENTA';
TIPO_SOLICITANTE_SINDICO = 'SINDICO';
TIPO_SOLICITANTE_TRIBUNAL = 'TRIBUNAL';
TIPO_SOLICITANTE_OTRO = 'OTRO';
Srp.categories.TipoSolitante = [{
    "id": "TRIBUNAL",
    "text": "Tribunal"
}, {
    "id": "SINDICO",
    "text": "Síndico"
}, {
    "id": "OTRO",
    "text": "Otro"
}];
TIPO_ANOTACION_OTRA = 'OTRA';
Srp.categories.TipoAnotacion = [{
    "id": "DERECHO LEGAL DE RETENCION",
    "text": "Derecho legal de retención"
}, {
    "id": "OTRA",
    "text": "Otra"
}];
TIPO_ACTUACION_INSCRIPCION = 'ACTUACION INSCRIPCION';
TIPO_ACTUACION_MODIFICACION = 'ACTUACION MODIFICACION';
TIPO_ACTUACION_ALZAMIENTO = 'ACTUACION ALZAMIENTO';
ACTUACION_INSCRIPCION = 'actuacionInscripcion';
ACTUACION_ALZAMIENTO = 'actuacionAlzamiento';
ACTUACION_MODIFICACION = 'actuacionModificacion';
ACTUACION_NO_ENCONTRADA = '-1';
ACTUACION_ENCONTRADA = '1';
ACTUACION_BUSCANDO = '-2';
TIPO_ACTIVIDAD_ACCION = 'ACCION';
TIPO_ACCION_ANOTACION_AL_MARGEN = 'ANOTACION AL MARGEN';
TIPO_VALIDACION_GRABAR = 'VALIDACION_GRABAR';
TIPO_VALIDACION_ENVIAR_A_FIRMA = 'VALIDACION_ENVIAR_A_FIRMA';
TIPO_VALIDACION_REGISTRAR_PAGO = 'VALIDACION_REGISTRAR_PAGO';
TIPO_VALIDACION_ENVIAR_A_APROBACION = 'VALIDACION_ENVIAR_A_FIRMA';
TIPO_OU_NOTARIA = 'NOTARIA';
TIPO_OU_OFICINA = 'OFICINA';
Srp.categories.TipoOU = [{
    "id": "any",
    "text": "Cualquiera"
}, {
    "id": "NOTARIA",
    "text": "Notaría"
}, {
    "id": "OFICINA_ATENCION_INTEGRAL",
    "text": "Oficina de Atención Integral"
}];
PPU_UNKNOW = -2;
PPU_VALIDA = 1;
PPU_INVALIDA = -1;
PPU_BUSCANDO = 0;
ESTADO_ANOTACION_INGRESADA = 'INGRESADA';
ESTADO_ANOTACION_ACEPTADA = 'ACEPTADA';
ESTADO_ANOTACION_RECHAZADA = 'RECHAZADA';
RVM_RESPUESTA_ERROR_CREA_ANOTACION = 'RVM_RESPUESTA_ERROR_CREA_ANOTACION';
RVM_RESPUESTA_ERROR_GET_ANOTACIONES = 'RVM_RESPUESTA_ERROR_GET_ANOTACIONES';
PPU_RESPUESTA_ERROR_WSO2 = 'PPU_RESPUESTA_ERROR_WSO2';
PPU_RESPUESTA_OK = 'RVM_RESPUESTA_OK';
PPE_SID = Srp.conf.Properties.PPE_SID;
RECEPCION_ESTADO_ESPERANDO = 'esperando';
RECEPCION_ESTADO_OK = 'ok';
RECEPCION_ESTADO_ERROR = 'error';
TIPO_ESTADO_TODOS = 'Cualquiera';
TIPO_ESTADO_ACTUACION_VIGENTE = 'VIGENTE';
TIPO_ESTADO_ACTUACION_PENDIENTE = 'PENDIENTE';
TIPO_ESTADO_ACTUACION_ALZADA = 'ALZADA';
TIPO_ESTADO_ACTUACION_RECHAZADO = 'RECHAZADO';
REQUIRENTE_VALIDO = 1;
REQUIRENTE_INVALIDO = -1;
TIPO_COMENTARIO_HISTORICO = 'TIPO_COMENTARIO_HISTORICO';
TIPO_COMENTARIO_SIMPLE = 'TIPO_COMENTARIO_SIMPLE';
PRECIO_ACTUACION_INSCRIPCION = 'precioActuacionInscripcion';
PRECIO_ACTUACION_MODIFICACION = 'precioActuacionModificacion';
PRECIO_ACTUACION_ALZAMIENTO = 'precioActuacionAlzamiento';
PRECIO_ANOTACION = 'precioAnotacion';
PRECIO_PROHIBICION = 'precioProhibicion';
ID_CAJA_ACTUACION_INCRIPCION = 70;
ID_CAJA_ACTUACION_MODIFICACION = 71;
ID_CAJA_ACTUACION_ALZAMIENTO = 72;
ID_CAJA_ANOTACION_RVM = 19;
VALIDAR_NOMBRE_RUN = 'VALIDAR_NOMBRE_RUN';
AUTOCOMPLETAR_NOMBRE = 'AUTOCOMPLETAR_NOMBRE';
ID_CAJA_PROHIBICION_RVM = 19;
ACTION_EDIT_ACTUACION = 'ACTION_EDIT_ACTUACION';
ACTION_EDIT_RECHAZO = 'ACTION_EDIT_RECHAZO';
ACTION_VIEW = 'ACTION_VIEW';
BUSQUEDA_REPERTORIO_PRENDAS = '1';
BUSQUEDA_REPERTORIO_NOTARIA = '2';
BUSQUEDA_CONTRATANTE = '3';
Srp.categories.TipoBusqueda = [{
    "id": BUSQUEDA_REPERTORIO_PRENDAS,
    "text": "Repertorio Prendas"
}, {
    "id": BUSQUEDA_REPERTORIO_NOTARIA,
    "text": "Repertorio Notaría"
}, {
    "id": BUSQUEDA_CONTRATANTE,
    "text": "Contratante"
}];
CONTRATANTE_ACREEDOR = 'CONTRATANTE_ACREEDOR';
CONTRATANTE_CONSTITUYENTE = 'CONTRATANTE_CONSTITUYENTE';
CONTRATANTE_DEUDOR = 'CONTRATANTE_DEUDOR';
Srp.categories.TipoContratante = [{
    "id": CONTRATANTE_ACREEDOR,
    "text": "Acreedor"
}, {
    "id": CONTRATANTE_CONSTITUYENTE,
    "text": "Constituyente"
}, {
    "id": CONTRATANTE_DEUDOR,
    "text": "Deudor"
}];
REPERTORIO_NOTARIA_VALIDO = '1';
REPERTORIO_NOTARIA_INVALIDO = '2';
REPERTORIO_NOTARIA_DESCONOCIDO = '3';
FORMATO_INFORME_PDF = 'pdf';
FORMATO_INFORME_EXCEL = 'xls';
Srp.categories.FormatoInforme = [{
    "id": FORMATO_INFORME_PDF,
    "text": "Pdf"
}, {
    "id": FORMATO_INFORME_EXCEL,
    "text": "Excel"
}];
TIPO_INFORME_CONVENIO = 'CONVENIO';
TIPO_INFORME_PPE = 'PPE';
Srp.categories.TipoInforme = [{
    "id": TIPO_INFORME_CONVENIO,
    "text": "Convenio"
}, {
    "id": TIPO_INFORME_PPE,
    "text": "PPE"
}];
TIPO_DETALLE_INFORME_SIN_DETALLE = "TIPO_DETALLE_INFORME_SIN_DETALLE";
TIPO_DETALLE_INFORME_CON_DETALLE = "TIPO_DETALLE_INFORME_CON_DETALLE";
TIPO_DETALLE_INFORME_RESUMEN = "TIPO_DETALLE_INFORME_RESUMEN";
Srp.categories.TipoDetalleInforme = [{
    "id": TIPO_DETALLE_INFORME_SIN_DETALLE,
    "text": "Sin Detalle"
}, {
    "id": TIPO_DETALLE_INFORME_CON_DETALLE,
    "text": "Con Detalle"
}, {
    "id": TIPO_DETALLE_INFORME_RESUMEN,
    "text": "Resumen de transacciones (SAF)"
}];
Ext.ns('Srp');
Srp.CategoryManager = (function () {
    return {
        getCategory: function (categoryType, categoryId) {
            if (categoryType) {
                if (categoryType.data) {
                    for (var i = 0; i < categoryType.data.length; i++) {
                        if (categoryType.data[i].id == categoryId) {
                            return categoryType.data[i];
                        }
                    }
                } else if (categoryType.url) {
                    for (var i = 0; i < categoryType.remoteData.length; i++) {
                        if (categoryType.remoteData[i].id == categoryId) {
                            return categoryType.remoteData[i];
                        }
                    }
                } else {
                    return {
                        text: ''
                    };
                }
            }
            return {
                text: ''
            };
        },
        getCategoryDescripcion: function (categoryType, categoryId) {
            if (!categoryId) {
                return 'No existe Id.';
            }
            var category = Srp.CategoryManager.getCategory(categoryType, categoryId);
            if (category) {
                return category.text;
            } else {
                return categoryId;
            }
        },
        loadRemoteOus: function () {
            Ext.Ajax.request({
                url: Srp.WebScriptManager.getUrl('WS_OUS'),
                method: 'GET',
                success: this.successLoadRemoteOus,
                failure: function (response) {
                    Log4js.debug('failed loadRemoteOus!');
                },
                scope: this
            });
        },
        successLoadRemoteOus: function (response) {
            var resp = Ext.util.JSON.decode(response.responseText);
            this.notarias = {};
            this.oficinas = {};
            if (resp.ous.length > 0) {
                for (var i = 0; i < resp.ous.length; ++i) {
                    var ou = resp.ous[i];
                    if (Ext.isDefined(ou.tipoOu)) {
                        this[ou.tipoOu].data.push({
                            id: ou.name,
                            text: ou.nombreOu
                        });
                        if (ou.tipoOu == TIPO_OU_NOTARIA) {
                            this.notarias[ou.name] = {
                                nombreNotario: ou.nombreNotarioTemp,
                                runNotario: ou.runNotarioTemp,
                                nombre: ou.nombreOu
                            };
                        } else if (ou.tipoOu == TIPO_OU_OFICINA) {
                            this.oficinas[ou.name] = {
                                nombre: ou.nombreOu
                            };
                        }
                    } else {
                        Log4js.debug('Ou con problemas: No tiene definido el atributo tipoOu ' + ou.name);
                    }
                }
                this.NOTARIA.data.sort(util.Sorter.ous);
                this.OFICINA.data.sort(util.Sorter.ous);
            }
        },
        getNotarioById: function (ouId) {
            if (Ext.isObject(this.notarias[ouId])) {
                return this.notarias[ouId];
            }
        },
        loadRemoteCategories: function () {
            var categories = [Srp.CategoryManager.IDENTIFICADOR_TIPO_EXTRANJERO, Srp.CategoryManager.PAIS, Srp.CategoryManager.ESTADO, Srp.CategoryManager.TRIBUNAL, Srp.CategoryManager.COMUNA];
            for (var i = 0; i < categories.length; i++) {
                this.loadRemoteCategory(categories[i]);
            }
        },
        loadRemoteCategory: function (categoryType) {
            var queryString = "";
            if (categoryType.property) {
                queryString = '&node=' + categoryType.property;
            }
            var url = Srp.getWsUrl(categoryType.service, '', categoryType.dummy) + queryString;
            var proxy = new Ext.data.HttpProxy({
                method: 'GET',
                prettyUrls: false,
                url: url
            });
            var store = new Ext.data.JsonStore({
                proxy: proxy,
                root: '',
                fields: [{
                    name: 'id'
                }, {
                    name: 'text'
                }, {
                    name: 'description'
                }]
            });
            if (categoryType.name == Srp.CategoryManager.PAIS.name) {
                categoryType.key = 'description'
            } else {
                categoryType.key = 'text';
            }
            store.on('load', function () {
                var i = 0;
                store.each(function (record) {
                    this[categoryType.name].data[i] = {
                        id: record.get('id'),
                        text: record.get(categoryType.key)
                    };
                    i++;
                }, this);
            }, this);
            store.load();
        },
        getIds: function (categoryName) {
            if (Srp.CategoryManager[categoryName]) {
                var categoryType = Srp.CategoryManager[categoryName];
                var ids = [];
                if (categoryType) {
                    if (categoryType.data) {
                        for (var i = 0; i < categoryType.data.length; i++) {
                            ids[i] = categoryType.data[i].id;
                        }
                        return ids;
                    } else {
                        return {};
                    }
                }
            }
        },
        TIPO_MODIFICACION_CONTRATO: {
            data: Srp.categories.TipoModificacionContrato
        },
        TIPO_DOCUMENTO: {
            data: Srp.categories.TipoDocumento
        },
        TIPO_CALIDAD_PERSONA: {
            data: Srp.categories.TipoCalidadPersona
        },
        IDENTIFICADOR_TIPO_EXTRANJERO: {
            service: 'WS_CATEGORIAS',
            property: Srp.conf.Properties.CATEGORY_NODE_IDENTIFICADOR_TIPO_EXTRANJERO,
            data: [],
            name: 'IDENTIFICADOR_TIPO_EXTRANJERO'
        },
        PAIS: {
            service: 'WS_CATEGORIAS',
            property: Srp.conf.Properties.CATEGORY_NODE_PAIS,
            data: [],
            name: 'PAIS'
        },
        ESTADO: {
            service: 'WS_CATEGORIAS',
            property: Srp.conf.Properties.CATEGORY_NODE_ESTADO,
            data: [],
            name: 'ESTADO'
        },
        TIPO_OU: {
            data: Srp.categories.TipoOU
        },
        NOTARIA: {
            data: [],
            name: 'NOTARIA'
        },
        OFICINA: {
            data: [],
            name: 'OFICINA'
        },
        TIPO_MEDIO_PAGO: {
            data: Srp.categories.TipoMedioPago
        },
        TIPO_SOLICITANTE: {
            data: Srp.categories.TipoSolitante
        },
        TIPO_ANOTACION: {
            data: Srp.categories.TipoAnotacion
        },
        TRIBUNAL: {
            service: 'WS_CATEGORIAS',
            property: Srp.conf.Properties.CATEGORY_NODE_TRIBUNALES,
            data: [],
            name: 'TRIBUNAL'
        },
        TIPO_OU: {
            data: Srp.categories.TipoOU
        },
        COMUNA: {
            service: 'WS_CATEGORIAS',
            property: Srp.conf.Properties.CATEGORY_NODE_COMUNA,
            data: [],
            name: 'COMUNA'
        },
        TIPO_BUSQUEDA: {
            data: Srp.categories.TipoBusqueda
        },
        TIPO_CONTRATANTE: {
            data: Srp.categories.TipoContratante
        },
        FORMATO_INFORME: {
            data: Srp.categories.FormatoInforme
        },
        TIPO_INFORME: {
            data: Srp.categories.TipoInforme
        },
        TIPO_DETALLE_INFORME: {
            data: Srp.categories.TipoDetalleInforme
        }
    };
})();
Ext.ns('Srp');
TipoTarea = {
    FIRMAR_ACTUACION: 'Revisar Actuacion',
    PAGAR_ACTUACION: 'Pagar Actuacion',
    EDITAR_ACTUACION: 'Editar Actuacion',
    INGRESAR_ACTUACION: 'Ingresar Actuacion',
    CORREGIR_ACTUACION: 'Corregir Actuacion',
    REPAGAR_ACTUACION: 'Repagar Actuacion'
};
TipoActividad = {
    INSCRIPCION: 'ACTUACION INSCRIPCION',
    MODIFICACION: 'ACTUACION MODIFICACION',
    ALZAMIENTO: 'ACTUACION ALZAMIENTO',
    ANOTACION: 'Anotacion',
    RECTIFICACION: 'Rectificacion'
};
Srp.NavigationManager = (function () {
    items = {
        NOTARIA: {
            'Ingresar Actuacion': {
                'ACTUACION INSCRIPCION': "Srp.gui.notaria.InscripcionWizard",
                'ACTUACION MODIFICACION': "Srp.gui.notaria.ModificacionWizard",
                'ACTUACION ALZAMIENTO': "Srp.gui.notaria.AlzamientoWizard"
            },
            'Editar Actuacion': {
                'ACTUACION INSCRIPCION': "Srp.gui.notaria.InscripcionWizard",
                'ACTUACION MODIFICACION': "Srp.gui.notaria.ModificacionWizard",
                'ACTUACION ALZAMIENTO': "Srp.gui.notaria.AlzamientoWizard"
            },
            'Corregir Actuacion': {
                'ACTUACION INSCRIPCION': "Srp.gui.notaria.InscripcionWizard",
                'ACTUACION MODIFICACION': "Srp.gui.notaria.ModificacionWizard",
                'ACTUACION ALZAMIENTO': "Srp.gui.notaria.AlzamientoWizard"
            },
            'Pagar Actuacion': "Srp.gui.TaskPagoPanel",
            'Repagar Actuacion': "Srp.gui.TaskRePagoPanel",
            'Revisar Actuacion': "Srp.gui.TaskFirmaPanel",
            'Confirmacion de Pago Actuacion': 'Srp.gui.TaskAbortarPagoPanel',
            'Tomar Conocimiento': 'Srp.gui.TaskTomarConocimientoPanel',
            'Rechazo Tomar Conocimiento': 'Srp.gui.TaskTomarConocimientoPanel'
        },
        OFICINA: {
            'Editar Actuacion': {
                'ACTUACION INSCRIPCION': "Srp.gui.oai.InscripcionWizard",
                'ACTUACION MODIFICACION': "Srp.gui.oai.ModificacionWizard",
                'ACTUACION ALZAMIENTO': "Srp.gui.oai.AlzamientoWizard"
            },
            'Ingresar Actuacion': {
                'ACTUACION INSCRIPCION': "Srp.gui.oai.InscripcionWizard",
                'ACTUACION MODIFICACION': "Srp.gui.oai.ModificacionWizard",
                'ACTUACION ALZAMIENTO': "Srp.gui.oai.AlzamientoWizard"
            },
            'Realizar Egreso': "Srp.gui.TaskRealizarEgresoPanel",
            'Rechazo Tomar Conocimiento': 'Srp.gui.TaskRealizarEgresoPanel'
        },
        PRENDAS: {
            'Recibir Solicitud Actuacion': 'Srp.gui.TaskRecepcionarPanel',
            'Revisar Actuacion': "Srp.gui.TaskRevisionActuacionPanel",
            'Examen Visual': "Srp.gui.TaskExaminarActuacionPanel",
            'Rechazo Examen Visual': "Srp.gui.TaskExaminarActuacionRechazoPanel",
            'Procesar Rechazo': 'Srp.gui.TaskProcesarRechazoPanel',
            'Rechazo Procesar Rechazo': 'Srp.gui.TaskRechazoProcesarRechazoPanel',
            'Escanea Documentos': "Srp.gui.TaskAdjuntarPanel",
            'Editar Accion': 'Srp.gui.IngresoAnotacionPanel',
            'Ingresar Anotacion': "Srp.gui.IngresoAnotacionPanel",
            'Revisar Accion': "Srp.gui.RevisionAnotacionMargenPanel",
            'Aceptar Accion': "Srp.gui.AprobacionAnotacionMargenPanel",
            "Confirmacion de Pago Actuacion": "Srp.gui.TaskConfirmarPagoPanel",
            'Corregir Actuacion': {
                'ACTUACION INSCRIPCION': {
                    NOTARIA: "Srp.gui.notaria.InscripcionWizard",
                    OFICINA: "Srp.gui.oai.InscripcionWizard"
                },
                'ACTUACION MODIFICACION': {
                    NOTARIA: "Srp.gui.notaria.ModificacionWizard",
                    OFICINA: "Srp.gui.oai.ModificacionWizard"
                },
                'ACTUACION ALZAMIENTO': {
                    NOTARIA: "Srp.gui.notaria.AlzamientoWizard",
                    OFICINA: "Srp.gui.oai.AlzamientoWizard"
                }
            }
        }
    };
    activePage = -1;
    return {
        setTicket: function (_ticket) {
            ticket = _ticket;
        },
        getAction: function (tipoTarea, tipoActividad) {
            var userOrg = model.user.Usuario.getOrganization();
            if (!Ext.isDefined(userOrg.tipo)) {
                userOrg.tipo = 'PRENDAS';
            }
            if (items[userOrg.tipo]) {
                if (items[userOrg.tipo][tipoTarea]) {
                    if (typeof (items[userOrg.tipo][tipoTarea]) == 'string') {
                        return items[userOrg.tipo][tipoTarea];
                    } else {
                        if (items[userOrg.tipo][tipoTarea][tipoActividad]) {
                            return items[userOrg.tipo][tipoTarea][tipoActividad];
                        }
                    }
                }
            }
            Srp.gui.messageBox.Error({
                msg: 'Pantalla aun no implementada'
            });
            return 'Srp.gui.TareaGrid';
        },
        setActivePage: function (_activePage) {
            activePage = _activePage;
        },
        getActivePage: function () {
            return activePage;
        }
    };
})();
Ext.ns('Srp');
Srp.WorkflowManager = (function () {
    return {
        WORKFLOW: {
            NOTARIA: {
                ENVIAR_A_FIRMA: 'continua',
                FIRMAR: 'correcto',
                DEVOLVER_EDICION: 'incorrecto',
                PAGAR: 'continua',
                PAGO: {
                    REPAGAR: 'repagar',
                    ANULAR: 'anular'
                },
                APROBAR_ACTUACION: 'terminar',
                RECHAZAR_ACTUACION: 'no cumple',
                TERMINAR: 'terminar'
            },
            OAI: {
                REGISTRAR_PAGO: 'continuar',
                RECEPCIONAR: 'continuar',
                REVISAR_ACTUACION: 'cumple',
                RECHAZAR_ACTUACION: 'no cumple',
                ADJUNTAR: 'continuar',
                TERMINAR: 'terminar'
            },
            UP: {
                ENVIAR_A_REVISION: 'continuar',
                APROBAR_REVISION: 'cumple',
                RECHAZAR_REVISION: 'no cumple',
                APROBAR_APROBACION: 'continuar',
                ENVIAR_A_OU: 'enviar a ou',
                RECONSIDERAR: 'reconsiderar',
                RECHAZO_RECHAZAR_REVISION: 'go',
                RECHAZO_ENVIAR_A_OU: 'enviar notaria'
            }
        },
        getTransition: function () {
            return WORKFLOW_PATHS[pathName];
        },
        advanceTo: function (conf) {
            Ext.Ajax.request({
                url: Srp.getWsUrl('WS_AVANZAR_WORKFLOW'),
                method: 'POST',
                scope: conf.scope,
                params: {
                    taskid: conf.taskid.substring(5),
                    transicion: conf.transition
                },
                success: conf.success,
                failure: conf.failure,
                extra: conf.extra
            });
        }
    };
})();
Ext.ns('Srp');
Srp.WebServiceManager = (function () {
    var urlWebservice = Srp.conf.Properties.WEBSERVICE_SERVER_PROXY_URL;
    var urlWebserviceDummy = Srp.conf.Properties.ALFRESCO_DUMMY_URL;
    var ticket = '';
    return {
        setTicket: function (_ticket) {
            ticket = _ticket;
        },
        getWebserviceUrl: function () {
            return urlAlfrescoProxy;
        },
        getUrl: function (serviceName, isDummy) {
            if (isDummy || Srp.conf.Properties.USE_WEBSERVICE_DUMMY) {
                var service = urlWebserviceDummy + Srp.conf.DummyServices[serviceName];
            } else {
                var service = urlWebservice + Srp.conf.Services[serviceName];
            }
            return service;
        },
        getDirectUrl: function (serviceName, isDummy) {
            if (isDummy || Srp.conf.Properties.USE_WEBSERVICE_DUMMY) {
                var service = Srp.conf.DummyServices[serviceName];
            } else {
                var service = Srp.conf.Services[serviceName];
            }
            return service;
        },
        showSpinner: function () {
            alert('Mostrando el spinner');
        },
        hideSpinner: function () {
            alert('Ocultando el spinner');
        },
        request: function (config) {
            config.params['ticket'] = ticket;
            Ext.Ajax.request({
                url: config.url,
                method: config.method,
                params: config.params,
                success: config.success,
                failure: config.failure,
                scope: config.scope
            });
        }
    };
})();
Ext.ns('Srp');
Srp.LogManager = (function () {
    var log = log4javascript.getLogger();
    var ajaxAppender = new log4javascript.AjaxAppender(Srp.WebServiceManager.getDirectUrl('WS_LOGS'));
    log.addAppender(ajaxAppender);
    return log;
})();
Srp.Log = Srp.LogManager;
Ext.ns('Srp');
Srp.ReportesManager = (function () {
    var informeRecaudacion;
    return {
        getResolucionExenta: function (actuacion) {
            if (actuacion.resolucionExenta != undefined && actuacion.resolucionExenta != null && actuacion.resolucionExenta.length > 0) {
                Log4js.debug('onImprimirOficio: imprimiendo rechazo');
                for (var i = 0; i < actuacion.resolucionExenta.length; i++) {
                    window.open(actuacion.resolucionExenta[i].url, '_blank');
                }
            } else {
                Log4js.debug('onImprimirOficio: No hay rechazo para imprimir');
                Srp.gui.messageBox.Info({
                    msg: 'No existe archivo para imprimir.'
                });
            }
        },
        setInformeRecaudacion: function (_informeRecaudacion) {
            informeRecaudacion = _informeRecaudacion;
        },
        getInformeRecaudacion: function () {
            return informeRecaudacion;
        }
    };
})();
Ext.ns('Srp');
Srp.FrontController = function () {
    var privateProperty = "Only accessible internally";
    var ignoreEvents = false;

    function privateMethod() {
        alert("Only callable internally");
    }
    return Ext.apply(new Ext.util.Observable, {
        publicProperty: "You can access this",
        registerCommand: function (event, command) {
            this.addEvents(event);
            this.on(event, command.onExecute, command, this);
        },
        registerEvents: function (events) {
            for (var i = 0; i < events.length; i++) {
                var c = events[i];
                this.on(c.name, c.command.onExecute, c.command, this);
            }
        },
        unregisterEvents: function (events) {
            if (events) {
                for (var i = 0; i < events.length; i++) {
                    var c = events[i];
                    this.un(c.name, c.command.onExecute, c.command, this);
                }
            }
        },
        setIgnoreEvents: function (_ignoreEvents) {
            ignoreEvents = _ignoreEvents;
        },
        getIgnoreEvents: function () {
            return ignoreEvents;
        }
    })
}();
Ext.ns('Srp');
Srp.Command = Ext.extend(Ext.util.Observable, {
    url: '',
    method: '',
    params: {},
    parameters: [],
    constructor: function (options) {
        this.parameters = [];
    },
    onExecute: function (message) {},
    onSuccess: function () {},
    onFailure: Srp.WebScriptManager.connectionError,
    doRequest: function () {
        var conf = {
            url: this.url,
            method: this.method,
            params: this.params,
            success: this.onSuccess,
            failure: this.onFailure,
            scope: this,
            parameters: this.parameters
        };
        if (Ext.isDefined(this.headers)) {
            conf.headers = this.headers;
        }
        Ext.Ajax.request(conf);
    },
    setParameter: function (paramKey, paramValue) {
        this.parameters[paramKey] = paramValue;
    },
    getParameter: function (paramKey) {
        return this.parameters[paramKey];
    }
});
Ext.ns("Srp.command");
Srp.command.SearchActuacionCmd = Ext.extend(Srp.Command, {
    method: 'GET',
    constructor: function () {
        this.url = Srp.getWsUrl('WS_ACTUACION_SEARCH');
        Srp.command.SearchActuacionCmd.superclass.constructor.call(this);
    },
    onExecute: function (params) {
        this.store = this.parameters.store;
        var v = params.values;
        var formatSearchDate = function (d) {
            var parts = d.split('/');
            return parts[2] + '-' + parts[1] + '-' + parts[0];
        };
        var query = {};
        if (!util.isEmpty(v.estado) || !util.isEmpty(v.fechaDesde) || !util.isEmpty(v.fechaHasta)) {
            query.actuacion = {};
        }
        if (!util.isEmpty(v.numeroRepertorio)) {
            query.actuacion = {};
            query.actuacion.numeroRepertorio = v.numeroRepertorio;
        }
        if (!util.isEmpty(v.agnoRepertorio)) {
            if (typeof query.actuacion === 'undefined') {
                query.actuacion = {};
            }
            query.actuacion.agnoRepertorio = v.agnoRepertorio;
        }
        if (!util.isEmpty(v.estado) && v.estado != TIPO_ESTADO_TODOS) {
            query.actuacion.estado = v.estado;
        }
        if (!util.isEmpty(v.fechaDesde) || !util.isEmpty(v.fechaHasta)) {
            query.actuacion.fechaRepertorioInicial = util.isEmpty(v.fechaDesde) ? '2010-06-19' : formatSearchDate(v.fechaDesde);
            if (util.isEmpty(v.fechaHasta)) {
                var currentTime = new Date();
                query.actuacion.fechaHasta = currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate();
            } else {
                query.actuacion.fechaRepertorioFinal = formatSearchDate(v.fechaHasta);
            }
        }
        if (!util.isEmpty(v.acreedor) || !util.isEmpty(v.identificadorAcreedor)) {
            query.acreedor = {};
        }
        if (!util.isEmpty(v.acreedor)) {
            query.acreedor.nombres = v.acreedor;
        }
        if (!util.isEmpty(v.identificadorAcreedor)) {
            query.acreedor.identificador = v.identificadorAcreedor;
        }
        if (!util.isEmpty(v.constituyente) || !util.isEmpty(v.identificadorConstituyente)) {
            query.constituyente = {};
        }
        if (!util.isEmpty(v.constituyente)) {
            query.constituyente.nombres = v.constituyente;
        }
        if (!util.isEmpty(v.identificadorConstituyente)) {
            query.constituyente.identificador = v.identificadorConstituyente;
        }
        if (!util.isEmpty(v.deudor) || !util.isEmpty(v.identificadorDeudor)) {
            query.deudor = {};
        }
        if (!util.isEmpty(v.deudor)) {
            query.deudor.nombres = v.deudor;
        }
        if (!util.isEmpty(v.identificadorDeudor)) {
            query.deudor.identificador = v.identificadorDeudor;
        }
        if (!util.isEmpty(v.tipoOU) && v.tipoOU != 'any' && !util.isEmpty(v.owner)) {
            query.owner = v.owner;
        }
        var info = Ext.util.JSON.encode(query);
        this.params = {
            info: info
        };
        this.doRequest();
    },
    makeNombre: function (json) {
        var nombre = '';
        switch (json.personaTipo) {
            case CALIDAD_PERSONA_NATURAL:
                nombre = json.apellidoPaterno + ' ' + json.apellidoMaterno + ', ' + json.nombres;
                break;
            case CALIDAD_PERSONA_JURIDICA:
                nombre = json.razonSocial;
                break;
            case CALIDAD_EXTRANJERA:
                nombre = json.nombres;
                break;
        }
        return nombre;
    },
    makeRepertorio: function (numero, agno) {
        if (typeof (numero) !== 'undefined' && typeof (agno) !== 'undefined') {
            return numero + '-' + agno;
        }
        return '';
    },
    fixActuaciones: function (s) {
        return s.replace(/\}[\s]*\{/g, '},{');
    },
    onSuccess: function (response, cmd) {
        var actuacionesString = this.fixActuaciones(response.responseText);
        var actuaciones = Ext.util.JSON.decode(actuacionesString).actuaciones;
        var data = [];
        for (var i = 0; i < actuaciones.length; i++) {
            data[i] = [this.makeRepertorio(actuaciones[i].numeroRepertorio, actuaciones[i].agnoRepertorio), this.makeRepertorio(actuaciones[i].numeroRepertorioNotaria, actuaciones[i].agnoRepertorioNotaria), actuaciones[i].fechaRepertorio, typeof (actuaciones[i].acreedor) !== 'undefined' ? this.makeNombre(actuaciones[i].acreedor) : '', typeof (actuaciones[i].constituyentes[0]) !== 'undefined' ? this.makeNombre(actuaciones[i].constituyentes[0]) : '', actuaciones[i].nodeid, actuaciones[i].numeroRepertorio, actuaciones[i].agnoRepertorio, actuaciones[i].tipoActuacion, actuaciones[i].estado];
        }
        var r = this.store.reader.readRecords(data);
        this.store.loadRecords(r, Ext.apply({}, this.store.lastOptions), true);
    }
});
Ext.ns("Srp.command");
Srp.command.SearchActuacionByTypeCmd = Ext.extend(Srp.Command, {
    method: 'GET',
    constructor: function () {
        this.url = Srp.getWsUrl('WS_ACTUACION_SEARCH_BY_TYPE');
        Srp.command.SearchActuacionByTypeCmd.superclass.constructor.call(this);
    },
    onExecute: function (params) {
        this.store = this.parameters.store;
        var query = params.values;
        this.params = {
            info: Ext.util.JSON.encode(query)
        };
        this.doRequest();
    },
    fixActuaciones: function (s) {
        return s.replace(/\}[\s]*\{/g, '},{');
    },
    makeRepertorio: function (numero, agno) {
        if (typeof (numero) !== 'undefined' && typeof (agno) !== 'undefined') {
            return numero + '-' + agno;
        }
        return '';
    },
    makeNombre: function (json) {
        var nombre = '';
        switch (json.personaTipo) {
            case CALIDAD_PERSONA_NATURAL:
                nombre = json.apellidoPaterno + ' ' + json.apellidoMaterno + ', ' + json.nombres;
                break;
            case CALIDAD_PERSONA_JURIDICA:
                nombre = json.razonSocial;
                break;
            case CALIDAD_EXTRANJERA:
                nombre = json.nombres;
                break;
        }
        return nombre;
    },
    makeOrigen: function (tipoOu, nombreOu) {
        return tipoOu.capitalize() + ' ' + nombreOu;
    },
    onSuccess: function (response, cmd) {
        var actuacionesString = this.fixActuaciones(response.responseText);
        var actuaciones = Ext.util.JSON.decode(actuacionesString).actuaciones;
        if (Ext.isDefined(this.store)) {
            var data = [];
            for (var i = 0; i < actuaciones.length; i++) {
                var actuacion = actuaciones[i];
                data[i] = [this.makeRepertorio(actuacion.numeroRepertorio, actuacion.agnoRepertorio), this.makeRepertorio(actuacion.numeroRepertorioNotaria, actuacion.agnoRepertorioNotaria), actuacion.fechaRepertorio, typeof (actuacion.acreedor) !== 'undefined' ? this.makeNombre(actuacion.acreedor) : '', typeof (actuacion.constituyentes[0]) !== 'undefined' ? this.makeNombre(actuacion.constituyentes[0]) : '', actuacion.nodeid, actuacion.numeroRepertorio, actuacion.agnoRepertorio, actuacion.tipoActuacion, this.makeOrigen(actuacion.tipoOu, actuacion.nombreOu), actuacion.estado];
            }
            var r = this.store.reader.readRecords(data);
            this.store.loadRecords(r, Ext.apply({}, this.store.lastOptions), true);
        } else if (Ext.isDefined(this.getParameter('panel'))) {
            this.getParameter('panel').processSearch(actuaciones);
        }
    }
});
Ext.ns("Srp.command");
Srp.command.CargarWorkflowHistoryCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.CargarWorkflowHistoryCmd.superclass.constructor.call(this);
    },
    onExecute: function (workflowHistory) {
        Log4js.debug('CargarWorkflowHistoryCmd.onExecute()');
        var x = this;
        var task = new Ext.util.DelayedTask(function () {
            x.getParameter('panelWorkflowHistory').loadWorkflowList(workflowHistory);
        });
        task.delay(5000);
    }
});
Ext.ns('Srp.command');
Srp.command.LiberarTareaCmd = Ext.extend(Srp.Command, {
    method: 'POST',
    task: '',
    constructor: function () {
        Srp.command.LiberarTareaCmd.superclass.constructor.call(this);
        this.url = Srp.getWsUrl('WS_TAREA_LIBERAR');
    },
    onExecute: function (task) {
        Log4js.debug('LiberarTareaCmd.onExecute()');
        this.parameters = {
            task: task,
            grid: this.getParameter('grid')
        };
        this.params = {
            taskid: task.get('taskid').substring(5)
        };
        this.doRequest();
    },
    onSuccess: function (response, opts) {
        var task = opts.parameters.task;
        task.set('tomado', false);
        var grid = opts.parameters.grid;
        grid.processLiberarTarea(task);
    },
    onFailure: Srp.WebScriptManager.connectionError
});
Ext.ns("Srp.command");
Srp.command.TomarTareaCmd = Ext.extend(Srp.Command, {
    method: 'POST',
    task: '',
    constructor: function () {
        Srp.command.TomarTareaCmd.superclass.constructor.call(this);
        this.url = Srp.getWsUrl('WS_TAREA_TOMAR');
    },
    onExecute: function (task, doAction) {
        var taskid;
        if (Ext.isObject(task)) {
            this.task = task;
            taskid = task.get('taskid')
        } else {
            taskid = task;
        }
        this.params = {
            taskid: taskid.substring(5),
            username: model.user.Usuario.getUsername(),
            record: task,
            doAction: doAction
        };
        this.doRequest();
    },
    onSuccess: function (response, opts) {
        if (Ext.isObject(this.task)) {
            this.task.set('tomado', true);
            if (opts.params.doAction) {
                Ext.getCmp('tarea-grid').doAction(opts.params.record);
            }
        }
        if (Ext.isDefined(this.getParameter('saveActuacionCmd'))) {
            this.getParameter('saveActuacionCmd').onExecuteNextStep();
        }
    },
    onFailure: function (response, opts) {
        if (Ext.isDefined(this.getParameter('saveActuacionCmd'))) {
            this.getParameter('saveActuacionCmd').onExecuteNextStep();
        }
        if (response.status == 400) {
            Srp.gui.messageBox.Warning({
                msg: I18n.mensajes.error.taskAlreadyTaken
            });
        } else {
            Srp.gui.messageBox.Error({
                msg: I18n.mensajes.error.errorTomarTarea
            });
        }
        Srp.Canvas.updateContent(new Srp.gui.TareaGrid());
    }
});
Ext.ns("Srp.command");
Srp.command.AsignarTareaCmd = Ext.extend(Srp.Command, {
    method: 'POST',
    constructor: function () {
        Srp.command.AsignarTareaCmd.superclass.constructor.call(this);
        this.url = Srp.getWsUrl('WS_TAREA_TOMAR');
    },
    onExecute: function (task, username) {
        var taskid;
        if (Ext.isObject(task)) {
            this.task = task;
            taskid = task.get('taskid')
        } else {
            taskid = task;
        }
        this.parameters = {
            task: task,
            grid: this.getParameter('grid')
        };
        this.params = {
            taskid: taskid.substring(5),
            username: username,
            record: task
        };
        this.doRequest();
    },
    onSuccess: function (response, opts) {
        var task = opts.parameters.task;
        if (Ext.isObject(task)) {
            task.set('tomado', true);
            var grid = opts.parameters.grid;
            grid.processAsignarTarea(task);
        }
    },
    onFailure: function (response, opts) {
        if (response.status == 400) {
            Srp.gui.messageBox.Warning({
                msg: I18n.mensajes.error.taskAlreadyTaken
            });
        } else {
            Srp.gui.messageBox.Error({
                msg: I18n.mensajes.error.errorTomarTarea
            });
        }
    }
});
Ext.ns("Srp.command");
Srp.command.CargarBotonesOpcionesMenuCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.Command.superclass.constructor.call(this);
    },
    onExecute: function () {
        this.parameters.menu.reloadMenu();
    },
    onSuccess: function (response, opts) {
        Ext.Msg.alert('Lanzando onSuccess de CargarBotonesCmd');
    },
    onFailure: function () {
        Ext.Msg.alert('OnFailure', 'CargarBotonesCmd: OnFailure :(');
    },
    setGrid: function (grid) {
        this.grid = grid;
    }
});
Ext.ns("Srp.command");
Srp.command.CargarBotonesTareaGridCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.Command.superclass.constructor.call(this);
    },
    onExecute: function () {
        this.parameters.grid.reloadTopToolbar();
    },
    onSuccess: function (response, opts) {
        Ext.Msg.alert('Lanzando onSuccess de CargarBotonesCmd');
    },
    onFailure: function () {
        Ext.Msg.alert('OnFailure', 'CargarBotonesCmd: OnFailure :(');
    }
});
Ext.ns("Srp.command");
Srp.command.HabilitarBotonCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.Command.superclass.constructor.call(this);
    },
    onExecute: function () {
        this.parameters.boton.enable();
    },
    onSuccess: function (response, opts) {
        Ext.Msg.alert('Lanzando onSuccess de CargarBotonesCmd');
    },
    onFailure: function () {
        Ext.Msg.alert('OnFailure', 'CargarBotonesCmd: OnFailure :(');
    }
});
Ext.ns("Srp.command");
Srp.command.BuscarActuacionCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'GET',
    constructor: function (id) {
        this.id = id;
        Srp.command.BuscarActuacionCmd.superclass.constructor.call(this);
        this.registrarEventos();
    },
    onExecute: function (filtros) {
        this.params = {};
        this.filtros = filtros;
        if (filtros.taskid) {
            if (filtros.tramite == TIPO_ACTIVIDAD_ACCION) {
                this.url = Srp.getWsUrl('WS_ANOTACION_GET_BY_TASKID', filtros.taskid);
            } else {
                this.url = Srp.getWsUrl('WS_ACTUACION_GET_BY_TASKID', filtros.taskid);
            }
        } else {
            if (filtros.nRepertorio && filtros.agno) {
                this.url = Srp.getWsUrl('WS_ACTUACION_GET_BY_NUMERO_REPERTORIO');
                this.params = {
                    numero: filtros.nRepertorio,
                    agno: filtros.agno
                };
            } else {
                if (filtros.nodeid) {
                    this.url = Srp.getWsUrl('WS_ACTUACION_GET_BY_NODEID', filtros.nodeid);
                }
            }
        }
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        var actuacion = Ext.util.JSON.decode(response.responseText);
        this.actuacion = actuacion;
        if (actuacion.success) {
            if (this.filtros.buscarEnRVM) {
                var repertorioAgno = actuacion.numeroRepertorio + '-' + actuacion.agnoRepertorio;
                Srp.FrontController.fireEvent('onReadyPPULoadRVM_' + this.id, repertorioAgno);
                return;
            } else {
                this.actuacion.respuestaRVM = PPU_RESPUESTA_OK;
            }
        }
        this.onLoadActuacion();
    },
    onFailure: function (response, cmd) {
        if (response.status == '400') {
            this.actuacion = {};
            this.onLoadActuacion();
        }
    },
    onProcessPPULoadRVM: function (ppuObject) {
        if (ppuObject.success == PPU_RESPUESTA_OK) {
            this.actuacion.vehiculos = ppuObject.list;
            this.actuacion.respuestaRVM = PPU_RESPUESTA_OK;
            this.onLoadActuacion();
        } else {
            this.actuacion.vehiculos = [];
            this.actuacion.respuestaRVM = ppuObject.success;
            this.onLoadActuacion();
        }
    },
    onLoadActuacion: function () {
        Srp.FrontController.fireEvent('onLoadActuacion', this.actuacion, this.id);
    },
    registrarEventos: function () {
        var anotacionesRvmCmd = new Srp.command.ws.AnotacionesRVMCmd(this.id);
        anotacionesRvmCmd.setParameter('obj', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onReadyPPULoadRVM_' + this.id,
            command: anotacionesRvmCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Srp.command.ObtenerMensajeMenuCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'GET',
    elemento: null,
    constructor: function (id) {
        this.id = id;
        Srp.command.ObtenerMensajeMenuCmd.superclass.constructor.call(this);
    },
    onExecute: function (filtros) {
        this.elemento = filtros;
        var tempUrl = Srp.getWsUrl('WS_GET_MENSAJE_MENU');
        this.url = util.Format.replace(tempUrl, 'NODE_ID_PROPERTY_MENSAJE', Srp.conf.Properties.NODE_ID_MENSAJE_BAJO_MENU);
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        if (response.status != 302) {
            if (this.elemento != undefined && this.elemento != 'undefined') {
                this.elemento.innerHTML = response.responseText;
            }
        }
    },
    onFailure: function (response, cmd) {
        if (this.elemento != undefined && this.elemento != 'undefined') {
            this.elemento.innerHTML = '';
        }
    }
});
Ext.ns("Srp.command");
Srp.command.CargarPPUGridCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.CargarPPUGridCmd.superclass.constructor.call(this);
    },
    onExecute: function (actuacion) {
        Log4js.debug('CargarPPUGridCmd.onExecute()');
        var editando = false;
        if (typeof (Ext.getCmp('alzamiento-wizard')) !== 'undefined') {
            var wiz = Ext.getCmp('alzamiento-wizard');
            if (typeof (wiz.actuacion) !== 'undefined') {
                var act = wiz.actuacion;
                if (typeof (act.inscripcionNodeId) !== 'undefined') {
                    if (act.inscripcionNodeId === actuacion.nodeid) {
                        editando = true;
                    }
                }
            }
        }
        if (typeof (Ext.getCmp('modificacion-actuacion-wizard')) !== 'undefined') {
            var wiz = Ext.getCmp('modificacion-actuacion-wizard');
            if (typeof (wiz.actuacion) !== 'undefined') {
                var act = wiz.actuacion;
                if (typeof (act.inscripcionNodeId) !== 'undefined') {
                    if (act.inscripcionNodeId === actuacion.nodeid) {
                        editando = true;
                    }
                }
            }
        }
        var store = this.getParameter('grid').getStore();
        if (!editando && actuacion.vehiculos) {
            var vehiculos = [];
            for (var i = 0; i < actuacion.vehiculos.length; ++i) {
                var vehiculo = actuacion.vehiculos[i];
                vehiculos.push({
                    patente: vehiculo.patente,
                    patenteProhibicion: vehiculo.patenteProhibicion,
                    modificar: vehiculo.modificar
                });
            }
            store.loadData(vehiculos);
        }
    }
});
Ext.ns("Srp.command");
Srp.command.BuscarActuacionCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'GET',
    constructor: function (id) {
        this.id = id;
        Srp.command.BuscarActuacionCmd.superclass.constructor.call(this);
        this.registrarEventos();
    },
    onExecute: function (filtros) {
        this.params = {};
        this.filtros = filtros;
        if (filtros.taskid) {
            if (filtros.tramite == TIPO_ACTIVIDAD_ACCION) {
                this.url = Srp.getWsUrl('WS_ANOTACION_GET_BY_TASKID', filtros.taskid);
            } else {
                this.url = Srp.getWsUrl('WS_ACTUACION_GET_BY_TASKID', filtros.taskid);
            }
        } else {
            if (filtros.nRepertorio && filtros.agno) {
                this.url = Srp.getWsUrl('WS_ACTUACION_GET_BY_NUMERO_REPERTORIO');
                this.params = {
                    numero: filtros.nRepertorio,
                    agno: filtros.agno
                };
            } else {
                if (filtros.nodeid) {
                    this.url = Srp.getWsUrl('WS_ACTUACION_GET_BY_NODEID', filtros.nodeid);
                }
            }
        }
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        var actuacion = Ext.util.JSON.decode(response.responseText);
        this.actuacion = actuacion;
        if (actuacion.success) {
            if (this.filtros.buscarEnRVM) {
                var repertorioAgno = actuacion.numeroRepertorio + '-' + actuacion.agnoRepertorio;
                Srp.FrontController.fireEvent('onReadyPPULoadRVM_' + this.id, repertorioAgno);
                return;
            } else {
                this.actuacion.respuestaRVM = PPU_RESPUESTA_OK;
            }
        }
        this.onLoadActuacion();
    },
    onFailure: function (response, cmd) {
        if (response.status == '400') {
            this.actuacion = {};
            this.onLoadActuacion();
        }
    },
    onProcessPPULoadRVM: function (ppuObject) {
        if (ppuObject.success == PPU_RESPUESTA_OK) {
            this.actuacion.vehiculos = ppuObject.list;
            this.actuacion.respuestaRVM = PPU_RESPUESTA_OK;
            this.onLoadActuacion();
        } else {
            this.actuacion.vehiculos = [];
            this.actuacion.respuestaRVM = ppuObject.success;
            this.onLoadActuacion();
        }
    },
    onLoadActuacion: function () {
        Srp.FrontController.fireEvent('onLoadActuacion', this.actuacion, this.id);
    },
    registrarEventos: function () {
        var anotacionesRvmCmd = new Srp.command.ws.AnotacionesRVMCmd(this.id);
        anotacionesRvmCmd.setParameter('obj', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onReadyPPULoadRVM_' + this.id,
            command: anotacionesRvmCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Srp.command.ObtenerMensajeMenuCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'GET',
    elemento: null,
    constructor: function (id) {
        this.id = id;
        Srp.command.ObtenerMensajeMenuCmd.superclass.constructor.call(this);
    },
    onExecute: function (filtros) {
        this.elemento = filtros;
        var tempUrl = Srp.getWsUrl('WS_GET_MENSAJE_MENU');
        this.url = util.Format.replace(tempUrl, 'NODE_ID_PROPERTY_MENSAJE', Srp.conf.Properties.NODE_ID_MENSAJE_BAJO_MENU);
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        if (response.status != 302) {
            if (this.elemento != undefined && this.elemento != 'undefined') {
                this.elemento.innerHTML = response.responseText;
            }
        }
    },
    onFailure: function (response, cmd) {
        if (this.elemento != undefined && this.elemento != 'undefined') {
            this.elemento.innerHTML = '';
        }
    }
});
Ext.ns("Srp.command");
Srp.command.RecuperarActuacionCmd = Ext.extend(Srp.Command, {
    constructor: function (id) {
        this.id = id;
        Srp.command.RecuperarActuacionCmd.superclass.constructor.call(this);
    },
    onExecute: function (actuacion, id) {
        if (this.id == id) {
            this.getParameter('obj').processActuacion(actuacion);
        }
    }
});
Ext.ns("Srp.command");
Srp.command.SaveActuacionCmd = Ext.extend(Srp.Command, {
    method: 'POST',
    constructor: function () {
        Srp.command.SaveActuacionCmd.superclass.constructor.call(this);
        this.registrarEventos();
    },
    setUrl: function (url) {
        this.url = url;
    },
    onExecute: function (conf) {
        this.maskEnable = false;
        this.actions = conf.actions;
        this.source = conf.source;
        this.typeValidation = conf.typeValidation;
        this.errorMessage = conf.errorMessage;
        this.confirmMessage = conf.confirmMessage;
        this.estadoAnotacion = conf.estadoAnotacion;
        this.transition = conf.transition;
        this.log = conf.log;
        if (Ext.isDefined(conf.extraParams)) {
            this.extraParams = conf.extraParams;
        } else {
            this.extraParams = {};
        }
        if (Ext.isDefined(conf.actuacion)) {
            this.actuacion = conf.actuacion;
        }
        this.onExecuteNextStep();
    },
    onExecuteNextStep: function () {
        if (this.actions.length > 0) {
            var action = this.actions.shift();
            this[action]();
        }
    },
    onLoadMask: function () {
        this.loadMask();
        this.onExecuteNextStep();
    },
    loadMask: function () {
        this.maskEnable = true;
        var el = this.parameters.wizard.getEl();
        el.mask(I18n.mensajes.grabandoActuacion, "x-mask-loading");
    },
    onRemoveMask: function () {
        this.removeMask();
    },
    removeMask: function () {
        var mark = this.maskEnable;
        if (this.maskEnable) {
            var el = this.parameters.wizard.getEl();
            el.unmask();
            this.maskEnable = false;
        }
        return mark;
    },
    onForceCheckRepertorioNotariaUnico: function () {
        Srp.FrontController.fireEvent('onForceCheckRepertorioNotariaUnico', this);
    },
    processForceValidation: function (valid) {
        if (!valid) {
            Srp.FrontController.setIgnoreEvents(false);
            this.removeMask();
            Srp.gui.messageBox.FormWarning({
                message: I18n.mensajes.repertorioNotariaYaIngresado
            });
        } else {
            this.onExecuteNextStep();
        }
    },
    onValidate: function () {
        Srp.FrontController.setIgnoreEvents(true);
        this.actuacion = this.parameters.wizard.getJSON();
        if (this.parameters.wizard && this.parameters.wizard.isValid(this.typeValidation)) {
            this.onExecuteNextStep();
        } else {
            Srp.FrontController.setIgnoreEvents(false);
            this.removeMask();
            Srp.gui.messageBox.FormWarning({
                message: this.errorMessage
            });
        }
    },
    onConfirm: function () {
        this.beforeMask = this.removeMask();
        Srp.gui.messageBox.YesNo({
            msg: this.confirmMessage,
            fn: this.onConfirmAction,
            scope: this
        });
    },
    onConfirmAction: function (id) {
        if (id === 'yes') {
            if (this.beforeMask) {
                this.loadMask();
            }
            this.onExecuteNextStep();
        }
    },
    onValidateAccion: function () {
        this.actuacion = this.parameters.wizard.getJSON();
        if (this.parameters.wizard && this.parameters.wizard.isValid(this.typeValidation)) {
            this.onExecuteNextStep();
        } else {
            Srp.gui.messageBox.Warning({
                msg: I18n.commons.formularioConErrores
            });
        }
    },
    onSave: function () {
        if (this.log) {
            var actuacionPrevia = this.parameters.wizard.getActuacionPrevia();
            var ou = model.user.Usuario.getOrganization();
            Srp.Log.info("Edicion Actuacion: " + "Usuario: " + model.user.Usuario.getUsername() + "; Ou: " + ou.tipo + ", " + ou.nombre + "; Actuacion Previa:\n" + Ext.util.JSON.encode(actuacionPrevia));
        }
        this.actuacion = util.Format.changeRutsActuacionToSave(this.actuacion);
        var actuacionJSON = Ext.util.JSON.encode(this.actuacion);
        Log4js.debug('Enviando:\n' + actuacionJSON);
        var saveFormPanel = this.parameters.saveForm;
        saveFormPanel.getComponent('info').setValue(actuacionJSON);
        if (saveFormPanel.getForm().isValid()) {
            var uploadURL = Srp.WebScriptManager.getUrl(this.parameters.urlWs);
            saveFormPanel.getForm().doAction("restfulsubmit", {
                clientValidation: true,
                url: uploadURL,
                scope: this,
                success: this.onSuccessSave,
                failure: this.onFailureSave
            });
        }
    },
    onSuccessSave: function (response, opts) {
        this.parameters.wizard.response = Ext.util.JSON.decode(opts.response.responseText);
        if (this.log) {
            var ou = model.user.Usuario.getOrganization();
            Srp.Log.info("Edicion Actuacion: " + "Usuario: " + model.user.Usuario.getUsername() + "; Ou: " + ou.tipo + ", " + ou.nombre + "; Actuacion Guardada:\n" + Ext.util.JSON.encode(this.parameters.wizard.response));
        }
        log.Log4JS.debug('Recibiendo:\n' + Ext.util.JSON.encode(Ext.util.JSON.decode(opts.response.responseText)));
        this.actuacion.nodeid = this.parameters.wizard.response.nodeid;
        this.actuacion.validado = this.parameters.wizard.response.validado;
        this.onExecuteNextStep();
    },
    onFailureSave: function (form, action) {
        Srp.WebScriptManager.onFailureSaveActuacion(form, action);
    },
    onGetTaskId: function () {
        if (!Ext.isDefined(this.actuacion.taskid)) {
            var objRequest = {
                rows: [{
                    nodeid: this.actuacion.nodeid
                }]
            };
            var objEncodeRequest = Ext.util.JSON.encode(objRequest);
            var saveFormPanel = this.parameters.saveForm;
            saveFormPanel.getComponent('info').setValue(objEncodeRequest);
            if (saveFormPanel.getForm().isValid()) {
                var uploadURL = Srp.WebScriptManager.getUrl('WS_GET_TASKID_BY_NODEID');
                saveFormPanel.getForm().submit({
                    url: uploadURL,
                    scope: this,
                    success: this.onSuccessGetTaskId,
                    failure: Srp.WebScriptManager.connectionError
                });
            }
        } else {
            this.onExecuteNextStep();
        }
    },
    onSuccessGetTaskId: function (response, opts) {
        var response = Ext.util.JSON.decode(opts.response.responseText);
        if (response.success) {
            var task = response.rows.pop();
            this.actuacion.taskid = task.msg;
            this.onExecuteNextStep();
        }
    },
    onTakeTask: function () {
        Srp.FrontController.fireEvent('onTomarTarea', this.actuacion.taskid);
    },
    onCheckAutomaticValidation: function () {
        if (!Ext.isDefined(this.actuacion.validado) || !this.actuacion.validado) {
            Srp.gui.messageBox.YesNo({
                msg: 'No se encontró el/los RUN del constituyente en el contrato.<br/>¿Desea enviar a firma de todas maneras?',
                fn: this.onConfirmCheckAutomaticValidation,
                scope: this
            });
        } else {
            this.onExecuteNextStep();
        }
    },
    onConfirmCheckAutomaticValidation: function (id) {
        if (id === 'yes') {
            this.onExecuteNextStep();
        } else {
            Log4js.debug('Resetear Formulario');
            this.onRefreshForm();
        }
    },
    onRefreshForm: function () {
        Srp.FrontController.fireEvent('onReBuscarActuacion', {
            taskid: this.actuacion.taskid.substring(5),
            tramite: this.actuacion.tramite
        });
    },
    processActuacion: function (actuacion) {
        Log4js.debug('SaveActuacionCmd.processActuacion()');
        Srp.FrontController.fireEvent('Menu.onUpdateContent');
        if (!Ext.isDefined(this.actuacion.type)) {
            this.actuacion.type = TipoTarea.EDITAR_ACTUACION;
        }
        Log4js.debug('this.actuacion.type: ' + this.actuacion.type);
        Log4js.debug('this.actuacion.tramite: ' + this.actuacion.tramite);
        actuacion.type = this.actuacion.type;
        actuacion.tramite = this.actuacion.tramite;
        var action = Srp.NavigationManager.getAction(actuacion.type, actuacion.tramite);
        Srp.Canvas.updateContent(action, {
            actuacion: actuacion,
            itemId: 'content'
        });
        if (this.extraParams) {
            Srp.FrontController.fireEvent('onMovePageWizard', this.extraParams.pageWizardToolbar);
        }
    },
    onGetTerminal: function () {
        Ext.Ajax.request({
            url: Srp.WebServiceManager.getDirectUrl('WS_CAJA_GET_TERMINAL'),
            method: 'GET',
            scope: this,
            success: this.onSuccessGetTerminal,
            failure: this.onFailureGetTerminal
        });
    },
    onSuccessGetTerminal: function (response, opts) {
        var response = Ext.util.JSON.decode(response.responseText);
        if (Srp.conf.Properties.DEVELOPMENT_MODE) {
            this.actuacion.terminal = "TND002";
        } else {
            if (!response.success) {
                Srp.gui.messageBox.Error({
                    msg: I18n.mensajes.error.PRD005.replace('%terminal', response.terminal)
                });
                return;
            }
            this.actuacion.terminal = response.terminal;
        }
        this.onExecuteNextStep();
    },
    onFailureGetTerminal: function (response, opts) {
        Srp.gui.messageBox.Error({
            msg: I18n.mensajes.error.PRD003
        });
    },
    onRegistrarIngresoCaja: function () {
        Srp.PagoManager.registrarIngreso({
            actuacion: this.actuacion,
            scope: this,
            success: this.onSuccessRegistrarIngresoCaja,
            failure: this.onFailureRegistrarIngresoCaja
        });
    },
    onSuccessRegistrarIngresoCaja: function (response, opts) {
        var response = Ext.util.JSON.decode(response.responseText);
        var root = response['ws:registrarIngresoResponse']['return']['root'];
        if (eval(root['@success'])) {
            this.guardarRegistroIngresoCaja(root['@numeroAtencion']);
        } else if (root['@numeroAtencion'] == -1) {
            Srp.gui.messageBox.Error({
                msg: I18n.mensajes.error.PRD005.replace('%terminal', this.actuacion.terminal)
            });
        } else {
            this.onFailureRegistrarIngresoCaja();
        }
    },
    onFailureRegistrarIngresoCaja: function () {
        Srp.gui.messageBox.Error({
            msg: I18n.mensajes.error.PRD002
        });
    },
    guardarRegistroIngresoCaja: function (numeroAtencion) {
        var actuacionJSON = Ext.util.JSON.encode({
            nodeid: this.actuacion.nodeid,
            numeroAtencion: numeroAtencion,
            terminal: this.actuacion.terminal
        });
        var saveFormPanel = this.parameters.saveForm;
        saveFormPanel.getComponent('info').setValue(actuacionJSON);
        if (saveFormPanel.getForm().isValid()) {
            var uploadURL = Srp.WebScriptManager.getUrl(this.parameters.urlWs);
            saveFormPanel.getForm().doAction("restfulsubmit", {
                clientValidation: true,
                url: uploadURL,
                scope: this,
                success: this.onSuccessGuardarRegistroIngresoCaja,
                failure: this.onFailureGuardarRegistroIngresoCaja
            });
        }
    },
    onSuccessGuardarRegistroIngresoCaja: function (response, opts) {
        this.onExecuteNextStep();
    },
    onFailureGuardarRegistroIngresoCaja: function () {
        Srp.gui.messageBox.Info({
            msg: I18n.mensajes.error.PRD003
        });
    },
    onEnviarAFirma: function () {
        if (Ext.isDefined(this.actuacion.taskid)) {
            Srp.WorkflowManager.advanceTo({
                taskid: this.actuacion.taskid,
                transition: Srp.WorkflowManager.WORKFLOW.NOTARIA.ENVIAR_A_FIRMA,
                scope: this,
                success: this.onSuccessEnviarAFirma,
                failure: this.onFailureEnviarAFirma
            });
        }
    },
    onSuccessEnviarAFirma: function (response, opts) {
        this.onExecuteNextStep();
    },
    onPago: function () {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.OAI.REGISTRAR_PAGO,
            scope: this,
            success: this.onSuccessPago,
            failure: this.onFailurePago
        });
    },
    onSuccessPago: function (response, opts) {
        this.onExecuteNextStep();
    },
    onFailurePago: function () {
        Srp.gui.messageBox.Error({
            msg: 'Ha ocurrido un error al avanzar el workflow.'
        });
        Srp.Canvas.goHome();
    },
    onGet: function () {
        var response = this.parameters.wizard.response;
        Ext.Ajax.request({
            url: Srp.getWsUrl('WS_ACTUACION_GET_BY_NODEID', response.nodeid),
            method: 'GET',
            scope: this,
            success: this.onSuccessGet,
            failure: this.onFailureGet
        });
    },
    onSuccessGet: function (response, opts) {
        var actuacion = Ext.util.JSON.decode(response.responseText);
        Srp.Log.info("RegistrarIngresoCaja: actuacion: {numeroRepertorio: " + actuacion.numeroRepertorio + "-" + actuacion.agnoRepertorio + ", numeroAtencion: " + actuacion.numeroAtencion + "}");
        this.parameters.wizard.response = actuacion;
        var resumenActuacion = this.parameters.wizard.getComponent('resumenActuacion');
        resumenActuacion.loadData(actuacion);
        this.parameters.wizard.losesChanges = false;
        Srp.FrontController.fireEvent('WizardToolbar.onChange');
        this.onExecuteNextStep();
    },
    onFailureGet: function (response, opts) {
        Srp.gui.messageBox.Error({
            msg: 'Ha ocurrido un error al recuperar la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onAprobarActuacion: function () {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: this.transition,
            scope: this,
            success: this.onSuccessRevisar,
            failure: this.onFailureRevisar
        });
    },
    onSuccessRevisar: function (response, opts) {
        this.onExecuteNextStep();
    },
    onFailureRevisar: function () {
        Srp.gui.messageBox.Info({
            msg: 'Ha ocurrido un error al aprobar la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onRechazarActuacion: function () {
        rechazoContratoWindow = new Srp.gui.RechazoContratoWindow({
            actuacion: this.actuacion,
            transition: this.transition,
            field: 'comentariorechazoabogado',
            message: this.confirmMessage,
            tipoComentario: TIPO_COMENTARIO_SIMPLE,
            commandReturn: this,
            editMode: this.extraParams.rechazoEditMode
        });
        rechazoContratoWindow.show();
    },
    onAdjuntar: function () {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.OAI.ADJUNTAR,
            scope: this,
            success: this.onSuccessAdjuntar,
            failure: this.onFailureAdjuntar
        });
    },
    onSuccessAdjuntar: function (response, opts) {
        this.onExecuteNextStep();
    },
    onFailureAdjuntar: function (response, opts) {},
    onSendAnotacionesRVM: function () {
        Srp.Log.info("SaveActuacionCmd.onSendAnotacionesRVM(): actuacion.nodeid = " + this.actuacion.nodeid);
        Log4js.debug('SaveActuacionCmd.onSendAnotacionesIngresadasRVM()');
        var notario = model.user.Usuario.getNotario(this.actuacion);
        var runNotario = notario.run;
        var nombreNotario = notario.nombre;
        Log4js.debug('runNotario: ' + runNotario);
        Log4js.debug('nombreNotario: ' + nombreNotario);
        Log4js.debug('onSendAnotacionesRVM');
        if ((Ext.isDefined(this.actuacion.vehiculos) && this.actuacion.vehiculos.length > 0) || (Ext.isDefined(this.actuacion.tieneAnotaciones) && this.actuacion.tieneAnotaciones)) {
            Log4js.debug(' -> Enviando anotaciones a RVM');
            Srp.Log.info("SaveActuacionCmd.onSendAnotacionesRVM(): Invocando WebServiceManager.request(): actuacion.nodeid = " + this.actuacion.nodeid);
            Srp.WebServiceManager.request({
                url: Srp.WebServiceManager.getUrl('WS_CREA_ANOTACION'),
                method: 'POST',
                params: {
                    nodeid: this.actuacion.nodeid,
                    estadoSolicitud: this.estadoAnotacion,
                    runNotario: runNotario,
                    nombreNotario: nombreNotario
                },
                scope: this,
                success: this.onSuccessSendAnotacionesRVM,
                failure: this.onFailureSendAnotacionesRVM
            });
        } else {
            Log4js.debug(' -> No hay ppus. No se enviarán anotaciones a RVM');
            Srp.Log.info("SaveActuacionCmd.onSendAnotacionesRVM(): No se encontraron anotaciones: actuacion.nodeid = " + this.actuacion.nodeid);
            this.actuacion.respuestaRVM = PPU_RESPUESTA_OK;
            this.onExecuteNextStep();
        }
    },
    onSuccessSendAnotacionesRVM: function (response) {
        Log4js.debug('SaveActuacionCmd.onSuccessSendAnotacionesRVM()');
        var resp = Ext.util.JSON.decode(response.responseText);
        var root = resp['ws:sendAnotacionRVMResponse']['return']['anotacionesRVM'];
        if (eval(root['@success'])) {
            this.actuacion.respuestaRVM = PPU_RESPUESTA_OK;
        } else {
            this.actuacion.respuestaRVM = RVM_RESPUESTA_ERROR_CREA_ANOTACION;
        }
        util.isRVMValid(this.actuacion);
        this.onExecuteNextStep();
    },
    onFailureSendAnotacionesRVM: function (response) {
        log4js.debug('No se pudieron realizar las anotaciones al RVM: nodeid actuacion = ' + this.actuacion.nodeid + '\n' + response.responseText);
        this.actuacion.respuestaRVM = PPU_RESPUESTA_ERROR_WSO2;
        util.isRVMValid(this.actuacion);
        this.onExecuteNextStep();
    },
    onEnviarAprobacion: function () {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.UP.ENVIAR_A_REVISION,
            scope: this,
            success: this.onSuccessEnviarAprobacion,
            failure: this.onFailureEnviarAprobacion
        });
    },
    onSuccessEnviarAprobacion: function (response, opts) {
        this.onExecuteNextStep();
    },
    onFailureEnviarAprobacion: function (response, opts) {},
    onShowResults: function () {
        this.source.showResults();
        this.onExecuteNextStep();
    },
    onModificarResolucionExenta: function () {
        var resolucionExenta = null;
        if (Ext.isDefined(this.actuacion.adjuntos) && this.actuacion.adjuntos.length > 0) {
            for (var i = 0; i < this.actuacion.adjuntos.length; ++i) {
                var adjunto = this.actuacion.adjuntos[i];
                if (adjunto.type == TIPO_RESOL_EXENTA) {
                    resolucionExenta = adjunto;
                    break;
                }
            }
            if (resolucionExenta != null) {
                Srp.WebServiceManager.request({
                    url: Srp.WebScriptManager.getUrl('WS_RESOLUCION_EXENTA', resolucionExenta.nodeid),
                    method: 'POST',
                    params: {
                        comentariorechazo: this.actuacion.comentariorechazoabogado
                    },
                    scope: this,
                    success: this.onSuccessModificarResolucionExenta,
                    failure: this.onFailureModificarResolucionExenta
                });
            }
        }
    },
    onSuccessModificarResolucionExenta: function () {
        this.onExecuteNextStep();
    },
    onFailureModificarResolucionExenta: function () {},
    onCheckModificacionAlzamiento: function () {
        log4js.debug("SaveActuacionCmd.onCheckModificacionesAlzamientos()");
        if (this.actuacion.contratantesModificados) {
            Ext.Ajax.request({
                url: Srp.getWsUrl('WS_CHECK_MODIFICACION_ALZAMIENTO', this.actuacion.nodeid),
                method: 'GET',
                scope: this,
                success: this.onSuccessCheckModificacionAlzamiento,
                failure: this.onFailureCheckModificacionAlzamiento
            });
        } else {
            this.onExecuteNextStep();
        }
    },
    onSuccessCheckModificacionAlzamiento: function (response, opts) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.children.length > 0) {
            this.beforeMask = this.removeMask();
            var solicitudes = "";
            for (var i = 0; i < resp.children.length; ++i) {
                var child = resp.children[i];
                solicitudes += util.Format.formatTipoActuacion(child['tipoActuacion']) + " " + "(Repertorio Prenda: " + child['numeroRepertorio'] + "-" + child['agnoRepertorio'] + "," + " Repertorio Notaría: " + child['numeroRepertorioNotaria'] + "-" + child['agnoRepertorioNotaria'] + "," + " Estado: " + child['estado'] + ")<br/>";
            }
            Srp.gui.messageBox.YesNo({
                msg: 'Se han encontrado las siguientes solicitudes asociadas:<br/>' + solicitudes + '<br/><b>Se modificarán los contratantes de estas solicitudes de manera automática</b>.<br/>¿Desea guardar de todas maneras?',
                fn: this.onConfirmCheckModificacionAlzamiento,
                scope: this
            });
        } else {
            if (this.beforeMask) {
                this.loadMask();
            }
            this.onExecuteNextStep();
        }
    },
    onFailureCheckModificacionAlzamiento: function () {},
    onConfirmCheckModificacionAlzamiento: function (id) {
        if (id === 'yes') {
            if (this.beforeMask) {
                this.loadMask();
            }
            this.onExecuteNextStep();
        } else {}
    },
    onFinish: function () {
        Srp.Canvas.goHome();
    },
    onFinishBuscador: function () {
        Srp.Canvas.goBuscador();
    },
    registrarEventos: function () {
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        var tomarTarea = new Srp.command.TomarTareaCmd();
        tomarTarea.setParameter('saveActuacionCmd', this);
        var buscarActuacionCmd = new Srp.command.BuscarActuacionCmd('SAVE_ACTUACION_CMD');
        var recuperarActuacionCmd = new Srp.command.RecuperarActuacionCmd('SAVE_ACTUACION_CMD');
        recuperarActuacionCmd.setParameter('obj', this);
        this.eventos = [{
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onTomarTarea',
            command: tomarTarea
        }, {
            name: 'onReBuscarActuacion',
            command: buscarActuacionCmd
        }, {
            name: 'onLoadActuacion',
            command: recuperarActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns("Srp.command");
Srp.command.CargarActuacionCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.CargarActuacionCmd.superclass.constructor.call(this);
    },
    onExecute: function (resumenActuacionPanel) {
        var response = this.parameters.wizard.getJSON(true);
        resumenActuacionPanel.loadData(response);
    }
});
Ext.ns("Srp.command");
Srp.command.CargarUsuarioCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.CargarUsuarioCmd.superclass.constructor.call(this);
    },
    onExecute: function (resumenActuacionPanel) {
        this.parameters.panel.loadUsuario();
    }
});
Ext.ns("Srp.command");
Srp.command.CambiarButtonsCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.CambiarButtonsCmd.superclass.constructor.call(this);
    },
    onExecute: function (resumenActuacionPanel) {
        var toolbar = this.parameters.toolbar;
        toolbar.getNavHandler(0);
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.GetPersonaByRunCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ws.GetPersonaByRunCmd.superclass.constructor.call(this);
    },
    onExecute: function (valueRun) {
        Srp.WebServiceManager.request({
            url: Srp.WebServiceManager.getUrl('WS_GET_NOMBRE'),
            method: 'POST',
            params: {
                run: valueRun
            },
            success: function (response) {
                if (!Srp.FrontController.getIgnoreEvents()) {
                    var resp = Ext.util.JSON.decode(response.responseText);
                    var root = resp['ws:getNombreResponse']['return']['root'];
                    if (root['@codigo-resp'] == 'OK') {
                        var p = root.persona;
                        Srp.FrontController.fireEvent('onWsGetPersona_' + this.getParameter('contratante'), {
                            success: true,
                            data: {
                                nombres: p['@nombre'],
                                paterno: p['@paterno'],
                                materno: p['@materno']
                            }
                        }, valueRun);
                    } else {
                        Srp.FrontController.fireEvent('onWsGetPersona_' + this.getParameter('contratante'), {
                            success: false,
                            msg: root.glosa
                        }, valueRun);
                    }
                }
            },
            failure: function (response) {
                Log4js.debug('failed GetPersonaByRut!');
            },
            scope: this
        });
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.LoadPersonaByRunCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ws.LoadPersonaByRunCmd.superclass.constructor.call(this);
    },
    onExecute: function (response, run) {
        if (this.getParameter('fieldset')) {
            this.getParameter('fieldset').loadPersonaNatural(response, run, this.getParameter('record'));
        }
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.LoadPersonaRunCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ws.LoadPersonaRunCmd.superclass.constructor.call(this);
    },
    onExecute: function (response, params) {
        Log4js.debug('LoadPersonaRunCmd.onExecute()');
        if (this.getParameter('fieldset')) {
            this.getParameter('fieldset').validatePersonaNatural(response, params);
        }
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.ValidatePersonaRunCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ws.ValidatePersonaRunCmd.superclass.constructor.call(this);
    },
    onExecute: function (params) {
        Log4js.debug('ValidatePersonaRunCmd.onExecute()');
        Srp.WebServiceManager.request({
            url: Srp.WebServiceManager.getUrl('WS_VALIDA_RUN_NOMBRE'),
            method: 'POST',
            params: {
                datainput: Ext.util.JSON.encode({
                    usuario: params.usuario,
                    run: params.run,
                    nombre: params.nombre,
                    paterno: params.paterno,
                    materno: params.materno
                })
            },
            success: function (response) {
                if (!Srp.FrontController.getIgnoreEvents()) {
                    var resp = Ext.util.JSON.decode(response.responseText);
                    var root = resp['ws:verificaResponse']['return'].root;
                    var eventDispatch = 'onWsValidateNombreRun_' + this.getParameter('contratante');
                    if (params.edicion) {
                        eventDispatch = 'onEdicionWsValidateNombreRun_' + this.getParameter('contratante');
                    }
                    if (root['@codigo-resp'] == 'OK') {
                        Log4js.debug(' -> Srp.FrontController.fireEvent(' + eventDispatch + ', true)');
                        Srp.FrontController.fireEvent(eventDispatch, {
                            success: true,
                            msg: root['@glosa']
                        }, params);
                    } else {
                        Log4js.debug(' -> Srp.FrontController.fireEvent(' + eventDispatch + ', false)');
                        Srp.FrontController.fireEvent(eventDispatch, {
                            success: false,
                            msg: root['@glosa']
                        }, params);
                    }
                }
            },
            failure: function (response) {
                Log4js.debug('failed Validate!');
            },
            scope: this
        });
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.RevalidatePersonaRunCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ws.RevalidatePersonaRunCmd.superclass.constructor.call(this);
    },
    onExecute: function () {
        Log4js.debug('RevalidatePersonaRunCmd.onExecute()');
        if (this.getParameter('obj')) {
            this.getParameter('obj').validarRunNombre({}, true);
        }
    }
});
Ext.ns("Srp.command");
Srp.command.ActualizarTituloSectionCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ActualizarTituloSectionCmd.superclass.constructor.call(this);
    },
    onExecute: function (title) {
        this.parameters.panel.setSection(title);
    }
});
Ext.ns("Srp.command");
Srp.command.ActualizarUsuarioCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ActualizarUsuarioCmd.superclass.constructor.call(this);
    },
    onExecute: function () {
        var org = model.user.Usuario.getOrganization();
        var name = model.user.Usuario.getName();
        var username = model.user.Usuario.getUsername();
        this.parameters.panel.setUserInfo(name, username, org);
    }
});
Ext.ns("Srp.command");
Srp.command.HabilitarModificacionWizardCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.HabilitarModificacionWizardCmd.superclass.constructor.call(this);
    },
    onExecute: function (actuacion) {
        var showRvmPanel = false;
        if (Ext.isDefined(actuacion.vehiculos)) {
            var showRvmPanel = actuacion.vehiculos.length > 0;
            Log4js.debug(' -> ' + actuacion.vehiculos.length + ' PPUs');
        }
        this.parameters.wizard.enablePanels(showRvmPanel);
        this.parameters.wizard.losesChanges = true;
        if (Ext.isDefined(Ext.getCmp('card-next'))) {
            Ext.getCmp('card-next').enable();
        }
    }
});
Ext.ns("Srp.command");
Srp.command.DeshabilitarModificacionWizardCmd = Ext.extend(Srp.Command, {
    onExecute: function () {
        this.parameters.wizard.hidePanels();
        this.parameters.wizard.losesChanges = false;
        Ext.getCmp('card-next').disable();
    }
});
Ext.ns("Srp.command");
Srp.command.RemoverEventosCmd = Ext.extend(Srp.Command, {
    onExecute: function () {
        Srp.FrontController.unregisterEvents(this.parameters.obj.eventos);
    }
});
Ext.ns("Srp.command");
Srp.command.RecargarComboTipoDocumentoCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.RecargarComboTipoDocumentoCmd.superclass.constructor.call(this);
    },
    onExecute: function (actuacion) {
        this.getParameter('combo').reload(actuacion.tipoDocumento);
    }
});
Ext.ns("Srp.command");
Srp.command.CheckColumnModelFromOuCmd = Ext.extend(Srp.Command, {
    onExecute: function () {
        this.getParameter('obj').checkColumns();
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.ValidarPropietarioPPUCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ws.ValidarPropietarioPPUCmd.superclass.constructor.call(this);
    },
    onExecute: function (PPU) {
        var constituyentesJSON = this.getParameter('constituyentes').getJSON();
        var constituyentes = [];
        if (Ext.isDefined(constituyentesJSON.rows)) {
            constituyentes = constituyentesJSON.rows;
        } else {
            constituyentes = constituyentesJSON;
        }
        var xmlConstituyentes = [];
        if (constituyentes.length > 0) {
            for (var i = 0; i < constituyentes.length; ++i) {
                var constituyente = constituyentes[i];
                if (!constituyente.removed) {
                    var identificador = constituyente.identificador;
                    if (constituyente.personaTipo == CALIDAD_PERSONA_NATURAL || constituyente.personaTipo == CALIDAD_PERSONA_JURIDICA) {
                        identificador = util.Format.cleanSafeRunForValidation(identificador);
                    }
                    xmlConstituyentes.push({
                        identificador: identificador
                    });
                }
            }
        } else {
            this.getParameter('grid').validarPropietarioPPU({
                success: false,
                ppu: PPU
            });
        }
        var comunidad = 'N';
        if (xmlConstituyentes.length > 1) {
            comunidad = 'S';
        }
        if (xmlConstituyentes.length > 0) {
            if (xmlConstituyentes.length > 1) {
                var run = '';
                for (var i = 0; i < xmlConstituyentes.length; i++) {
                    run += xmlConstituyentes[i].identificador + ',';
                }
                run = run.substring(0, run.length - 1);
            } else {
                var run = xmlConstituyentes[0].identificador;
            }
            Srp.WebServiceManager.request({
                url: Srp.WebServiceManager.getUrl('WS_ES_PROPIETARIO'),
                method: 'POST',
                params: {
                    ppu: PPU,
                    run: run,
                    comunidad: comunidad
                },
                success: function (response) {
                    if (!Srp.FrontController.getIgnoreEvents()) {
                        var resp = Ext.util.JSON.decode(response.responseText);
                        var root = resp['ws:esPropietarioResponse']['return']['root'];
                        var success = false;
                        if (root['@codigo-resp'] == 'OK') {
                            if (root['@existe'] == 'true') {
                                success = true;
                            }
                        }
                        this.getParameter('grid').validarPropietarioPPU({
                            success: success,
                            ppu: PPU
                        });
                    }
                },
                failure: function (response) {
                    Log4js.debug('failed esPropietario!');
                },
                scope: this
            });
        }
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.ValidarRegistroPatenteEnRVMCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ws.ValidarRegistroPatenteEnRVMCmd.superclass.constructor.call(this);
    },
    onExecute: function (PPU) {
        Srp.WebServiceManager.request({
            url: Srp.WebServiceManager.getUrl('WS_ES_VEHICULO'),
            method: 'POST',
            params: {
                ppu: PPU
            },
            success: function (response) {
                if (!Srp.FrontController.getIgnoreEvents()) {
                    var resp = Ext.util.JSON.decode(response.responseText);
                    var root = resp['ws:esVehiculoResponse']['return']['root'];
                    var success = false;
                    if (root['@codigo-resp'] == 'OK') {
                        if (root['@existe'] == 'true') {
                            success = true;
                        }
                    }
                    this.getParameter('grid').validarRegistroPatenteEnRVM({
                        success: success,
                        ppu: PPU
                    });
                }
            },
            failure: function (response) {
                Log4js.debug('failed esvehiculo!');
            },
            scope: this
        });
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.ValidarSolicitudesPendientesCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ws.ValidarSolicitudesPendientesCmd.superclass.constructor.call(this);
    },
    onExecute: function (PPU) {
        Srp.WebServiceManager.request({
            url: Srp.WebServiceManager.getUrl('WS_TIENE_SOLICITUDES_PENDIENTES'),
            method: 'POST',
            params: {
                ppu: PPU
            },
            success: function (response) {
                if (!Srp.FrontController.getIgnoreEvents()) {
                    var resp = Ext.util.JSON.decode(response.responseText);
                    var root = resp['ws:solicitudesResponse']['return']['root'];
                    var success = false;
                    if (root['@codigo-resp'] == 'OK') {
                        if (root['@tiene'] == 'false') {
                            success = true;
                        }
                    }
                    this.getParameter('grid').validarSolicitudesPendientes({
                        success: success,
                        ppu: PPU
                    });
                }
            },
            failure: function (response) {
                Log4js.debug('failed Solicitudes Pendientes!');
            },
            scope: this
        });
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.ValidarPPUsRVMCmd = Ext.extend(Srp.Command, {
    isValidPPUs: true,
    nValidaciones: 3,
    constructor: function () {
        Srp.command.ws.ValidarPPUsRVMCmd.superclass.constructor.call(this);
        this.registrarEventos();
    },
    onExecute: function (obj) {
        this.panel = obj;
        this.validarPropietarioPPUCmd.setParameter('constituyentes', this.panel.getConstituyentes());
        this.validatePPUs();
    },
    validatePPUs: function () {
        this.isValidPPUs = true;
        var vehiculos = this.panel.actuacion.vehiculos;
        if (vehiculos && vehiculos.length > 0) {
            this.nPPUValidations = vehiculos.length * this.nValidaciones;
            this.nPPUValidated = 0;
            for (var i = 0; i < vehiculos.length; i++) {
                var ppu = vehiculos[i];
                this.getParameter('grid').setValueRecord(ppu.patente, 'esvehiculo', PPU_BUSCANDO);
                this.getParameter('grid').setValueRecord(ppu.patente, 'sinanotacionespendientes', PPU_BUSCANDO);
                this.getParameter('grid').setValueRecord(ppu.patente, 'espropietario', PPU_BUSCANDO);
                Srp.FrontController.fireEvent('onLoadPPU', ppu.patente);
            }
        }
    },
    validarRegistroPatenteEnRVM: function (response) {
        this.setStatusPPU('esvehiculo', response);
    },
    validarSolicitudesPendientes: function (response) {
        this.setStatusPPU('sinanotacionespendientes', response);
    },
    validarPropietarioPPU: function (response) {
        this.setStatusPPU('espropietario', response);
    },
    setStatusPPU: function (fieldName, response) {
        var ppuStatus = response.success ? PPU_VALIDA : PPU_INVALIDA;
        this.getParameter('grid').setValueRecord(response.ppu, fieldName, ppuStatus);
        this.validarTerminoProceso(response);
    },
    validarTerminoProceso: function (response) {
        this.isValidPPUs = this.isValidPPUs && response.success;
        ++this.nPPUValidated;
        if (this.nPPUValidations == this.nPPUValidated) {
            if (this.isValidPPUs) {
                this.panel.doPago();
            } else {
                this.panel.doAbort();
            }
        }
    },
    registrarEventos: function () {
        var validarRegistroPPUEnRVM = new Srp.command.ws.ValidarRegistroPatenteEnRVMCmd();
        validarRegistroPPUEnRVM.setParameter('grid', this);
        this.validarPropietarioPPUCmd = new Srp.command.ws.ValidarPropietarioPPUCmd();
        this.validarPropietarioPPUCmd.setParameter('grid', this);
        var validarSolicitudesPendientes = new Srp.command.ws.ValidarSolicitudesPendientesCmd();
        validarSolicitudesPendientes.setParameter('grid', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onLoadPPU',
            command: validarRegistroPPUEnRVM
        }, {
            name: 'onLoadPPU',
            command: this.validarPropietarioPPUCmd
        }, {
            name: 'onLoadPPU',
            command: validarSolicitudesPendientes
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onClosePagoWindow',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns("Srp.command.ws");
Srp.command.ws.AnotacionesRVMCmd = Ext.extend(Srp.Command, {
    constructor: function (id) {
        this.id = id;
        Srp.command.ws.AnotacionesRVMCmd.superclass.constructor.call(this);
    },
    onExecute: function (repertorio) {
        Srp.WebServiceManager.request({
            url: Srp.WebServiceManager.getUrl('WS_GET_ANOTACIONES'),
            method: 'GET',
            params: {
                response: 'json',
                repertorio: repertorio
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function (response) {
                var resp = Ext.util.JSON.decode(response.responseText);
                var root = resp['ws:listaResponse']['return']['root'];
                var ppuObject = {};
                var ppuList = [];
                if (root['@codigo-resp'] == 'OK') {
                    if (root['@nAnotaciones'] > 0) {
                        var anotaciones = [];
                        if (root['@nAnotaciones'] == 1) {
                            anotaciones.push(root['anotaciones']);
                        } else {
                            anotaciones = root['anotaciones'];
                        }
                        var ppuListObject = {};
                        for (var i = 0; i < anotaciones.length; ++i) {
                            var anotacion = anotaciones[i];
                            var patenteProhibicion = anotacion['@tipo'] == 'PH';
                            var ppu = ppuListObject[anotacion['@ppu']];
                            if (!Ext.isDefined(ppu)) {
                                ppuListObject[anotacion['@ppu']] = {
                                    modificar: false,
                                    patente: anotacion['@ppu'],
                                    patenteProhibicion: patenteProhibicion,
                                    estado: anotacion['@estado']
                                };
                            } else {
                                if (!ppu.patenteProhibicion && patenteProhibicion) {
                                    ppu.patenteProhibicion = patenteProhibicion;
                                }
                            }
                        }
                        for (ppu in ppuListObject) {
                            var anotacion = ppuListObject[ppu];
                            ppuList.push(anotacion);
                        }
                    }
                    ppuObject.success = PPU_RESPUESTA_OK;
                    ppuObject.list = ppuList;
                } else {
                    Log4js.debug('Ocurrió una falla al interior del WS02: Servicio ' + Srp.WebServiceManager.getUrl('WS_GET_ANOTACIONES'));
                    ppuObject.success = RVM_RESPUESTA_ERROR_GET_ANOTACIONES;
                    ppuObject.list = null;
                }
                this.getParameter('obj').onProcessPPULoadRVM(ppuObject);
            },
            failure: function (response) {
                Log4js.debug('Ocurrió una falla al tratar de comunicar WS02: Servicio ' + Srp.WebServiceManager.getUrl('WS_GET_ANOTACIONES'));
                ppuObject = {
                    success: PPU_RESPUESTA_ERROR_WSO2,
                    list: null
                };
                this.getParameter('obj').onProcessPPULoadRVM(ppuObject);
            },
            scope: this
        });
    }
});
Ext.ns("Srp.command");
Srp.command.ObtenerWorkflowHistoryCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'GET',
    constructor: function () {
        Srp.command.ObtenerWorkflowHistoryCmd.superclass.constructor.call(this);
    },
    onExecute: function (filtros) {
        this.filtros = filtros;
        this.url = null;
        if (filtros.taskid) {
            this.url = Srp.getWsUrl('WS_WORKFLOW_HISTORY_BY_TASKID');
            this.params = {
                taskid: filtros.taskid
            };
        } else {
            if (filtros.nRepertorio && filtros.agno) {
                this.url = Srp.getWsUrl('WS_WORKFLOW_HISTORY_BY_NUMERO_REPERTORIO');
                this.params = {
                    numerorepertorio: filtros.nRepertorio,
                    agnorepertorio: filtros.agno
                };
            } else {
                if (filtros.nodeid) {}
            }
        }
        if (this.url) {
            this.doRequest();
        } else {
            this.onNotAvailable();
        }
    },
    onSuccess: function (response, cmd) {
        var workflowHistoryList = Ext.util.JSON.decode(response.responseText);
        this.getParameter('obj').onProcessWorkflowHistory(workflowHistoryList);
    },
    onFailure: function (response, cmd) {
        this.getParameter('obj').onProcessWorkflowHistory([]);
    },
    onNotAvailable: function () {
        this.getParameter('obj').onProcessWorkflowHistory(null);
    }
});
Ext.ns("Srp.command");
Srp.command.MovePageWizardToolbarCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.MovePageWizardToolbarCmd.superclass.constructor.call(this);
    },
    onExecute: function (incr) {
        var toolbar = this.getParameter('toolbar');
        toolbar.navigateTo(incr);
    }
});
Ext.ns("Srp.command");
Srp.command.ForceCheckRepertorioNotariaUnicoCmd = Ext.extend(Srp.Command, {
    constructor: function () {
        Srp.command.ForceCheckRepertorioNotariaUnicoCmd.superclass.constructor.call(this);
    },
    onExecute: function (saveCommand) {
        var panel = this.getParameter('panel');
        panel.setTargetCommand(saveCommand);
        panel.validarRepertorioNotoria();
    }
});
Ext.ns("Srp.command");
Srp.command.CambiarEstadoActuacionCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'POST',
    constructor: function (id) {
        this.id = id;
        Srp.command.CambiarEstadoActuacionCmd.superclass.constructor.call(this);
    },
    onExecute: function (conf) {
        this.conf = conf;
        this.url = Srp.getWsUrl('WS_CAMBIAESTADO', conf.nodeid + '/estado/' + conf.estado + '/estadopago/' + conf.estadopago);
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        var obj = this.getParameter('obj');
        return obj[this.conf.onSuccess]();
    },
    onFailure: function (response, cmd) {
        var obj = this.getParameter('obj');
        return obj[this.conf.onFailure]();
    },
    registrarEventos: function () {}
});
Ext.ns("Srp.command");
Srp.command.IniciarWorkflowRechazoCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'POST',
    constructor: function (id) {
        this.id = id;
        Srp.command.IniciarWorkflowRechazoCmd.superclass.constructor.call(this);
    },
    onExecute: function (conf) {
        this.conf = conf;
        this.url = Srp.getWsUrl('WS_INICIAR_WORKFLOW_RECHAZO', conf.numero + '/agno/' + conf.agno);
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        var obj = this.getParameter('obj');
        return obj[this.conf.onSuccess]();
    },
    onFailure: function (response, cmd) {
        var obj = this.getParameter('obj');
        return obj[this.conf.onFailure]();
    }
});
Ext.ns("Srp.command");
Srp.command.IniciarWorkflowAceptacionCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'POST',
    constructor: function (id) {
        this.id = id;
        Srp.command.IniciarWorkflowAceptacionCmd.superclass.constructor.call(this);
    },
    onExecute: function (conf) {
        this.conf = conf;
        this.url = Srp.getWsUrl('WS_INICIAR_WORKFLOW_ACEPTACION', conf.numero + '/agno/' + conf.agno);
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        var obj = this.getParameter('obj');
        return obj[this.conf.onSuccess]();
    },
    onFailure: function (response, cmd) {
        var obj = this.getParameter('obj');
        return obj[this.conf.onFailure]();
    }
});
Ext.ns("Srp.command");
Srp.command.GenerarDataInformeRecaudacionCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'POST',
    constructor: function (id) {
        this.id = id;
        Srp.command.GenerarDataInformeRecaudacionCmd.superclass.constructor.call(this);
    },
    onExecute: function (conf) {
        Log4js.debug('GenerarDataInformeRecaudacionCmd.onExecute()');
        this.conf = conf;
        this.params = conf.params;
        this.url = Srp.WebServiceManager.getDirectUrl('INFORME_RECAUDACION_MASIVO_GENERAR');
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        var ids = Ext.util.JSON.decode(response.responseText);
        var obj = this.getParameter('obj');
        return obj.onGetTaskIdSuccess(ids.sessionId, ids.taskId);
    },
    onFailure: function (response, cmd) {
        var obj = this.getParameter('obj');
        return obj[this.conf.onFailure]();
    }
});
Ext.ns("Srp.command");
Srp.command.MonitorearDataInformeRecaudacionCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'POST',
    constructor: function (id) {
        this.id = id;
        Srp.command.MonitorearDataInformeRecaudacionCmd.superclass.constructor.call(this);
    },
    onExecute: function (taskId) {
        Log4js.debug('MonitorearDataInformeRecaudacionCmd.onExecute()');
        this.params = {
            taskId: taskId
        };
        this.url = Srp.WebServiceManager.getDirectUrl('INFORME_RECAUDACION_MASIVO_MONITOREAR');
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        var obj = this.getParameter('obj');
        var msg = response.responseText;
        return obj.onMonitorearTaskSuccess(msg);
    },
    onFailure: function (response, cmd) {
        var obj = this.getParameter('obj');
        return obj[this.conf.onFailure]();
    }
});
Ext.ns("Srp.command");
Srp.command.RevalidateTicketAlfrescoCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'POST',
    constructor: function (id) {
        this.id = id;
        Srp.command.RevalidateTicketAlfrescoCmd.superclass.constructor.call(this);
    },
    onExecute: function (taskId) {
        Log4js.debug('RevalidateTicketAlfrescoCmd.onExecute()');
        this.method = 'GET';
        this.url = Srp.WebScriptManager.getUrl('WS_VALIDATE_LOGIN_TICKET', Srp.WebScriptManager.getTicket());
        this.doRequest();
    },
    onSuccess: function (response, cmd) {},
    onFailure: function (response, cmd) {}
});
Ext.ns('Srp.command');
Srp.command.GetUsersByRoleCmd = Ext.extend(Srp.Command, {
    method: 'GET',
    constructor: function () {
        Srp.command.GetUsersByRoleCmd.superclass.constructor.call(this);
        this.url = Srp.WebScriptManager.getUrl('WS_GET_USERS_BY_ROLE').replace("{0}", 'FUNCIONARIO_PRENDAS_ABOGADO');
    },
    onExecute: function (task) {
        this.doRequest();
    },
    onSuccess: function (response, opts) {
        var users = Ext.util.JSON.decode(response.responseText);
        var listUsers = [];
        for (var i = 0; i < users.data.length; ++i) {
            var user = users.data[i];
            listUsers.push(user.displayName);
        }
        this.getParameter("obj").processGetUsersByRole(listUsers);
    },
    onFailure: Srp.WebScriptManager.connectionError
});
Ext.ns("Srp.command");
Srp.command.ValidarSolicitudesPendientesCmd = Ext.extend(Srp.Command, {
    baseUrl: '',
    method: 'GET',
    constructor: function (id) {
        this.id = id;
        Srp.command.ValidarSolicitudesPendientesCmd.superclass.constructor.call(this);
    },
    onExecute: function (actuacion) {
        this.params
        this.actuacion = actuacion;
        log4js.debug("Obteniendo Actuaciones pendientes");
        if (actuacion.nodeid) {
            this.url = Srp.getWsUrl('WS_VALIDACION_SOLICITUDES_PENDIENTES', actuacion.nodeid);
        }
        this.doRequest();
    },
    onSuccess: function (response, cmd) {
        var solicitud = Ext.util.JSON.decode(response.responseText);
        this.solicitud = solicitud;
        if (solicitud.success) {
            this.onLoadSolicitud(this.solicitud);
        }
    },
    onFailure: function (response, cmd) {
        if (response.status == '400') {
            this.solicitud = {};
            this.onLoadSolicitud(this.solicitud);
        }
    },
    onLoadSolicitud: function (solicitud) {
        var panel = this.getParameter('obj');
        panel[this.getParameter('callBack')](solicitud);
    }
});
Ext.ns('Srp.gui');
Srp.gui.AgnoField = Ext.extend(Ext.form.NumberField, {
    initComponent: function () {
        Ext.apply(this, {
            vtype: 'agno',
            allowDecimals: false,
            allowNegative: false,
            maxLength: 4,
            maxValue: TODAY.getFullYear(),
            autoCreate: {
                tag: 'input',
                type: 'text',
                size: '5',
                autocomplete: 'off',
                maxlength: '4'
            }
        });
        Srp.gui.AgnoField.superclass.initComponent.call(this);
    }
});
Ext.reg('agnofield', Srp.gui.AgnoField);
Ext.ns('Srp.gui');
Srp.gui.NumeroRepertorioPrendasField = Ext.extend(Ext.form.NumberField, {
    initComponent: function () {
        Ext.apply(this, {
            allowDecimals: false,
            allowNegative: false,
            maxLength: 7,
            autoCreate: {
                tag: 'input',
                type: 'text',
                size: '10',
                autocomplete: 'off',
                maxlength: '7'
            }
        });
        Srp.gui.NumeroRepertorioPrendasField.superclass.initComponent.call(this);
    }
});
Ext.reg('numeroRepertorioPrendasfield', Srp.gui.NumeroRepertorioPrendasField);
Ext.ns('Srp.gui');
Srp.gui.NumeroRepertorioNotariaField = Ext.extend(Ext.form.NumberField, {
    initComponent: function () {
        Ext.apply(this, {
            maxLength: 10,
            autoCreate: {
                tag: 'input',
                type: 'text',
                size: '10',
                autocomplete: 'off',
                maxlength: '10'
            },
            allowNegative: false
        });
        Srp.gui.NumeroRepertorioNotariaField.superclass.initComponent.call(this);
    }
});
Ext.reg('numeroRepertorioNotariafield', Srp.gui.NumeroRepertorioNotariaField);
Ext.ns('Srp.gui.messageBox');
Srp.gui.messageBox.Error = function (obj) {
    Ext.MessageBox.show({
        title: 'Error',
        msg: obj.msg,
        buttons: Ext.MessageBox.OK,
        animEl: 'samplebutton',
        icon: Ext.MessageBox.ERROR
    });
};
Srp.gui.messageBox.Info = function (obj) {
    Ext.MessageBox.show({
        title: I18n.mensajes.aviso,
        msg: obj.msg,
        buttons: Ext.MessageBox.OK,
        animEl: 'samplebutton',
        icon: Ext.MessageBox.INFO
    });
};
Srp.gui.messageBox.YesNo = function (obj) {
    if (Ext.isDefined(obj.scope)) {
        Ext.MessageBox.confirm(I18n.mensajes.confirmacion, obj.msg, obj.fn, obj.scope);
    } else {
        Ext.MessageBox.confirm(I18n.mensajes.confirmacion, obj.msg, obj.fn);
    }
};
Srp.gui.messageBox.Warning = function (obj) {
    Ext.MessageBox.show({
        title: 'Advertencia',
        msg: obj.msg,
        buttons: Ext.MessageBox.OK,
        animEl: 'samplebutton',
        icon: Ext.MessageBox.WARNING
    });
};
Srp.gui.messageBox.FormWarning = function (conf) {
    var message = Srp.MessagesManager.getErrorMessage();
    if (message.length > 0) {
        message = 'Se han encontrado errores en los siguientes pasos :<br/>' + message;
    } else {
        message = conf.message;
    }
    Srp.MessagesManager.removeAll();
    Ext.MessageBox.show({
        title: 'Advertencia',
        msg: message,
        buttons: Ext.MessageBox.OK,
        animEl: 'samplebutton',
        icon: Ext.MessageBox.WARNING
    });
};
Ext.ns('Srp.gui');
Srp.gui.CategoryComboBox = Ext.extend(Ext.form.ComboBox, {
    displayField: 'text',
    valueField: 'id',
    triggerAction: 'all',
    editable: false,
    forceSelection: true,
    initComponent: function () {
        if (this.categoryType) {
            var init = [];
            if (Ext.isDefined(this.blankValue)) {
                init = [this.blankValue];
            }
            var data = init.concat(this.categoryType.data);
            if (this.categoryType.data) {
                this.mode = 'local';
                _store = new Ext.data.JsonStore({
                    fields: [{
                        name: 'id'
                    }, {
                        name: 'text'
                    }],
                    data: data
                });
                this.store = _store;
            } else {
                var _proxy = new Ext.data.HttpProxy({
                    method: 'GET',
                    prettyUrls: false,
                    url: this.categoryType.url
                });
                _store = new Ext.data.JsonStore({
                    proxy: _proxy,
                    root: '',
                    fields: [{
                        name: 'id'
                    }, {
                        name: 'text'
                    }]
                });
                this.store = _store;
            }
        }
        Srp.gui.CategoryComboBox.superclass.initComponent.call(this);
    },
    reload: function () {
        this.store.loadData(this.categoryType.data);
    }
});
Ext.layout.FormLayout.prototype.trackLabels = true;
Ext.reg('categoryComboBox', Srp.gui.CategoryComboBox);
Ext.ns('Srp.gui');
Srp.gui.TipoDocumentoComboBox = Ext.extend(Srp.gui.CategoryComboBox, {
    fieldLabel: I18n.notaria.actuacion.wizard.combo.tipoDocumento.fieldLabel,
    width: 120,
    initComponent: function () {
        var config = {
            categoryType: Srp.CategoryManager.TIPO_DOCUMENTO,
            value: Srp.CategoryManager.TIPO_DOCUMENTO.data[0].id,
            contenedor: this.contenedor
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.TipoDocumentoComboBox.superclass.initComponent.call(this);
    },
    listeners: {
        select: function (el, params) {
            var hideCls;
            var showCls;
            if (params.id == TIPO_DOCUMENTO_ESCRITURA) {
                hideCls = '.contrato';
                showCls = '.escritura';
            } else {
                if (params.id == TIPO_DOCUMENTO_CONTRATO) {
                    hideCls = '.escritura';
                    showCls = '.contrato';
                } else {
                    hideCls = '.escritura .contrato';
                    showCls = '';
                }
            }
            var panelContenedor = this.findParentByType('form').getForm().id;
            var elements = Ext.select(hideCls, true, panelContenedor);
            elements.each(function (el) {
                Ext.getCmp(el.id).setValue('');
                Ext.getCmp(el.id).hide();
            });
            if (showCls.length > 0) {
                elements = Ext.select(showCls, true, panelContenedor);
                elements.each(function (el) {
                    Ext.getCmp(el.id).show();
                });
            }
        }
    },
    name: 'tipoDocumento',
    reload: function (tipoDocumento) {
        if (tipoDocumento == TIPO_DOCUMENTO_ESCRITURA) {
            var index = this.store.find('id', TIPO_DOCUMENTO_CONTRATO);
            if (index != -1) {
                this.store.removeAt(index);
            }
            var index = this.store.find('id', TIPO_DOCUMENTO_ESCRITURA);
            var record = this.store.getAt(index);
            this.setValue(TIPO_DOCUMENTO_ESCRITURA);
            this.fireEvent('select', this, record);
        } else {
            Srp.gui.TipoDocumentoComboBox.superclass.reload.call(this);
        }
    }
});
Ext.reg('tipodocumentocombobox', Srp.gui.TipoDocumentoComboBox);
Ext.ns('Srp.gui');
Srp.gui.EstadoComboBox = Ext.extend(Srp.gui.CategoryComboBox, {
    fieldLabel: I18n.commons.estado,
    width: 120,
    initComponent: function () {
        var config = {
            categoryType: Srp.CategoryManager.ESTADO,
            value: Srp.CategoryManager.ESTADO.data[0].id,
            contenedor: this.contenedor
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.EstadoComboBox.superclass.initComponent.call(this);
    },
    name: 'estado'
});
Ext.reg('estadocombobox', Srp.gui.EstadoComboBox);
Ext.ns('Srp.gui');
Srp.gui.ComentarioRechazoContainer = Ext.extend(Ext.Container, {
    initComponent: function () {
        var config = {}
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ComentarioRechazoContainer.superclass.initComponent.call(this);
    },
    setJSON: function (comentariosRechazo) {
        this.add({
            html: unescape(comentariosRechazo),
            border: false,
            boxMaxWidth: 650
        });
    },
    loadData: function (response) {
        this.setJSON(eval(COMENTARIO_RECHAZO_NOTARIO));
    }
});
Ext.reg('comentarioRechazoContainer', Srp.gui.ComentarioRechazoContainer);
Ext.ns('Srp.gui');
Srp.gui.ComentarioRechazoPanel = Ext.extend(Ext.Panel, {
    title: I18n.notaria.actuacion.comentariosNotario,
    padding: 5,
    hidden: true,
    border: true,
    width: '97%',
    iconCls: 'icon-comentario-rechazo',
    initComponent: function () {
        var config = {
            items: [new Srp.gui.ComentarioRechazoContainer({
                itemId: 'comentarioRechazo'
            })]
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ComentarioRechazoPanel.superclass.initComponent.call(this);
    },
    setJSON: function (comentariosRechazo) {
        this.setVisible(true);
        return this.getComponent('comentarioRechazo').setJSON(comentariosRechazo);
    },
    loadData: function (response) {
        this.setJSON(eval(COMENTARIO_RECHAZO_NOTARIO));
    }
});
Ext.ns('Srp.gui');
Srp.gui.ComentarioRechazoFieldSet = Ext.extend(Ext.form.FieldSet, {
    title: I18n.notaria.actuacion.comentariosNotario,
    padding: 0,
    hidden: true,
    initComponent: function () {
        var config = {
            items: [new Srp.gui.ComentarioRechazoContainer({
                itemId: 'comentarioRechazo'
            })]
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ComentarioRechazoFieldSet.superclass.initComponent.call(this);
    },
    setJSON: function (comentariosRechazo) {
        this.setVisible(true);
        return this.getComponent('comentarioRechazo').setJSON(comentariosRechazo);
    },
    loadData: function (response) {
        this.getComponent('comentarioRechazo').setJSON(response);
    }
});
Ext.reg('comentarioRechazoFieldSet', Srp.gui.ComentarioRechazoFieldSet);
Ext.ns('Srp.gui');
Srp.gui.TareaGrid = Ext.extend(Ext.grid.GridPanel, {
    id: 'tarea-grid',
    stripeRows: true,
    stateful: true,
    stateId: 'grid',
    pageSize: 20,
    checkOnly: true,
    columnLines: true,
    removeMask: false,
    buttonAlign: 'center',
    mostrarBotonDesbloquear: true,
    initComponent: function () {
        this.isloading = false;
        this.url = this.getUrlWebScript();
        this.viewConfig = this.buildViewConfig();
        this.proxy = new Ext.data.HttpProxy({
            method: 'GET',
            url: this.url
        });
        this.newInstance = true;
        var store = this.buildStore();
        this.tbar = this.buildInitTopToolbar();
        this.bbar = this.buildBottomToolbar(store);
        store.load();
        this.store = store;
        this.selModel = new Ext.grid.CheckboxSelectionModel({
            listeners: {
                rowselect: function (sm, rowIndex, record) {}
            }
        });
        this.columns = this.buildColumnModel();
        this.listeners = this.buildListeners();
        this.isInActivePage = false;
        this.registrarEventos();
        Srp.gui.TareaGrid.superclass.initComponent.call(this);
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.listadoTareas);
    },
    onRender: function (ct, position) {
        Srp.gui.TareaGrid.superclass.onRender.call(this, ct, position);
        var el = this.getEl();
        this.getStore().on('load', function () {
            if (this.isloading) {
                this.changePage();
                el.unmask();
                this.newInstance = false;
            } else {
                this.isloading = true;
            }
        }, this);
        el.mask(I18n.mensajes.cargandoTareas, "x-mask-loading");
        this.removerMascara();
        this.reloadTopToolbar();
    },
    buildViewConfig: function () {
        return {
            forceFit: true
        };
    },
    buildInitTopToolbar: function () {
        return [];
    },
    buildBottomToolbar: function (store) {
        return new Ext.PagingToolbar({
            store: store,
            displayInfo: true,
            pageSize: this.pageSize,
            listeners: this.buildPagingToolbarListeners()
        });
    },
    buildPagingToolbarListeners: function () {
        return {
            scope: this,
            change: function (ptb, pdata) {
                if (this.newInstance) {
                    var saveActivePage = Srp.NavigationManager.getActivePage();
                    Srp.NavigationManager.setActivePage(saveActivePage);
                } else {
                    Srp.NavigationManager.setActivePage(pdata.activePage);
                }
            }
        }
    },
    onClickGrid: function (btn, ev) {
        this.liberarBtn.disable();
        var sel = this.getSelectionModel().getSelections();
        var actividad = {};
        for (var i = sel.length - 1; i >= 0; i--) {
            if (actividad[sel[i].data.type]) {} else {
                actividad[sel[i].data.type] = 1;
            }
            if (sel[i].data.tomado) {
                this.liberarBtn.enable();
            }
        }
        var count = util.JSON.countObject(actividad);
        if (this.firmarBtn) {
            if (actividad[TipoTarea.FIRMAR_ACTUACION] && count == 1) {
                this.firmarBtn.enable();
            } else {
                this.firmarBtn.disable();
            }
        }
        if (this.pagarBtn) {
            if (((actividad[TipoTarea.PAGAR_ACTUACION] || actividad[TipoTarea.REPAGAR_ACTUACION]) && count == 1) || (actividad[TipoTarea.PAGAR_ACTUACION] && actividad[TipoTarea.REPAGAR_ACTUACION] && count == 2)) {
                this.pagarBtn.enable();
            } else {
                this.pagarBtn.disable();
            }
        }
    },
    onRowdblclickGrid: function (thisGrid, rowIndex) {
        var el = this.getEl();
        el.mask(I18n.mensajes.cargandoActuacion, "x-mask-loading");
        var record = thisGrid.getStore().getAt(rowIndex);
        Srp.FrontController.fireEvent('TareaGrid.onTomarTarea', record, true);
    },
    getUrlWebScript: function () {
        return Srp.getWsUrl('WS_TAREA_OBTENER_LISTADO');
    },
    buildStore: function () {
        return new Ext.data.JsonStore({
            proxy: this.proxy,
            autoLoad: {
                params: {
                    start: 0,
                    limit: this.pageSize
                }
            },
            root: 'rows',
            totalProperty: 'results',
            idProperty: 'taskid',
            fields: this.buildFields()
        });
    },
    buildFields: function () {
        return [{
            name: 'taskid'
        }, {
            name: 'numeroRepertorio',
            sortType: Ext.data.SortTypes.asInt
        }, {
            name: 'nodeid'
        }, {
            name: 'agnoRepertorio',
            sortType: Ext.data.SortTypes.asInt
        }, {
            name: 'numeroRepertorioNotaria',
            sortType: Ext.data.SortTypes.asInt
        }, {
            name: 'agnoRepertorioNotaria',
            sortType: Ext.data.SortTypes.asInt
        }, {
            name: 'type'
        }, {
            name: 'acreedor'
        }, {
            name: 'constituyentes'
        }, {
            name: 'startdate',
            type: 'date',
            dateFormat: I18n.format.dateBandeja
        }, {
            name: 'idActividad'
        }, {
            name: 'tomado',
            type: 'boolean'
        }, {
            name: 'tramite'
        }, {
            name: 'validado'
        }, {
            name: 'ou'
        }]
    },
    checkColumns: function () {
        var user = model.user.Usuario.getUsername();
        var ou = model.user.Usuario.getOrganization();
        switch (ou.tipo) {
            case TIPO_OU_NOTARIA:
                this.getColumnModel().setHidden(3, true);
                this.getColumnModel().setHidden(4, true);
            case TIPO_OU_OFICINA:
                this.getColumnModel().setHidden(11, true);
        }
        if (!model.user.Usuario.tienePermiso(Permiso.VER_ESTADO_REVISION_AUTOMATICA)) {
            this.getColumnModel().setHidden(13, true);
        }
    },
    buildListeners: function () {
        return {
            scope: this,
            rowdblclick: this.onRowdblclickGrid,
            click: this.onClickGrid
        };
    },
    changePage: function () {
        if (!this.isInActivePage) {
            var saveActivePage = Srp.NavigationManager.getActivePage();
            var bt = this.getBottomToolbar();
            bt.changePage(saveActivePage);
            this.isInActivePage = true;
        }
    },
    removerMascara: function () {
        if (this.removeMask) {
            var el = this.getEl();
            el.unmask();
        }
    },
    registrarEventos: function () {
        this.getStore().on('load', function () {
            this.removeMask = true;
        }, this);
        var cargarBotonesCmd = new Srp.command.CargarBotonesTareaGridCmd();
        cargarBotonesCmd.setParameter('grid', this);
        var liberarTareaCmd = new Srp.command.LiberarTareaCmd();
        liberarTareaCmd.setParameter('grid', this);
        var checkColumnModelFromOuCmd = new Srp.command.CheckColumnModelFromOuCmd();
        checkColumnModelFromOuCmd.setParameter('obj', this);
        var buscarActuacionCmd = new Srp.command.BuscarActuacionCmd('TAREA_GRID');
        var recuperarActuacionCmd = new Srp.command.RecuperarActuacionCmd('TAREA_GRID');
        recuperarActuacionCmd.setParameter('obj', this);
        this.eventos = [{
            name: 'TareaGrid.onLiberarTarea',
            command: liberarTareaCmd
        }, {
            name: 'TareaGrid.onTomarTarea',
            command: new Srp.command.TomarTareaCmd()
        }, {
            name: 'Usuario.onUserLoad',
            command: checkColumnModelFromOuCmd
        }, {
            name: 'Usuario.onLoadRoles',
            command: cargarBotonesCmd
        }, {
            name: 'onBuscarActuacion',
            command: buscarActuacionCmd
        }, {
            name: 'onLoadActuacion',
            command: recuperarActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    reloadTopToolbar: function () {
        this.getTopToolbar().removeAll();
        buttons = this.buildTopToolbar();
        for (i = 0; i < buttons.length; ++i) {
            var button = buttons[i];
            this.getTopToolbar().add(button);
        }
        this.getTopToolbar().doLayout();
    },
    buildTopToolbar: function () {
        var botonesInferiores = new Array();
        if (model.user.Usuario.tienePermiso(Permiso.PAGAR_ACTUACION)) {
            botonesInferiores.push({
                iconCls: "icon-pagar",
                ref: "../pagarBtn",
                text: 'Pagar en grupo',
                disabled: true,
                handler: this.onPagar,
                scope: this
            });
            botonesInferiores.push('-');
        }
        if (model.user.Usuario.tienePermiso(Permiso.FIRMAR_ACTUACION)) {
            botonesInferiores.push({
                iconCls: "icon-firmar",
                ref: "../firmarBtn",
                text: 'Firmar en grupo',
                handler: this.onFirmar,
                disabled: true,
                scope: this
            });
            botonesInferiores.push('-');
        }
        if (this.mostrarBotonDesbloquear) {
            botonesInferiores.push({
                iconCls: "icon-liberar",
                ref: "../liberarBtn",
                text: 'Liberar',
                handler: this.onLiberar,
                disabled: true,
                scope: this
            });
            botonesInferiores.push('-');
        }
        return botonesInferiores;
    },
    tomarTareas: function () {
        var selections = this.getSelectionModel().getSelections();
        for (var i = 0; i < selections.length; ++i) {
            var record = selections[i];
            Srp.FrontController.fireEvent('TareaGrid.onTomarTarea', record, false);
        }
    },
    onEditar: function () {
        this.tomarTareas();
        Ext.Msg.alert("Editar", "Abrir ventana de editar");
    },
    onFirmar: function () {
        this.tomarTareas();
        var rows = this.getSelectionModel().getSelections();
        var taskIds = [];
        var nodeIds = [];
        for (var i = 0; i < rows.length; i++) {
            taskIds[i] = rows[i].data.taskid;
            nodeIds[i] = rows[i].data.nodeid;
        }
        var htmlApplet = util.Signature.obtenerAppletHtml(nodeIds, taskIds, true);
        if (htmlApplet == "") {
            return;
        }
        Srp.Canvas.updateBoxMenu(htmlApplet);
    },
    onPagar: function () {
        this.tomarTareas();
        var resumenPagoWindow = new Srp.gui.ResumenPagoWindow({
            rows: this.getSelectionModel().getSelections()
        });
        resumenPagoWindow.show();
    },
    buildPagoButtons: function () {
        return [{
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar
        }, {
            text: I18n.commons.pagar,
            scope: this,
            handler: this.onPagar
        }];
    },
    onLiberar: function (btn, ev) {
        var sel = this.getSelectionModel().getSelections();
        for (var i = sel.length - 1; i >= 0; i--) {
            var task = sel[i];
            if (task.get('tomado')) {
                Srp.FrontController.fireEvent('TareaGrid.onLiberarTarea', task);
            }
        }
        this.liberarBtn.disable();
    },
    processLiberarTarea: function (record) {},
    buildConfigColumnModel: function () {
        return [{
            header: util.Format.tomadoRenderer(true),
            width: 30,
            sortable: true,
            dataIndex: 'tomado',
            renderer: util.Format.tomadoRenderer
        }, {
            header: I18n.bandejaTareas.titulos.taskid,
            width: 60,
            sortable: true,
            dataIndex: 'taskid',
            hidden: true
        }, {
            id: 'repertorioPrendas',
            header: I18n.bandejaTareas.titulos.repertorioPrendas,
            width: 80,
            sortable: true,
            dataIndex: 'numeroRepertorio'
        }, {
            header: I18n.bandejaTareas.titulos.agnoPrendas,
            width: 70,
            sortable: true,
            dataIndex: 'agnoRepertorio'
        }, {
            header: I18n.bandejaTareas.titulos.repertorioNotaria,
            width: 80,
            sortable: true,
            dataIndex: 'numeroRepertorioNotaria'
        }, {
            header: I18n.bandejaTareas.titulos.agnoNotaria,
            width: 70,
            sortable: true,
            dataIndex: 'agnoRepertorioNotaria'
        }, {
            header: I18n.bandejaTareas.titulos.fecha,
            width: 60,
            sortable: true,
            renderer: Ext.util.Format.dateRenderer(I18n.format.date),
            dataIndex: 'startdate'
        }, {
            id: 'acreedor',
            header: I18n.bandejaTareas.titulos.acreedor,
            width: 100,
            sortable: true,
            dataIndex: 'acreedor'
        }, {
            header: I18n.bandejaTareas.titulos.constituyentes,
            width: 100,
            sortable: true,
            dataIndex: 'constituyentes',
            renderer: util.Format.constituyentes
        }, {
            header: I18n.bandejaTareas.titulos.tipo,
            width: 80,
            sortable: true,
            dataIndex: 'tramite',
            renderer: util.Format.tipoActuacionRenderer
        }, {
            header: I18n.bandejaTareas.titulos.ou,
            width: 80,
            sortable: true,
            dataIndex: 'ou'
        }, {
            header: I18n.bandejaTareas.titulos.actividad,
            width: 80,
            sortable: true,
            dataIndex: 'type'
        }, {
            header: I18n.bandejaTareas.titulos.revisionAutomatica,
            width: 30,
            sortable: true,
            dataIndex: 'validado',
            renderer: util.Format.isValidadoRenderer
        }]
    },
    buildColumnModel: function () {
        var configColumnModel = [new Ext.grid.CheckboxSelectionModel()];
        return configColumnModel.concat(this.buildConfigColumnModel());
    },
    doAction: function (record) {
        this.record = record;
        var taskid = record.get('taskid').substring(5);
        this.requestActuacion(taskid);
    },
    requestActuacion: function (taskid) {
        Srp.FrontController.fireEvent('onBuscarActuacion', {
            taskid: taskid,
            tramite: this.record.get('tramite')
        });
    },
    processActuacion: function (actuacion) {
        var respuestaRvmOk = util.isRVMValid(actuacion);
        if (true) {
            Srp.FrontController.fireEvent('Menu.onUpdateContent');
            actuacion.taskid = this.record.get('taskid');
            actuacion.type = this.record.get('type');
            actuacion.tramite = this.record.get('tramite');
            var action = Srp.NavigationManager.getAction(this.record.get('type'), this.record.get('tramite'));
            Srp.Canvas.updateContent(action, {
                actuacion: actuacion,
                itemId: 'content'
            });
        }
    }
});
Ext.ns('Srp', 'Srp.gui');
Srp.gui.PPUBaseGrid = Ext.extend(Ext.grid.GridPanel, {
    autoHeight: true,
    stripeRows: true,
    margins: '0 5 0 0',
    autoScroll: true,
    getJSON: function () {
        var ppuList = new Array();
        var ppuStore = this.getStore();
        var n = ppuStore.getCount();
        if (n > 0) {
            for (var i = 0; i < n; i++) {
                var ppu = ppuStore.getAt(i);
                if (ppu.get('nodeid')) {
                    ppuList.push({
                        nodeid: ppu.get('nodeid'),
                        patente: ppu.get('patente'),
                        patenteProhibicion: ppu.get('patenteProhibicion'),
                        removed: ppu.get('removed')
                    });
                } else {
                    ppuList.push({
                        patente: ppu.get('patente'),
                        patenteProhibicion: ppu.get('patenteProhibicion'),
                        removed: ppu.get('removed')
                    });
                }
            };
            var json = {};
            if (!Ext.isEmpty(ppuList)) {
                json.vehiculos = ppuList;
            }
            return json;
        } else return {};
    },
    setJSON: function (vehiculos) {
        var store = this.getStore();
        store.loadData(vehiculos);
    },
    initComponent: function () {
        this.store = new Ext.data.JsonStore({
            fields: [{
                name: 'nodeid'
            }, {
                name: 'patente'
            }, {
                name: 'patenteProhibicion',
                type: 'boolean'
            }, {
                name: 'modificar',
                type: 'boolean',
                defaultValue: false
            }]
        });
        this.selModel = new Ext.grid.CheckboxSelectionModel();
        this.columns = [this.selModel, {
            id: 'patente',
            header: 'PPU',
            sortable: true,
            dataIndex: 'patente',
            width: 200
        }, {
            header: 'Prohibición de gravar/enajenar',
            dataIndex: 'patenteProhibicion',
            renderer: util.Format.prohibicionRenderer,
            width: 200
        }];
        var config = {};
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.PPUBaseGrid.superclass.initComponent.apply(this, arguments);
    },
    viewConfig: {
        forceFit: true
    },
    registrarEventos: function () {
        var recargarGrilla = new Srp.command.CargarPPUGridCmd();
        recargarGrilla.setParameter('grid', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onLoadActuacion',
            command: recargarGrilla
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    }
});
Ext.reg('ppuBaseGrid', Srp.gui.PPUBaseGrid);
Ext.ns('Srp', 'Srp.gui');
Srp.gui.PPUInscripcionGrid = Ext.extend(Srp.gui.PPUBaseGrid, {
    initComponent: function () {
        this.store = this.buildStore();
        this.tbar = this.buildToolbar();
        Ext.apply(this, {});
        Srp.gui.PPUInscripcionGrid.superclass.initComponent.apply(this, arguments);
        this.addColumn({
            name: 'esvehiculo',
            defaultValue: PPU_BUSCANDO
        }, {
            header: 'Vehículo Registrado en RVM',
            dataIndex: 'esvehiculo',
            width: 120,
            renderer: util.Format.ppuValidationRender
        });
        this.addColumn({
            name: 'espropietario',
            defaultValue: PPU_BUSCANDO
        }, {
            header: 'Propietario Válido',
            dataIndex: 'espropietario',
            width: 120,
            renderer: util.Format.ppuValidationRender
        });
        this.addColumn({
            name: 'sinanotacionespendientes',
            defaultValue: PPU_BUSCANDO
        }, {
            header: 'Sin Solicitudes Pendientes',
            dataIndex: 'sinanotacionespendientes',
            width: 120,
            renderer: util.Format.ppuValidationRender
        });
    },
    buildStore: function () {
        return new Ext.data.JsonStore({
            fields: [{
                name: 'nodeid'
            }, {
                name: 'patente'
            }, {
                name: 'patenteProhibicion',
                type: 'boolean'
            }, {
                name: 'removed'
            }]
        });
    },
    setPanelRVM: function (panel) {
        this.panelRVM = panel;
    },
    buildToolbar: function () {
        return new Ext.Toolbar({
            items: [new Ext.Button({
                disabled: true,
                itemId: 'actualizarButton',
                displayField: 'actualizar-ppu',
                iconCls: 'icon-add-patente',
                handler: function () {
                    var grid = Ext.getCmp('ppu_grid');
                    var records = grid.getSelectionModel().getSelections();
                    if (records.length == 1) {
                        var record = records[0];
                        var store = grid.getStore();
                        var index = store.indexOf(record);
                        var newPPU = Ext.getCmp('new_ppu').getValue();
                        var newProhib = Ext.getCmp('prohibicion_anotacion').getValue();
                        if (grid.panelRVM.validarPPU(newPPU, index)) {
                            record.set('esvehiculo', PPU_BUSCANDO);
                            record.set('espropietario', PPU_BUSCANDO);
                            record.set('sinanotacionespendientes', PPU_BUSCANDO);
                            Srp.FrontController.fireEvent('onLoadPPU', newPPU);
                            record.set('patente', newPPU);
                            record.set('patenteProhibicion', newProhib);
                        }
                    }
                },
                text: 'Actualizar PPU'
            }), '-', new Ext.Button({
                disabled: true,
                itemId: 'eliminarButton',
                iconCls: 'icon-delete-patente',
                handler: function () {
                    var grid = Ext.getCmp('ppu_grid');
                    var records = grid.getSelectionModel().getSelections();
                    var store = grid.getStore();
                    for (var i = 0; i < records.length; i++) {
                        var r = records[i];
                        if (typeof (r.get('nodeid')) != 'undefined') {
                            records[i].set('removed', true);
                        } else {
                            store.remove(r);
                        }
                    }
                    store.filter('removed', false);
                    grid.getSelectionModel().clearSelections();
                    grid.getTopToolbar().getComponent('actualizarButton').disable();
                    grid.getTopToolbar().getComponent('eliminarButton').disable();
                    Ext.getCmp('new_ppu').setValue('');
                    Ext.getCmp('prohibicion_anotacion').setValue(false);
                },
                text: 'Eliminar PPU(s)'
            })]
        });
    },
    listeners: {
        click: function () {
            var n = this.getSelectionModel().getSelections().length;
            if (n == 0) {
                this.getTopToolbar().getComponent('actualizarButton').disable();
                this.getTopToolbar().getComponent('eliminarButton').disable();
            } else if (n == 1) {
                this.getTopToolbar().getComponent('actualizarButton').enable();
                this.getTopToolbar().getComponent('eliminarButton').enable();
            } else if (n > 1) {
                this.getTopToolbar().getComponent('actualizarButton').disable();
                this.getTopToolbar().getComponent('eliminarButton').enable();
            }
        }
    },
    validarRegistroPatenteEnRVM: function (response) {
        var index = this.store.findExact('patente', response.ppu);
        if (index != -1) {
            var record = this.store.getAt(index);
            if (response.success) {
                record.set('esvehiculo', PPU_VALIDA);
            } else {
                record.set('esvehiculo', PPU_INVALIDA);
            }
        }
    },
    validarPropietarioPPU: function (response) {
        var index = this.store.findExact('patente', response.ppu);
        if (index != -1) {
            var record = this.store.getAt(index);
            if (response.success) {
                record.set('espropietario', PPU_VALIDA);
            } else {
                record.set('espropietario', PPU_INVALIDA);
            }
        }
    },
    validarSolicitudesPendientes: function (response) {
        var index = this.store.findExact('patente', response.ppu);
        if (index != -1) {
            var record = this.store.getAt(index);
            if (response.success) {
                record.set('sinanotacionespendientes', PPU_VALIDA);
            } else {
                record.set('sinanotacionespendientes', PPU_INVALIDA);
            }
        }
    },
    getJSON: function () {
        var ppuList = new Array();
        var ppuStore = this.getStore();
        var n = ppuStore.getCount();
        if (n > 0) {
            for (var i = 0; i < n; i++) {
                var ppu = ppuStore.getAt(i);
                if (ppu.get('nodeid')) {
                    ppuList.push({
                        nodeid: ppu.get('nodeid'),
                        patente: ppu.get('patente'),
                        patenteProhibicion: ppu.get('patenteProhibicion'),
                        esvehiculo: ppu.get('esvehiculo'),
                        espropietario: ppu.get('espropietario'),
                        sinanotacionespendientes: ppu.get('sinanotacionespendientes'),
                        removed: ppu.get('removed')
                    });
                } else {
                    ppuList.push({
                        patente: ppu.get('patente'),
                        patenteProhibicion: ppu.get('patenteProhibicion'),
                        esvehiculo: ppu.get('esvehiculo'),
                        espropietario: ppu.get('espropietario'),
                        sinanotacionespendientes: ppu.get('sinanotacionespendientes'),
                        removed: ppu.get('removed')
                    });
                }
            };
            var json = {};
            if (!Ext.isEmpty(ppuList)) {
                json.vehiculos = ppuList;
            }
            return json;
        } else return {};
    },
    isValid: function () {
        var ppus = this.getJSON();
        if (ppus.vehiculos && ppus.vehiculos.length > 0) {
            for (var i = 0; i < ppus.vehiculos.length; i++) {
                var ppu = ppus.vehiculos[i];
                if (!ppu.removed) {
                    if (ppu.esvehiculo != PPU_VALIDA || ppu.espropietario != PPU_VALIDA || ppu.sinanotacionespendientes != PPU_VALIDA) {
                        return false;
                    }
                }
            }
        }
        return true;
    },
    validatePPUs: function () {
        var ppus = this.getJSON();
        if (ppus.vehiculos && ppus.vehiculos.length > 0) {
            for (var i = 0; i < ppus.vehiculos.length; i++) {
                var ppu = ppus.vehiculos[i];
                Srp.FrontController.fireEvent('onLoadPPU.esPropietario', ppu.patente);
            }
        }
    }
});
Ext.reg('ppuInscripcionGrid', Srp.gui.PPUInscripcionGrid);
Ext.ns('Srp', 'Srp.gui');
Srp.gui.PPUAlzamientoParcialGrid = Ext.extend(Srp.gui.PPUBaseGrid, {
    getJSON: function () {
        var store = this.getStore()
        for (var i = 0; i < store.getCount(); ++i) {
            var ppu = store.getAt(i);
            ppu.set('modificar', false);
        }
        var ppuSelections = this.getSelectionModel().getSelections();
        for (var i = 0; i < ppuSelections.length; i++) {
            ppuSelections[i].set('modificar', true);
        };
        var ppuList = new Array();
        var store = this.getStore()
        for (var i = 0; i < store.getCount(); ++i) {
            var ppu = store.getAt(i);
            ppuList.push({
                nodeid: ppu.get('nodeid'),
                patente: ppu.get('patente'),
                patenteProhibicion: ppu.get('patenteProhibicion'),
                modificar: ppu.get('modificar')
            });
        }
        return ppuList;
    },
    initComponent: function () {
        Ext.apply(this, Ext.apply(this.initialConfig, {}));
        Srp.gui.PPUAlzamientoParcialGrid.superclass.initComponent.apply(this);
        this.registrarEventos();
    },
    onRender: function (ct, position) {
        Srp.gui.PPUAlzamientoParcialGrid.superclass.onRender.call(this, ct, position);
    },
    listeners: {
        viewready: function (x) {
            var store = this.getStore()
            for (var i = 0; i < store.getCount(); ++i) {
                var ppu = store.getAt(i);
                if (ppu.get('modificar')) {
                    this.getSelectionModel().selectRow(i, true);
                }
            }
        }
    },
    bbar: [I18n.commons.alzamientoGrillaMensaje]
});
Ext.reg('ppuAlzamientoParcialGrid', Srp.gui.PPUAlzamientoParcialGrid);
Ext.ns('Srp', 'Srp.gui');
Srp.gui.PPUProhibicionActoGrid = Ext.extend(Srp.gui.PPUBaseGrid, {
    initComponent: function () {
        Ext.apply(this, {
            tbar: this.buildTopToolbar()
        });
        Srp.gui.PPUProhibicionActoGrid.superclass.initComponent.apply(this);
        this.addColumn({
            name: 'modificar',
            defaultValue: 0
        }, {
            header: '',
            dataIndex: 'modificar',
            width: 30,
            renderer: util.Format.ppuBloqueadoRenderer
        });
        this.registrarEventos();
    },
    listeners: {
        click: function (btn, ev) {
            var sel = this.getSelectionModel().getSelections();
            var showRemoveProhibicionBtn = false;
            var showAddProhibicionBtn = false;
            for (var i = sel.length - 1; i >= 0; i--) {
                var rec = sel[i];
                if (rec.get('patenteProhibicion')) {
                    if (util.Format.isPPULock(rec)) {
                        showRemoveProhibicionBtn = false;
                        break;
                    } else {
                        showRemoveProhibicionBtn = true;
                    }
                } else {
                    showAddProhibicionBtn = true;
                }
            }
            if (showAddProhibicionBtn) {
                this.addProhibicionBtn.enable();
            } else {
                this.addProhibicionBtn.disable();
            }
            if (showRemoveProhibicionBtn) {
                this.removeProhibicionBtn.enable();
            } else {
                this.removeProhibicionBtn.disable();
            }
        },
        viewready: function (x) {
            var store = this.getStore();
            for (var i = 0; i < store.getCount(); ++i) {
                var ppu = store.getAt(i);
                if (ppu.get('modificar')) {
                    this.getSelectionModel().selectRow(i, true);
                }
            }
        }
    },
    buildTopToolbar: function () {
        return [{
            iconCls: 'icon-add',
            disabled: true,
            ref: '../addProhibicionBtn',
            handler: this.onAgregar,
            scope: this,
            text: 'Agregar Prohibición'
        }, '-', {
            iconCls: 'icon-remove',
            disabled: true,
            ref: '../removeProhibicionBtn',
            handler: this.onRemover,
            scope: this,
            text: 'Quitar Prohibición'
        }];
    },
    bbar: [I18n.commons.prohibicionActoGridBbar],
    onAgregar: function (btn, ev) {
        var selections = this.getSelectionModel().getSelections();
        for (var i = 0; i < selections.length; ++i) {
            var record = selections[i];
            if (!record.get('patenteProhibicion')) {
                record.set('patenteProhibicion', true);
                record.set('modificar', !record.get('modificar'));
            }
        }
    },
    onRemover: function (btn, ev) {
        var selections = this.getSelectionModel().getSelections();
        for (var i = 0; i < selections.length; ++i) {
            var record = selections[i];
            if (record.get('patenteProhibicion')) {
                record.set('patenteProhibicion', false);
                record.set('modificar', !record.get('modificar'));
            }
        }
    },
    getJSON: function () {
        var ppuList = new Array();
        var store = this.getStore()
        for (var i = 0; i < store.getCount(); ++i) {
            var ppu = store.getAt(i);
            ppuList.push({
                nodeid: ppu.get('nodeid'),
                patente: ppu.get('patente'),
                patenteProhibicion: ppu.get('patenteProhibicion'),
                modificar: ppu.get('modificar')
            });
        }
        return ppuList;
    }
});
Ext.reg('ppuProhibicionActoGrid', Srp.gui.PPUProhibicionActoGrid);
Ext.ns('Srp', 'Srp.gui');
Srp.gui.PPUCambioAcreedorGrid = Ext.extend(Srp.gui.PPUBaseGrid, {
    initComponent: function () {
        Ext.apply(this, {});
        Srp.gui.PPUCambioAcreedorGrid.superclass.initComponent.apply(this);
        this.registrarEventos();
        this.getColumnModel().setHidden(0, true);
    },
    bbar: ['Se modificará el Acreedor de los siguientes Vehículos'],
    getJSON: function () {
        var ppuList = new Array();
        var store = this.getStore();
        for (var i = 0; i < store.getCount(); ++i) {
            var ppu = store.getAt(i);
            ppuList.push({
                nodeid: ppu.get('nodeid'),
                patente: ppu.get('patente'),
                patenteProhibicion: ppu.get('patenteProhibicion'),
                modificar: true
            });
        }
        return ppuList;
    }
});
Ext.reg('ppuCambioAcreedorGrid', Srp.gui.PPUCambioAcreedorGrid);
Ext.ns('Srp', 'Srp.gui');
Srp.gui.PPUResumenGrid = Ext.extend(Srp.gui.PPUBaseGrid, {
    initComponent: function () {
        this.store = this.buildStore();
        Ext.apply(this, {});
        Srp.gui.PPUResumenGrid.superclass.initComponent.apply(this, arguments);
        this.addColumn({
            name: 'esvehiculo',
            defaultValue: PPU_BUSCANDO
        }, {
            header: 'Vehículo Registrado en RVM',
            dataIndex: 'esvehiculo',
            width: 120,
            renderer: util.Format.ppuValidationRender
        });
        this.addColumn({
            name: 'espropietario',
            defaultValue: PPU_BUSCANDO
        }, {
            header: 'Propietario Válido',
            dataIndex: 'espropietario',
            width: 120,
            renderer: util.Format.ppuValidationRender
        });
        this.addColumn({
            name: 'sinanotacionespendientes',
            defaultValue: PPU_BUSCANDO
        }, {
            header: 'Sin Solicitudes Pendientes',
            dataIndex: 'sinanotacionespendientes',
            width: 120,
            renderer: util.Format.ppuValidationRender
        });
        this.getColumnModel().setHidden(0, true);
        this.registrarEventos();
    },
    buildStore: function () {
        return new Ext.data.JsonStore({
            fields: [{
                name: 'nodeid'
            }, {
                name: 'patente'
            }, {
                name: 'patenteProhibicion',
                type: 'boolean'
            }, {
                name: 'removed'
            }]
        });
    },
    setValueRecord: function (ppu, fieldName, fieldValue) {
        var index = this.store.findExact('patente', ppu);
        if (index != -1) {
            var record = this.store.getAt(index);
            record.set(fieldName, fieldValue);
        }
    },
    setJSON: function (vehiculos) {
        if (vehiculos && vehiculos.length > 0) {
            var v = vehiculos;
            var gridStore = this.getStore();
            gridStore.removeAll(true);
            for (var i = v.length - 1; i >= 0; i--) {
                v[i].removed = false;
                v[i].esvehiculo = PPU_UNKNOW;
                v[i].espropietario = PPU_UNKNOW;
                v[i].sinanotacionespendientes = PPU_UNKNOW;
                gridStore.insert(0, new gridStore.recordType(v[i]));
            }
        }
    },
    registrarEventos: function () {
        var validarPPUsRVMCmd = new Srp.command.ws.ValidarPPUsRVMCmd();
        validarPPUsRVMCmd.setParameter('grid', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onValidatingPPU',
            command: validarPPUsRVMCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onRemoveFields',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.reg('PPUResumenGrid', Srp.gui.PPUResumenGrid);
Ext.ns('Srp', 'Srp.gui');
Srp.gui.AdjuntosAnexosGrid = Ext.extend(Ext.grid.GridPanel, {
    height: 200,
    viewConfig: {
        forceFit: true
    },
    initComponent: function () {
        this.store = new Ext.data.JsonStore({
            fields: [{
                name: 'nombre'
            }, {
                name: 'nodeid'
            }, {
                name: 'ignore',
                defaultValue: true
            }, {
                name: 'url'
            }]
        });
        this.anexosPorEliminarStore = new Ext.data.ArrayStore({
            fields: [{
                name: 'nodeid'
            }, {
                name: 'removed',
                type: 'boolean'
            }]
        });
        this.selModel = new Ext.grid.CheckboxSelectionModel();
        this.columns = [this.selModel, {
            header: 'Nombre archivo',
            dataIndex: 'nombre',
            renderer: util.Format.adjuntoRenderer
        }];
        Ext.apply(this, {
            tbar: this.buildToolbar()
        });
        Srp.gui.AdjuntosAnexosGrid.superclass.initComponent.apply(this, arguments);
    },
    buildToolbar: function () {
        return [{
            itemId: 'removeButton',
            disabled: true,
            text: 'Eliminar Anexo(s)',
            handler: this.onRemoveAnexo,
            scope: this,
            iconCls: 'icon-remove'
        }];
    },
    onRemoveAnexo: function () {
        var sel = this.getSelectionModel().getSelections();
        for (var i = 0; i < sel.length; ++i) {
            var rec = sel[i];
            this.store.remove(rec);
            this.anexosPorEliminarStore.add(rec);
        }
        this.getTopToolbar().getComponent('removeButton').disable();
        this.getSelectionModel().clearSelections();
    },
    listeners: {
        click: function () {
            var n = this.getSelectionModel().getSelections().length;
            if (n > 0) {
                this.getTopToolbar().getComponent('removeButton').enable();
            } else {
                this.getTopToolbar().getComponent('removeButton').disable();
            }
        }
    },
    getJSON: function (isResumen) {
        var anexosList = new Array();
        var anexosStore = this.getStore();
        for (var i = 0; i < anexosStore.getCount(); i++) {
            var anexo = anexosStore.getAt(i);
            if (!anexo.get('ignore') || isResumen) {
                anexosList.push({
                    nodeid: anexo.get('nodeid'),
                    nombre: anexo.get('nombre'),
                    type: TIPO_ANEXO,
                    url: anexo.get('url')
                });
            }
        };
        for (var i = 0; i < this.anexosPorEliminarStore.getCount(); i++) {
            var anexo = this.anexosPorEliminarStore.getAt(i);
            anexosList.push({
                nodeid: anexo.get('nodeid'),
                removed: true
            });
        };
        return anexosList;
    },
    setJSON: function (adjuntos) {
        if (adjuntos.length > 0) {
            for (var i = 0; i < adjuntos.length; ++i) {
                adjuntos[i].url = util.Format.formatURLAdjunto(adjuntos[i].nodeid, adjuntos[i].nombre);
            }
        }
        this.getStore().loadData(adjuntos);
    }
});
Ext.reg('adjuntosAnexosGrid', Srp.gui.AdjuntosAnexosGrid);
Ext.ns('Srp.gui');
Srp.gui.ContratanteGrid = Ext.extend(Ext.grid.GridPanel, {
    itemId: 'contratanteGrid',
    height: 200,
    stripeRows: true,
    viewConfig: {
        forceFit: true
    },
    initComponent: function () {
        var config = {};
        this.store = this.contratanteStore();
        this.storeRemove = this.contratanteStore();
        this.tbar = this.buildToolbar();
        this.selModel = new Ext.grid.CheckboxSelectionModel();
        this.columns = [{
            id: 'personaTipo',
            header: 'Calidad',
            sortable: true,
            dataIndex: 'personaTipo',
            width: 150
        }, {
            header: 'Credencial',
            dataIndex: 'credencial',
            width: 350
        }, {
            header: 'Estado',
            dataIndex: 'identificadorvalido',
            width: 70,
            renderer: util.Format.personaNaturalStatusRenderer
        }];
        var ou = model.user.Usuario.getOrganization();
        switch (ou.tipo) {
            case TIPO_OU_NOTARIA:
                this.tipoValidacion = VALIDAR_NOMBRE_RUN;
                break;
            case TIPO_OU_OFICINA:
                this.tipoValidacion = AUTOCOMPLETAR_NOMBRE;
                break;
        }
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ContratanteGrid.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    makeCredencial: function (containerItemId) {
        var cred = '';
        var credPersonaNatural = false;
        Ext.select('.credencial', true, containerItemId).each(function (cmp) {
            var extCmp = Ext.getCmp(cmp.id);
            if (!extCmp.isXType('hidden')) {
                cred += cmp.getValue() + ', ';
            }
        });
        Ext.select('.credencial-nombre', true, containerItemId).each(function (cmp) {
            var extCmp = Ext.getCmp(cmp.id);
            if (!extCmp.isXType('hidden')) {
                cred += extCmp.getValue() + ' ';
            }
            credPersonaNatural = true;
        });
        if (credPersonaNatural) {
            cred = cred.substr(0, cred.length - 1);
        } else {
            cred = cred.substr(0, cred.length - 2);
        }
        return cred;
    },
    buildToolbar: function () {
        var contratante = this.contratante;
        var contratanteCopia = this.contratanteCopia;
        var removeFields = function () {
            var fs = Ext.getCmp(contratante + 'Tab').getComponent('contratantePanel').getComponent('contratanteFieldSet');
            fs.getComponent('calidadFormPanel').getComponent('calidadComboBox').setValue('');
            fs.removeFields();
        };
        var grid = this;
        this.buttonEliminar = new Ext.Button({
            text: I18n.common.button.eliminar[contratante],
            iconCls: 'icon-button-eliminar-contratante',
            disabled: true,
            handler: function (b, e) {
                var button = b;
                var records = grid.getSelectionModel().getSelections();
                var n = records.length;
                Srp.gui.messageBox.YesNo({
                    msg: n > 1 ? I18n.mensajes.confirm.eliminarContratantes : I18n.mensajes.confirm.eliminarContratante,
                    fn: function (id) {
                        if (id === 'yes') {
                            var store = grid.getStore();
                            var storeRemove = grid.getStoreRemove();
                            for (var i = 0; i < records.length; i++) {
                                var r = records[i];
                                store.remove(r);
                                if (r.data.nodeid && r.data.nodeid.length > 0) {
                                    r.set('removed', true);
                                    storeRemove.add(r);
                                }
                            }
                            removeFields();
                            if (contratante == 'constituyente') {
                                Ext.getCmp('ppu_grid').validatePPUs();
                            }
                            grid.disableButtons();
                        }
                    }
                });
            }
        });
        this.buttonActualizar = new Ext.Button({
            disabled: true,
            handler: function () {
                var records = grid.getSelectionModel().getSelections();
                if (records.length == 1) {
                    var record = records[0];
                    var store = this.getStore();
                    var index = store.indexOf(record);
                    var calidadFieldSet = Ext.getCmp('calidad_fieldset_' + contratante);
                    var calidadFormPanel = calidadFieldSet.getComponent('calidadFormPanel');
                    var calidadForm = calidadFormPanel.getForm();
                    var calidadId = calidadFormPanel.getComponent('calidadComboBox').getValue();
                    var identificador = '';
                    var pais = '';
                    var textfieldTarget = null;
                    switch (calidadId) {
                        case CALIDAD_PERSONA_NATURAL:
                            var container = calidadFormPanel.getComponent('personaNatural');
                            identificador = container.getComponent('leftColumn').getComponent('run').getValue();
                            textfieldTarget = container.getComponent('leftColumn').getComponent('run');
                            identificadorvalido = container.getComponent('leftColumn').getComponent('identificadorvalido');
                            break;
                        case CALIDAD_PERSONA_JURIDICA:
                            var container = calidadFormPanel.getComponent('personaJuridica');
                            identificador = container.getComponent('rut').getValue();
                            textfieldTarget = container.getComponent('rut');
                            break;
                        case CALIDAD_EXTRANJERA:
                            var container = calidadFormPanel.getComponent('extranjero');
                            identificador = container.getComponent('leftColumn').getComponent('numeroIdentificador').getValue();
                            textfieldTarget = container.getComponent('leftColumn').getComponent('numeroIdentificador');
                            pais = container.getComponent('rightColumn').getComponent('pais').getValue();
                            break;
                    }
                    var existsInGrid = this.isConstituyenteInGrid(calidadId, identificador, pais, index);
                    if (existsInGrid) {
                        var errorMessage = I18n.commons.contratanteEnGrilla.replace('%contratante', contratante);
                        if (Ext.isDefined(identificadorvalido)) {
                            identificadorvalido.setValue(CONTRATANTE_ESTADO_INVALIDO);
                            textfieldTarget.markInvalid(errorMessage);
                        }
                        if (textfieldTarget.calidadId == CALIDAD_EXTRANJERA) {
                            var container = calidadFormPanel.getComponent('extranjero');
                            container.getComponent('rightColumn').getComponent('pais').markInvalid(errorMessage);
                        }
                    }
                    if (!existsInGrid && calidadFieldSet.validarUnicidad() && calidadForm.isValid()) {
                        var record = grid.getSelectionModel().getSelected();
                        var rootSelectElement = 'calidad_fieldset_' + contratante;
                        var items = Ext.select('.credencial', true, rootSelectElement);
                        items.each(function (el, c, idx) {
                            var cmp = Ext.getCmp(el.id);
                            record.set(cmp.getName(), cmp.getValue());
                        });
                        var items = Ext.select('.credencial-nombre', true, rootSelectElement);
                        items.each(function (el, c, idx) {
                            var cmp = Ext.getCmp(el.id);
                            record.set(cmp.getName(), cmp.getValue());
                        });
                        var status = Ext.select('.calidad-status', true, rootSelectElement);
                        status.each(function (el, c, idx) {
                            var cmp = Ext.getCmp(el.id);
                            record.set(cmp.getName(), cmp.getValue());
                        });
                        record.set('calidadId', calidadId);
                        record.set('personaTipo', calidadId);
                        var cred = this.makeCredencial(rootSelectElement);
                        record.set('credencial', cred);
                        switch (record.get('calidadId')) {
                            case CALIDAD_PERSONA_NATURAL:
                                if (this.tipoValidacion == VALIDAR_NOMBRE_RUN) {
                                    Srp.FrontController.fireEvent('onWsRevalidatePersonaRun_' + contratante);
                                } else {
                                    Srp.FrontController.fireEvent('onWsRevalidatePersonaRun_' + contratante);
                                }
                                record.set('identificadorTipo', IDENTIFICADOR_TIPO_PERSONA_NATURAL);
                                record.set('identificadorvalido', CONTRATANTE_ESTADO_SPINNER);
                                break;
                            case CALIDAD_PERSONA_JURIDICA:
                                var container = calidadFormPanel.getComponent('personaJuridica');
                                var razonSocial = container.getComponent('razonSocial').getValue();
                                var identificadorvalido = CONTRATANTE_ESTADO_LOCAL_INVALIDO;
                                if (razonSocial.length > 0) {
                                    identificadorvalido = CONTRATANTE_ESTADO_LOCAL_VALIDO;
                                }
                                record.set('identificadorTipo', IDENTIFICADOR_TIPO_PERSONA_JURIDICA);
                                record.set('identificadorvalido', identificadorvalido);
                                break;
                            case CALIDAD_EXTRANJERA:
                                var container = calidadFormPanel.getComponent('extranjero');
                                var identificadorvalido = CONTRATANTE_ESTADO_LOCAL_INVALIDO;
                                if (container.getComponent('leftColumn').getComponent('identificadorTipo').getRawValue().length > 0 && container.getComponent('rightColumn').getComponent('nombres').getValue().length > 0) {
                                    identificadorvalido = CONTRATANTE_ESTADO_LOCAL_VALIDO;
                                }
                                record.set('identificadorvalido', identificadorvalido);
                                break;
                        }
                        if (contratante == 'constituyente') {
                            Ext.getCmp('ppu_grid').validatePPUs();
                        }
                    }
                }
            },
            iconCls: 'icon-button-actualizar-contratante',
            scope: this,
            text: I18n.common.button.actualizar[contratante]
        });
        var copiarDesde = function (sourceStore, myStore) {
            var sourceRecords = sourceStore.getRange();
            var oldRecords = myStore.getRange();
            var list = [];
            for (var i = 0; i < oldRecords.length; i++) {
                var r = oldRecords[i].copy();
                Ext.data.Record.id(r);
                if (typeof (r.get('nodeid')) !== 'undefined') {
                    r.set('removed', true);
                    list.push(r);
                }
            }
            for (var i = 0; i < sourceRecords.length; i++) {
                var r = sourceRecords[i].copy();
                Ext.data.Record.id(r);
                if (!r.get('removed')) {
                    if (typeof (r.get('nodeid')) !== 'undefined') {
                        r.set('nodeid', '');
                    }
                    list.push(r);
                }
            }
            myStore.removeAll();
            myStore.add(list);
            myStore.filter('removed', false);
            Ext.getCmp(contratante + 'contratanteGridPanel').getComponent('errorMessage').hide();
        };
        var buttonCopiar = new Ext.Button({
            text: I18n.notaria.actuacion.contratantes.copiarDesde + ' ' + I18n.common.contratantes[contratanteCopia],
            handler: function () {
                if (Ext.get(contratanteCopia + 'Grid') != null) {
                    var sourceStore = Ext.getCmp(contratanteCopia + 'Grid').getStore();
                    var myGrid = Ext.getCmp(contratante + 'Grid');
                    var myStore = myGrid.getStore();
                    if (myGrid.countVisibleRecords() > 0) {
                        Srp.gui.messageBox.YesNo({
                            msg: I18n.mensajes.perderDatosContratantes,
                            fn: function (id) {
                                if (id === 'yes') {
                                    copiarDesde(sourceStore, myStore);
                                    if (contratante == 'constituyente') {
                                        Ext.getCmp('ppu_grid').validatePPUs();
                                    }
                                }
                            }
                        });
                    } else {
                        copiarDesde(sourceStore, myStore);
                        if (contratante == 'constituyente') {
                            Ext.getCmp('ppu_grid').validatePPUs();
                        }
                    }
                }
            },
            iconCls: 'icon-button-copy'
        });
        return new Ext.Toolbar({
            items: [this.buttonActualizar, '-', this.buttonEliminar, '-', buttonCopiar]
        });
    },
    contratanteStore: function () {
        return new Ext.data.ArrayStore({
            fields: [{
                name: 'nodeid'
            }, {
                name: 'personaTipo'
            }, {
                name: 'identificadorTipo'
            }, {
                name: 'calidadId'
            }, {
                name: 'identificador'
            }, {
                name: 'nombres'
            }, {
                name: 'apellidoPaterno'
            }, {
                name: 'apellidoMaterno'
            }, {
                name: 'razonSocial'
            }, {
                name: 'tipoDocumento'
            }, {
                name: 'numeroIdentificador'
            }, {
                name: 'pais'
            }, {
                name: 'credencial'
            }, {
                name: 'removed'
            }, {
                name: 'identificadorvalido'
            }]
        });
    },
    isConstituyenteInGrid: function (calidad, identificador, pais, index) {
        var store = this.getStore();
        var records = store.getRange();
        var N = records.length;
        for (var i = 0; i < N; i++) {
            if (Ext.isNumber(index) && i == index) {
                continue;
            }
            var r = records[i];
            if (!r.get('removed')) {
                if (calidad == CALIDAD_EXTRANJERA) {
                    if (r.get('calidadId') == CALIDAD_EXTRANJERA && r.get('identificador') === identificador && r.get('pais') == pais) {
                        return true;
                    }
                } else {
                    if (r.get('calidadId') != CALIDAD_EXTRANJERA && r.get('identificador') === identificador) {
                        return true;
                    }
                }
            }
        }
        return false;
    },
    countVisibleRecords: function () {
        var store = this.getStore();
        var records = store.getRange();
        var N = records.length;
        var j = 0;
        for (var i = 0; i < N; i++) {
            var r = records[i];
            if (!r.get('removed')) {
                j++;
            }
        }
        return j;
    },
    registrarEventos: function () {
        var loadPersonaByRunCmd = new Srp.command.ws.LoadPersonaByRunCmd();
        loadPersonaByRunCmd.setParameter('fieldset', this);
        var loadPersonaRunCmd = new Srp.command.ws.LoadPersonaRunCmd();
        loadPersonaRunCmd.setParameter('fieldset', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onWsGetPersona_' + this.contratante,
            command: loadPersonaByRunCmd
        }, {
            name: 'onWsValidateNombreRun_' + this.contratante,
            command: loadPersonaRunCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'removerEventos',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    loadPersonaNatural: function (response, runConsultado) {
        var index = this.store.findExact('identificador', runConsultado);
        if (index != -1) {
            var record = this.store.getAt(index);
            if (response.success) {
                var persona = response.data;
                record.set('nombres', persona.nombres);
                record.set('apellidoPaterno', persona.paterno);
                record.set('apellidoMaterno', persona.materno);
                record.set('credencial', runConsultado + ", " + persona.nombres + ", " + persona.paterno + ", " + persona.materno);
                record.set('identificadorvalido', CONTRATANTE_ESTADO_VALIDO);
            } else {
                record.set('identificadorvalido', CONTRATANTE_ESTADO_INVALIDO);
            }
        }
    },
    validatePersonaNatural: function (response, params) {
        var index = this.getStore().findExact('identificador', params.runFull);
        if (index != -1) {
            var record = this.store.getAt(index);
            if (response.success) {
                record.set('identificadorvalido', CONTRATANTE_ESTADO_VALIDO);
            } else {
                record.set('identificadorvalido', CONTRATANTE_ESTADO_INVALIDO);
            }
        } else {}
    },
    enableButtons: function () {
        this.buttonEliminar.enable();
        this.buttonActualizar.enable();
    },
    disableButtons: function () {
        this.buttonEliminar.disable();
        this.buttonActualizar.disable();
    },
    getProcessStore: function () {
        var storeDefault = this.getStore();
        var storeRemove = this.getStoreRemove();
        var storeReturn = this.contratanteStore();
        var count = storeRemove.getCount();
        if (count > 0) {
            for (var i = 0; i < count; ++i) {
                var record = storeRemove.getAt(i);
                var newRecord = new storeDefault.recordType(record.data);
                storeReturn.add(newRecord);
            }
        }
        var count = storeDefault.getCount();
        if (count > 0) {
            for (var i = 0; i < count; ++i) {
                var record = storeDefault.getAt(i);
                var newRecord = new storeDefault.recordType(record.data);
                if (record.dirty) {
                    newRecord.markDirty();
                }
                storeReturn.add(newRecord);
            }
        }
        return storeReturn;
    },
    getStoreRemove: function () {
        return this.storeRemove;
    }
});
Ext.ns('Srp', 'Srp.gui');
Srp.gui.RecepcionActuacionGrid = Ext.extend(Ext.grid.GridPanel, {
    height: 200,
    viewConfig: {
        forceFit: true
    },
    initComponent: function () {
        this.store = new Ext.data.JsonStore({
            fields: [{
                name: 'numeroRepertorioPrendas'
            }, {
                name: 'agnoRepertorioPrendas'
            }, {
                name: 'estado'
            }, {
                name: 'numeroRepertorioAgnoPrendas'
            }]
        });
        this.selModel = new Ext.grid.CheckboxSelectionModel();
        this.columns = [this.selModel, {
            header: 'Nº Repertorio',
            dataIndex: 'numeroRepertorioPrendas'
        }, {
            header: 'Año Repertorio',
            dataIndex: 'agnoRepertorioPrendas'
        }, {
            header: 'Estado',
            dataIndex: 'estado',
            renderer: util.Format.estadoRecepcionRenderer
        }];
        this.tbar = this.buildTopToolbar();
        this.listeners = this.buildListeners();
        Ext.apply(this, {});
        Srp.gui.RecepcionActuacionGrid.superclass.initComponent.apply(this, arguments);
    },
    buildTopToolbar: function () {
        return [{
            iconCls: 'icon-remove',
            disabled: true,
            ref: '../removerButton',
            handler: this.onRemover,
            scope: this,
            text: 'Remover'
        }, '-'];
    },
    onRemover: function (btn, ev) {
        var selections = this.getSelectionModel().getSelections();
        for (var i = 0; i < selections.length; ++i) {
            var record = selections[i];
            this.store.remove(record);
        }
    },
    buildListeners: function () {
        return {
            scope: this,
            click: this.onClick
        };
    },
    onClick: function () {
        var selections = this.getSelectionModel().getSelections();
        if (selections.length > 0) {
            this.removerButton.enable();
        } else {
            this.removerButton.disable();
        }
    }
});
Ext.reg('recepcionActuacionGrid', Srp.gui.RecepcionActuacionGrid);
Ext.ns('Srp.gui');
Srp.gui.QuitarTareasGrid = Ext.extend(Srp.gui.TareaGrid, {
    id: 'quitar-tareas-grid',
    initComponent: function () {
        Srp.gui.QuitarTareasGrid.superclass.initComponent.call(this);
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.quitarTareas);
    },
    onRender: function (ct, position) {
        Srp.gui.QuitarTareasGrid.superclass.onRender.call(this, ct, position);
        this.getColumnModel().addColumn({
            header: I18n.bandejaTareas.titulos.usuario,
            width: 100,
            sortable: true,
            dataIndex: 'usuario'
        }, 2);
    },
    buildFields: function () {
        var fields = Srp.gui.QuitarTareasGrid.superclass.buildFields.call(this);
        fields.push({
            name: 'usuario'
        });
        return fields;
    },
    onClickGrid: function (btn, ev) {
        this.liberarBtn.disable();
        var sel = this.getSelectionModel().getSelections();
        for (var i = sel.length - 1; i >= 0; i--) {
            if (sel[i].data.tomado) {
                this.liberarBtn.enable();
            }
        }
    },
    onRowdblclickGrid: function (thisGrid, rowIndex) {
        var el = this.getEl();
        el.mask(I18n.mensajes.cargandoActuacion, "x-mask-loading");
        var record = thisGrid.getStore().getAt(rowIndex);
        this.doAction(record);
    },
    getUrlWebScript: function () {
        return Srp.getWsUrl('WS_TAREAS_OBTENER_LISTADO_TOMADAS');
    },
    buildListeners: function () {
        return {
            scope: this,
            rowdblclick: this.onRowdblclickGrid,
            click: this.onClickGrid
        };
    },
    processLiberarTarea: function (record) {
        this.getStore().remove(record);
    },
    processActuacion: function (actuacion) {
        verContratoWindow = new Srp.gui.VerContratoWindow({
            actuacion: actuacion
        });
        verContratoWindow.show();
        this.removerMascara();
    }
});
Ext.ns('Srp.gui');
Srp.gui.AsignarTareasGrid = Ext.extend(Srp.gui.TareaGrid, {
    id: 'asignar-tareas-grid',
    initComponent: function () {
        Srp.gui.AsignarTareasGrid.superclass.initComponent.call(this);
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.asignarTareas);
    },
    onRender: function (ct, position) {
        Srp.gui.AsignarTareasGrid.superclass.onRender.call(this, ct, position);
        Srp.FrontController.fireEvent("onLoadUsersToAsign");
    },
    buildTopToolbar: function () {
        var botonesInferiores = new Array();
        botonesInferiores.push({
            iconCls: "icon-asignar",
            ref: "../asignarBtn",
            text: 'Asignar',
            handler: this.onAsignar,
            disabled: true,
            scope: this
        });
        botonesInferiores.push('-');
        return botonesInferiores;
    },
    processGetUsersByRole: function (users) {
        this.getTopToolbar().add({
            xtype: 'combo',
            store: users,
            ref: '../usersCombo',
            allowBlank: false,
            editable: false,
            triggerAction: 'all',
            fieldLabel: 'text',
            emptyText: I18n.mensajes.usuarioNoSeleccionado
        });
        this.doLayout();
    },
    onAsignar: function () {
        if (!this.usersCombo.validate()) {
            return;
        }
        var userToAsign = this.usersCombo.getValue();
        var selections = this.getSelectionModel().getSelections();
        for (var i = 0; i < selections.length; ++i) {
            var record = selections[i];
            Srp.FrontController.fireEvent('onAsignarTarea', record, userToAsign);
        }
        this.asignarBtn.disable();
    },
    onClickGrid: function (btn, ev) {
        this.asignarBtn.disable();
        var sel = this.getSelectionModel().getSelections();
        for (var i = sel.length - 1; i >= 0; i--) {
            if (!sel[i].data.tomado) {
                this.asignarBtn.enable();
            }
        }
    },
    onRowdblclickGrid: function (thisGrid, rowIndex) {
        var el = this.getEl();
        el.mask(I18n.mensajes.cargandoActuacion, "x-mask-loading");
        var record = thisGrid.getStore().getAt(rowIndex);
        this.doAction(record);
    },
    getUrlWebScript: function () {
        return Srp.getWsUrl('WS_TAREAS_OBTENER_LISTADO_NO_TOMADAS');
    },
    buildListeners: function () {
        return {
            scope: this,
            rowdblclick: this.onRowdblclickGrid,
            click: this.onClickGrid
        };
    },
    processAsignarTarea: function (record) {
        this.getStore().remove(record);
    },
    processActuacion: function (actuacion) {
        verContratoWindow = new Srp.gui.VerContratoWindow({
            actuacion: actuacion
        });
        verContratoWindow.show();
        this.removerMascara();
    },
    registrarEventos: function () {
        Srp.gui.AsignarTareasGrid.superclass.registrarEventos.call(this);
        var getUsersByRoleCmd = new Srp.command.GetUsersByRoleCmd();
        getUsersByRoleCmd.setParameter('obj', this);
        var asignarTareaCmd = new Srp.command.AsignarTareaCmd();
        asignarTareaCmd.setParameter('grid', this)
        var eventos = [{
            name: 'onLoadUsersToAsign',
            command: getUsersByRoleCmd
        }, {
            name: 'onAsignarTarea',
            command: asignarTareaCmd
        }];
        Srp.FrontController.registerEvents(eventos);
        this.eventos.push(eventos[0]);
        this.eventos.push(eventos[1]);
    }
});
Ext.ns('Srp.gui');
Srp.gui.OpcionesMenu = Ext.extend(Ext.FormPanel, {
    id: 'opcionesMenu',
    initComponent: function () {
        Ext.apply(this, {
            frame: true,
            title: I18n.menu.opciones,
            titleCollapse: true,
            acciones: this.getAcciones()
        });
        Srp.gui.OpcionesMenu.superclass.initComponent.call(this);
    },
    onRender: function (ct, position) {
        Srp.gui.OpcionesMenu.superclass.onRender.call(this, ct, position);
        this.registrarEventos();
        this.buildMenuItems();
        this.buildMenuEvents();
    },
    registrarEventos: function () {
        cargarBotonesOpcionesMenuCmd = new Srp.command.CargarBotonesOpcionesMenuCmd();
        cargarBotonesOpcionesMenuCmd.setParameter('menu', this);
        this.eventos = [{
            name: 'Usuario.onLoadRoles',
            command: cargarBotonesOpcionesMenuCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    reloadMenu: function () {
        this.buildMenuItems();
        this.buildMenuEvents();
    },
    buildMenuItems: function () {
        var tpl = new Ext.XTemplate('<ul>' + '<tpl for="actions">' + '<li>' + '<img src="images/s.gif" class="{iconCls}"/><a id="{permiso}" title="{tooltip}"  href="#">{text}</a>' + '</li>' + '</tpl>' + '</ul>');
        var content = tpl.apply(this.getFiltredMenuItems());
        this.update(content);
    },
    buildMenuEvents: function () {
        this.body.on('click', this.doAction, this, {
            delegate: 'a',
            scope: this
        });
    },
    doAction: function (eb, obj, op) {
        Srp.Canvas.confirmUpdate(this, obj.id);
    },
    dispatchAction: function (actionId) {
        Srp.FrontController.fireEvent('Menu.onUpdateContent');
        this.acciones[actionId]();
    },
    getAcciones: function () {
        var aux = new Array();
        var items = this.getItems();
        for (var i = 0; i < items.length; ++i) {
            var item = items[i];
            aux[item.permiso] = item.handler;
        }
        return aux;
    },
    getItems: function () {
        return [{
            permiso: Permiso.VER_TAREAS,
            text: 'Listado Tareas',
            tooltip: I18n.menu.tooltip.tareas,
            iconCls: "icon-listado-tareas",
            handler: this.onListadoTareas
        }, {
            permiso: Permiso.INGRESAR_INSCRIPCION,
            text: 'Nueva Inscripción',
            tooltip: I18n.menu.tooltip.inscripcion,
            iconCls: "icon-ingresar-inscripcion",
            handler: this.onIngresarInscripcion
        }, {
            permiso: Permiso.INGRESAR_MODIFICACION,
            text: 'Nueva Modificación',
            tooltip: I18n.menu.tooltip.modificacion,
            iconCls: "icon-ingresar-modificacion",
            handler: this.onIngresarModificacion
        }, {
            permiso: Permiso.INGRESAR_ALZAMIENTO,
            text: 'Nuevo Alzamiento',
            tooltip: I18n.menu.tooltip.alzamiento,
            iconCls: "icon-ingresar-alzamiento",
            handler: this.onIngresarAlzamiento
        }, {
            permiso: Permiso.OAI_INGRESAR_INSCRIPCION,
            text: 'Nueva Inscripcion',
            tooltip: I18n.menu.tooltip.inscripcion,
            iconCls: "icon-ingresar-inscripcion",
            handler: this.onIngresarInscripcionOAI
        }, {
            permiso: Permiso.OAI_INGRESAR_MODIFICACION,
            text: 'Nueva Modificación',
            tooltip: I18n.menu.tooltip.modificacion,
            iconCls: "icon-ingresar-modificacion",
            handler: this.onIngresarModificacionOAI
        }, {
            permiso: Permiso.OAI_INGRESAR_ALZAMIENTO,
            text: 'Nuevo Alzamiento',
            tooltip: I18n.menu.tooltip.alzamiento,
            iconCls: "icon-ingresar-alzamiento",
            handler: this.onIngresarAlzamientoOAI
        }, {
            permiso: Permiso.INGRESAR_ANOTACION,
            text: 'Ingresar Anotación',
            tooltip: I18n.menu.tooltip.anotacion,
            iconCls: "icon-ingresar-anotacion",
            handler: this.onIngresarAnotacion
        }, {
            permiso: Permiso.RECEPCIONAR,
            text: 'Recepcionar',
            tooltip: I18n.menu.tooltip.recepcionar,
            iconCls: "icon-recepcionar",
            handler: this.onRecepcionar
        }, {
            permiso: Permiso.VER_INFORME_RECAUDACION,
            text: I18n.menu.title.informeRecaudacion,
            tooltip: I18n.menu.tooltip.informeRecaudacion,
            iconCls: 'icon-informe',
            handler: this.onInformeRecaudacion
        }, {
            permiso: Permiso.VER_INFORME_RECAUDACION_MASIVO,
            text: I18n.menu.title.informeRecaudacionMasivo,
            tooltip: I18n.menu.tooltip.informeRecaudacionMasivo,
            iconCls: 'icon-informe',
            handler: this.onInformeRecaudacionMasivo
        }, {
            permiso: Permiso.BUSCAR_ACTUACION_NOTARIA,
            text: 'Buscador',
            tooltip: I18n.menu.tooltip.busqueda,
            iconCls: 'icon-buscar',
            handler: this._onBuscadorActuacionNotaria
        }, {
            permiso: Permiso.BUSCAR_ACTUACION_UP,
            text: 'Buscador',
            tooltip: I18n.menu.tooltip.busqueda,
            iconCls: 'icon-buscar',
            handler: this._onBuscadorActuacionUP
        }, {
            permiso: Permiso.OAI_BUSCAR_ACTUACION,
            text: 'Buscador',
            tooltip: I18n.menu.tooltip.busqueda,
            iconCls: 'icon-buscar',
            handler: this._onBuscadorActuacionOAI
        }, {
            permiso: Permiso.ACEPTAR_ACTUACION_RECHAZADA,
            text: 'Aceptar Act. Rechazada',
            tooltip: I18n.menu.tooltip.aceptarRechazada,
            iconCls: 'icon-aceptar-rechazada',
            handler: this._onAceptarActuacionRechazada
        }, {
            permiso: Permiso.RECHAZAR_ACTUACION_VIGENTE,
            text: 'Rechazar Act. Vigente',
            tooltip: I18n.menu.tooltip.rechazarAceptada,
            iconCls: 'icon-rechazar-vigente',
            handler: this._onRechazarActuaciondVigente
        }, {
            permiso: Permiso.ASIGNAR_TAREAS,
            text: I18n.menu.options.asignarTareas,
            tooltip: I18n.menu.tooltip.asignarTareas,
            iconCls: 'icon-asignar-tareas',
            handler: this._onAsignarTareas
        }, {
            permiso: Permiso.QUITAR_TAREAS,
            text: I18n.menu.options.quitarTareas,
            tooltip: I18n.menu.tooltip.quitarTareas,
            iconCls: 'icon-quitar-tareas',
            handler: this._onQuitarTareas
        }];
    },
    getFiltredMenuItems: function () {
        var actions = new Array();
        var items = this.getItems();
        for (i = 0; i < items.length; ++i) {
            var item = items[i];
            if (model.user.Usuario.tienePermiso(item.permiso)) {
                actions.push(item);
            }
        };
        return {
            actions: actions
        };
    },
    onListadoTareas: function () {
        Srp.Canvas.updateContent(new Srp.gui.TareaGrid());
    },
    onIngresarInscripcion: function () {
        Srp.Canvas.updateContent(new Srp.gui.notaria.InscripcionWizard({
            itemId: 'content',
            losesChanges: true
        }));
    },
    onIngresarModificacion: function () {
        Srp.Canvas.updateContent(new Srp.gui.notaria.ModificacionWizard({
            itemId: 'content'
        }));
    },
    onIngresarAlzamiento: function () {
        Srp.Canvas.updateContent(new Srp.gui.notaria.AlzamientoWizard({
            itemId: 'content'
        }));
    },
    onIngresarInscripcionOAI: function () {
        Srp.Canvas.updateContent(new Srp.gui.oai.InscripcionWizard({
            itemId: 'content',
            losesChanges: true
        }));
    },
    onIngresarModificacionOAI: function () {
        Srp.Canvas.updateContent(new Srp.gui.oai.ModificacionWizard({
            itemId: 'content'
        }));
    },
    onIngresarAlzamientoOAI: function () {
        Srp.Canvas.updateContent(new Srp.gui.oai.AlzamientoWizard({
            itemId: 'content'
        }));
    },
    onIngresarAnotacion: function () {
        Srp.Canvas.updateContent(new Srp.gui.IngresoAnotacionPanel());
    },
    onRecepcionar: function () {
        Srp.Canvas.updateContent(new Srp.gui.ContratoRecepcionarPanel({
            itemId: 'content'
        }));
    },
    _onBuscadorActuacionNotaria: function () {
        Srp.Canvas.updateContent(new Srp.gui.BuscadorActuacionNotariaPanel());
    },
    _onBuscadorActuacionUP: function () {
        Srp.Canvas.updateContent(new Srp.gui.BuscadorActuacionUPPanel());
    },
    _onBuscadorActuacionOAI: function () {
        Srp.Canvas.updateContent(new Srp.gui.BuscadorActuacionOAIPanel());
    },
    onInformeRecaudacion: function () {
        Srp.Canvas.updateContent(new Srp.gui.InformeRecaudacionPanel());
    },
    onInformeRecaudacionMasivo: function () {
        Srp.Canvas.updateContent(new Srp.gui.InformeRecaudacionMasivoPanel());
    },
    _onAceptarActuacionRechazada: function () {
        Srp.Canvas.updateContent(new Srp.gui.AdminTaskAceptarActuacionRechazadaPanel());
    },
    _onRechazarActuaciondVigente: function () {
        Srp.Canvas.updateContent(new Srp.gui.AdminTaskRechazarActuacionVigentePanel());
    },
    _onAsignarTareas: function () {
        Srp.Canvas.updateContent(new Srp.gui.AsignarTareasGrid());
    },
    _onQuitarTareas: function () {
        Srp.Canvas.updateContent(new Srp.gui.QuitarTareasGrid());
    },
    onCrearNotaria: function () {
        Srp.Canvas.updateContent(new Srp.gui.IngresoOU({
            itemId: 'content',
            losesChanges: true
        }));
    }
});
Ext.ns('Srp.gui');
Srp.gui.BoxMenu = Ext.extend(Ext.Panel, {
    id: 'boxMenu',
    border: true,
    frame: true,
    titleCollapse: true,
    height: 150,
    hidden: true,
    initComponent: function () {
        Ext.apply(this, {
            title: I18n.menu.firma,
            items: [{
                xtype: 'box',
                itemId: 'applet-firma',
                id: 'applet-firma'
            }]
        });
        Srp.gui.BoxMenu.superclass.initComponent.call(this);
    },
    registrarEventos: function () {},
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.VersionMenu = Ext.extend(Ext.BoxComponent, {
    border: true,
    frame: true,
    titleCollapse: true,
    height: 20,
    html: I18n.mensajes.version.replace('%version', Srp.conf.Release.version),
    cls: 'version-menu'
});
Srp.gui.MensajeMenu = Ext.extend(Ext.BoxComponent, {
    border: true,
    id: 'boxCompMensajeMenu',
    frame: true,
    titleCollapse: true,
    height: 200,
    html: ' ',
    cls: 'mensaje-menu'
});
Ext.ns('Srp.gui');
Srp.gui.ClockBox = Ext.extend(Ext.BoxComponent, {
    border: true,
    frame: true,
    titleCollapse: true,
    height: 40,
    html: "Inicializando...",
    cls: 'clock-box',
    init: function () {
        var reloj = this;
        var task = {
            run: function () {
                reloj.update(new Date().format('d/m/Y H:i:s'));
            },
            interval: 1000
        };
        var runner = new Ext.util.TaskRunner();
        runner.start(task);
    }
});
Ext.ns('Srp.gui');
Srp.gui.InfoPanel = Ext.extend(Ext.Panel, {
    layout: 'border',
    border: false,
    height: 20,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.InfoPanel.superclass.initComponent.call(this);
    },
    onRender: function (ct, position) {
        Srp.gui.InfoPanel.superclass.onRender.call(this, ct, position);
        this.registrarEventos();
    },
    getUserTemplate: function () {
        var tpl = new Ext.Template('{user} ({username}) / {ouTipoPago} <span class="bold">{ouType}:</span> {ouName}');
        tpl.compile();
        return tpl;
    },
    buildItems: function () {
        var sectionTpl = this.getUserTemplate();
        var sectionEl = sectionTpl.apply({
            user: this.user,
            username: this.username,
            ouType: this.ouType,
            ouName: this.ouName
        });
        var items = [{
            itemId: 'sectionPanel',
            padding: '2px 2px 2px 5px',
            region: 'center',
            border: false,
            bodyCfg: {
                style: {
                    'background-color': '#d0def0',
                    'color': '#3764a0',
                    'font-weight': 'bold',
                    'font-size': '12px'
                }
            },
            html: this.section,
            xtype: 'panel'
        }, {
            itemId: 'userPanel',
            padding: 2,
            region: 'east',
            border: false,
            bodyCfg: {
                style: {
                    'color': '#15428b',
                    'background-color': '#d0def0',
                    'text-align': 'right',
                    'white-space': 'nowrap',
                    'font-size': '11px'
                }
            },
            width: 420,
            html: sectionEl,
            xtype: 'panel'
        }];
        return items;
    },
    setValues: function (s, u, t, n) {
        this.getComponent('sectionPanel').update(s);
        var sectionTpl = this.getUserTemplate();
        var sectionEl = sectionTpl.apply({
            user: u,
            ouType: t,
            ouName: n,
            ouTipoPago: ''
        });
        this.getComponent('userPanel').update(sectionEl);
    },
    setUserInfo: function (u, un, ou) {
        var tipoPago = '';
        if (ou.convenioPostPago == true) {
            tipoPago = '<span id="notariaTipoPago"><img src="./images/icons/medal_gold_3.png" width="10" heigth="10" title="' + I18n.mensajes.pagoPorConvenio + '"></img></span>';
        }
        var sectionTpl = this.getUserTemplate();
        var sectionEl = sectionTpl.apply({
            user: u,
            username: un,
            ouType: ou.tipo,
            ouName: ou.nombre,
            ouTipoPago: tipoPago
        });
        this.getComponent('userPanel').update(sectionEl);
    },
    setSection: function (title) {
        this.getComponent('sectionPanel').update(title);
    },
    registrarEventos: function () {
        actualizarTituloCmd = new Srp.command.ActualizarTituloSectionCmd();
        actualizarTituloCmd.setParameter('panel', this);
        actualizarUsuarioCmd = new Srp.command.ActualizarUsuarioCmd();
        actualizarUsuarioCmd.setParameter('panel', this);
        this.eventos = [{
            name: 'All.onChangeContent',
            command: actualizarTituloCmd
        }, {
            name: 'Usuario.onUserLoad',
            command: actualizarUsuarioCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.reg('infoPanel', Srp.gui.InfoPanel);
Ext.ns('Srp.gui');
Srp.gui.IngresoAnotacionPanel = Ext.extend(Ext.Panel, {
    border: false,
    plain: true,
    region: 'center',
    height: 600,
    padding: 5,
    autoScroll: true,
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.unidadPrendas.ingresoAnotacion);
        if (this.actuacion) {
            this.anotacion = this.actuacion;
        }
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildButtons()
        });
        Srp.gui.IngresoAnotacionPanel.superclass.initComponent.call(this);
        this.registrarEventos();
        if (this.actuacion) {
            this.setJSON(this.anotacion);
        }
    },
    buildItems: function () {
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'contratoBuscador',
            itemId: 'contratoBuscador',
            showButtonVerContrato: true,
            width: '93%'
        },
        this.buildSolicitanteFieldset(), this.buildAnotacionFieldset()];
        return items;
    },
    onSolicitante: function (cmb, rec, idx) {
        this.showSolicitante(rec.get('id'));
    },
    showSolicitante: function (tipoSolicitante) {
        var solitanteFieldset = this.getComponent('solitanteFieldset');
        solitanteFieldset.getComponent('tribunal').hide();
        solitanteFieldset.getComponent('sindico').hide();
        solitanteFieldset.getComponent('solicitanteOtro').hide();
        switch (tipoSolicitante) {
            case TIPO_SOLICITANTE_TRIBUNAL:
                solitanteFieldset.getComponent('tribunal').show();
                break;
            case TIPO_SOLICITANTE_SINDICO:
                solitanteFieldset.getComponent('sindico').show();
                break;
            case TIPO_SOLICITANTE_OTRO:
                solitanteFieldset.getComponent('solicitanteOtro').show();
                break;
        }
    },
    buildSolicitanteFieldset: function () {
        var items = [{
            xtype: 'categoryComboBox',
            fieldLabel: I18n.unidadPrendas.tipoSolicitante,
            categoryType: Srp.CategoryManager.TIPO_SOLICITANTE,
            itemId: 'tipoSolitante',
            listeners: {
                scope: this,
                'select': this.onSolicitante
            }
        }, {
            xtype: 'categoryComboBox',
            fieldLabel: I18n.unidadPrendas.tribunal,
            categoryType: Srp.CategoryManager.TRIBUNAL,
            itemId: 'tribunal',
            hidden: true
        }, {
            fieldLabel: I18n.unidadPrendas.sindico,
            name: 'sindico',
            hidden: true,
            xtype: 'textfield',
            itemId: 'sindico'
        }, {
            fieldLabel: I18n.unidadPrendas.descripcion,
            name: 'solicitanteOtro',
            xtype: 'textfield',
            itemId: 'solicitanteOtro',
            hidden: true
        }, {
            fieldLabel: I18n.unidadPrendas.docReferencia,
            name: 'docReferencia',
            itemId: 'docReferencia'
        }];
        var solicitanteFieldset = {
            xtype: 'fieldset',
            title: I18n.unidadPrendas.solicitante,
            autoHeight: true,
            defaults: {
                width: 300
            },
            defaultType: 'textfield',
            items: items,
            itemId: 'solitanteFieldset',
            hidden: true
        };
        return solicitanteFieldset;
    },
    buildAnotacionFieldset: function () {
        var items = [{
            xtype: 'categoryComboBox',
            fieldLabel: I18n.unidadPrendas.tipoAnotacion,
            categoryType: Srp.CategoryManager.TIPO_ANOTACION,
            itemId: 'tipoAnotacion',
            listeners: {
                scope: this,
                'select': this.onAnotacion
            }
        }, {
            fieldLabel: I18n.unidadPrendas.anotacion,
            name: 'anotacionTipoOtro',
            hidden: true,
            xtype: 'textfield',
            itemId: 'anotacionTipoOtro'
        }, {
            fieldLabel: I18n.unidadPrendas.descripcion,
            name: 'anotacionDescripcion',
            xtype: 'textfield',
            itemId: 'anotacionDescripcion'
        }];
        var anotacionFieldset = {
            xtype: 'fieldset',
            title: I18n.unidadPrendas.anotacion,
            autoHeight: true,
            defaults: {
                width: 310
            },
            items: items,
            itemId: 'anotacionFieldset',
            hidden: true
        };
        return anotacionFieldset;
    },
    onAnotacion: function (cmb, rec, idx) {
        this.showTipoAnotacion(rec.get('id'));
    },
    showTipoAnotacion: function (tipoAnotacion) {
        var anotacionTipoOtro = this.getComponent('anotacionFieldset').getComponent('anotacionTipoOtro');
        if (tipoAnotacion == TIPO_ANOTACION_OTRA) {
            anotacionTipoOtro.show();
        } else {
            anotacionTipoOtro.hide();
        }
    },
    getJSON: function () {
        var contratoBuscador = this.getComponent('contratoBuscador');
        var actuacion = contratoBuscador.actuacion;
        var anotacion = {};
        anotacion.accionTipo = TIPO_ACCION_ANOTACION_AL_MARGEN;
        if (actuacion) {
            anotacion.nodeidref = actuacion.nodeid;
        }
        if (this.anotacion) {
            anotacion.taskid = this.anotacion.taskid;
            anotacion.nodeid = this.anotacion.nodeid;
        }
        var solitanteFieldset = this.getComponent('solitanteFieldset');
        anotacion.solicitanteTipo = solitanteFieldset.getComponent('tipoSolitante').getValue();
        switch (anotacion.solicitanteTipo) {
            case TIPO_SOLICITANTE_TRIBUNAL:
                anotacion.solicitante = solitanteFieldset.getComponent('tribunal').getValue();
                break;
            case TIPO_SOLICITANTE_SINDICO:
                anotacion.solicitante = solitanteFieldset.getComponent('sindico').getValue();
                break;
            case TIPO_SOLICITANTE_OTRO:
                anotacion.solicitante = solitanteFieldset.getComponent('solicitanteOtro').getValue();
                break;
        }
        anotacion.accionReferencia = solitanteFieldset.getComponent('docReferencia').getValue();
        var anotacionFieldset = this.getComponent('anotacionFieldset');
        anotacion.anotacionTipo = anotacionFieldset.getComponent('tipoAnotacion').getValue();
        switch (anotacion.anotacionTipo) {
            case TIPO_ANOTACION_OTRA:
                anotacion.otraDescripcion = anotacionFieldset.getComponent('anotacionTipoOtro').getValue();
                break;
        }
        anotacion.accionDescripcion = anotacionFieldset.getComponent('anotacionDescripcion').getValue();
        return anotacion;
    },
    setJSON: function (anotacion) {
        this.anotacion = anotacion;
        var contratoBuscador = this.getComponent('contratoBuscador');
        contratoBuscador.setActuacion({
            nodeid: this.anotacion.inscripcionNodeId,
            taskid: this.anotacion.taskid
        });
        var solitanteFieldset = this.getComponent('solitanteFieldset');
        solitanteFieldset.getComponent('tipoSolitante').setValue(anotacion.solicitanteTipo);
        this.showSolicitante(anotacion.solicitanteTipo);
        switch (anotacion.solicitanteTipo) {
            case TIPO_SOLICITANTE_TRIBUNAL:
                solitanteFieldset.getComponent('tribunal').setValue(anotacion.solicitante);
                break;
            case TIPO_SOLICITANTE_SINDICO:
                solitanteFieldset.getComponent('sindico').setValue(anotacion.solicitante);
                break;
            case TIPO_SOLICITANTE_OTRO:
                solitanteFieldset.getComponent('solicitanteOtro').setValue(anotacion.solicitante);
                break;
        }
        solitanteFieldset.getComponent('docReferencia').setValue(anotacion.accionReferencia);
        var anotacionFieldset = this.getComponent('anotacionFieldset');
        anotacionFieldset.getComponent('tipoAnotacion').setValue(anotacion.anotacionTipo);
        this.showTipoAnotacion(anotacion.anotacionTipo);
        switch (anotacion.anotacionTipo) {
            case TIPO_ANOTACION_OTRA:
                anotacionFieldset.getComponent('anotacionTipoOtro').setValue(anotacion.otraDescripcion);
                break;
        }
        anotacionFieldset.getComponent('anotacionDescripcion').setValue(anotacion.accionDescripcion);
        this.getComponent('contratoBuscador').setJSON(anotacion.contratoInscripcion);
    },
    isValid: function (typeValidation) {
        var isValidContratoBuscador = this.getComponent('contratoBuscador').isValid();
        if (typeValidation == TIPO_VALIDACION_ENVIAR_A_APROBACION) {
            var solitanteFieldset = this.getComponent('solitanteFieldset');
            solitanteFieldset.getComponent('tipoSolitante').mandatory = true;
            var isValidTipoSolitante = solitanteFieldset.getComponent('tipoSolitante').isValid()
            var isValidSolicitanteValue = false;
            if (isValidTipoSolitante) {
                var solicitanteTipo = solitanteFieldset.getComponent('tipoSolitante').getValue();
                switch (solicitanteTipo) {
                    case TIPO_SOLICITANTE_TRIBUNAL:
                        solitanteFieldset.getComponent('tribunal').mandatory = true;
                        var isValidSolicitanteValue = solitanteFieldset.getComponent('tribunal').isValid();
                        break;
                    case TIPO_SOLICITANTE_SINDICO:
                        solitanteFieldset.getComponent('sindico').mandatory = true;
                        var isValidSolicitanteValue = solitanteFieldset.getComponent('sindico').isValid();
                        break;
                    case TIPO_SOLICITANTE_OTRO:
                        solitanteFieldset.getComponent('solicitanteOtro').mandatory = true;
                        var isValidSolicitanteValue = solitanteFieldset.getComponent('solicitanteOtro').isValid();
                        break;
                }
            }
            solitanteFieldset.getComponent('docReferencia').mandatory = true;
            var isValidDocReferencia = solitanteFieldset.getComponent('docReferencia').isValid();
            var anotacionFieldset = this.getComponent('anotacionFieldset');
            anotacionFieldset.getComponent('tipoAnotacion').mandatory = true;
            var isValidTipoAnotacion = anotacionFieldset.getComponent('tipoAnotacion').isValid();
            if (isValidTipoAnotacion) {
                var anotacionTipo = anotacionFieldset.getComponent('tipoAnotacion').getValue();
                switch (anotacionTipo) {
                    case TIPO_ANOTACION_OTRA:
                        anotacionFieldset.getComponent('anotacionTipoOtro').mandatory = true;
                        var isValidAnotacionTipoOtro = anotacionFieldset.getComponent('anotacionTipoOtro').isValid();
                        break;
                    default:
                        var isValidAnotacionTipoOtro = true;
                }
            }
            return isValidContratoBuscador && isValidTipoSolitante && isValidSolicitanteValue && isValidDocReferencia && isValidTipoAnotacion && isValidAnotacionTipoOtro;
        } else {
            return isValidContratoBuscador;
        }
    },
    registrarEventos: function () {
        habilitarWizardCmd = new Srp.command.HabilitarModificacionWizardCmd();
        habilitarWizardCmd.setParameter('wizard', this);
        deshabilitarWizardCmd = new Srp.command.DeshabilitarModificacionWizardCmd();
        deshabilitarWizardCmd.setParameter('wizard', this);
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('urlWs', 'WS_ANOTACION_SAVE');
        saveActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd.setParameter('saveForm', this.getComponent('saveFormPanel'));
        removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onSetActuacion',
            command: habilitarWizardCmd
        }, {
            name: 'onUnSetActuacion',
            command: deshabilitarWizardCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    buildButtons: function () {
        var buttons = [];
        buttons.push({
            text: I18n.commons.enviarAprobacion,
            scope: this,
            handler: this.onEnviarAprobacion,
            iconCls: 'icon-button-enviar-aprobacion'
        });
        buttons.push({
            xtype: 'tbfill'
        });
        buttons.push({
            text: I18n.notaria.actuacion.wizard.button.grabarYSalir,
            scope: this,
            handler: this.onSaveActuacion,
            iconCls: 'icon-save'
        });
        buttons.push('-');
        buttons.push({
            text: I18n.commons.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        });
        return buttons;
    },
    onCancelar: function () {
        Srp.Canvas.goHome();
    },
    onSaveActuacion: function () {
        var actions = ['onValidateAccion', 'onSave', 'onGetTaskId', 'onTakeTask', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            typeValidation: TIPO_VALIDACION_GRABAR
        });
    },
    onEnviarAprobacion: function () {
        var actions = ['onValidateAccion', 'onSave', 'onGetTaskId', 'onEnviarAprobacion', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            typeValidation: TIPO_VALIDACION_ENVIAR_A_APROBACION
        });
    },
    enablePanels: function () {
        this.getComponent('solitanteFieldset').show();
        this.getComponent('anotacionFieldset').show();
    },
    hidePanels: function () {
        this.getComponent('solitanteFieldset').hide();
        this.getComponent('anotacionFieldset').hide();
    }
});
Ext.ns('Srp.gui');
Srp.gui.ContratantesPanel = Ext.extend(Ext.Panel, {
    region: 'center',
    layout: 'border',
    border: false,
    initComponent: function () {
        var config = {
            items: this.buildItems()
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ContratantesPanel.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var acreedorTab = this.buildAcreedorPanel();
        var constituyenteTab = new Srp.gui.ContratanteTab({
            id: 'constituyenteTab',
            title: I18n.common.contratantes.constituyente,
            itemId: 'constituyenteTab',
            contratante: 'constituyente',
            contratanteCopia: 'deudor'
        });
        var deudorTab = new Srp.gui.ContratanteTab({
            id: 'deudorTab',
            title: I18n.common.contratantes.deudor,
            itemId: 'deudorTab',
            contratante: 'deudor',
            contratanteCopia: 'constituyente'
        });
        return [new Ext.TabPanel({
            itemId: 'tabPanel',
            activeTab: 0,
            region: 'center',
            bodyStyle: "padding: 5px",
            border: false,
            items: [acreedorTab, constituyenteTab, deudorTab]
        })];
    },
    buildAcreedorPanel: function () {
        var acreedorFieldSet = new Srp.gui.CalidadFieldSet({
            actuacion: this.actuacion,
            contratanteName: 'acreedor',
            title: 'Nuevo Acreedor',
            border: true,
            validarUnicidadContratante: true
        });
        var comentariosRechazo = new Srp.gui.ComentarioRechazoFieldSet({
            itemId: 'comentariosRechazo'
        });
        return new Ext.Panel({
            itemId: 'acreedorPanel',
            items: [{
                xtype: 'saveFormPanel',
                itemId: 'saveFormPanel'
            },
            acreedorFieldSet, comentariosRechazo],
            title: I18n.notaria.actuacion.contratantes.acreedor
        });
    },
    getJSON: function () {
        var tabPanel = this.getComponent('tabPanel');
        var acreedorFieldSet = tabPanel.getComponent('acreedorPanel').getComponent('calidadFieldSet');
        var calidadFormPanel = acreedorFieldSet.getComponent('calidadFormPanel');
        var constituyentes = tabPanel.getComponent('constituyenteTab').getJSON();
        var deudores = tabPanel.getComponent('deudorTab').getJSON();
        var json = {};
        if (!Ext.isEmpty(constituyentes.rows)) {
            json.constituyentes = constituyentes.rows;
        }
        if (!Ext.isEmpty(deudores)) {
            json.deudores = deudores.rows;
        }
        var acreedorJSON = acreedorFieldSet.getJSON();
        if (calidadFormPanel.getForm().isDirty() || !(acreedorJSON == null)) {
            var counter = 0;
            for (key in acreedorJSON) {
                counter += 1;
            }
            if (acreedorJSON != null && counter > 1) {
                util.JSON.addItems(json, {
                    acreedor: acreedorJSON
                });
            }
        }
        json.contratantesModificados = calidadFormPanel.getForm().isDirty() || deudores.dirty || constituyentes.dirty;
        return json;
    },
    setJSON: function (actuacion) {
        if (actuacion.acreedor) {
            this.getComponent('tabPanel').getComponent('acreedorPanel').getComponent('calidadFieldSet').setJSON(actuacion.acreedor);
        }
        if (actuacion.comentariorechazonotario) {
            this.getComponent('tabPanel').getComponent('acreedorPanel').getComponent('comentariosRechazo').setJSON(actuacion.comentariorechazonotario);
        }
        if (actuacion.constituyentes.length > 0) {
            this.getComponent('tabPanel').getComponent('constituyenteTab').setJSON(actuacion.constituyentes);
        }
        if (actuacion.deudores.length > 0) {
            this.getComponent('tabPanel').getComponent('deudorTab').setJSON(actuacion.deudores);
        }
    },
    isValid: function (validationType) {
        var validation = true;
        var tabPanel = this.getComponent('tabPanel');
        var acreedorFieldSet = tabPanel.getComponent('acreedorPanel').getComponent('calidadFieldSet');
        var isValidConstituyentes = tabPanel.getComponent('constituyenteTab').isValid(validationType);
        var isValidDeudores = tabPanel.getComponent('deudorTab').isValid(validationType);
        var isValidAcreedor = acreedorFieldSet.isValid(validationType);
        if (validationType == TIPO_VALIDACION_GRABAR) {
            validation = isValidAcreedor && isValidConstituyentes && isValidDeudores;
        } else {
            validation = isValidAcreedor && isValidConstituyentes && isValidDeudores;
        }
        var erroresContratantesList = []
        if (!isValidAcreedor) {
            erroresContratantesList.push('Acreedor');
        }
        if (!isValidConstituyentes) {
            erroresContratantesList.push('Constituyentes');
        }
        if (!isValidDeudores) {
            erroresContratantesList.push('Deudores');
        }
        var erroresContratantes = {
            parent: 'Contratantes',
            children: erroresContratantesList
        };
        Srp.MessagesManager.add(erroresContratantes);
        return validation;
    }
});
Srp.gui.ContratantesPanel.checkNewContratante = function () {
    var identificador = this.getValue();
    var tabPanel = Ext.getCmp('ingreso-wizard').getComponent('contratantesPanel').getComponent('tabPanel');
    var calidadFormPanel = tabPanel.getComponent('acreedorPanel').getComponent('calidadFieldSet').getComponent('calidadFormPanel');
    var acreedorField = calidadFormPanel.find('name', 'identificador')[0];
    if (!Ext.isDefined(acreedorField)) {
        return false;
    }
    var acreedorFieldPais = '';
    acreedorFieldPaisValue = '';
    if (acreedorField.calidadId == CALIDAD_EXTRANJERA) {
        var acreedorFieldPais = calidadFormPanel.getComponent('extranjero').getComponent('rightColumn').getComponent('pais');
        acreedorFieldPaisValue = calidadFormPanel.getComponent('extranjero').getComponent('rightColumn').getComponent('pais').getValue();
    }
    var constituyentesGrid = tabPanel.getComponent('constituyenteTab').getComponent('contratanteGridPanel').getComponent('contratanteGrid');
    var deudoresGrid = tabPanel.getComponent('deudorTab').getComponent('contratanteGridPanel').getComponent('contratanteGrid');
    if (this.contratanteName == 'acreedor') {
        var c = constituyentesGrid.isConstituyenteInGrid(this.calidadId, identificador, acreedorFieldPaisValue);
        var d = deudoresGrid.isConstituyenteInGrid(this.calidadId, identificador, acreedorFieldPaisValue);
        if (c || d) {
            this.markInvalid(I18n.vtype.contratanteIngresado);
            if (this.calidadId == CALIDAD_EXTRANJERA) {
                acreedorFieldPais.markInvalid(I18n.vtype.contratanteIngresado);
            }
            return true;
        }
    } else {
        if (typeof (acreedorField) !== 'undefined' && (this.contratanteName === 'constituyente' || this.contratanteName === 'deudor')) {
            if (this.calidadId == CALIDAD_EXTRANJERA) {
                var contratantePais = '';
                var targetFieldPais;
                if (this.contratanteName === 'constituyente') {
                    var constituyentesFormPanel = Ext.getCmp('calidad_fieldset_constituyente').getComponent('calidadFormPanel');
                    var constituyentesContainer = constituyentesFormPanel.getComponent('extranjero');
                    contratantePais = constituyentesContainer.getComponent('rightColumn').getComponent('pais');
                } else {
                    if (this.contratanteName === 'deudor') {
                        var deudoresFormPanel = Ext.getCmp('calidad_fieldset_deudor').getComponent('calidadFormPanel');
                        var deudoresContainer = deudoresFormPanel.getComponent('extranjero');
                        contratantePais = deudoresContainer.getComponent('rightColumn').getComponent('pais');
                    }
                }
                if (acreedorField.calidadId == CALIDAD_EXTRANJERA) {
                    if (acreedorField.getValue() === identificador && acreedorFieldPais.getValue() == contratantePais.getValue()) {
                        this.markInvalid(I18n.vtype.contratanteIngresado);
                        contratantePais.markInvalid(I18n.vtype.contratanteIngresado);
                        return true;
                    }
                }
            } else {
                if (acreedorField.calidadId != CALIDAD_EXTRANJERA) {
                    if (acreedorField.getValue() === identificador) {
                        this.markInvalid(I18n.vtype.contratanteIngresado);
                        return true;
                    }
                }
            }
        }
    }
    return false;
};
Ext.ns('Srp.gui');
Srp.gui.ContratoBuscadorPanel = Ext.extend(Ext.form.FieldSet, {
    title: I18n.notaria.modificacion.wizard.title.contratoInscripcion,
    defaultType: 'textfield',
    showButtonVerContrato: false,
    esInscripcionValida: false,
    filtrarInscripcionVigente: false,
    border: true,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.ContratoBuscadorPanel.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    enableButton: function () {
        if (this.showButtonVerContrato) {
            Ext.getCmp('verContratoButton').enable();
        }
    },
    disableButton: function () {
        if (this.showButtonVerContrato) {
            Ext.getCmp('verContratoButton').disable();
        }
    },
    onVerContrato: function () {
        verContratoWindow = new Srp.gui.VerContratoWindow({
            actuacion: this.actuacion
        });
        verContratoWindow.show();
    },
    buildForm: function () {
        var items = [{
            layout: 'form',
            border: false,
            flex: 3,
            itemId: 'firstColumn',
            labelWidth: 140,
            items: [{
                fieldLabel: I18n.unidadPrendas.nRepertorio,
                name: 'numeroRepertorio',
                id: 'numeroRepertorioPrendas',
                xtype: 'numeroRepertorioPrendasfield',
                allowBlank: false
            }, {
                xtype: 'hidden',
                name: 'nodeid',
                itemId: 'nodeid'
            }]
        }, {
            layout: 'form',
            border: false,
            flex: 2,
            labelWidth: 50,
            items: [{
                fieldLabel: I18n.unidadPrendas.agno,
                name: 'agnoRepertorio',
                id: 'agno',
                xtype: 'agnofield',
                itemId: 'agno',
                allowBlank: false
            }]
        }]
        return items;
    },
    buildItems: function () {
        var items = this.buildForm();
        var buttons = this.buildButtons();
        if (buttons.length > 0) {
            items.push({
                border: false,
                flex: 1,
                items: buttons
            });
        }
        this.formPanelContrato = new Ext.form.FormPanel({
            items: items,
            layout: 'hbox',
            border: false,
            itemId: 'contratoBuscadorFormPanel'
        });
        var listenersMessageBox = this.buildListerners();
        return [this.formPanelContrato, {
            xtype: 'panel',
            border: false,
            items: [{
                xtype: 'box',
                id: 'messageBox',
                itemId: 'messageBox',
                listeners: listenersMessageBox
            }]
        }];
    },
    buildButtons: function () {
        var buttonItems = [];
        buttonItems.push({
            text: I18n.commons.buscar,
            scope: this,
            handler: this.onBuscarActuacion,
            id: 'buscarActuacionButton',
            xtype: 'button'
        });
        if (this.showButtonVerContrato) {
            buttonItems.push({
                disabled: true,
                text: I18n.unidadPrendas.button.verContrato,
                scope: this,
                handler: this.onVerContrato,
                id: 'verContratoButton',
                xtype: 'button'
            });
        }
        return buttonItems;
    },
    buildListerners: function () {
        return {
            scope: this,
            afterrender: this.onAfterRender
        };
    },
    onAfterRender: function (cmp) {
        this.setMessage(this.estado);
    },
    setActuacion: function (actuacion) {
        Log4js.debug("ContratoBuscadorPanel.setActuacion()");
        this.actuacion = actuacion;
        this.getComponent('contratoBuscadorFormPanel').getForm().setValues(actuacion);
        this.getComponent('contratoBuscadorFormPanel').getForm().setValues({
            numeroRepertorioPrendas: actuacion.numeroRepertorio,
            agno: actuacion.agnoRepertorio
        });
    },
    getActuacion: function () {
        return this.actuacion;
    },
    getJSON: function () {
        var obj = this.getComponent('contratoBuscadorFormPanel').getForm().getFieldValues();
        return obj;
    },
    isValid: function () {
        return this.getComponent('contratoBuscadorFormPanel').getForm().isValid() && this.esInscripcionValida;
    },
    setJSON: function (actuacion) {
        var contratoInscripcion = actuacion.contratoInscripcion;
        if (Ext.isDefined(actuacion.constituyentes) && actuacion.constituyentes.length > 0) {
            contratoInscripcion.idConstituyente = actuacion.constituyentes[0].identificador;
            Ext.getCmp('idConstituyente').setReadOnly(true);
        }
        Log4js.debug("ContratoBuscadorPanel.setJSON()");
        this.getComponent('contratoBuscadorFormPanel').getForm().setValues(contratoInscripcion);
        this.onBuscarActuacionByNodeId(contratoInscripcion);
        Ext.getCmp('agno').setReadOnly(true);
        Ext.getCmp('numeroRepertorioPrendas').setReadOnly(true);
        Ext.getCmp('buscarActuacionButton').disable();
        this.pactuacion = actuacion;
    },
    doValidationActuacion: function (actuacion) {
        var success = false;
        var type;
        var message;
        if (!Ext.isDefined(actuacion.nodeid)) {
            type = ACTUACION_NO_ENCONTRADA;
            message = I18n.mensajes.inscripcionNoEncontrada;
        } else if (util.isRVMValid(actuacion)) {
            if (this.filtrarInscripcionVigente == false || (actuacion.estado == 'VIGENTE' && actuacion.tipoActuacion == TIPO_ACTUACION_INSCRIPCION)) {
                success = true;
            } else {
                type = ACTUACION_NO_ENCONTRADA;
                message = I18n.mensajes.inscripcionNoEncontrada;
                if (actuacion.nodeid) {
                    if (actuacion.tipoActuacion != TIPO_ACTUACION_INSCRIPCION) {
                        switch (actuacion.tipoActuacion) {
                            case TIPO_ACTUACION_MODIFICACION:
                                message = I18n.mensajes.actuacionDeModificacion;
                                break;
                            case TIPO_ACTUACION_ALZAMIENTO:
                                message = I18n.mensajes.actuacionDeAlzamiento;
                                break;
                        }
                    } else {
                        switch (actuacion.estado) {
                            case TIPO_ESTADO_ACTUACION_PENDIENTE:
                                message = I18n.mensajes.inscripcionPendiente;
                                break;
                            case TIPO_ESTADO_ACTUACION_ALZADA:
                                message = I18n.mensajes.inscripcionAlzada;
                                break;
                        }
                    }
                }
            }
        } else {
            type = ACTUACION_NO_ENCONTRADA;
            message = I18n.mensajes.problemasComunicacion;
        }
        return {
            success: success,
            type: type,
            message: message
        };
    },
    processActuacion: function (actuacion) {
        var validationActuacion = this.doValidationActuacion(actuacion);
        if (validationActuacion.success) {
            this.actuacion = actuacion;
            if (this.isReadOnlyMode()) {
                this.goEditActuacion();
            } else {
                Srp.FrontController.fireEvent('onLoadSolicitudPendiente', actuacion);
            }
        } else {
            Log4js.debug("Invalido");
            this.setMessage(validationActuacion.type, validationActuacion.message);
            this.disableButton();
            Srp.FrontController.fireEvent('onUnSetActuacion', actuacion);
        }
    },
    isReadOnlyMode: function () {
        return !this.filtrarInscripcionVigente || (Ext.isDefined(this.pactuacion) && Ext.isDefined(this.pactuacion.nodeid));
    },
    registrarEventos: function () {
        var buscarActuacionCmd = new Srp.command.BuscarActuacionCmd('CONTRATO_BUSCADOR_PANEL');
        buscarActuacionCmd.setParameter('fieldset', this);
        buscarActuacionCmd.setParameter('searchUltima', true);
        var recuperarActuacionCmd = new Srp.command.RecuperarActuacionCmd('CONTRATO_BUSCADOR_PANEL');
        recuperarActuacionCmd.setParameter('obj', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        var ValidarSolicitudesPendientesCmd = new Srp.command.ValidarSolicitudesPendientesCmd('CONTRATO_BUSCADOR_PANEL');
        ValidarSolicitudesPendientesCmd.setParameter('obj', this);
        ValidarSolicitudesPendientesCmd.setParameter('callBack', 'procesSolicitudesPendientes');
        this.eventos = [{
            name: 'onDatosContratoIngresados',
            command: buscarActuacionCmd
        }, {
            name: 'onLoadActuacion',
            command: recuperarActuacionCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onLoadSolicitudPendiente',
            command: ValidarSolicitudesPendientesCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    onBuscarActuacion: function (ev, obj) {
        if (this.getComponent('contratoBuscadorFormPanel').getForm().isValid()) {
            this.setMessage(ACTUACION_BUSCANDO, I18n.mensajes.inscripcionBuscando);
            Srp.FrontController.fireEvent('onDatosContratoIngresados', {
                nRepertorio: Ext.getCmp('numeroRepertorioPrendas').getValue(),
                agno: Ext.getCmp('agno').getValue(),
                buscarEnRVM: false
            });
        }
    },
    onBuscarActuacionByNodeId: function (filters) {
        this.estado = ACTUACION_BUSCANDO;
        Srp.FrontController.fireEvent('onDatosContratoIngresados', {
            nodeid: filters.nodeId
        });
    },
    procesSolicitudesPendientes: function (response) {
        if (!Ext.isDefined(response.result) || eval(response.result)) {
            this.setMessage(ACTUACION_NO_ENCONTRADA, this.getMessageSolicitudPendiente(response.solicitud));
            Srp.FrontController.fireEvent('onUnSetActuacion', this.actuacion);
            return;
        } else {
            this.goEditActuacion();
        }
    },
    goEditActuacion: function () {
        this.enableButton();
        this.setActuacion(this.actuacion);
        this.setMessage(ACTUACION_ENCONTRADA, I18n.mensajes.inscripcionEncontrada);
        Srp.FrontController.fireEvent('onSetActuacion', this.actuacion);
    },
    getMessageSolicitudPendiente: function (solicitud) {
        var message = I18n.mensajes.error.actuacionSolicitudPendiente;
        for (property in solicitud) {
            if (Ext.isDefined(solicitud[property])) {
                message = message.replace('{' + property + '}', solicitud[property]);
            }
        }
        return message;
    },
    setMessage: function (type, message) {
        switch (type) {
            case ACTUACION_ENCONTRADA:
                this.esInscripcionValida = true;
                Ext.getCmp('messageBox').removeClass('msg-error');
                Ext.getCmp('messageBox').removeClass('msg-search');
                Ext.getCmp('messageBox').addClass('msg-feed');
                Ext.getCmp('messageBox').update(message);
                break;
            case ACTUACION_NO_ENCONTRADA:
                this.esInscripcionValida = false;
                Ext.getCmp('messageBox').removeClass('msg-feed');
                Ext.getCmp('messageBox').removeClass('msg-search');
                Ext.getCmp('messageBox').addClass('msg-error');
                Ext.getCmp('messageBox').update(message);
                break;
            case ACTUACION_BUSCANDO:
                this.esInscripcionValida = false;
                if (Ext.isDefined(Ext.getCmp('messageBox'))) {
                    Ext.getCmp('messageBox').removeClass('msg-feed');
                    Ext.getCmp('messageBox').removeClass('msg-error');
                    Ext.getCmp('messageBox').addClass('msg-search');
                    var mbEl = Ext.getCmp('messageBox').getEl();
                    mbEl.update(message);
                }
                break;
        }
    }
});
Ext.reg('contratoBuscador', Srp.gui.ContratoBuscadorPanel);
Ext.ns('Srp.gui');
Srp.gui.ContratSelectorInscripcionPanel = Ext.extend(Srp.gui.ContratoBuscadorPanel, {
    initComponent: function () {
        Ext.apply(this, {});
        Srp.gui.ContratSelectorInscripcionPanel.superclass.initComponent.call(this);
    },
    doValidationActuacion: function (actuacion) {
        var validation = Srp.gui.ContratSelectorInscripcionPanel.superclass.doValidationActuacion.call(this, actuacion);
        if (validation.success && !this.isReadOnlyMode()) {
            if (Ext.isDefined(actuacion.constituyentes) && actuacion.constituyentes.length > 0) {
                var idConstituyente = Ext.getCmp('idConstituyente').getValue();
                var matchConstituyente = false;
                for (i = 0; i < actuacion.constituyentes.length; ++i) {
                    var constituyente = actuacion.constituyentes[i];
                    if (idConstituyente.toUpperCase() == constituyente.identificador.toUpperCase()) {
                        matchConstituyente = true;
                        break;
                    }
                }
                if (!matchConstituyente) {
                    return {
                        success: false,
                        type: ACTUACION_NO_ENCONTRADA,
                        message: I18n.mensajes.inscripcionConstituyenteNoEncontrado
                    };
                }
            }
        }
        return validation;
    },
    buildForm: function () {
        var items = Srp.gui.ContratSelectorInscripcionPanel.superclass.buildForm.call(this);
        items.push({
            layout: 'form',
            border: false,
            flex: 4,
            labelWidth: 150,
            items: [{
                fieldLabel: I18n.unidadPrendas.idConstituyente,
                name: 'idConstituyente',
                id: 'idConstituyente',
                xtype: 'textfield',
                itemId: 'idConstituyente',
                allowBlank: false
            }]
        })
        return items;
    }
});
Ext.reg('contratoSelectorInscripcion', Srp.gui.ContratSelectorInscripcionPanel);
Ext.ns('Srp.gui');
Srp.gui.ContratoModificacionPanel = Ext.extend(Ext.form.FieldSet, {
    title: 'Modificación',
    defaultType: 'textfield',
    autoHeight: true,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.ContratoModificacionPanel.superclass.initComponent.call(this);
    },
    showPanels: function (tipoModificacion) {
        Ext.getCmp('alzamientoParcialFieldset').hide();
        Ext.getCmp('cambioAcreedorFieldSet').hide();
        Ext.getCmp('prohibicionActoFieldset').hide();
        Ext.getCmp('otroDescripcion').hide();
        switch (tipoModificacion) {
            case TIPO_MODIFICACION_ALZAMIENTO_PARCIAL:
                Ext.getCmp('alzamientoParcialFieldset').show();
                break;
            case TIPO_MODIFICACION_CAMBIO_ACREEDOR:
                Ext.getCmp('cambioAcreedorFieldSet').show();
                Ext.getCmp('nuevoAcreedorFieldSet').doLayout();
                break;
            case TIPO_MODIFICACION_PROHIBICION_ACTO:
                Ext.getCmp('prohibicionActoFieldset').show();
                break;
            case TIPO_MODIFICACION_OTRO:
                Ext.getCmp('otroDescripcion').show();
                break;
        }
    },
    onChangeTipoModificacion: function (cmb, rec, idx) {
        this.showPanels(rec.get('id'));
    },
    buildItems: function () {
        var items = [{
            xtype: 'categoryComboBox',
            fieldLabel: I18n.notaria.modificacion.wizard.tipoModificacion,
            categoryType: Srp.CategoryManager.TIPO_MODIFICACION_CONTRATO,
            itemId: 'tipoModificacion',
            listeners: {
                scope: this,
                'select': this.onChangeTipoModificacion
            }
        }, {
            xtype: 'fieldset',
            hidden: true,
            title: 'Anotaciones al RVM',
            id: 'alzamientoParcialFieldset',
            itemId: 'alzamientoParcialFieldset',
            items: [{
                xtype: 'ppuAlzamientoParcialGrid',
                id: 'ppuAlzamientoParcialGrid',
                itemId: 'ppuAlzamientoParcialGrid'
            }]
        }, {
            xtype: 'container',
            id: 'cambioAcreedorFieldSet',
            itemId: 'cambioAcreedorFieldSet',
            hidden: true,
            items: [{
                xtype: 'calidadFieldSet',
                itemId: 'nuevoAcreedorFieldSet',
                id: 'nuevoAcreedorFieldSet',
                title: 'Nuevo Acreedor'
            }, {
                xtype: 'fieldset',
                id: 'ppuCambioAcreedorFieldset',
                title: 'Anotaciones al RVM',
                items: [{
                    xtype: 'ppuCambioAcreedorGrid',
                    id: 'ppuCambioAcreedorGrid',
                    itemId: 'ppuCambioAcreedorGrid'
                }]
            }]
        }, {
            xtype: 'fieldset',
            title: 'Anotaciones al RVM',
            id: 'prohibicionActoFieldset',
            hidden: true,
            items: [{
                xtype: 'ppuProhibicionActoGrid',
                id: 'ppuProhibicionActoGrid'
            }]
        }, {
            xtype: 'textfield',
            hidden: 'hidden',
            id: 'otroDescripcion',
            fieldLabel: 'Descripción',
            itemId: 'otroDescripcion',
            name: 'otroDescripcion',
            width: 400
        }];
        return items;
    },
    getJSON: function () {
        var modificacion = {};
        var tipoModificacion = this.getComponent('tipoModificacion').getValue();
        modificacion['tipoModificacion'] = tipoModificacion;
        switch (tipoModificacion) {
            case TIPO_MODIFICACION_ALZAMIENTO_PARCIAL:
                var alzamientoParcialFieldset = this.getComponent('alzamientoParcialFieldset');
                modificacion['vehiculos'] = alzamientoParcialFieldset.getComponent('ppuAlzamientoParcialGrid').getJSON();
                break;
            case TIPO_MODIFICACION_CAMBIO_ACREEDOR:
                var cambioAcreedorlFieldset = this.getComponent('cambioAcreedorFieldSet');
                var acreedor = cambioAcreedorlFieldset.getComponent('nuevoAcreedorFieldSet').getJSON();
                if (acreedor != null) {
                    modificacion['acreedor'] = acreedor;
                }
                modificacion['vehiculos'] = cambioAcreedorlFieldset.getComponent('ppuCambioAcreedorFieldset').getComponent('ppuCambioAcreedorGrid').getJSON();
                break;
            case TIPO_MODIFICACION_PROHIBICION_ACTO:
                var prohibicionActoFieldset = this.getComponent('prohibicionActoFieldset');
                modificacion['vehiculos'] = prohibicionActoFieldset.getComponent('ppuProhibicionActoGrid').getJSON();
                break;
            case TIPO_MODIFICACION_OTRO:
                modificacion['otroDescripcion'] = this.getComponent('otroDescripcion').getValue();
                break;
        }
        if (this.actuacion) {
            modificacion.vehiculos = this.setVehiculosNodeId(modificacion.vehiculos);
            if (tipoModificacion != TIPO_MODIFICACION_CAMBIO_ACREEDOR && this.actuacion.acreedor) {
                modificacion['acreedor'] = {
                    nodeid: this.actuacion.acreedor.nodeid,
                    removed: true
                };
            }
        }
        return modificacion;
    },
    isValid: function (typeValidation) {
        if (typeValidation != TIPO_VALIDACION_GRABAR) {
            this.getComponent('tipoModificacion').mandatory = true;
            this.getComponent('otroDescripcion').mandatory = true;
        } else {
            this.getComponent('tipoModificacion').mandatory = false;
            this.getComponent('otroDescripcion').mandatory = false;
        }
        if (!this.getComponent('tipoModificacion').isValid()) {
            return false;
        }
        var tipoModificacion = this.getComponent('tipoModificacion').getValue();
        switch (tipoModificacion) {
            case TIPO_MODIFICACION_CAMBIO_ACREEDOR:
                var cambioAcreedorlFieldset = this.getComponent('cambioAcreedorFieldSet');
                if (!cambioAcreedorlFieldset.getComponent('nuevoAcreedorFieldSet').isValid(typeValidation)) {
                    return false;
                }
                break;
            case TIPO_MODIFICACION_OTRO:
                if (!this.getComponent('otroDescripcion').isValid()) {
                    return false;
                }
                break;
        }
        return true;
    },
    setJSON: function (actuacion) {
        this.actuacion = actuacion;
        var tipoModificacion = actuacion.tipoModificacion;
        this.getComponent('tipoModificacion').setValue(tipoModificacion);
        this.showPanels(tipoModificacion);
        switch (tipoModificacion) {
            case TIPO_MODIFICACION_ALZAMIENTO_PARCIAL:
                var alzamientoParcialFieldset = this.getComponent('alzamientoParcialFieldset');
                alzamientoParcialFieldset.getComponent('ppuAlzamientoParcialGrid').setJSON(actuacion.vehiculos);
                break;
            case TIPO_MODIFICACION_CAMBIO_ACREEDOR:
                var cambioAcreedorlFieldset = this.getComponent('cambioAcreedorFieldSet');
                cambioAcreedorlFieldset.getComponent('nuevoAcreedorFieldSet').setJSON(actuacion.acreedor);
                cambioAcreedorlFieldset.getComponent('ppuCambioAcreedorFieldset').getComponent('ppuCambioAcreedorGrid').setJSON(actuacion.vehiculos);
                break;
            case TIPO_MODIFICACION_PROHIBICION_ACTO:
                var prohibicionActoFieldset = this.getComponent('prohibicionActoFieldset');
                prohibicionActoFieldset.getComponent('ppuProhibicionActoGrid').setJSON(actuacion.vehiculos);
                break;
            case TIPO_MODIFICACION_OTRO:
                this.getComponent('otroDescripcion').setValue(actuacion.otroModificacion);
                break;
        }
    },
    setVehiculosNodeId: function (vehiculos) {
        var patentesNodeId = [];
        if (this.actuacion.vehiculos) {
            for (var i = 0; i < this.actuacion.vehiculos.length; ++i) {
                var vehiculo = this.actuacion.vehiculos[i];
                patentesNodeId[vehiculo.patente] = vehiculo.nodeid;
            }
        }
        if (vehiculos && vehiculos.length > 0) {
            for (var i = 0; i < vehiculos.length; ++i) {
                var vehiculo = vehiculos[i];
                vehiculos[i].nodeid = patentesNodeId[vehiculos[i].patente];
            }
        }
        return vehiculos;
    }
});
Ext.reg('contratoModificacion', Srp.gui.ContratoModificacionPanel);
Ext.ns('Srp.gui');
Srp.gui.ContratoNotariaPanel = Ext.extend(Ext.form.FieldSet, {
    defaultType: 'textfield',
    padding: 2,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.ContratoBuscadorPanel.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var items = [{
            xtype: 'fieldset',
            border: false,
            columnWidth: 0.55,
            labelWidth: 120,
            itemId: 'leftFieldSet',
            items: [{
                fieldLabel: I18n.commons.nombreNotario,
                name: 'nombreNotarioRef',
                xtype: 'textfield',
                itemId: 'nombreNotarioRef',
                readOnly: true
            }]
        }, {
            xtype: 'fieldset',
            border: false,
            flex: 1,
            columnWidth: 0.45,
            labelWidth: 120,
            itemId: 'rightFieldSet',
            items: [{
                fieldLabel: I18n.commons.runNotario,
                name: 'runNotarioRef',
                xtype: 'textfield',
                itemId: 'runNotarioRef',
                vtype: 'rut',
                readOnly: true,
                listeners: {
                    'blur': function () {
                        this.setValue(util.Format.formatRut(this.getValue()));
                    }
                }
            }]
        }];
        this.formPanelContrato = new Ext.form.FormPanel({
            border: false,
            itemId: 'contratoNotariaFormPanel',
            labelWidth: 120,
            items: [{
                xtype: 'categoryComboBox',
                categoryType: Srp.CategoryManager.NOTARIA,
                fieldLabel: I18n.commons.notaria,
                name: 'notariaOrigenRef',
                width: 180,
                itemId: 'notariaOrigenRef',
                listeners: {
                    select: this.onSelectNotaria,
                    scope: this
                },
                editable: true,
                emptyText: I18n.commons.seleccioneNotaria,
                blankValue: {
                    id: -1,
                    text: "Sin Notaría"
                }
            }, {
                items: items,
                border: false,
                itemId: 'info',
                layout: 'column'
            }]
        });
        return this.formPanelContrato;
    },
    onSelectNotaria: function (cmb, record, index) {
        var notario = {
            nombreNotario: '',
            runNotario: ''
        };
        if (record.id != -1) {
            notario = Srp.CategoryManager.getNotarioById(record.id);
        }
        this.formPanelContrato.getComponent('info').getComponent('leftFieldSet').getComponent('nombreNotarioRef').setValue(notario.nombreNotario);
        this.formPanelContrato.getComponent('info').getComponent('rightFieldSet').getComponent('runNotarioRef').setValue(notario.runNotario);
    },
    isValid: function (typeValidation) {
        if (typeValidation == TIPO_VALIDACION_REGISTRAR_PAGO || typeValidation == TIPO_VALIDACION_ENVIAR_A_FIRMA) {
            this.formPanelContrato.getComponent('notariaOrigenRef').mandatory = true;
        } else {
            this.formPanelContrato.getComponent('notariaOrigenRef').mandatory = false;
        }
        return this.getComponent('contratoNotariaFormPanel').getForm().isValid();
    },
    getJSON: function () {
        var fieldValues = util.JSON.emptyToNull(this.getComponent('contratoNotariaFormPanel').getForm().getFieldValues());
        var obj = fieldValues;
        return obj;
    },
    setJSON: function (actuacion) {
        this.getComponent('contratoNotariaFormPanel').getForm().setValues(actuacion);
    }
});
Ext.reg('contratoNotariaPanel', Srp.gui.ContratoNotariaPanel);
Ext.ns('Srp.gui');
Srp.gui.ContratoRequirentePanel = Ext.extend(Ext.Panel, {
    title: 'Requirente',
    border: false,
    initComponent: function () {
        this.xtypeField = 'displayfield';
        this.fieldsReadOnly = true;
        var config = {
            items: this.buildItems()
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ContratoRequirentePanel.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    buildItems: function () {
        var items = [{
            xtype: 'hidden',
            name: 'nodeid'
        }, {
            fieldLabel: 'RUN',
            itemId: 'identificador',
            width: 90,
            name: 'identificador',
            vtype: 'rut',
            xtype: 'textfield',
            enableKeyEvents: true,
            allowBlank: true
        }, {
            fieldLabel: 'Nombres',
            itemId: 'nombres',
            width: 180,
            name: 'nombres',
            xtype: this.xtypeField,
            readOnly: this.fieldsReadOnly
        }, {
            fieldLabel: 'Apellido Paterno',
            itemId: 'apellidoPaterno',
            name: 'apellidoPaterno',
            xtype: this.xtypeField,
            readOnly: this.fieldsReadOnly
        }, {
            fieldLabel: 'Apellido Materno',
            itemId: 'apellidoMaterno',
            name: 'apellidoMaterno',
            xtype: this.xtypeField,
            readOnly: this.fieldsReadOnly
        }, {
            fieldLabel: 'Teléfono',
            itemId: 'telefono',
            name: 'telefono',
            xtype: 'textfield'
        }, {
            fieldLabel: 'Calle',
            itemId: 'calle',
            name: 'calle',
            xtype: 'textfield'
        }, {
            fieldLabel: 'N° de calle',
            itemId: 'numeroCalle',
            name: 'numeroCalle',
            xtype: 'textfield'
        }, {
            fieldLabel: 'Letra calle',
            itemId: 'letraCalle',
            name: 'letraCalle',
            xtype: 'textfield'
        }, {
            fieldLabel: 'Resto de Domicilio',
            itemId: 'restoDomicilio',
            name: 'restoDomicilio',
            xtype: 'textfield'
        }, {
            itemId: 'comuna',
            fieldLabel: 'Comuna',
            name: 'comuna',
            width: 175,
            categoryType: Srp.CategoryManager.COMUNA,
            xtype: 'categoryComboBox',
            editable: true
        }, {
            fieldLabel: 'Código Postal',
            itemId: 'codigoPostal',
            name: 'codigoPostal',
            xtype: 'textfield'
        }, {
            xtype: 'hidden',
            name: 'identificadorValido',
            itemId: 'identificadorValido'
        }];
        this.requirenteFormPanel = new Ext.form.FormPanel({
            border: false,
            itemId: 'requirenteFormPanel',
            items: items,
            layout: 'form',
            labelWidth: 130
        });
        if (this.fieldsReadOnly) {
            this.requirenteFormPanel.getComponent('identificador').on('change', this.obtenerNombreByRun, this);
        };
        return [this.requirenteFormPanel];
    },
    obtenerNombreByRun: function (cmp) {
        this.getComponent('requirenteFormPanel').getComponent('nombres').setValue('');
        this.getComponent('requirenteFormPanel').getComponent('apellidoPaterno').setValue('');
        this.getComponent('requirenteFormPanel').getComponent('apellidoMaterno').setValue('');
        if (cmp.isValid()) {
            cmp.getEl().addClass('loading-spinner');
            var run = cmp.getValue();
            run = util.Format.cleanSafeRunForValidation(run);
            Log4js.debug(' -> fireEvent(onRunValido)');
            Srp.FrontController.fireEvent('onRunValido', run);
        }
    },
    loadPersonaNatural: function (response, runConsultado) {
        this.getComponent('requirenteFormPanel').getComponent('identificador').getEl().removeClass('loading-spinner');
        var runActual = this.getComponent('requirenteFormPanel').getComponent('identificador').getValue();
        runActual = util.Format.cleanSafeRunForValidation(runActual);
        if (runConsultado == runActual) {
            if (response.success == true) {
                var persona = response.data;
                this.getComponent('requirenteFormPanel').getComponent('nombres').setValue(persona.nombres);
                this.getComponent('requirenteFormPanel').getComponent('apellidoPaterno').setValue(persona.paterno);
                this.getComponent('requirenteFormPanel').getComponent('apellidoMaterno').setValue(persona.materno);
                this.getComponent('requirenteFormPanel').getComponent('identificadorValido').setValue(REQUIRENTE_VALIDO);
            } else {
                Log4js.debug('Fallo en la busqueda del nombre por Rut');
                this.getComponent('requirenteFormPanel').getComponent('identificador').markInvalid(I18n.mensajes.runNombreNoEncontrado);
                this.getComponent('requirenteFormPanel').getComponent('identificadorValido').setValue(REQUIRENTE_INVALIDO);
            }
        }
    },
    getJSON: function (isResumen) {
        var requirenteForm = this.getComponent('requirenteFormPanel');
        var fieldValues = requirenteForm.getForm().getFieldValues();
        fieldValues = util.JSON.getNotEmptyValues(fieldValues);
        if (util.JSON.countObject(fieldValues) > 0) {
            fieldValues.personaTipo = CALIDAD_PERSONA_NATURAL;
            fieldValues.identificadorTipo = IDENTIFICADOR_TIPO_PERSONA_NATURAL;
            return {
                requirente: fieldValues
            };
        }
        return null;
    },
    setJSON: function (objJSON) {
        this.getComponent('requirenteFormPanel').getForm().setValues(objJSON.requirente);
    },
    isValid: function (validationType) {
        Log4js.debug('ContratoRequirentePanel.isValid()');
        var validation = true;
        switch (validationType) {
            case TIPO_VALIDACION_GRABAR:
                this.getComponent('requirenteFormPanel').getComponent('identificador').mandatory = false;
                break;
            case TIPO_VALIDACION_REGISTRAR_PAGO:
                this.getComponent('requirenteFormPanel').getComponent('identificador').mandatory = true;
                break;
        }
        var requirenteValues = this.getJSON();
        if (requirenteValues != null) {
            this.getComponent('requirenteFormPanel').getComponent('identificador').mandatory = true;
        } else {
            this.getComponent('requirenteFormPanel').getComponent('identificador').mandatory = false;
        }
        validation = this.getComponent('requirenteFormPanel').getForm().isValid();
        var validacionSrcei = true
        var identificadorValido = this.getComponent('requirenteFormPanel').getComponent('identificadorValido').getValue();
        if (this.getComponent('requirenteFormPanel').getComponent('identificador').length > 0 && identificadorValido != REQUIRENTE_VALIDO) {
            validacionSrcei = false;
        }
        validation = validation && validacionSrcei;
        if (!validation) {
            var erroresRequirente = {
                parent: 'Requirente',
                children: ['Datos del Requirente']
            };
            Srp.MessagesManager.add(erroresRequirente);
        }
        return validation;
    },
    registrarEventos: function () {
        var getPersonaByRunCmd = new Srp.command.ws.GetPersonaByRunCmd();
        getPersonaByRunCmd.setParameter('contratante', 'requirente');
        var loadPersonaByRunCmd = new Srp.command.ws.LoadPersonaByRunCmd();
        loadPersonaByRunCmd.setParameter('fieldset', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onRunValido',
            command: getPersonaByRunCmd
        }, {
            name: 'onWsGetPersona_requirente',
            command: loadPersonaByRunCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onRemoveFields',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.reg('requirentePanel', Srp.gui.ContratoRequirentePanel);
Ext.ns('Srp.gui');
Srp.gui.OficioRechazoActuacionPanel = Ext.extend(Ext.Panel, {
    border: false,
    itemId: 'resumenActuacionPanel',
    padding: 5,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.OficioRechazoActuacionPanel.superclass.initComponent.call(this);
    },
    buildItems: function () {
        this.actuacion.nResolucion = '0001';
        this.actuacion.fechaRechazoAbogado = '26-01-2011';
        var ciudad = 'Santiago';
        return [{
            xtype: 'box',
            cls: 'oficio-header',
            html: 'GOBIERNO DE CHILE<br/>SERVICIO DE REGISTRO CIVIL<br/>E IDENTIFICACION<br/>R.P.s.D'
        }, {
            xtype: 'box',
            cls: 'oficio-info',
            html: '<div><label>Res.Exenta Nº </label> ' + this.actuacion.nResolucion + '</div>'
        }, {
            xtype: 'box',
            cls: 'oficio-info',
            html: '<div><label>' + ciudad + '</label>, ' + this.actuacion.fechaRechazoAbogado + '</div>'
        }, {
            xtype: 'box',
            cls: 'oficio-mensaje-rechazo',
            html: '<div class="title">VISTOS:</div>' + '<div>Lo Preceptuado en la Ley 20.910 del a&ntilde; 2007 y en el Decreto Supremo N&ordm; 722, del 23 de octubre de 2010, del Ministerio de Justicia, y</div>'
        }, {
            xtype: 'box',
            cls: 'oficio-mensaje-rechazo',
            html: '<div class="title">CONSIDERANDO:</div>' + '<div>' + unescape(this.actuacion.comentariorechazoabogado) + '</div>'
        }, {
            xtype: 'box',
            cls: 'oficio-mensaje-rechazo',
            html: '<div class="title">RESUELVO:</div>' + '<div>' + '<ul>' + '<li>1. No ha lugar a la solicitud N&ordm; ' + this.actuacion.numeroRepertorio + ', de fecha ' + this.actuacion.fechaRepertorio + ', presentada en la ' + this.actuacion.tipoOu + ' ' + this.actuacion.nombreOu + '</li>' + '<li>2. El interesado podrá reclamar de esta Resolución ante el Juez de turno en lo civil, conforme lo dispone el inciso 4º del Art. 28 de la Ley 20.190, Art. 14.' + '</ul>' + '</div>'
        }, {
            xtype: 'box',
            cls: 'oficio-footer',
            html: 'ANÓTESE Y COMUNÍQUESE<br/><br/>POR ORDEN DEL DIRECTOR NACIONAL<br/>DEL SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN'
        }];
    }
});
Ext.reg('oficioRechazoActuacion', Srp.gui.OficioRechazoActuacionPanel);
Ext.ns('Srp.gui');
Srp.gui.ResumenActuacionPanel = Ext.extend(Ext.Panel, {
    border: false,
    itemId: 'resumenActuacionPanel',
    padding: 5,
    inWizard: false,
    showRVMDetail: false,
    initComponent: function () {
        Srp.gui.ResumenActuacionPanel.superclass.initComponent.call(this);
    },
    onRender: function (ct, position) {
        Srp.gui.ResumenActuacionPanel.superclass.onRender.call(this, ct, position);
    },
    listeners: {
        'show': function () {
            Srp.FrontController.fireEvent('ResumenActuacion.onShowResumen', this);
        }
    },
    loadData: function (response) {
        this.response = response;
        if (this.response.isCopia) {
            this.addClass('resumen-copia');
        }
        var panelCounter = this.hasNotPanelNumber ? -1 : 1;
        this.removeAll(true);
        var definitions = [];
        if (this.response.isPrintable) {
            definitions.push([NUMERO_REPERTORIO, 'Srp.gui.ResumenEncabezadoPanel()']);
        }
        if (model.user.Usuario.tienePermiso(Permiso.VER_RECHAZO_ABOGADO) && util.isAvailableComentarioRechazoAbogado(this.response)) {
            definitions.push([COMENTARIO_RECHAZO_ABOGADO, 'Srp.gui.ResumenComentarioRechazoUPPanel()']);
        }
        eval(CONSTITUYENTES + '= util.JSON.filterBy( ' + CONSTITUYENTES + ', "' + CONTRATANTE_REMOVED + '", false )');
        eval(DEUDORES + '= util.JSON.filterBy( ' + DEUDORES + ', "' + CONTRATANTE_REMOVED + '", false )');
        definitions.push([NUMERO_REPERTORIO, 'Srp.gui.ResumenRepertorioAgnoPanel(response)']);
        definitions.push(['(' + ACREEDOR + ' || ' + CONSTITUYENTES + '.length > 0 || ' + DEUDORES + '.length > 0) && ! ' + TIPO_MODIFICACION, 'Srp.gui.ResumenContratantesPanel(response)']);
        definitions.push([TIPO_DOCUMENTO + ' || ' + INSCRIPCION + ' || ' + REINSCRIPCION + ' || ((' + ANOTACIONES_RVM + ' && ' + ANOTACIONES_RVM + '.length > 0 ) &&  ! ' + TIPO_MODIFICACION + ')', 'Srp.gui.ResumenAntecedentesPanel(response, ' + this.showRVMDetail + ')']);
        definitions.push([ADJUNTOS, 'Srp.gui.ResumenAdjuntosPanel(response)']);
        if (!this.inWizard) {
            definitions.push([true, 'Srp.gui.ResumenHistorialWorkflowPanel(response)']);
        }
        if (this.showComentarioNotario == true && !this.response.isComprobanteNotaria) {
            definitions.push([COMENTARIO_RECHAZO_NOTARIO, 'Srp.gui.ComentarioRechazoPanel()']);
        }
        var tipoActuacion = response.tramite;
        if (!Ext.isDefined(tipoActuacion)) {
            tipoActuacion = response.tipoActuacion;
        }
        if (!Ext.isDefined(response.valoractuacion)) {
            Log4js.debug('Correccion de montos no guardados.');
            Srp.MontosManager.populateMontos(response, response.vehiculos);
            Srp.MontosManager.setMontosActuacion(response);
        }
        definitions.push([response.valoractuacion, "Srp.gui.ResumenMontosFieldSet('" + tipoActuacion + "')"]);
        if (this.response.isPrintable) {
            definitions.push([NUMERO_REPERTORIO, 'Srp.gui.ResumenFirmaTimbrePanel()']);
        }
        this.normalizeAdjuntos(response);
        var items = util.Component.createItems(response, definitions, panelCounter);
        for (var i = 0; i < items.length; i++) {
            this.add(items[i]);
        }
        for (var k = 0; k < items.length; k++) {
            items[k].loadData(response);
        }
        this.doLayout();
    },
    normalizeAdjuntos: function (response) {
        if (response.adjuntos && response.adjuntos.length > 0) {
            var anexos = new Array();
            var resolucionExenta = new Array();
            for (var i = 0; i < response.adjuntos.length; i++) {
                var adjunto = response.adjuntos[i];
                adjunto.url = util.Format.formatURLAdjunto(adjunto.nodeid, adjunto.nombre);
                if (adjunto.type == TIPO_CONTRATO) {
                    response.nombreArchivoContrato = adjunto.nombre;
                    response.urlArchivoContrato = adjunto.url;
                } else {
                    if (adjunto.type == TIPO_ANEXO) {
                        anexos.push(adjunto);
                    } else {
                        if (adjunto.type == TIPO_RESOL_EXENTA) {
                            resolucionExenta.push(adjunto);
                        }
                    }
                }
            }
            response.anexos = anexos;
            response.resolucionExenta = resolucionExenta;
        }
    }
});
Ext.reg('resumenActuacion', Srp.gui.ResumenActuacionPanel);
Ext.ns('Srp.gui');
Srp.gui.ResumenEncabezadoPanel = Ext.extend(Ext.Panel, {
    height: 70,
    padding: 0,
    width: '97%',
    html: '<div id="logo-gob"></div>' + '<div id="logo-srpsd"></div>',
    cls: 'resumen-header',
    constructor: function () {
        Srp.gui.ResumenEncabezadoPanel.superclass.constructor.call(this);
    },
    loadData: function (response) {}
});
Ext.ns('Srp.gui');
Srp.gui.ResumenFirmaTimbrePanel = Ext.extend(Ext.Panel, {
    height: 70,
    padding: 0,
    width: '97%',
    html: '<div id="firma-timbre">' + I18n.commons.firmaTimbre + '</div>',
    cls: 'resumen-firma-timbre',
    constructor: function () {
        Srp.gui.ResumenFirmaTimbrePanel.superclass.constructor.call(this);
    },
    loadData: function (response) {}
});
Ext.ns('Srp.gui');
Srp.gui.ResumenRepertorioAgnoPanel = Ext.extend(Ext.Panel, {
    layout: 'column',
    iconCls: 'icon-wizard-step-',
    height: 180,
    padding: 5,
    width: '97%',
    constructor: function (response) {
        Ext.apply(this, {
            title: I18n.commons.repertorio + ' (' + util.Format.formatTipoActuacion(response.tipoActuacion) + ')',
            items: this.buildItems(response),
            buttons: this.buildButtons(),
            response: response
        });
        Srp.gui.ResumenRepertorioAgnoPanel.superclass.constructor.call(this);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.firmar,
            scope: this,
            hidden: 'hidden',
            iconCls: 'icon-firmar'
        }];
    },
    buildItems: function (response) {
        var items = [];
        if (response.isCaratula) {
            items.push({
                xtype: 'fieldset',
                columnWidth: 0.25,
                border: false,
                itemId: 'codigo-barra',
                padding: 0,
                height: 140
            });
        } else {
            this.height = 90;
        }
        items.push({
            xtype: 'fieldset',
            columnWidth: 0.3,
            border: false,
            defaults: {
                xtype: 'displayfield'
            },
            items: this.buildDisplayItems(response, true)
        });
        items.push({
            xtype: 'fieldset',
            columnWidth: 0.45,
            border: false,
            defaults: {
                xtype: 'displayfield'
            },
            items: this.buildDisplayItems(response, false)
        });
        return items;
    },
    buildDisplayItems: function (response, isLeft) {
        var isLeftOriginal = isLeft;
        var items = [];
        var itemsDefinitions = [];
        if (eval(NUMERO_REPERTORIO)) {
            itemsDefinitions.push([I18n.commons.nRepertorio, 'numeroRepertorio']);
        }
        if (AGNO_REPERTORIO) {
            itemsDefinitions.push([I18n.commons.agno, 'agnoRepertorio']);
        }
        itemsDefinitions.push(['Fecha', 'fechaRepertorio']);
        itemsDefinitions.push([eval(TIPO_OU), 'ou']);
        itemsDefinitions.push(['Hora', 'horaRepertorio']);
        if (response.isPrintable) {
            itemsDefinitions.push(['Región', 'region']);
            itemsDefinitions.push(['Terminal', 'terminal']);
            itemsDefinitions.push(['Atención', 'atencion']);
        }
        for (var i = 0; i < itemsDefinitions.length; i++) {
            if (isLeft) {
                items.push({
                    fieldLabel: itemsDefinitions[i][0],
                    name: itemsDefinitions[i][1]
                });
            }
            isLeft = !isLeft;
        }
        return items;
    },
    listeners: {
        afterrender: function (x) {
            if (this.response.isCaratula && this.response.numeroRepertorio && this.response.agnoRepertorio) {
                this.getComponent('codigo-barra').hide();
                var codigo = this.response.numeroRepertorio + this.response.agnoRepertorio;
                codigo = String.leftPad(codigo, 11, '0');
                this.getComponent('codigo-barra').update(this.buildCodigoBarra(codigo));
                util.Barcode.generate(codigo);
                this.getComponent('codigo-barra').show();
                this.getComponent('codigo-barra').doLayout();
            }
        }
    },
    buildCodigoBarra: function (codigo) {
        var htmlCodigoBarra = '<div class="barcodeContainer"><div class="barcode" id="EAN-13"><div id="EAN-13_desc" class="descDisplay">&nbsp;</div><div class="quietZone"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div class="leader"><div class="bitOn"></div><div class="bitOff"></div><div class="bitOn"></div></div><div id="EAN-13_digit01" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit02" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit03" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit04" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit05" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit06" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div class="separator" class="digit"><div class="bitOff"></div><div class="bitOn"></div><div class="bitOff"></div><div class="bitOn"></div><div class="bitOff"></div></div><div id="EAN-13_digit07" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit08" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit09" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit10" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit11" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_digit12" class="digit"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div class="trailer"><div class="bitOn"></div><div class="bitOff"></div><div class="bitOn"></div></div><div class="quietZone"><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div><div class="bitOff"></div></div><div id="EAN-13_countryCode" class="codeDisplay">1</div><div id="EAN-13_group1" class="codeDisplay">234567</div><div id="EAN-13_group2" class="codeDisplay">890128</div></div></div>';
        return htmlCodigoBarra;
    },
    loadData: function (response) {
        util.Component.setValue(this, 'numeroRepertorio', eval(NUMERO_REPERTORIO));
        util.Component.setValue(this, 'agnoRepertorio', eval(AGNO_REPERTORIO));
        util.Component.setValue(this, 'fechaRepertorio', eval(FECHA_REPERTORIO));
        util.Component.setValue(this, 'ou', eval(NOMBRE_OU));
        var momentoActual = new Date();
        var hora = momentoActual.getHours()
        var minuto = momentoActual.getMinutes()
        var segundo = momentoActual.getSeconds()
        util.Component.setValue(this, 'horaRepertorio', hora + ":" + minuto + ":" + segundo);
        if (response.isPrintable) {
            var ou = model.user.Usuario.getOrganization();
            util.Component.setValue(this, 'region', ou.region);
            util.Component.setValue(this, 'terminal', response.terminal);
            util.Component.setValue(this, 'atencion', response.numeroAtencion);
        }
    }
});
Ext.ux.Printer.PanelRenderer = Ext.extend(Ext.ux.Printer.BaseRenderer, {
    generateBody: function (panel) {
        return String.format("<div class='x-panel-print'>{0}</div>", panel.body.dom.innerHTML);
    }
});
Ext.ux.Printer.registerRenderer("resumenActuacion", Ext.ux.Printer.PanelRenderer);
Ext.ux.Printer.registerRenderer("oficioRechazoActuacion", Ext.ux.Printer.PanelRenderer);
Ext.ux.Printer.BaseRenderer.prototype.stylesheetPath = 'lib/ext/resources/css/xtheme-srpsd.css';
Ext.ns('Srp.gui');
Srp.gui.ResumenContratantesPanel = Ext.extend(Ext.Panel, {
    border: true,
    autoheight: true,
    padding: 5,
    width: '97%',
    iconCls: 'icon-wizard-step-',
    title: I18n.commons.contratantes,
    constructor: function (response) {
        var componentsDefinition = [
            [ACREEDOR, 'Srp.gui.ResumenAcreedorFieldSet(response)'],
            [CONSTITUYENTES, ['Srp.gui.ResumenConstituyenteFieldSet(response)', 'Srp.gui.ResumenConstituyentesFieldSet({response:response})']],
            [DEUDORES, ['Srp.gui.ResumenDeudorFieldSet(response)', 'Srp.gui.ResumenDeudoresFieldSet({response:response})']]
        ];
        Ext.apply(this, {
            items: util.ComponentUtils.createItems(response, componentsDefinition)
        });
        Srp.gui.ResumenContratantesPanel.superclass.constructor.call(this);
    },
    loadData: function (response) {
        util.ComponentUtils.loadData(this.items, response);
    }
});
Ext.ns('Srp.gui');
Srp.gui.SaveFormPanel = Ext.extend(Ext.form.FormPanel, {
    height: 0,
    border: false,
    fileUpload: true,
    initComponent: function () {
        var config = {
            items: this.buildItems()
        }
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.SaveFormPanel.superclass.initComponent.call(this);
    },
    buildItems: function () {
        return [{
            xtype: 'textfield',
            itemId: 'info',
            name: 'info'
        }];
    }
});
Ext.reg('saveFormPanel', Srp.gui.SaveFormPanel);
Ext.ns('Srp.gui');
Srp.gui.PagoGrupoPanel = Ext.extend(Ext.Panel, {
    buscandoMontos: false,
    initComponent: function () {
        this.vIndice = 0;
        Ext.apply(this, {
            items: this.buildItems(),
            window: this.window
        });
        Srp.gui.PagoGrupoPanel.superclass.initComponent.call(this);
        this.buildFormSaveActuacion();
        this.registrarEventos();
    },
    onRender: function (ct, position) {
        this.loadData();
        this.loadMontos();
        Srp.gui.PagoGrupoPanel.superclass.onRender.call(this, ct, position);
    },
    buildColumnModel: function () {
        var columnModel = [{
            dataIndex: 'taskid',
            header: I18n.commons.taskid
        }, {
            dataIndex: 'numeroRepertorioNotaria',
            header: I18n.commons.nRepertorio
        }, {
            dataIndex: 'agnoRepertorioNotaria',
            header: I18n.commons.agno
        }, {
            dataIndex: 'monto',
            header: I18n.commons.monto
        }, {
            dataIndex: 'validacionRVM',
            header: I18n.commons.validacionRVM,
            width: 50,
            renderer: util.Format.ppuValidationRender,
            defaultValue: PPU_UNKNOW
        }];
        return columnModel;
    },
    buildItems: function (response) {
        var anotacionesStore = new Ext.data.JsonStore({
            "data": [],
            "autoLoad": true,
            "fields": [{
                name: 'taskid',
                type: "string"
            }, {
                name: 'numeroRepertorioNotaria',
                type: "string"
            }, {
                name: 'agnoRepertorioNotaria',
                type: "int"
            }, {
                name: 'monto',
                type: "number"
            }, {
                name: 'validacionRVM',
                type: 'string'
            }]
        });
        this.gridActuaciones = {
            xtype: 'grid',
            name: 'actuaciones',
            border: false,
            height: 250,
            itemId: 'grid-actuaciones',
            listeners: {
                viewready: this.onViewReady,
                scope: this
            }
        };
        this.gridActuaciones.store = anotacionesStore;
        this.gridActuaciones.columns = this.buildColumnModel(response);
        return this.gridActuaciones;
    },
    onViewReady: function () {
        if (this.buscandoMontos) {
            this.loadMask(I18n.mensajes.buscandoMontos);
        }
    },
    buildFormSaveActuacion: function () {
        this.add({
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        });
    },
    loadMontos: function () {
        this.buscandoMontos = true;
        this.montoTotal = 0;
        this.actuaciones = [];
        this.buckets = [];
        for (var i = 0; i < this.rows.length; i++) {
            var record = this.rows[i];
            var taskid = record.get('taskid').substring(5);
            Ext.Ajax.request({
                url: Srp.WebScriptManager.getUrl('WS_ACTUACION_GET_BY_TASKID', taskid),
                method: 'GET',
                scope: this,
                success: this.onSuccessLoadMontos,
                failure: this.onFailureLoadMontos,
                parameters: {
                    index: i,
                    taskid: record.get('taskid'),
                    type: record.get('type')
                }
            });
        }
    },
    onSuccessLoadMontos: function (response, opts) {
        var actuacion = Ext.util.JSON.decode(response.responseText);
        actuacion.taskid = opts.parameters.taskid;
        actuacion.type = opts.parameters.type;
        actuacion.indice = opts.parameters.index;
        if (!Ext.isDefined(actuacion.valoractuacion)) {
            Log4js.debug('Correccion de montos no guardados.');
            Srp.MontosManager.populateMontos(actuacion, actuacion.vehiculos);
            Srp.MontosManager.setMontosActuacion(actuacion);
        }
        var actuacionActual = Srp.MontosManager.getCopiaActuacionActualMontos(actuacion);
        var actuacionActualizada = Srp.MontosManager.getCopiaActuacionActualizadaMontos(actuacion);
        if (Srp.MontosManager.chequearCambioMontos(actuacionActual, actuacionActualizada)) {
            this.actuaciones.push(actuacionActualizada);
            this.actualizarMontosActuacion(actuacionActualizada);
        } else {
            this.actuaciones.push(actuacion);
            Srp.MontosManager.setMontosResumen(actuacion);
            this.pushMontosInGrid(actuacion);
        }
    },
    actualizarMontosActuacion: function (actuacionActualizada) {
        var gridActuaciones = this.getComponent('grid-actuaciones');
        gridActuaciones.buscandoMontos = true;
        Srp.MontosManager.updateMontosActuacion({
            actuacion: actuacionActualizada,
            scope: this,
            success: this.onSuccessActualizarMontosActuacion,
            failure: this.onFailureActualizarMontosActuacion,
            parameters: {
                actuacion: actuacionActualizada
            }
        });
    },
    onSuccessActualizarMontosActuacion: function (response, opts) {
        var actuacion = opts.options.parameters.actuacion;
        this.pushMontosInGrid(actuacion);
    },
    onFailureSaveComentarioRechazo: function (form, action) {
        Srp.WebScriptManager.onFailureSaveActuacion(form, action);
        Log4js.debug('No se pudo actualizar montos');
    },
    pushMontosInGrid: function (actuacion) {
        var record = this.gridActuaciones.store.getAt(actuacion.indice);
        try {
            record.set('monto', Ext.util.Format.number(actuacion.montoTotal, I18n.format.amount.list));
        } catch (e) {}
        this.montoTotal += actuacion.montoTotal;
        var record = this.gridActuaciones.store.getAt(this.rows.length);
        try {
            record.set('monto', "<b>" + Ext.util.Format.number(this.montoTotal, I18n.format.amount.list) + "</b>");
        } catch (e) {}
        this.buckets.push(actuacion.montoTotal);
        if (this.buckets.length == this.rows.length) {
            this.buscandoMontos = false;
            this.removeMask();
            this.window.setDisabledButtons(false);
        }
    },
    onFailureLoadMontos: function () {},
    getActuaciones: function () {
        return this.actuaciones;
    },
    loadData: function () {
        var actuaciones = [];
        for (var i = 0; i < this.rows.length; i++) {
            actuaciones[i] = {};
            actuaciones[i].taskid = this.rows[i].data.taskid;
            actuaciones[i].numeroRepertorioNotaria = this.rows[i].data.numeroRepertorioNotaria;
            actuaciones[i].agnoRepertorioNotaria = this.rows[i].data.agnoRepertorioNotaria;
            actuaciones[i].validacionRVM = PPU_UNKNOW;
        }
        actuaciones[this.rows.length] = {};
        actuaciones[this.rows.length].taskid = '<b>Total</b>';
        actuaciones[this.rows.length].validacionRVM = PPU_UNKNOW;
        this.gridActuaciones.store.loadData(actuaciones);
    },
    loadMask: function (msg) {
        var el = this.getEl();
        el.mask(msg, "x-mask-loading");
    },
    removeMask: function () {
        var el = this.getEl();
        el.unmask();
    },
    validatePPUsRVM: function (parent) {
        this.loadMask(I18n.mensajes.validandoPPUs);
        this.parent = parent;
        this.vIndice = 0;
        this.validateActuacionPPUs();
    },
    validateActuacionPPUs: function () {
        this.actuacion = this.actuaciones[this.vIndice];
        var index = this.gridActuaciones.store.findExact('taskid', this.actuacion.taskid);
        var record = this.gridActuaciones.store.getAt(index);
        record.set('validacionRVM', PPU_BUSCANDO);
        if (this.actuacion.vehiculos.length > 0 && this.actuacion.type == TipoTarea.PAGAR_ACTUACION) {
            Srp.FrontController.fireEvent('onValidatingPPU', this);
        } else {
            this.doPago();
        }
    },
    registrarEventos: function () {
        var validarPPUsRVMCmd = new Srp.command.ws.ValidarPPUsRVMCmd();
        validarPPUsRVMCmd.setParameter('grid', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onValidatingPPU',
            command: validarPPUsRVMCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onClosePagoWindow',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    getConstituyentes: function () {
        return {
            actuacion: this.actuacion,
            getJSON: function () {
                return this.actuacion.constituyentes;
            }
        };
    },
    setValueRecord: function (ppu, fieldName, fieldValue) {},
    doPago: function () {
        var index = this.gridActuaciones.store.findExact('taskid', this.actuacion.taskid);
        var record = this.gridActuaciones.store.getAt(index);
        record.set('validacionRVM', PPU_VALIDA);
        ++this.vIndice;
        if (this.vIndice == this.actuaciones.length) {
            this.removeMask();
            this.parent.doPago();
        } else {
            this.validateActuacionPPUs();
        }
    },
    doAbort: function () {
        var index = this.gridActuaciones.store.findExact('taskid', this.actuacion.taskid);
        var record = this.gridActuaciones.store.getAt(index);
        record.set('validacionRVM', PPU_INVALIDA);
        Srp.gui.messageBox.Error({
            msg: I18n.mensajes.error.validacionPPUsEnGrupo
        });
        this.removeMask();
        this.parent.doAbort();
    }
});
Ext.ns('Srp.gui');
Srp.gui.BuscadorActuacionBasePanel = Ext.extend(Ext.Panel, {
    padding: 5,
    initComponent: function () {
        var config = {
            items: this.buildItems()
        };
        this.allowRepertorioBlank = Srp.conf.Properties.DEVELOPMENT_MODE;
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.buscadorActuaciones);
        Srp.gui.BuscadorActuacionBasePanel.superclass.initComponent.apply(this);
        this.registrarEventos();
    },
    onRender: function (ct, position) {
        Srp.gui.BuscadorActuacionBasePanel.superclass.onRender.call(this, ct, position);
        Ext.getCmp('tipoBusqueda').setValue(Srp.Canvas.paramCacheSearchType);
        this._buildFormSearchByType(Srp.Canvas.paramCacheSearchType);
    },
    buildItems: function () {
        return [this.buildSearchForm(), this.buildResultsFieldSet()];
    },
    buildSearchForm: function () {
        var clearField = function () {
            this.setValue('');
            this.reset();
        };
        var fechaDesde = {
            xtype: 'datefield',
            fieldLabel: I18n.busqueda.fechaDesde,
            name: 'fechaDesde',
            format: 'd/m/Y',
            clear: clearField,
            editable: false
        };
        if (this.dateDesdeMinValue != null) {
            fechaDesde.minValue = this.dateDesdeMinValue;
        }
        if (this.dateDesdeMaxValue != null) {
            fechaDesde.maxValue = this.dateDesdeMaxValue;
        }
        if (this.dateDesdeValue != null) {
            fechaDesde.value = this.dateDesdeValue;
        }
        var fechaHasta = {
            xtype: 'datefield',
            fieldLabel: I18n.busqueda.fechaHasta,
            name: 'fechaHasta',
            format: 'd/m/Y',
            clear: clearField,
            editable: false
        };
        if (this.dateHastaMinValue != null) {
            fechaHasta.minValue = this.dateHastaMinValue;
        }
        if (this.dateHastaMaxValue != null) {
            fechaHasta.maxValue = this.dateHastaMaxValue;
        }
        if (this.dateHastaValue != null) {
            fechaHasta.value = this.dateHastaValue;
        }
        var comboTipoBusqueda = {
            itemId: 'tipoBusqueda',
            id: 'tipoBusqueda',
            xtype: 'categoryComboBox',
            fieldLabel: I18n.busqueda.tipoBusqueda,
            name: 'busquedaTipo',
            categoryType: Srp.CategoryManager.TIPO_BUSQUEDA,
            width: 140,
            listeners: {
                select: {
                    fn: this.buildFormSearchByType,
                    scope: this
                }
            }
        };
        this.searchColumn = new Ext.form.FormPanel({
            border: false,
            layout: 'column',
            items: [],
            itemId: 'searchColumn',
            id: 'searchColumn'
        });
        var buttons = [{
            xtype: 'button',
            text: I18n.commons.buscar,
            handler: this.onBuscar,
            scope: this
        }];
        var searchItems = [{
            columnWidth: 0.24,
            layout: 'form',
            labelWidth: 40,
            border: false,
            itemId: 'column-first',
            items: [comboTipoBusqueda]
        }, {
            columnWidth: 0.7,
            layout: 'form',
            labelWidth: 120,
            itemId: 'column-second',
            border: false,
            items: [this.searchColumn]
        }, {
            columnWidth: 0.06,
            layout: 'hbox',
            itemId: 'column-third',
            border: false,
            items: buttons,
            layoutConfig: {
                padding: '0',
                pack: 'end',
                align: 'middle'
            },
            hidden: true
        }];
        this.searchFieldSet = new Ext.form.FieldSet({
            title: 'B&uacute;squeda',
            itemId: 'searchFieldSet',
            items: [{
                items: searchItems,
                layout: 'column',
                itemId: 'firstRow',
                padding: 0,
                border: false
            }, {
                xtype: 'form',
                itemId: 'secondRow',
                id: 'secondRow',
                layout: 'column',
                padding: 0,
                hidden: true,
                border: false
            }]
        });
        return this.searchFieldSet;
    },
    buildFormSearchByType: function (combo, record, index) {
        this.searchColumn.removeAll();
        this.searchFieldSet.getComponent('firstRow').getComponent('column-third').hide();
        Srp.Canvas.paramCacheSearchType = record.get('id');
        this._buildFormSearchByType(record.get('id'));
    },
    _buildFormSearchByType: function (option) {
        this.hideFormIdentificador();
        switch (option) {
            case BUSQUEDA_REPERTORIO_PRENDAS:
                this.buildSearchByRepertorioPrendas();
                break;
            case BUSQUEDA_REPERTORIO_NOTARIA:
                this.buildSearchByRepertorioNotaria();
                break;
            case BUSQUEDA_CONTRATANTE:
                this.buildSearchByContratantes();
                break;
            default:
                return;
        };
        this.searchFieldSet.getComponent('firstRow').getComponent('column-third').show();
    },
    buildSearchByRepertorioPrendas: function () {
        var items = [{
            columnWidth: 0.7,
            layout: 'form',
            labelWidth: 140,
            border: false,
            items: [{
                id: 'repertorioPrendas',
                itemId: 'numeroRepertorioPrendas',
                xtype: 'textfield',
                name: 'numeroRepertorio',
                fieldLabel: I18n.busqueda.repertorioPrenda,
                vtype: 'numeroRepertorioNotaria',
                allowBlank: this.allowRepertorioBlank
            }]
        }, {
            columnWidth: 0.3,
            layout: 'form',
            labelWidth: 40,
            border: false,
            items: [{
                id: 'agnoRepertorioPrendas',
                xtype: 'numberfield',
                maxLength: 4,
                fieldLabel: I18n.commons.agno,
                name: 'agnoRepertorio',
                vtype: 'agno',
                width: 50
            }]
        }];
        this.searchColumn.add(items);
        this.searchColumn.doLayout();
    },
    buildSearchByRepertorioNotaria: function () {
        var items = [{
            columnWidth: 0.7,
            layout: 'form',
            labelWidth: 140,
            border: false,
            items: [{
                id: 'repertorioNotaria',
                itemId: 'numeroRepertorioNotaria',
                xtype: 'textfield',
                name: 'numeroRepertorioNotaria',
                fieldLabel: I18n.busqueda.repertorioNotaria,
                vtype: 'numeroRepertorioNotaria',
                allowBlank: this.allowRepertorioBlank
            }]
        }, {
            columnWidth: 0.3,
            layout: 'form',
            labelWidth: 40,
            border: false,
            items: [{
                id: 'agnoRepertorioNotaria',
                xtype: 'numberfield',
                maxLength: 4,
                fieldLabel: I18n.commons.agno,
                name: 'agnoRepertorioNotaria',
                vtype: 'agno',
                width: 50
            }]
        }];
        this.searchColumn.add(items);
        this.searchColumn.doLayout();
    },
    buildSearchByContratantes: function () {
        var items = [{
            columnWidth: 0.4,
            layout: 'form',
            labelWidth: 90,
            border: false,
            items: [{
                id: 'tipoContratante',
                itemId: 'tipoContratante',
                name: 'tipoContratante',
                fieldLabel: I18n.busqueda.tipoContratante,
                xtype: 'categoryComboBox',
                categoryType: Srp.CategoryManager.TIPO_CONTRATANTE,
                width: 120,
                allowBlank: false
            }]
        }, {
            columnWidth: 0.35,
            layout: 'form',
            labelWidth: 60,
            border: false,
            items: [{
                id: 'tipoCalidad',
                itemId: 'tipoCalidad',
                name: 'tipoCalidad',
                fieldLabel: I18n.busqueda.tipoCalidad,
                xtype: 'categoryComboBox',
                categoryType: Srp.CategoryManager.TIPO_CALIDAD_PERSONA,
                width: 120,
                allowBlank: false,
                listeners: {
                    select: {
                        fn: this.onSelectTipoCalidad,
                        scope: this
                    }
                }
            }]
        }, {
            columnWidth: 0.25,
            layout: 'hbox',
            labelWidth: 30,
            defaults: {
                flex: 1,
                layout: 'form',
                border: false
            },
            border: false,
            items: [],
            hidden: true,
            itemId: 'identificador'
        }];
        this.searchColumn.add(items);
        this.searchColumn.doLayout();
    },
    onSelectTipoCalidad: function (combo, record, index) {
        this.hideFormIdentificador();
        switch (record.get('id')) {
            case CALIDAD_PERSONA_NATURAL:
                this.showFormRun();
                break;
            case CALIDAD_PERSONA_JURIDICA:
                this.showFormRut();
                break;
            case CALIDAD_EXTRANJERA:
                this.showFormIdentificador();
                break;
            default:
                return;
        };
    },
    showFormRun: function () {
        var identificador = this.searchColumn.getComponent('identificador');
        identificador.removeAll();
        identificador.add([{
            items: [{
                id: 'identificadorRun',
                itemId: 'identificadorRun',
                xtype: 'textfield',
                name: 'identificador',
                fieldLabel: I18n.busqueda.run,
                vtype: 'rut',
                allowBlank: false,
                width: 100
            }]
        }]);
        identificador.show();
        identificador.doLayout();
    },
    showFormRut: function () {
        var identificador = this.searchColumn.getComponent('identificador');
        identificador.removeAll();
        identificador.add([{
            items: [{
                id: 'identificadorRut',
                itemId: 'identificadorRut',
                xtype: 'textfield',
                name: 'identificador',
                fieldLabel: I18n.busqueda.rut,
                allowBlank: false,
                vtype: 'rut',
                width: 100
            }]
        }]);
        identificador.doLayout();
        identificador.show();
    },
    hideFormIdentificador: function () {
        var secondRow = this.searchFieldSet.getComponent('secondRow');
        secondRow.removeAll();
        secondRow.hide();
    },
    showFormIdentificador: function () {
        var identificador = this.searchColumn.getComponent('identificador');
        identificador.removeAll();
        var secondRow = this.searchFieldSet.getComponent('secondRow');
        var formIdentificadorItems = [{
            columnWidth: 0.24,
            layout: 'form',
            labelWidth: 40,
            border: false,
            items: [{
                id: 'identificadorExtranjero',
                itemId: 'identificadorExtranjero',
                xtype: 'textfield',
                name: 'identificador',
                fieldLabel: I18n.busqueda.identificador,
                width: 120,
                allowBlank: false
            }]
        }, {
            columnWidth: 0.7,
            layout: 'form',
            labelWidth: 90,
            border: false,
            items: [{
                id: 'pais',
                itemId: 'pais',
                name: 'pais',
                fieldLabel: I18n.busqueda.pais,
                xtype: 'categoryComboBox',
                categoryType: Srp.CategoryManager.PAIS,
                width: 120,
                allowBlank: true
            }]
        }, {
            columnWidth: 0.06,
            border: false,
            layoutConfig: {
                padding: '0',
                pack: 'end',
                align: 'middle'
            },
            hidden: true
        }];
        secondRow.add(formIdentificadorItems);
        identificador.doLayout();
        identificador.show();
        secondRow.doLayout();
        secondRow.show();
    },
    getFilters: function () {
        var filters;
        var tipoBusqueda = Ext.getCmp('tipoBusqueda').getValue();
        var _searchColumn = Ext.getCmp('searchColumn');
        var _secondRow = Ext.getCmp('secondRow');
        if (!_searchColumn.getForm().isValid() || !_secondRow.getForm().isValid()) {
            return null;
        }
        switch (tipoBusqueda) {
            case BUSQUEDA_REPERTORIO_PRENDAS:
            case BUSQUEDA_REPERTORIO_NOTARIA:
                filters = _searchColumn.getForm().getValues();
                break;
            case BUSQUEDA_CONTRATANTE:
                var values = _searchColumn.getForm().getValues();
                filters = {
                    tipo: this.getFilterByTypeContratante(Ext.getCmp('tipoContratante').getValue()),
                    identificadorTipo: this.getFilterByTypeCalidad(Ext.getCmp('tipoCalidad').getValue())
                };
                switch (this.getFilterByTypeCalidad(Ext.getCmp('tipoCalidad').getValue())) {
                    case CALIDAD_EXTRANJERA:
                        filters.identificador = Ext.getCmp('identificadorExtranjero').getValue();
                        filters.pais = Ext.getCmp('pais').getValue();
                        break;
                    default:
                        filters.identificador = values.identificador;
                }
                break;
            default:
                return;
        };
        var filters = this.addDateFilters(filters);
        return filters;
    },
    addDateFilters: function (filters) {
        if (this.DATE_RANGE != 0) {
            var dateDesde = new Date().add(Date.MONTH, (-1 * this.DATE_RANGE));
            var dateHasta = new Date();
            filters.desdefecha = dateDesde.format("d/m/Y");
            filters.hastafecha = dateHasta.format("d/m/Y");
        }
        return filters;
    },
    getFilterByTypeContratante: function (contratante) {
        var list = {
            CONTRATANTE_ACREEDOR: "acreedor",
            CONTRATANTE_CONSTITUYENTE: "constituyentes",
            CONTRATANTE_DEUDOR: "deudores"
        };
        return list[contratante];
    },
    getFilterByTypeCalidad: function (calidad) {
        switch (calidad) {
            case CALIDAD_PERSONA_NATURAL:
                return "RUN";
            case CALIDAD_PERSONA_JURIDICA:
                return "RUT";
            case CALIDAD_EXTRANJERA:
                return "EXTRANJERO";
        }
    },
    onBuscar: function () {
        this.doQuery();
    },
    doQuery: function (cacheValues) {
        var values;
        if (Ext.isDefined(cacheValues)) {
            values = cacheValues;
        } else {
            values = this.getFilters();
            Srp.Canvas.cacheValues = values;
        }
        if (values != null) {
            this.loadMask(I18n.busqueda.buscando);
            Srp.FrontController.fireEvent('onDoSearch', {
                values: values
            });
        }
    },
    buildResultsFieldSet: function () {
        var unMask = this.removeMask;
        var store = new Ext.ux.data.PagingArrayStore({
            lastOptions: {
                params: {
                    start: 0,
                    limit: 10
                }
            },
            fields: [{
                name: 'numeroRepertorio',
                sortType: Ext.data.SortTypes.asInt
            }, {
                name: 'numeroRepertorioNotaria',
                sortType: Ext.data.SortTypes.asInt
            }, {
                name: 'fechaRepertorio',
                type: 'date',
                dateFormat: I18n.format.date,
                sortType: Ext.data.SortTypes.asDate
            }, {
                name: 'acreedor'
            }, {
                name: 'constituyentes'
            }, {
                name: 'nodeid'
            }, {
                name: 'nRepertorio'
            }, {
                name: 'agnoRepertorio'
            }, {
                name: 'tipoActuacion'
            }, {
                name: 'ou'
            }, {
                name: 'estado'
            }],
            listeners: {
                load: function () {
                    unMask();
                }
            }
        });
        var configGridPanel = {
            id: 'resultsGrid',
            itemId: 'resultsGrid',
            border: true,
            height: '270',
            store: store,
            view: new Ext.grid.GridView({
                emptyText: I18n.component.grid.noResults,
                forceFit: true
            }),
            columns: [{
                dataIndex: 'numeroRepertorio',
                header: I18n.busqueda.repertorioPrenda,
                sortable: true,
                width: 80
            }, {
                dataIndex: 'numeroRepertorioNotaria',
                header: I18n.busqueda.repertorioNotaria,
                sortable: true,
                width: 80
            }, {
                dataIndex: 'fechaRepertorio',
                header: I18n.busqueda.fechaRepertorio,
                sortable: true,
                renderer: Ext.util.Format.dateRenderer(I18n.format.date),
                width: 80
            }, {
                dataIndex: 'acreedor',
                header: I18n.busqueda.acreedor,
                sortable: true,
                flex: 2
            }, {
                dataIndex: 'constituyentes',
                header: I18n.busqueda.constituyentes,
                sortable: true,
                flex: 1
            }, {
                dataIndex: 'tipoActuacion',
                header: I18n.busqueda.tipo,
                sortable: true,
                renderer: util.Format.tipoActuacionRenderer,
                width: 60
            }, {
                dataIndex: 'ou',
                header: I18n.busqueda.ou,
                sortable: true,
                flex: 1
            }, {
                dataIndex: 'estado',
                header: I18n.commons.estado,
                sortable: true,
                renderer: util.Format.estadoActuacionRenderer,
                width: 60
            }],
            viewConfig: {
                forceFit: true
            },
            columnLines: true,
            bbar: new Ext.ux.PagingToolbar({
                store: store,
                pageSize: 8,
                displayInfo: true,
                displayMsg: 'Mostrando resultados {0} al {1}, de {2}',
                emptyMsg: 'No hay resultados seg&uacute;n los filtros ingresados'
            }),
            sm: new Ext.grid.RowSelectionModel({
                singleSelect: true
            }),
            listeners: this.buildListeners()
        };
        if (model.user.Usuario.tienePermiso(Permiso.EDITAR_ACTUACION)) {
            configGridPanel.tbar = this.buildTopbar();
        }
        this.resultsGrid = new Ext.grid.GridPanel(configGridPanel);
        return {
            layout: 'fit',
            border: false,
            items: [this.resultsGrid]
        };
    },
    buildTopbar: function () {
        return [{
            iconCls: "icon-editar-actuacion",
            ref: "../editarActuacionBtn",
            text: 'Editar Actuaci&oacute;n',
            disabled: true,
            handler: this.onEditActuacion,
            scope: this
        }, '-', {
            iconCls: "icon-editar-rechazo",
            ref: "../editarRechazoBtn",
            text: 'Editar Texto Rechazo',
            disabled: true,
            handler: this.onEditRechazo,
            scope: this
        }];
    },
    onEditActuacion: function () {
        this.action = ACTION_EDIT_ACTUACION;
        this.onEdit();
    },
    onEditRechazo: function () {
        this.action = ACTION_EDIT_RECHAZO;
        this.onEdit();
    },
    onEdit: function () {
        this.loadMask(I18n.mensajes.cargandoActuacion);
        var record = this.resultsGrid.getSelectionModel().getSelected();
        this.record = record;
        Srp.FrontController.fireEvent('onBuscarActuacion', {
            nodeid: record.get('nodeid')
        });
    },
    buildListeners: function () {
        return {
            scope: this,
            rowdblclick: this.onRowdblclickGrid,
            click: this.onClickGrid
        };
    },
    loadMask: function (msg) {
        var grid = Ext.getCmp('resultsGrid');
        if (typeof grid !== 'undefined') {
            grid.getEl().mask(msg, "x-mask-loading");
        }
    },
    removeMask: function () {
        var grid = Ext.getCmp('resultsGrid');
        if (typeof grid !== 'undefined') {
            grid.getEl().unmask();
        }
    },
    onRowdblclickGrid: function (thisGrid, rowIndex) {
        this.loadMask(I18n.mensajes.cargandoActuacion);
        this.action = ACTION_VIEW;
        var record = thisGrid.getStore().getAt(rowIndex);
        Srp.FrontController.fireEvent('onBuscarActuacion', {
            nodeid: record.get('nodeid')
        });
    },
    onClickGrid: function (ev) {
        var record = this.resultsGrid.getSelectionModel().getSelected();
        if (Ext.isDefined(record) && Ext.isDefined(this.resultsGrid.editarActuacionBtn)) {
            this.resultsGrid.editarActuacionBtn.enable();
            if (record.get('estado') == TIPO_ESTADO_ACTUACION_RECHAZADO) {
                this.resultsGrid.editarRechazoBtn.enable();
            } else {
                this.resultsGrid.editarRechazoBtn.disable();
            }
        } else {
            if (Ext.isDefined(this.resultsGrid.editarBtn)) {
                this.resultsGrid.editarActuacionBtn.disable();
                this.resultsGrid.editarRechazoBtn.disable();
            }
        }
    },
    processActuacion: function (actuacion) {
        this.actuacion = actuacion;
        var respuestaRvmOk = util.isRVMValid(this.actuacion);
        if (respuestaRvmOk) {
            if (this.action == ACTION_VIEW) {
                actuacion.isComprobanteNotaria = true;
                verContratoWindow = new Srp.gui.VerContratoWindow({
                    actuacion: actuacion
                });
                verContratoWindow.show();
            } else {
                if (this.action == ACTION_EDIT_ACTUACION) {
                    Srp.FrontController.fireEvent('Menu.onUpdateContent');
                    actuacion.taskid = this.record.get('taskid');
                    actuacion.tramite = actuacion.tipoActuacion;
                    actuacion.inUPEdition = true;
                    actuacion.type = TipoTarea.CORREGIR_ACTUACION;
                    var action = Srp.NavigationManager.getAction(actuacion.type, actuacion.tramite);
                    if (Ext.isDefined(action[actuacion.tipoOu])) {
                        Srp.Canvas.updateContent(action[actuacion.tipoOu], {
                            actuacion: actuacion,
                            itemId: 'content',
                            editOnly: true
                        });
                    }
                } else {
                    var actions = ['onValidate', 'onRechazarActuacion', 'onModificarResolucionExenta'];
                    Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
                        actions: actions,
                        confirmMessage: I18n.mensajes.textoRechazoModificado,
                        extraParams: {
                            rechazoEditMode: true
                        }
                    });
                }
            }
        }
        this.removeMask();
    },
    getJSON: function () {
        return this.actuacion;
    },
    isValid: function () {
        return true;
    },
    registrarEventos: function () {
        var store = Ext.getCmp('resultsGrid').getStore();
        var searchActuacionByTypeCmd = new Srp.command.SearchActuacionByTypeCmd();
        searchActuacionByTypeCmd.setParameter('store', store);
        var buscarActuacionCmd = new Srp.command.BuscarActuacionCmd('BUSCADOR_BASE_ACTUACION');
        var recuperarActuacionCmd = new Srp.command.RecuperarActuacionCmd('BUSCADOR_BASE_ACTUACION');
        recuperarActuacionCmd.setParameter('obj', this);
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('wizard', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onDoSearch',
            command: searchActuacionByTypeCmd
        }, {
            name: 'onBuscarActuacion',
            command: buscarActuacionCmd
        }, {
            name: 'onLoadActuacion',
            command: recuperarActuacionCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.BuscadorActuacionUPPanel = Ext.extend(Srp.gui.BuscadorActuacionBasePanel, {
    initComponent: function () {
        Srp.gui.BuscadorActuacionUPPanel.superclass.initComponent.apply(this);
    },
    getFilters: function () {
        this.DATE_RANGE = Srp.conf.Properties.SEARCH_DATE_RANGE.UP;
        return Srp.gui.BuscadorActuacionUPPanel.superclass.getFilters.apply(this);
    }
});
Ext.ns('Srp.gui');
Srp.gui.BuscadorActuacionNotariaPanel = Ext.extend(Srp.gui.BuscadorActuacionBasePanel, {
    initComponent: function () {
        Ext.apply(this, {});
        Srp.gui.BuscadorActuacionNotariaPanel.superclass.initComponent.apply(this);
    },
    getFilters: function () {
        this.DATE_RANGE = Srp.conf.Properties.SEARCH_DATE_RANGE.NOTARIA;
        var values = Srp.gui.BuscadorActuacionNotariaPanel.superclass.getFilters.apply(this);
        if (values != null) {
            values.privado = 'si';
        }
        return values;
    }
});
Ext.ns('Srp.gui');
Srp.gui.BuscadorActuacionOAIPanel = Ext.extend(Srp.gui.BuscadorActuacionBasePanel, {
    initComponent: function () {
        Ext.apply(this, {});
        Srp.gui.BuscadorActuacionOAIPanel.superclass.initComponent.apply(this);
    },
    getFilters: function () {
        this.DATE_RANGE = Srp.conf.Properties.SEARCH_DATE_RANGE.OAI;
        var values = Srp.gui.BuscadorActuacionOAIPanel.superclass.getFilters.apply(this);
        if (values != null) {
            values.privado = 'si';
        }
        return values;
    }
});
Ext.ns('Srp.gui');
Srp.gui.IngresoOU = Ext.extend(Ext.Panel, {
    border: false,
    plain: true,
    region: 'center',
    height: 600,
    padding: 5,
    autoScroll: true,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildButtons()
        });
        Srp.gui.IngresoOU.superclass.initComponent.call(this);
        this.registrarEventos();
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.crearOU);
        if (this.actuacion) {
            this.setJSON(this.actuacion);
        }
    },
    buildItems: function () {
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'form',
            labelWidth: 140,
            items: [{
                xtype: 'categoryComboBox',
                fieldLabel: I18n.notaria.modificacion.wizard.tipoModificacion,
                categoryType: Srp.CategoryManager.TIPO_OU,
                itemId: 'tipoModificacion',
                listeners: {
                    scope: this,
                    'select': this.onChangeTipoModificacion
                }
            }, {
                xtype: 'textfield',
                itemId: 'nombre',
                name: 'nombre',
                fieldLabel: I18n.commons.nombreOU
            }, {
                xtype: 'textfield',
                itemId: 'grou',
                name: 'grou',
                fieldLabel: I18n.commons.grou
            }, {
                xtype: 'textfield',
                itemId: 'Dirección',
                name: 'direccion',
                fieldLabel: I18n.commons.direccion
            }]
        }];
        return items;
    },
    onChangeTipoModificacion: function () {},
    getJSON: function (isResumen) {},
    setJSON: function (actuacion) {},
    registrarEventos: function () {},
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.terminar,
            scope: this,
            handler: this.onSaveAdjuntos,
            iconCls: 'icon-button-save-attachment'
        }, '-', {
            text: I18n.notaria.actuacion.wizard.button.grabarYSalir,
            scope: this,
            handler: this.onSave,
            iconCls: 'icon-save'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.commons.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onCancelar: function () {
        Srp.Canvas.goHome();
    },
    isValid: function () {
        return true;
    },
    onSaveAdjuntos: function () {
        var actions = ['onValidate', 'onSave', 'onAdjuntar', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions
        });
    },
    onSave: function () {
        var actions = ['onValidate', 'onSave', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions
        });
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenAcreedorFieldSet = Ext.extend(Ext.form.FieldSet, {
    layout: 'column',
    title: I18n.commons.acreedor,
    constructor: function (response) {
        this.response = response;
        Ext.apply(this, {
            items: this.buildItems(response)
        });
        Srp.gui.ResumenAcreedorFieldSet.superclass.constructor.call(this);
    },
    buildItems: function (response) {
        var items = [{
            xtype: 'fieldset',
            columnWidth: 0.5,
            padding: '0 0 0 0',
            border: false,
            defaults: {
                labelStyle: 'width:100px;',
                xtype: 'displayfield'
            },
            items: this.buildDisplayFields(response, true)
        }, {
            xtype: 'fieldset',
            columnWidth: 0.5,
            padding: '0 0 0 0',
            border: false,
            defaults: {
                labelStyle: 'width:100px;',
                xtype: 'displayfield'
            },
            items: this.buildDisplayFields(response, false)
        }];
        return items;
    },
    onRender: function (ct, position) {
        this.loadData();
        Srp.gui.ResumenAcreedorFieldSet.superclass.onRender.call(this, ct, position);
    },
    buildDisplayFields: function (response, isleft) {
        var items = new Array();
        var itemsDefinition = new Array();
        if (Ext.isDefined(response.acreedor)) {
            if (CALIDAD_PERSONA_NATURAL == eval(ACREEDOR_PERSONA_TIPO)) {
                itemsDefinition = [
                    [I18n.commons.calidad, 'calidad'],
                    [eval(ACREEDOR_IDENTIFICADOR_TIPO), 'numero'],
                    [I18n.commons.nombres, 'nombres'],
                    [I18n.commons.apellidos, 'apellidos']
                ];
            } else if (CALIDAD_PERSONA_JURIDICA == eval(ACREEDOR_PERSONA_TIPO)) {
                itemsDefinition = [
                    [I18n.commons.calidad, 'calidad'],
                    [eval(ACREEDOR_IDENTIFICADOR_TIPO), 'numero'],
                    [I18n.commons.razonSocial, 'razonSocial']
                ];
            } else if (CALIDAD_EXTRANJERA == eval(ACREEDOR_PERSONA_TIPO)) {
                var identificadorTipo = eval(ACREEDOR_IDENTIFICADOR_TIPO);
                if (identificadorTipo) {
                    var category = Srp.CategoryManager.getCategory(Srp.CategoryManager.IDENTIFICADOR_TIPO_EXTRANJERO, identificadorTipo);
                    identificadorTipo = category ? category.text : identificadorTipo;
                }
                itemsDefinition = [
                    [identificadorTipo, 'numero'],
                    [I18n.commons.nombres, 'nombres'],
                    [I18n.commons.pais, 'pais']
                ];
            }
        }
        for (var i = 0; i < itemsDefinition.length; i++) {
            if (isleft) {
                items.push({
                    fieldLabel: itemsDefinition[i][0],
                    name: itemsDefinition[i][1]
                });
            }
            isleft = !isleft;
        }
        return items;
    },
    loadData: function (responseAux) {
        var response = !(responseAux) ? this.response : responseAux;
        util.Component.setValue(this, 'nombres', eval(ACREEDOR_NOMBRES));
        var apellidoPaterno = eval(ACREEDOR_APELLIDO_PATERNO);
        var apellidoMaterno = eval(ACREEDOR_APELLIDO_MATERNO);
        util.Component.setValue(this, 'apellidos', (apellidoPaterno ? apellidoPaterno : '') + ' ' + (apellidoMaterno ? apellidoMaterno : ''));
        util.Component.setValue(this, 'numero', util.Format.formatIdentificador(eval(ACREEDOR_IDENTIFICADOR), eval(ACREEDOR_PERSONA_TIPO)));
        util.Component.setValue(this, 'email', eval(ACREEDOR_EMAIL));
        if (eval(ACREEDOR_PERSONA_TIPO)) {
            var calidad = Srp.CategoryManager.getCategory(Srp.CategoryManager.TIPO_CALIDAD_PERSONA, eval(ACREEDOR_PERSONA_TIPO));
            util.Component.setValue(this, 'calidad', calidad ? calidad.text : '');
        }
        util.Component.setValue(this, 'razonSocial', eval(ACREEDOR_RAZON_SOCIAL));
        if (eval(ACREEDOR_PAIS)) {
            var calidad = Srp.CategoryManager.getCategory(Srp.CategoryManager.PAIS, eval(ACREEDOR_PAIS));
            util.Component.setValue(this, 'pais', calidad ? calidad.text : '');
        }
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenDeudorFieldSet = Ext.extend(Ext.form.FieldSet, {
    layout: 'column',
    title: I18n.commons.deudor,
    constructor: function (response) {
        this.response = response;
        Ext.apply(this, {
            items: this.buildItems(response)
        });
        Srp.gui.ResumenDeudorFieldSet.superclass.constructor.call(this);
    },
    buildItems: function (response) {
        var items = [{
            xtype: 'fieldset',
            columnWidth: 0.5,
            padding: '0 0 0 0',
            border: false,
            defaults: {
                labelStyle: 'width:100px;',
                xtype: 'displayfield'
            },
            items: this.buildDisplayFields(response, true)
        }, {
            xtype: 'fieldset',
            columnWidth: 0.5,
            padding: '0 0 0 0',
            border: false,
            defaults: {
                labelStyle: 'width:100px;',
                xtype: 'displayfield'
            },
            items: this.buildDisplayFields(response, false)
        }]
        return items;
    },
    onRender: function (ct, position) {
        this.loadData();
        Srp.gui.ResumenDeudorFieldSet.superclass.onRender.call(this, ct, position);
    },
    buildDisplayFields: function (response, isleft) {
        var items = new Array();
        var itemsDefinition = new Array();
        if (CALIDAD_PERSONA_NATURAL == eval(DEUDOR_PERSONA_TIPO)) {
            itemsDefinition = [
                [I18n.commons.calidad, 'calidad'],
                [eval(DEUDOR_IDENTIFICADOR_TIPO), 'numero'],
                [I18n.commons.nombres, 'nombres'],
                [I18n.commons.apellidos, 'apellidos']
            ];
        } else if (CALIDAD_PERSONA_JURIDICA == eval(DEUDOR_PERSONA_TIPO)) {
            itemsDefinition = [
                [I18n.commons.calidad, 'calidad'],
                [eval(DEUDOR_IDENTIFICADOR_TIPO), 'numero'],
                [I18n.commons.razonSocial, 'razonSocial']
            ];
        } else if (CALIDAD_EXTRANJERA == eval(DEUDOR_PERSONA_TIPO)) {
            var identificadorTipo = eval(DEUDOR_IDENTIFICADOR_TIPO);
            if (identificadorTipo) {
                var category = Srp.CategoryManager.getCategory(Srp.CategoryManager.IDENTIFICADOR_TIPO_EXTRANJERO, identificadorTipo);
                identificadorTipo = category ? category.text : identificadorTipo;
            }
            itemsDefinition = [
                [identificadorTipo, 'numero'],
                [I18n.commons.nombres, 'nombres'],
                [I18n.commons.pais, 'pais']
            ];
        }
        for (var i = 0; i < itemsDefinition.length; i++) {
            if (isleft) {
                items.push({
                    fieldLabel: itemsDefinition[i][0],
                    name: itemsDefinition[i][1]
                });
            }
            isleft = !isleft;
        }
        return items;
    },
    loadData: function (responseAux) {
        var response = !(responseAux) ? this.response : responseAux;
        util.ComponentUtils.setValue(this, 'nombres', eval(DEUDOR_NOMBRES));
        var apellidoPaterno = eval(DEUDOR_APELLIDO_PATERNO);
        var apellidoMaterno = eval(DEUDOR_APELLIDO_MATERNO);
        util.Component.setValue(this, 'apellidos', (apellidoPaterno ? apellidoPaterno : '') + ' ' + (apellidoMaterno ? apellidoMaterno : ''));
        util.Component.setValue(this, 'numero', util.Format.formatIdentificador(eval(DEUDOR_IDENTIFICADOR), eval(DEUDOR_PERSONA_TIPO)));
        util.Component.setValue(this, 'email', eval(DEUDOR_EMAIL));
        if (eval(DEUDOR_PERSONA_TIPO)) {
            var calidad = Srp.CategoryManager.getCategory(Srp.CategoryManager.TIPO_CALIDAD_PERSONA, eval(DEUDOR_PERSONA_TIPO));
            util.ComponentUtils.setValue(this, 'calidad', calidad ? calidad.text : '');
        }
        util.ComponentUtils.setValue(this, 'razonSocial', eval(DEUDOR_RAZON_SOCIAL));
        if (eval(DEUDOR_PAIS)) {
            var calidad = Srp.CategoryManager.getCategory(Srp.CategoryManager.PAIS, eval(DEUDOR_PAIS));
            util.Component.setValue(this, 'pais', calidad ? calidad.text : '');
        }
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenAbstractContratantesFieldSet = Ext.extend(Ext.form.FieldSet, {
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(this.response)
        });
        Srp.gui.ResumenAbstractContratantesFieldSet.superclass.initComponent.call(this);
    },
    buildItems: function (response) {
        var anotacionesStore = new Ext.data.JsonStore({
            "data": [],
            "autoLoad": true,
            "fields": [{
                name: CONTRATANTE_NOMBRES
            }, {
                name: CONTRATANTE_RAZON_SOCIAL
            }, {
                name: CONTRATANTE_APELLIDO_PATERNO
            }, {
                name: CONTRATANTE_APELLIDO_MATERNO
            }, {
                name: CONTRATANTE_IDENTIFICADOR_TIPO
            }, {
                name: CONTRATANTE_PERSONA_TIPO
            }, {
                name: CONTRATANTE_IDENTIFICADOR
            }, {
                name: CONTRATANTE_EMAIL
            }, {
                name: CONTRATANTE_PAIS
            }]
        });
        var listView = {
            xtype: 'listview',
            name: 'listView',
            border: 1
        };
        listView.store = anotacionesStore;
        listView.columns = this.buildColumnModel(response);
        return listView;
    },
    buildColumnModel: function (response) {
        var columnModel = [{
            width: 0.15,
            header: I18n.commons.nombres + ' / ' + I18n.commons.razonSocial,
            tpl: '{' + CONTRATANTE_NOMBRES + '} {' + CONTRATANTE_RAZON_SOCIAL + '}'
        }, {
            width: 0.15,
            header: I18n.commons.apellidos,
            tpl: '{' + CONTRATANTE_APELLIDO_PATERNO + '} {' + CONTRATANTE_APELLIDO_MATERNO + '}'
        }, {
            width: 0.15,
            header: I18n.commons.calidad,
            tpl: util.Format.getTplEnumCalidadPersona(CONTRATANTE_PERSONA_TIPO)
        }, {
            width: 0.15,
            header: I18n.commons.tipoIdentificador,
            tpl: util.Format.getTplEnumIdentificadorTipoExt(CONTRATANTE_IDENTIFICADOR_TIPO)
        }, {
            width: 0.25,
            dataIndex: CONTRATANTE_IDENTIFICADOR,
            header: I18n.commons.numero,
            tpl: util.Format.getTplIdentificador(CONTRATANTE_PERSONA_TIPO, CONTRATANTE_IDENTIFICADOR, CONTRATANTE_PAIS)
        }];
        return columnModel;
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenDeudoresFieldSet = Ext.extend(Srp.gui.ResumenAbstractContratantesFieldSet, {
    title: I18n.commons.deudores,
    initComponent: function () {
        Srp.gui.ResumenDeudoresFieldSet.superclass.initComponent.call(this);
    },
    loadData: function (response) {
        var deudores = util.JSON.filterBy(eval(DEUDORES), CONTRATANTE_REMOVED, false);
        util.ComponentUtils.setValue(this, 'listView', deudores);
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenConstituyenteFieldSet = Ext.extend(Ext.form.FieldSet, {
    layout: 'column',
    title: I18n.commons.constituyente,
    constructor: function (response) {
        this.response = response;
        Ext.apply(this, {
            items: this.buildItems(response)
        });
        Srp.gui.ResumenConstituyenteFieldSet.superclass.constructor.call(this);
    },
    buildItems: function (response) {
        var items = [{
            xtype: 'fieldset',
            columnWidth: 0.5,
            padding: '0 0 0 0',
            border: false,
            defaults: {
                labelStyle: 'width:100px;',
                xtype: 'displayfield'
            },
            items: this.buildDisplayFields(response, true)
        }, {
            xtype: 'fieldset',
            columnWidth: 0.5,
            padding: '0 0 0 0',
            border: false,
            defaults: {
                labelStyle: 'width:100px;',
                xtype: 'displayfield'
            },
            items: this.buildDisplayFields(response, false)
        }];
        return items;
    },
    onRender: function (ct, position) {
        this.loadData();
        Srp.gui.ResumenConstituyenteFieldSet.superclass.onRender.call(this, ct, position);
    },
    buildDisplayFields: function (response, isleft) {
        var items = new Array();
        var itemsDefinition = new Array();
        if (CALIDAD_PERSONA_NATURAL == eval(CONSTITUYENTE_PERSONA_TIPO)) {
            itemsDefinition = [
                [I18n.commons.calidad, 'calidad'],
                [eval(CONSTITUYENTE_IDENTIFICADOR_TIPO), 'numero'],
                [I18n.commons.nombres, 'nombres'],
                [I18n.commons.apellidos, 'apellidos']
            ];
        } else if (CALIDAD_PERSONA_JURIDICA == eval(CONSTITUYENTE_PERSONA_TIPO)) {
            itemsDefinition = [
                [I18n.commons.calidad, 'calidad'],
                [eval(CONSTITUYENTE_IDENTIFICADOR_TIPO), 'numero'],
                [I18n.commons.razonSocial, 'razonSocial']
            ];
        } else if (CALIDAD_EXTRANJERA == eval(CONSTITUYENTE_PERSONA_TIPO)) {
            var identificadorTipo = eval(CONSTITUYENTE_IDENTIFICADOR_TIPO);
            if (identificadorTipo) {
                var category = Srp.CategoryManager.getCategory(Srp.CategoryManager.IDENTIFICADOR_TIPO_EXTRANJERO, identificadorTipo);
                identificadorTipo = category ? category.text : identificadorTipo;
            }
            itemsDefinition = [
                [identificadorTipo, 'numero'],
                [I18n.commons.nombres, 'nombres'],
                [I18n.commons.pais, 'pais']
            ];
        }
        for (var i = 0; i < itemsDefinition.length; i++) {
            if (isleft) {
                items.push({
                    fieldLabel: itemsDefinition[i][0],
                    name: itemsDefinition[i][1]
                });
            }
            isleft = !isleft;
        }
        return items;
    },
    loadData: function (responseAux) {
        var response = !(responseAux) ? this.response : responseAux;
        util.Component.setValue(this, 'nombres', eval(CONSTITUYENTE_NOMBRES));
        var apellidoPaterno = eval(CONSTITUYENTE_APELLIDO_PATERNO);
        var apellidoMaterno = eval(CONSTITUYENTE_APELLIDO_MATERNO);
        util.Component.setValue(this, 'apellidos', (apellidoPaterno ? apellidoPaterno : '') + ' ' + (apellidoMaterno ? apellidoMaterno : ''));
        util.Component.setValue(this, 'numero', util.Format.formatIdentificador(eval(CONSTITUYENTE_IDENTIFICADOR), eval(CONSTITUYENTE_PERSONA_TIPO)));
        util.Component.setValue(this, 'email', eval(CONSTITUYENTE_EMAIL));
        if (eval(CONSTITUYENTE_PERSONA_TIPO)) {
            var calidad = Srp.CategoryManager.getCategory(Srp.CategoryManager.TIPO_CALIDAD_PERSONA, eval(CONSTITUYENTE_PERSONA_TIPO));
            util.ComponentUtils.setValue(this, 'calidad', calidad ? calidad.text : '');
        }
        util.Component.setValue(this, 'razonSocial', eval(CONSTITUYENTE_RAZON_SOCIAL));
        if (eval(CONSTITUYENTE_PAIS)) {
            var calidad = Srp.CategoryManager.getCategory(Srp.CategoryManager.PAIS, eval(CONSTITUYENTE_PAIS));
            util.Component.setValue(this, 'pais', calidad ? calidad.text : '');
        }
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenConstituyentesFieldSet = Ext.extend(Srp.gui.ResumenAbstractContratantesFieldSet, {
    title: I18n.commons.constituyentes,
    initComponent: function () {
        Srp.gui.ResumenConstituyentesFieldSet.superclass.initComponent.call(this);
    },
    loadData: function (response) {
        var constituyentes = util.JSON.filterBy(eval(CONSTITUYENTES), CONTRATANTE_REMOVED, false);
        util.ComponentUtils.setValue(this, 'listView', constituyentes);
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenAntecedentesPanel = Ext.extend(Ext.Panel, {
    border: 0,
    autoheight: true,
    padding: 5,
    iconCls: 'icon-wizard-step-',
    title: I18n.commons.antecedentes,
    width: '97%',
    constructor: function (response, showRVMDetail) {
        var componentsDefinition = [];
        componentsDefinition.push([INSCRIPCION + ' && "' + eval(TIPO_ACTUACION_I) + '"' + ' != "' + TIPO_ACTUACION_INSCRIPCION + '"', 'Srp.gui.ResumenContratoFieldSet(response)']);
        componentsDefinition.push([TIPO_DOCUMENTO, 'Srp.gui.CaracteristicasContratoFieldSet(response)']);
        if (util.JSON.hasNonEmptyValues(eval(REINSCRIPCION))) {
            componentsDefinition.push([REINSCRIPCION, 'Srp.gui.ResumenReinscripcionFieldSet(response)']);
        }
        componentsDefinition.push([ANOTACIONES_RVM + ' && ' + ANOTACIONES_RVM + '.length > 0 &&  ! ' + TIPO_MODIFICACION, 'Srp.gui.ResumenAnotacionesRvmFieldSet(response, ' + showRVMDetail + ')']);
        componentsDefinition.push([TIPO_MODIFICACION, 'Srp.gui.ResumenModificacionPanel(response)']);
        componentsDefinition.push([MEDIO_PAGO, 'Srp.gui.ResumenMedioPagoFieldSet(response)']);
        Ext.apply(this, {
            items: util.ComponentUtils.createItems(response, componentsDefinition)
        });
        Srp.gui.ResumenAntecedentesPanel.superclass.constructor.call(this);
    },
    loadData: function (response) {
        util.ComponentUtils.loadData(this.items, response);
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenReinscripcionFieldSet = Ext.extend(Ext.form.FieldSet, {
    layout: 'column',
    title: I18n.commons.reinscripcion,
    showPanelRight: true,
    showPanelLeft: true,
    constructor: function (response) {
        this.response = response;
        Ext.apply(this, {
            items: this.buildItems(response)
        });
        Srp.gui.ResumenReinscripcionFieldSet.superclass.constructor.call(this);
    },
    onRender: function (ct, position) {
        this.loadData();
        Srp.gui.ResumenReinscripcionFieldSet.superclass.onRender.call(this, ct, position);
        if (!this.showPanelRight || !this.showPanelLeft) {
            this.hide();
        }
    },
    buildItems: function (response) {
        var itemsRight = this.buildDisplayItems(response, true);
        var itemsLeft = this.buildDisplayItems(response, false);
        var items = [{
            xtype: 'fieldset',
            padding: '0 0 0 0',
            columnWidth: 0.6,
            border: false,
            defaults: {
                labelStyle: 'width:150px;',
                xtype: 'displayfield'
            },
            items: itemsRight
        }, {
            xtype: 'fieldset',
            padding: '0 0 0 0',
            columnWidth: 0.4,
            border: false,
            defaults: {
                labelStyle: 'width:150px;',
                xtype: 'displayfield'
            },
            items: itemsLeft
        }];
        return items;
    },
    buildDisplayItems: function (response, isLeft) {
        var items = [];
        var itemsDefinitions = [];
        if (isLeft) {
            if (response.reinscripcion.tipoDocumentoReinscripcion) {
                itemsDefinitions.push([I18n.commons.tipoDocumento, 'tipoDocumento']);
            }
            if (response.reinscripcion.numeroRepertorioAnterior) {
                itemsDefinitions.push([I18n.commons.nRepertorioNotaria, 'nRepertorioNotaria']);
            }
            if (response.reinscripcion.agnoRepertorioAnterior) {
                itemsDefinitions.push([I18n.commons.agnoRepertoria, 'agnoRepertorioNotaria']);
            }
            if (eval(REINSCRIPCION_NOMBRE_NOTARIO)) {
                itemsDefinitions.push([I18n.commons.nombreNotario, 'nombreNotario']);
            }
            if (itemsDefinitions.length != 4) {
                this.showPanelLeft = false;
            }
        } else {
            if (eval(REINSCRIPCION_FECHA_PROTOCOLIZACION)) itemsDefinitions.push([I18n.commons.fechaProtocolizacion, 'fechaProtocolizacion']);
            if (eval(REINSCRIPCION_FECHA_AUTORIZACION)) itemsDefinitions.push([I18n.commons.fechaAutorizacion, 'fechaAutorizacion']);
            if (eval(REINSCRIPCION_FECHA_SUSCRIPCION)) itemsDefinitions.push([I18n.commons.fechaSuscripcion, 'fechaSuscripcion']);
            if (eval(REINSCRIPCION_FECHA_OTORGAMIENTO)) itemsDefinitions.push([I18n.commons.fechaOtorgamiento, 'fechaOtorgamiento']);
            if (eval(REINSCRIPCION_RUN_NOTARIO)) itemsDefinitions.push([I18n.commons.runNotario, 'runNotario']);
            if (itemsDefinitions.length < 3) {
                this.showPanelRight = false;
            }
        }
        for (var i = 0; i < itemsDefinitions.length; i++) {
            items.push({
                fieldLabel: itemsDefinitions[i][0],
                name: itemsDefinitions[i][1]
            });
        }
        return items;
    },
    loadData: function (response) {
        response = !(response) ? this.response : response;
        if (eval(REINSCRIPCION_TIPO_DOCUMENTO)) {
            var tipoDocumento = Srp.CategoryManager.getCategory(Srp.CategoryManager.TIPO_DOCUMENTO, eval(REINSCRIPCION_TIPO_DOCUMENTO));
            util.Component.setValue(this, 'tipoDocumento', tipoDocumento ? tipoDocumento.text : '');
        }
        util.ComponentUtils.setValue(this, 'fechaProtocolizacion', util.Format.formatDate(eval(REINSCRIPCION_FECHA_PROTOCOLIZACION)));
        util.ComponentUtils.setValue(this, 'fechaAutorizacion', util.Format.formatDate(eval(REINSCRIPCION_FECHA_AUTORIZACION)));
        util.ComponentUtils.setValue(this, 'fechaSuscripcion', util.Format.formatDate(eval(REINSCRIPCION_FECHA_SUSCRIPCION)));
        util.ComponentUtils.setValue(this, 'fechaOtorgamiento', util.Format.formatDate(eval(REINSCRIPCION_FECHA_OTORGAMIENTO)));
        util.ComponentUtils.setValue(this, 'agnoRepertorioNotaria', eval(REINSCRIPCION_AGNO_REPERTORIO_NOTARIA));
        util.ComponentUtils.setValue(this, 'nRepertorioNotaria', eval(REINSCRIPCION_NUMERO_REPERTORIO_NOTARIA));
        util.ComponentUtils.setValue(this, 'nombreNotario', eval(REINSCRIPCION_NOMBRE_NOTARIO));
        util.ComponentUtils.setValue(this, 'runNotario', util.Format.formatRut(eval(REINSCRIPCION_RUN_NOTARIO)));
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenAdjuntosPanel = Ext.extend(Ext.Panel, {
    border: 0,
    autoheight: true,
    padding: 5,
    iconCls: 'icon-wizard-step-',
    title: I18n.commons.adjuntos,
    width: '97%',
    constructor: function (response) {
        var componentsDefinition = [
            [NOMBRE_ARCHIVO_CONTRATO, 'Srp.gui.ContratoArchivoFieldSet()'],
            [ANEXOS, 'Srp.gui.AnexosContratoPanel()']
        ];
        Ext.apply(this, {
            items: util.ComponentUtils.createItems(response, componentsDefinition)
        });
        Srp.gui.ResumenAdjuntosPanel.superclass.constructor.call(this);
    },
    loadData: function (response) {
        util.ComponentUtils.loadData(this.items, response);
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenHistorialWorkflowPanel = Ext.extend(Ext.Panel, {
    border: 0,
    autoheight: true,
    padding: 5,
    iconCls: 'icon-historial-workflow',
    title: I18n.commons.historial.titulo,
    width: '97%',
    initComponent: function () {
        var config = {
            items: [{
                xtype: 'box',
                height: 100,
                id: 'resumenHistorialWorkflowBox',
                itemId: 'resumenHistorialWorkflowBox'
            }]
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ResumenHistorialWorkflowPanel.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    onRender: function (ct, position) {
        Srp.gui.ResumenHistorialWorkflowPanel.superclass.onRender.call(this, ct, position);
        this.loadMask(I18n.mensajes.cargandoWorkflowHistory);
    },
    loadMask: function (msg) {
        this.getEl().mask(msg, "x-mask-loading");
    },
    removeMask: function () {
        var el = this.getEl();
        if (Ext.isDefined(el)) {
            el.unmask();
        }
    },
    loadData: function (response) {
        this.actuacion = response;
        this.onSearchWorkflowHistory();
    },
    onSearchWorkflowHistory: function () {
        this.actuacion.respuestaRVM = PPU_RESPUESTA_OK;
        var filtrosSearchWorkflowHistory = {
            taskid: this.actuacion.taskid,
            nodeid: this.actuacion.nodeid,
            nRepertorio: this.actuacion.numeroRepertorio,
            agno: this.actuacion.agnoRepertorio
        };
        Srp.FrontController.fireEvent('onReadySearchWorkflowHistory', filtrosSearchWorkflowHistory);
    },
    onProcessWorkflowHistory: function (historyList) {
        if (historyList != null) {
            this.actuacion.workflowHistory = historyList.tasks;
            this.historyList = historyList.tasks;
            this.loadWorkflowList(historyList.tasks);
        } else {
            this.hide();
        }
    },
    loadWorkflowList: function (workflowHistory) {
        this.removeMask();
        this.remove('resumenHistorialWorkflowBox');
        var componentsDefinition = [
            [workflowHistory, 'Srp.gui.HistorialWorkflowListView()']
        ];
        this.add(util.ComponentUtils.createItems(workflowHistory, componentsDefinition));
        this.doLayout();
        util.ComponentUtils.loadData(this.items, workflowHistory);
    },
    registrarEventos: function (workflowHistory) {
        var obtenerWorkflowHistoryCmd = new Srp.command.ObtenerWorkflowHistoryCmd(this.id);
        obtenerWorkflowHistoryCmd.setParameter('obj', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onReadySearchWorkflowHistory',
            command: obtenerWorkflowHistoryCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onDestroyWindow',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.AnexosContratoPanel = Ext.extend(Ext.form.FieldSet, {
    title: I18n.commons.anexos,
    initComponent: function () {
        var anexosContratoListView = new Srp.gui.AnexosContratoListView();
        Ext.apply(this, {
            items: anexosContratoListView
        });
        Srp.gui.AnexosContratoPanel.superclass.initComponent.call(this);
    },
    onRender: function (ct, position) {
        Srp.gui.AnexosContratoPanel.superclass.onRender.call(this, ct, position);
    },
    loadData: function (response) {
        util.ComponentUtils.loadData(this.items, response);
    }
});
Ext.ns('Srp', 'Srp.gui');
Srp.gui.ContratoDocumentoPanel = Ext.extend(Ext.form.FieldSet, {
    id: 'contratoDocumentoFieldSet',
    showProhibicion: true,
    makeValidationRepNot: false,
    initComponent: function () {
        var config = {
            items: this.buildItems()
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ContratoDocumentoPanel.superclass.initComponent.apply(this, arguments);
        this.registrarEventos();
    },
    onRender: function (ct, position) {
        Srp.gui.ContratoDocumentoPanel.superclass.onRender.call(this, ct, position);
    },
    buildItems: function () {
        var firstItems = [];
        firstItems.push({
            xtype: 'tipodocumentocombobox',
            itemId: 'tipoDocumento',
            contenedor: this
        });
        if (this.showProhibicion) {
            firstItems.push({
                name: 'prohibicion',
                fieldLabel: I18n.notaria.actuacion.wizard.checkbox.prohibicion,
                displayField: 'antecedentes.prohibicion',
                xtype: 'checkbox'
            });
        }
        var numRepertorioNot = {
            xtype: 'numeroRepertorioNotariafield',
            name: 'numeroRepertorioNotaria',
            fieldLabel: I18n.notaria.actuacion.wizard.textfield.numeroRepertorio,
            itemId: 'numeroRepertorioNotaria'
        };
        var agnoRepertorioNot = {
            xtype: 'agnofield',
            fieldLabel: I18n.notaria.actuacion.wizard.numberfield.agnoRepertorio,
            name: 'agnoRepertorioNotaria',
            itemId: 'agnoRepertorioNotaria'
        };
        if (this.makeValidationRepNot) {
            numRepertorioNot.listeners = {
                scope: this,
                change: this.validarRepertorioNotoria,
                afterrender: this.validarRepertorioNotoria
            };
            agnoRepertorioNot.listeners = {
                scope: this,
                change: this.validarRepertorioNotoria
            };
            firstItems.push({
                xtype: 'hidden',
                value: REPERTORIO_NOTARIA_DESCONOCIDO,
                name: 'numeroRepertorioNotariaValido',
                itemId: 'numeroRepertorioNotariaValido'
            });
        }
        firstItems.push(numRepertorioNot);
        firstItems.push(agnoRepertorioNot);
        var items = [{
            columnWidth: 0.55,
            layout: 'form',
            labelWidth: 170,
            border: false,
            itemId: 'column-first',
            items: firstItems
        }, {
            columnWidth: 0.45,
            layout: 'form',
            labelWidth: 140,
            itemId: 'fechas',
            id: 'fechas',
            border: false,
            items: [{
                cls: 'escritura',
                fieldLabel: I18n.notaria.actuacion.wizard.datefield.otorgamiento,
                format: I18n.format.date,
                xtype: 'datefield',
                name: 'fechaOtorgamiento',
                id: 'fechaOtorgamiento',
                itemId: 'fechaOtorgamiento',
                vtype: 'daterange',
                endDateField: 'fechaSuscripcion',
                editable: true,
                maxValue: TODAY
            }, {
                cls: 'escritura',
                fieldLabel: I18n.notaria.actuacion.wizard.datefield.suscripcion,
                format: I18n.format.date,
                xtype: 'datefield',
                name: 'fechaSuscripcion',
                id: 'fechaSuscripcion',
                itemId: 'fechaSuscripcion',
                vtype: 'daterange',
                startDateField: 'fechaOtorgamiento',
                editable: true,
                maxValue: TODAY
            }, {
                cls: 'contrato',
                fieldLabel: I18n.notaria.actuacion.wizard.datefield.autorizacion,
                format: I18n.format.date,
                hidden: true,
                xtype: 'datefield',
                name: 'fechaAutorizacion',
                id: 'fechaAutorizacion',
                itemId: 'fechaAutorizacion',
                vtype: 'daterange',
                endDateField: 'fechaProtocolizacion',
                editable: false,
                maxValue: TODAY
            }, {
                cls: 'contrato',
                fieldLabel: I18n.notaria.actuacion.wizard.datefield.protocolizacion,
                format: I18n.format.date,
                hidden: true,
                xtype: 'datefield',
                name: 'fechaProtocolizacion',
                id: 'fechaProtocolizacion',
                itemId: 'fechaProtocolizacion',
                vtype: 'daterange',
                startDateField: 'fechaAutorizacion',
                editable: false,
                maxValue: TODAY
            }]
        }];
        return new Ext.form.FormPanel({
            items: items,
            layout: 'column',
            border: false,
            itemId: 'contratoDocumentoFormPanel'
        });
    },
    safeDates: function (formValues) {
        var keysDate = ['fechaSuscripcion', 'fechaOtorgamiento', 'fechaAutorizacion', 'fechaProtocolizacion'];
        for (var i = 0; i < keysDate.length; ++i) {
            var keyDate = keysDate[i];
            if (formValues[keyDate] != null && Ext.isDefined(formValues[keyDate])) {
                var aux = new Date(formValues[keyDate].getTime() + 12 * 60 * 60000);
                formValues[keyDate] = aux.getTime();
            }
        }
        return formValues;
    },
    getJSON: function () {
        var contratoDocumentoFormPanel = this.getComponent('contratoDocumentoFormPanel');
        var fieldValues = contratoDocumentoFormPanel.getForm().getFieldValues();
        fieldValues = util.JSON.emptyToNull(fieldValues);
        fieldValues = this.safeDates(fieldValues);
        return fieldValues;
    },
    isValid: function (typeValidation) {
        var contratoDocumentoFormPanel = this.getComponent('contratoDocumentoFormPanel');
        var columnFirst = contratoDocumentoFormPanel.getComponent('column-first');
        var secondFirst = contratoDocumentoFormPanel.getComponent('fechas');
        var tipoDocumento = columnFirst.getComponent('tipoDocumento').getValue();
        secondFirst.getComponent('fechaSuscripcion').mandatory = false;
        secondFirst.getComponent('fechaOtorgamiento').mandatory = false;
        secondFirst.getComponent('fechaProtocolizacion').mandatory = false;
        secondFirst.getComponent('fechaAutorizacion').mandatory = false;
        switch (typeValidation) {
            case TIPO_VALIDACION_ENVIAR_A_FIRMA:
            case TIPO_VALIDACION_REGISTRAR_PAGO:
                columnFirst.getComponent('numeroRepertorioNotaria').mandatory = true;
                columnFirst.getComponent('agnoRepertorioNotaria').mandatory = true;
                if (tipoDocumento == TIPO_DOCUMENTO_ESCRITURA) {
                    secondFirst.getComponent('fechaSuscripcion').mandatory = true;
                    secondFirst.getComponent('fechaOtorgamiento').mandatory = true;
                } else if (tipoDocumento == TIPO_DOCUMENTO_CONTRATO) {
                    secondFirst.getComponent('fechaProtocolizacion').mandatory = true;
                    secondFirst.getComponent('fechaAutorizacion').mandatory = true;
                }
                var validacion = this.getComponent('contratoDocumentoFormPanel').getForm().isValid();
                if (this.makeValidationRepNot) {
                    validacion = validacion && this.isNumeroRepertorioUnico();
                }
                return validacion;
            case TIPO_VALIDACION_GRABAR:
                columnFirst.getComponent('numeroRepertorioNotaria').mandatory = false;
                columnFirst.getComponent('agnoRepertorioNotaria').mandatory = false;
                return true;
        }
    },
    setJSON: function (objJSON) {
        this.actuacion = objJSON;
        this.getComponent('contratoDocumentoFormPanel').getForm().setValues(objJSON);
        this.showDates(objJSON.tipoDocumento);
    },
    reloadDates: function () {
        var contratoDocumentoFormPanel = this.getComponent('contratoDocumentoFormPanel');
        var columnFirst = contratoDocumentoFormPanel.getComponent('column-first');
        var tipoDocumento = columnFirst.getComponent('tipoDocumento').getValue();
        this.showDates(tipoDocumento);
    },
    showDates: function (tipoDocumento) {
        var hideCls;
        var showCls;
        if (tipoDocumento == TIPO_DOCUMENTO_ESCRITURA) {
            hideCls = 'contrato';
            showCls = 'escritura';
        } else if (tipoDocumento == TIPO_DOCUMENTO_CONTRATO) {
            hideCls = 'escritura';
            showCls = 'contrato';
        }
        var dateHide = this.getComponent('contratoDocumentoFormPanel').getComponent('fechas').find('cls', hideCls);
        for (i = 0; i < dateHide.length; ++i) {
            dateHide[i].hide();
        }
        var dateShow = this.getComponent('contratoDocumentoFormPanel').getComponent('fechas').find('cls', showCls);
        for (i = 0; i < dateShow.length; ++i) {
            dateShow[i].show();
        }
    },
    validarRepertorioNotoria: function (field, value, oldValue) {
        var contratoDocumentoFormPanel = this.getComponent('contratoDocumentoFormPanel');
        if (contratoDocumentoFormPanel.getForm().isValid() && this.makeValidationRepNot) {
            var columnFirst = contratoDocumentoFormPanel.getComponent('column-first');
            var numeroRepertorioNotaria = columnFirst.getComponent('numeroRepertorioNotaria').getValue();
            var agnoRepertorioNotaria = columnFirst.getComponent('agnoRepertorioNotaria').getValue();
            if (numeroRepertorioNotaria > 0 && agnoRepertorioNotaria > 0) {
                columnFirst.getComponent('numeroRepertorioNotariaValido').setValue(REPERTORIO_NOTARIA_DESCONOCIDO);
                this.setNumeroRepertorioUnicoIcon();
                Srp.FrontController.fireEvent('onSearchActuacion', {
                    values: {
                        numeroRepertorioNotaria: numeroRepertorioNotaria,
                        agnoRepertorioNotaria: agnoRepertorioNotaria,
                        privado: "si"
                    }
                });
            } else {
                if (Ext.isDefined(this.saveCommand) && this.saveCommand != null) {
                    this.saveCommand.processForceValidation(true);
                    this.saveCommand = null;
                }
            }
        } else {
            if (Ext.isDefined(this.saveCommand) && this.saveCommand != null) {
                this.saveCommand.processForceValidation(true);
                this.saveCommand = null;
            }
        }
    },
    setTargetCommand: function (saveCommand) {
        this.saveCommand = saveCommand;
    },
    processSearch: function (resultSearch) {
        var contratoDocumentoFormPanel = this.getComponent('contratoDocumentoFormPanel');
        var columnFirst = contratoDocumentoFormPanel.getComponent('column-first');
        if (resultSearch.length > 0) {
            var repertorioValido = true;
            if (!Ext.isDefined(this.actuacion)) {
                repertorioValido = false;
            } else {
                for (var i = 0; i < resultSearch.length; ++i) {
                    var res = resultSearch[i];
                    if (res.nodeid != this.actuacion.nodeid) {
                        repertorioValido = false;
                    }
                }
            }
            if (!repertorioValido) {
                columnFirst.getComponent('numeroRepertorioNotaria').markInvalid(I18n.mensajes.repertorioNotariaYaIngresado);
                columnFirst.getComponent('agnoRepertorioNotaria').markInvalid(I18n.mensajes.repertorioNotariaYaIngresado);
                columnFirst.getComponent('numeroRepertorioNotariaValido').setValue(REPERTORIO_NOTARIA_INVALIDO);
                this.setNumeroRepertorioUnicoIcon();
                if (Ext.isDefined(this.saveCommand) && this.saveCommand != null) {
                    this.saveCommand.processForceValidation(false);
                    this.saveCommand = null;
                    return;
                } else {
                    return false;
                }
            }
        }
        columnFirst.getComponent('numeroRepertorioNotariaValido').setValue(REPERTORIO_NOTARIA_VALIDO);
        this.setNumeroRepertorioUnicoIcon();
        if (Ext.isDefined(this.saveCommand) && this.saveCommand != null) {
            this.saveCommand.processForceValidation(true);
            this.saveCommand = null;
        } else {
            return true;
        }
    },
    isNumeroRepertorioUnico: function () {
        var contratoDocumentoFormPanel = this.getComponent('contratoDocumentoFormPanel');
        var columnFirst = contratoDocumentoFormPanel.getComponent('column-first');
        this.setNumeroRepertorioUnicoIcon();
        var msg = "";
        switch (columnFirst.getComponent('numeroRepertorioNotariaValido').getValue()) {
            case REPERTORIO_NOTARIA_VALIDO:
                break;
            case REPERTORIO_NOTARIA_INVALIDO:
                msg = I18n.mensajes.repertorioNotariaYaIngresado;
                break;
            case REPERTORIO_NOTARIA_DESCONOCIDO:
            default:
                msg = I18n.mensajes.repertorioNotariaDesconocido;
        }
        if (msg.length > 0) {
            columnFirst.getComponent('numeroRepertorioNotaria').markInvalid(msg);
            columnFirst.getComponent('agnoRepertorioNotaria').markInvalid(msg);
            return false;
        }
        return true;
    },
    setNumeroRepertorioUnicoIcon: function () {
        Log4js.debug('ContratoDocumentoPanel.setNumeroRepertorioUnicoIcon()');
        var contratoDocumentoFormPanel = this.getComponent('contratoDocumentoFormPanel');
        var columnFirst = contratoDocumentoFormPanel.getComponent('column-first');
        if (Ext.isDefined(columnFirst.getComponent('numeroRepertorioNotaria').getEl())) {
            var numRepNotEl = columnFirst.getComponent('numeroRepertorioNotaria').getEl().parent();
            numRepNotEl.removeClass('remote-unknow-numero-repertorio');
            numRepNotEl.removeClass('remote-invalid-numero-repertorio');
            numRepNotEl.removeClass('remote-valid-numero-repertorio');
            switch (columnFirst.getComponent('numeroRepertorioNotariaValido').getValue()) {
                case REPERTORIO_NOTARIA_VALIDO:
                    numRepNotEl.addClass('remote-valid-numero-repertorio');
                    break;
                case REPERTORIO_NOTARIA_INVALIDO:
                    numRepNotEl.addClass('remote-invalid-numero-repertorio');
                    msg = I18n.mensajes.repertorioNotariaYaIngresado;
                    break;
                case REPERTORIO_NOTARIA_DESCONOCIDO:
                default:
                    numRepNotEl.addClass('remote-unknow-numero-repertorio');
            }
        }
    },
    registrarEventos: function () {
        var contratoDocumentoFormPanel = this.getComponent('contratoDocumentoFormPanel');
        var columnFirst = contratoDocumentoFormPanel.getComponent('column-first');
        recargarComboTipoDocumento = new Srp.command.RecargarComboTipoDocumentoCmd();
        recargarComboTipoDocumento.setParameter('combo', columnFirst.getComponent('tipoDocumento'));
        recargarComboTipoDocumento.setParameter('documentoPanel', this);
        var searchActuacionByTypeCmd = new Srp.command.SearchActuacionByTypeCmd();
        searchActuacionByTypeCmd.setParameter('panel', this);
        var forceCheckRepertorioNotariaUnicoCmd = new Srp.command.ForceCheckRepertorioNotariaUnicoCmd();
        forceCheckRepertorioNotariaUnicoCmd.setParameter('panel', this);
        removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onLoadActuacion',
            command: recargarComboTipoDocumento
        }, {
            name: 'onSearchActuacion',
            command: searchActuacionByTypeCmd
        }, {
            name: 'onForceCheckRepertorioNotariaUnico',
            command: forceCheckRepertorioNotariaUnicoCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.reg('contratoDocumento', Srp.gui.ContratoDocumentoPanel);
Ext.ns('Srp.gui');
Srp.gui.ResumenAnotacionesRvmFieldSet = Ext.extend(Ext.form.FieldSet, {
    title: I18n.commons.anotacionesRVM,
    constructor: function (response, showRVMDetail) {
        this.response = response;
        this.showRVMDetail = showRVMDetail;
        Ext.apply(this, {
            items: this.buildItems(response)
        });
        Srp.gui.ResumenAnotacionesRvmFieldSet.superclass.constructor.call(this);
    },
    onRender: function (ct, position) {
        this.loadData();
        Srp.gui.ResumenAnotacionesRvmFieldSet.superclass.onRender.call(this, ct, position);
    },
    buildColumnModel: function (response) {
        var columnModel = [{
            width: 0.15,
            dataIndex: PATENTE_ANOTACIONES_RVM,
            header: I18n.commons.ppu
        }, {
            width: 0.15,
            dataIndex: PROHIBICION_ANOTACIONES_RVM,
            header: I18n.commons.prohibicion,
            tpl: util.Format.getTplCondicion(PROHIBICION_ANOTACIONES_RVM)
        }];
        if (this.existAnotacionWithMonto(response)) {
            columnModel.push({
                width: 0.15,
                dataIndex: MONTO_ANOTACIONES_RVM,
                header: I18n.commons.monto,
                tpl: util.Format.getTplNumber(MONTO_ANOTACIONES_RVM)
            });
        }
        return columnModel;
    },
    existAnotacionWithMonto: function (response) {
        var existAnotacionWithMonto = false;
        var anotaciones = eval(ANOTACIONES_RVM);
        for (var i = 0; i < anotaciones.length; i++) {
            var anotacion = anotaciones[i];
            if (anotacion.monto) {
                existAnotacionWithMonto = true;
                break;
            }
        }
        return existAnotacionWithMonto;
    },
    buildItems: function (response) {
        if (this.showRVMDetail) {
            return this.buildGrid(response);
        } else {
            return this.buildListView(response);
        }
    },
    buildGrid: function (response) {
        return {
            xtype: 'PPUResumenGrid',
            id: 'anotacionesRvm',
            itemId: 'anotacionesRvm',
            name: 'anotacionesRvm'
        };
    },
    buildListView: function (response) {
        var anotacionesStore = new Ext.data.JsonStore({
            "data": [],
            "autoLoad": true,
            "fields": [{
                name: PATENTE_ANOTACIONES_RVM,
                type: "string"
            }, {
                name: PROHIBICION_ANOTACIONES_RVM,
                type: "boolean"
            }, {
                name: MONTO_ANOTACIONES_RVM,
                type: "float"
            }]
        });
        var listView = {
            xtype: 'listview',
            name: 'anotacionesRvm',
            itemId: 'anotacionesRvm',
            border: 1
        };
        listView.store = anotacionesStore;
        listView.columns = this.buildColumnModel(response);
        listView.setJSON = function (vehiculos) {
            this.getStore().loadData(vehiculos);
        };
        return listView;
    },
    loadData: function (responseAux) {
        var response = !(responseAux) ? this.response : responseAux;
        this.getComponent('anotacionesRvm').setJSON(response.vehiculos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.AdjuntosContratoFormPanel = Ext.extend(Ext.FormPanel, {
    border: false,
    fileUpload: true,
    labelWidth: 120,
    width: '95%',
    height: 100,
    defaults: {
        anchor: '90%',
        allowBlank: false,
        msgTarget: 'side'
    },
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            buttons: this.buildButtons()
        });
        Srp.gui.AdjuntosContratoFormPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            text: 'Subir Contrato',
            scope: this,
            handler: this.onUploadFile,
            iconCls: 'icon-button-attachment',
            width: 100
        }];
    },
    buildItems: function () {
        return [{
            xtype: 'fileuploadfield',
            id: 'contrato-file',
            emptyText: 'Seleccione el Contrato...',
            fieldLabel: 'Archivo de Contrato',
            name: 'file',
            buttonText: 'Buscar Contrato',
            itemId: 'contrato-file',
            listeners: {
                'fileselected': function (fb, v) {}
            }
        }, {
            xtype: 'displayfield',
            id: 'msgFile',
            cls: 'msg-feed',
            hidden: true,
            width: '100%',
            style: {
                'white-space': 'nowrap'
            }
        }, {
            xtype: 'hidden',
            name: 'contratoNodeid',
            itemId: 'contratoNodeid'
        }, {
            xtype: 'hidden',
            name: 'nombreArchivoContrato',
            itemId: 'nombreArchivoContrato'
        }, {
            xtype: 'hidden',
            name: 'ignoreContrato',
            itemId: 'ignoreContrato',
            defaultValue: false
        }, {
            xtype: 'hidden',
            name: 'urlArchivoContrato',
            itemId: 'urlArchivoContrato'
        }];
    },
    onUploadFile: function () {
        var contratoFileItem = this.getComponent('contrato-file');
        if (!Srp.gui.AdjuntosPanel.validateAdjuntos(contratoFileItem)) {
            return;
        }
        var contratoValue = util.Format.formatAdjunto(contratoFileItem.getValue());
        if (!util.checkCaracteresProhibidos(contratoValue)) {
            contratoFileItem.markInvalid(I18n.mensajes.error.archivoNombreInvalido);
            return;
        }
        if (!util.checkExtension(contratoValue, '.pdf') && !util.checkExtension(contratoValue, '.PDF')) {
            contratoFileItem.markInvalid(I18n.mensajes.error.archivoNoEsPdf);
            return;
        }
        var adjuntosPanel = this;
        var bform = this.getForm();
        var retries = 1;
        var retry = true;
        var doUpload = function (bform, retry) {
            if (bform.isValid()) {
                var uploadURL = Srp.WebScriptManager.getUrl('WS_ACTUACION_UPLOAD_CONTRATO');
                bform.submit({
                    url: uploadURL,
                    scope: this,
                    params: {
                        type: 'contrato'
                    },
                    waitMsg: 'Subiendo Contrato...',
                    success: function (form, action) {
                        if (util.isEmpty(action.response.responseText)) {
                            if (retry) {
                                if (retries > 2) {
                                    retry = false;
                                    Ext.Msg.show({
                                        title: 'Error al subir archivo',
                                        msg: 'Por favor inténtelo de nuevo.',
                                        icon: Ext.Msg.ERROR
                                    });
                                }
                                doUpload(bform, retry);
                                return;
                            }
                        } else {
                            var file = Ext.util.JSON.decode(action.response.responseText);
                            form.findField('contratoNodeid').setValue(file.node.nodeid);
                            form.findField('nombreArchivoContrato').setValue(Ext.getCmp('contrato-file').getValue());
                            form.findField('ignoreContrato').setValue(false);
                            var url = util.Format.formatURLAdjunto(file.node.nodeid, Ext.getCmp('contrato-file').getValue());
                            form.findField('urlArchivoContrato').setValue(url);
                            adjuntosPanel.setMessageArchivo(file.node.nodeid, Ext.getCmp('contrato-file').getValue());
                            retry = false;
                        }
                    },
                    failure: Srp.WebScriptManager.connectionError
                });
                retries++;
            }
        };
        if (retry) {
            doUpload(bform, true);
        }
    },
    setMessageArchivo: function (nodeid, nombre) {
        var link = util.Format.formatAdjuntoLink(nodeid, nombre);
        var message = 'Archivo: ' + link;
        var msgFile = Ext.getCmp('msgFile');
        msgFile.setValue(message);
        msgFile.show();
    },
    getJSON: function (isResumen) {
        var contratosList = [];
        var contratoNodeid = this.getComponent('contratoNodeid').getValue();
        var nombreArchivoContrato = this.getComponent('nombreArchivoContrato').getValue();
        var ignore = eval(this.getComponent('ignoreContrato').getValue());
        var url = this.getComponent('urlArchivoContrato').getValue();
        if (contratoNodeid && contratoNodeid.length > 0 && (!ignore || isResumen)) {
            contratosList.push({
                nodeid: contratoNodeid,
                nombre: nombreArchivoContrato,
                type: TIPO_CONTRATO,
                url: url
            });
            if (this.contratoAnterior) {
                contratosList.push({
                    nodeid: this.contratoAnterior.nodeid,
                    removed: true
                });
            }
        }
        return contratosList;
    },
    setJSON: function (contrato) {
        if (contrato.length > 0) {
            this.contratoAnterior = contrato[0];
            var url = util.Format.formatURLAdjunto(contrato[0].nodeid, contrato[0].nombre);
            this.getComponent('contratoNodeid').setValue(contrato[0].nodeid);
            this.getComponent('nombreArchivoContrato').setValue(contrato[0].nombre);
            this.getComponent('ignoreContrato').setValue(true);
            this.getComponent('urlArchivoContrato').setValue(url);
            this.setMessageArchivo(contrato[0].nodeid, contrato[0].nombre);
        }
    }
});
Ext.reg('adjuntosContratoFormPanel', Srp.gui.AdjuntosContratoFormPanel);
Ext.ns('Srp.gui');
Srp.gui.AdjuntosAnexosPanel = Ext.extend(Ext.Panel, {
    border: false,
    width: '100%',
    height: '300',
    defaults: {
        allowBlank: false
    },
    initComponent: function () {
        var config = {
            items: this.buildItems()
        }
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.AdjuntosAnexosPanel.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var uploadAnexos = new Ext.ux.form.FileUploadField({
            fieldLabel: 'Archivo de Anexo',
            emptyText: 'Seleccione anexo...',
            name: 'file',
            buttonText: 'Buscar Anexo',
            id: 'anexo-file'
        });
        var buttonAgregarAnexo = {
            xtype: 'button',
            text: 'Subir Anexo',
            iconCls: 'icon-button-attachment',
            width: 100,
            handler: function () {
                var anexosStore = anexosGrid.getStore();
                if (!Srp.gui.AdjuntosPanel.validateAdjuntos(uploadAnexos)) {
                    return;
                }
                if (anexosFormPanel.getForm().isValid()) {
                    var anexoNombre = Ext.getCmp('anexo-file');
                    if (!util.checkCaracteresProhibidos(util.Format.formatAdjunto(anexoNombre.getValue()))) {
                        anexoNombre.markInvalid(I18n.mensajes.error.archivoNombreInvalido);
                        return;
                    }
                    anexosFormPanel.getForm().submit({
                        url: Srp.WebScriptManager.getUrl('WS_ACTUACION_UPLOAD_CONTRATO'),
                        params: {
                            type: 'anexo'
                        },
                        waitMsg: 'Subiendo Anexo...',
                        success: function (form, action) {
                            var file = Ext.util.JSON.decode(action.response.responseText);
                            var nombre = util.Format.formatAdjunto(uploadAnexos.getValue());
                            var anexo = {
                                nombre: nombre,
                                nodeid: file.node.nodeid,
                                ignore: false,
                                url: util.Format.formatURLAdjunto(file.node.nodeid, uploadAnexos.getValue())
                            };
                            var msg = action.result.msg;
                            anexosStore.insert(0, new anexosStore.recordType(anexo));
                        },
                        failure: Srp.WebScriptManager.connectionError
                    });
                }
            }
        };
        var anexosFormPanel = new Ext.form.FormPanel({
            items: [uploadAnexos],
            buttons: [buttonAgregarAnexo],
            labelWidth: 120,
            fileUpload: true,
            border: false,
            defaults: {
                anchor: '80%',
                allowBlank: false,
                msgTarget: 'side'
            }
        });
        var anexosGrid = new Srp.gui.AdjuntosAnexosGrid({
            itemId: 'anexosGrid'
        });
        return [anexosFormPanel, anexosGrid];
    },
    getJSON: function (isResumen) {
        return this.getComponent('anexosGrid').getJSON(isResumen);
    },
    setJSON: function (adjuntos) {
        this.getComponent('anexosGrid').setJSON(adjuntos);
    }
});
Ext.reg('adjuntosAnexosFormPanel', Srp.gui.AdjuntosAnexosPanel);
Ext.ns('Srp.gui');
Srp.gui.AdjuntosPanel = Ext.extend(Ext.Panel, {
    title: I18n.notaria.actuacion.wizard.title.archivos,
    initComponent: function () {
        var config = {
            items: this.buildItems()
        }
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.AdjuntosPanel.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var contratoFieldSet = this.buildContratoFieldSet();
        var anexosFieldSet = this.buildAnexosFieldSet();
        return [contratoFieldSet, anexosFieldSet];
    },
    buildContratoFieldSet: function () {
        var fp = new Srp.gui.AdjuntosContratoFormPanel({
            itemId: 'adjuntosContratoFormPanel'
        });
        this.contratoFieldSet = new Ext.form.FieldSet({
            title: 'Contrato',
            items: [fp],
            bodyStyle: 'padding: 0 10px 0 0',
            id: 'contratoFieldSet'
        });
        return this.contratoFieldSet;
    },
    buildAnexosFieldSet: function () {
        this.anexosFieldSet = new Ext.form.FieldSet({
            title: 'Anexos',
            items: [{
                xtype: 'adjuntosAnexosFormPanel',
                itemId: 'adjuntosAnexosFormPanel'
            }],
            bodyStyle: 'padding: 0 10px 0 0',
            id: 'anexosFieldSet'
        });
        return this.anexosFieldSet;
    },
    getJSON: function (isResumen) {
        var contratoForm = this.contratoFieldSet.getComponent('adjuntosContratoFormPanel');
        var anexosForm = this.anexosFieldSet.getComponent('adjuntosAnexosFormPanel');
        var adjuntosList = [];
        var contrato = contratoForm.getJSON(isResumen);
        var anexos = anexosForm.getJSON(isResumen);
        var adjuntosObj = {};
        if (!Ext.isEmpty(adjuntosList.concat(contrato, anexos))) {
            adjuntosObj.adjuntos = adjuntosList.concat(contrato, anexos);
        }
        return adjuntosObj;
    },
    setJSON: function (actuacion) {
        var contratoForm = this.contratoFieldSet.getComponent('adjuntosContratoFormPanel');
        var anexosForm = this.anexosFieldSet.getComponent('adjuntosAnexosFormPanel');
        var adjuntos = [];
        adjuntos[TIPO_CONTRATO] = [];
        adjuntos[TIPO_ANEXO] = [];
        for (var i = 0; i < actuacion.adjuntos.length; ++i) {
            var adjunto = actuacion.adjuntos[i];
            if (adjunto.type == TIPO_CONTRATO || adjunto.type == TIPO_ANEXO) {
                adjuntos[adjunto.type].push(adjunto);
            }
        }
        contratoForm.setJSON(adjuntos[TIPO_CONTRATO]);
        anexosForm.setJSON(adjuntos[TIPO_ANEXO]);
    },
    isValid: function (validationType) {
        var validation = true;
        switch (validationType) {
            case TIPO_VALIDACION_GRABAR:
                break;
            case TIPO_VALIDACION_ENVIAR_A_FIRMA:
                var contratoForm = this.contratoFieldSet.getComponent('adjuntosContratoFormPanel');
                var anexosForm = this.anexosFieldSet.getComponent('adjuntosAnexosFormPanel');
                var contrato = contratoForm.getJSON();
                var contratoNodeid = contratoForm.getComponent('contratoNodeid').getValue();
                if (contrato.length > 0 || contratoNodeid) {
                    validation = true;
                } else {
                    contratoForm.getForm().isValid();
                    validation = false;
                }
                break;
        }
        return validation;
    }
});
Ext.reg('adjuntosPanel', Srp.gui.AdjuntosPanel);
Srp.gui.AdjuntosPanel.validateAdjuntos = function (UploadFileItem) {
    var fileName = util.Format.formatAdjunto(UploadFileItem.getValue());
    var contratoForm = Ext.getCmp('contratoFieldSet').getComponent('adjuntosContratoFormPanel');
    var contratoFile = contratoForm.getComponent('nombreArchivoContrato');
    var contratoFileName = util.Format.formatAdjunto(contratoFile.getValue());
    if (fileName == contratoFileName) {
        UploadFileItem.markInvalid(I18n.mensajes.error.archivoRepetido);
        return false;
    }
    var anexosForm = Ext.getCmp('anexosFieldSet').getComponent('adjuntosAnexosFormPanel');
    var anexosGrid = anexosForm.getComponent('anexosGrid');
    var anexosStore = anexosGrid.getStore();
    var index = anexosStore.findExact('nombre', fileName);
    for (var i = 0; i < anexosStore.getCount(); ++i) {
        var record = anexosStore.getAt(i);
    }
    if (index != -1) {
        UploadFileItem.markInvalid(I18n.mensajes.error.archivoRepetido);
        return false;
    }
    return true;
}
Ext.ns('Srp.gui');
Srp.gui.ReinscripcionFormPanel = Ext.extend(Ext.Panel, {
    id: 'reinscripcionFormPanel',
    initComponent: function () {
        var config = {
            items: this.buildItems()
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ReinscripcionFormPanel.superclass.initComponent.apply(this, arguments);
    },
    buildItems: function () {
        var items = [{
            itemId: 'firstColumn',
            columnWidth: 0.55,
            layout: 'form',
            labelWidth: 170,
            defaults: {
                boxMaxWidth: '200'
            },
            border: false,
            items: [{
                itemId: 'tipoDocumentoComboBox',
                name: 'tipoDocumentoReinscripcion',
                xtype: 'tipodocumentocombobox',
                blankValue: {
                    id: -1,
                    text: ""
                }
            }, {
                xtype: 'numeroRepertorioPrendasfield',
                name: 'numeroRepertorioAnterior',
                itemId: 'numeroRepertorioAnterior',
                fieldLabel: I18n.notaria.actuacion.wizard.textfield.numeroRepertorio,
                vtype: 'numeroRepertorioNotaria'
            }, {
                xtype: 'agnofield',
                maxLength: 4,
                fieldLabel: I18n.notaria.actuacion.wizard.numberfield.agnoRepertorio,
                name: 'agnoRepertorioAnterior',
                itemId: 'agnoRepertorioAnterior',
                vtype: 'agno'
            }]
        }, {
            columnWidth: 0.45,
            layout: 'form',
            itemId: 'lastColumn',
            labelWidth: 140,
            border: false,
            items: [{
                cls: 'escritura',
                fieldLabel: I18n.notaria.actuacion.wizard.datefield.otorgamiento,
                format: I18n.format.date,
                xtype: 'datefield',
                name: 'fechaOtorgamientoReinscripcion',
                itemId: 'fechaOtorgamientoReinscripcion',
                id: 'fechaOtorgamientoReinscripcion',
                vtype: 'daterange',
                endDateField: 'fechaSuscripcionReinscripcion',
                editable: false,
                maxValue: TODAY
            }, {
                cls: 'escritura',
                fieldLabel: I18n.notaria.actuacion.wizard.datefield.suscripcion,
                format: I18n.format.date,
                xtype: 'datefield',
                name: 'fechaSuscripcionReinscripcion',
                itemId: 'fechaSuscripcionReinscripcion',
                id: 'fechaSuscripcionReinscripcion',
                vtype: 'daterange',
                startDateField: 'fechaOtorgamientoReinscripcion',
                editable: false,
                maxValue: TODAY
            }, {
                cls: 'contrato',
                fieldLabel: I18n.notaria.actuacion.wizard.datefield.autorizacion,
                format: I18n.format.date,
                hidden: true,
                xtype: 'datefield',
                name: 'fechaAutorizacionReinscripcion',
                itemId: 'fechaAutorizacionReinscripcion',
                id: 'fechaAutorizacionReinscripcion',
                vtype: 'daterange',
                endDateField: 'fechaProtocolizacionReinscripcion',
                editable: false,
                maxValue: TODAY
            }, {
                cls: 'contrato',
                fieldLabel: I18n.notaria.actuacion.wizard.datefield.protocolizacion,
                format: I18n.format.date,
                hidden: true,
                xtype: 'datefield',
                name: 'fechaProtocolizacionReinscripcion',
                itemId: 'fechaProtocolizacionReinscripcion',
                id: 'fechaProtocolizacionReinscripcion',
                vtype: 'daterange',
                startDateField: 'fechaAutorizacionReinscripcion',
                editable: false,
                maxValue: TODAY
            }]
        }];
        var panel = this;
        return [new Ext.form.FormPanel({
            border: false,
            itemId: 'reinscripcionFormPanel',
            labelWidth: 50,
            items: {
                xtype: 'fieldset',
                layout: 'column',
                itemId: 'antecedentesReinscripcionFormPanel',
                items: items,
                title: I18n.notaria.actuacion.wizard.title.antecedentes,
                listeners: {
                    afterlayout: function () {
                        var comboBox = this.getComponent('firstColumn').getComponent('tipoDocumentoComboBox');
                        if (comboBox.getValue().length > 0) {
                            comboBox.fireEvent('select', this, {
                                id: comboBox.getValue()
                            });
                        }
                    }
                }
            }
        }), {
            xtype: 'contratoNotariaPanel',
            itemId: 'contratoNotariaPanel',
            title: I18n.commons.informacionNotaria
        }];
    },
    getJSON: function (isResumen) {
        var reinscripcion = {};
        var cmp = this.getComponent('reinscripcionFormPanel');
        var basicForm = cmp.getForm();
        if (basicForm.isDirty() || isResumen) {
            var keyValuePairs = basicForm.getFieldValues();
            if (keyValuePairs.tipoDocumentoReinscripcion == -1) {
                keyValuePairs.tipoDocumentoReinscripcion = '';
            }
            keyValuePairs = util.JSON.emptyToNull(keyValuePairs);
            if (util.JSON.countObject(keyValuePairs) > 1) {
                reinscripcion.reinscripcion = keyValuePairs;
            }
        }
        var datosNotario = this.getComponent('contratoNotariaPanel').getJSON();
        if (util.JSON.countObject(datosNotario) > 0) {
            if (!Ext.isObject(reinscripcion.reinscripcion)) {
                reinscripcion.reinscripcion = {};
            }
            reinscripcion.reinscripcion.nombreCompletoNotario = datosNotario.nombreNotarioRef;
            reinscripcion.reinscripcion.runNotario = datosNotario.runNotarioRef;
            reinscripcion.reinscripcion.notaria = datosNotario.notaria;
        }
        return reinscripcion;
    },
    setJSON: function (actuacion) {
        if (actuacion.reinscripcion) {
            var r = actuacion.reinscripcion;
            var values = {
                numeroRepertorioAnterior: r.numeroRepertorioAnterior,
                agnoRepertorioAnterior: r.agnoRepertorioAnterior,
                fechaSuscripcionReinscripcion: r.fechaSuscripcionReinscripcion,
                fechaOtorgamientoReinscripcion: r.fechaOtorgamientoReinscripcion,
                fechaProtocolizacionReinscripcion: r.fechaProtocolizacionReinscripcion,
                fechaAutorizacionReinscripcion: r.fechaAutorizacionReinscripcion
            };
            this.getComponent('reinscripcionFormPanel').getForm().setValues(values);
            this.getComponent('reinscripcionFormPanel').getComponent('antecedentesReinscripcionFormPanel').getComponent('firstColumn').getComponent('tipoDocumentoComboBox').setValue(r.tipoDocumentoReinscripcion);
            var notario = {
                nombreNotarioRef: r.nombreCompletoNotario,
                runNotarioRef: r.runNotario,
                notaria: r.notaria
            };
            this.getComponent('contratoNotariaPanel').setJSON(notario);
        }
    },
    isValid: function (typeValidation) {
        var reinscripcionFormPanel = this.getComponent('reinscripcionFormPanel').getComponent('antecedentesReinscripcionFormPanel');
        var columnFirst = reinscripcionFormPanel.getComponent('firstColumn');
        var columnLast = reinscripcionFormPanel.getComponent('lastColumn');
        var tipoDocumentoComboBox = columnFirst.getComponent('tipoDocumentoComboBox');
        var numeroRepertorioAnterior = columnFirst.getComponent('numeroRepertorioAnterior');
        var agnoRepertorioAnterior = columnFirst.getComponent('agnoRepertorioAnterior');
        var fechaSuscripcionReinscripcion = columnLast.getComponent('fechaSuscripcionReinscripcion');
        var fechaOtorgamientoReinscripcion = columnLast.getComponent('fechaOtorgamientoReinscripcion');
        var fechaProtocolizacionReinscripcion = columnLast.getComponent('fechaProtocolizacionReinscripcion');
        var fechaAutorizacionReinscripcion = columnLast.getComponent('fechaAutorizacionReinscripcion');
        columnFirst.getComponent('numeroRepertorioAnterior').mandatory = false;
        columnFirst.getComponent('agnoRepertorioAnterior').mandatory = false;
        columnLast.getComponent('fechaSuscripcionReinscripcion').mandatory = false;
        columnLast.getComponent('fechaOtorgamientoReinscripcion').mandatory = false;
        columnLast.getComponent('fechaProtocolizacionReinscripcion').mandatory = false;
        columnLast.getComponent('fechaAutorizacionReinscripcion').mandatory = false;
        var hasData = numeroRepertorioAnterior.getValue() || agnoRepertorioAnterior.getValue() || fechaSuscripcionReinscripcion.getValue() || fechaProtocolizacionReinscripcion.getValue() || fechaProtocolizacionReinscripcion.getValue() || fechaAutorizacionReinscripcion.getValue();
        if (hasData && (typeValidation == TIPO_VALIDACION_ENVIAR_A_FIRMA || typeValidation == TIPO_VALIDACION_REGISTRAR_PAGO)) {
            columnFirst.getComponent('numeroRepertorioAnterior').mandatory = true;
            columnFirst.getComponent('agnoRepertorioAnterior').mandatory = true;
            if (tipoDocumentoComboBox.getValue() == TIPO_DOCUMENTO_ESCRITURA) {
                columnLast.getComponent('fechaSuscripcionReinscripcion').mandatory = true;
                columnLast.getComponent('fechaOtorgamientoReinscripcion').mandatory = true;
            } else {
                columnLast.getComponent('fechaProtocolizacionReinscripcion').mandatory = true;
                columnLast.getComponent('fechaAutorizacionReinscripcion').mandatory = true;
            }
        } else if (typeValidation == TIPO_VALIDACION_GRABAR) {}
        return this.getComponent('reinscripcionFormPanel').getForm().isValid();
    }
});
Ext.reg('reinscripcionformpanel', Srp.gui.ReinscripcionFormPanel);
Ext.ns('Srp.gui');
Srp.gui.AnotacionesRVMPanel = Ext.extend(Ext.Panel, {
    title: I18n.notaria.actuacion.anotaciones.titulo,
    bodyStyle: 'padding: 5px',
    autoScroll: 'true',
    labelWidth: 150,
    initComponent: function () {
        var config = {
            items: this.buildItems()
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.AnotacionesRVMPanel.superclass.initComponent.apply(this, arguments);
        this.ppuGrid.setPanelRVM(this);
        this.registrarEventos();
    },
    validarPPU: function (PPU, index) {
        var field = Ext.getCmp('new_ppu');
        if (typeof PPU === 'undefined' || PPU.length == 0) {
            field.markInvalid(I18n.mensajes.ppuVacia);
            return false;
        } else if (this.PPUExists(PPU, index)) {
            field.markInvalid(I18n.mensajes.ppuExists);
            return false;
        } else {
            return true;
        }
    },
    PPUExists: function (ppu, indexRecord) {
        var store = this.ppuGrid.getStore();
        var indexPpu = store.findExact('patente', ppu);
        if (indexPpu != -1) {
            if (Ext.isDefined(indexRecord) && indexRecord == indexPpu) {
                return false;
            }
            return true;
        }
        return false;
    },
    agregarPPU: function (PPU, prohibicion) {
        var defaultData = {
            patente: PPU,
            patenteProhibicion: prohibicion,
            removed: false,
            esvehiculo: PPU_BUSCANDO,
            espropietario: PPU_BUSCANDO,
            sinanotacionespendientes: PPU_BUSCANDO
        };
        var store = this.ppuGrid.getStore();
        store.insert(0, new store.recordType(defaultData));
        Srp.FrontController.fireEvent('onLoadPPU', PPU);
    },
    buildItems: function () {
        this.ppuGrid = new Srp.gui.PPUInscripcionGrid({
            id: 'ppu_grid',
            itemId: 'ppuGrid'
        });
        this.ppuGrid.on('click', function () {
            var records = this.getSelectionModel().getSelections();
            if (records.length == 1) {
                var record = records[0];
                Ext.getCmp('new_ppu').setValue(record.get('patente'));
                Ext.getCmp('prohibicion_anotacion').setValue(record.get('patenteProhibicion'));
            }
        });
        var aggregatorFieldSet = new Ext.form.FieldSet({
            defaultType: 'textfield',
            buttonAlign: 'right',
            items: [{
                id: 'new_ppu',
                fieldLabel: 'PPU',
                xtype: 'textfield',
                maxLength: 6,
                autoCreate: {
                    tag: 'input',
                    type: 'text',
                    size: '7',
                    autocomplete: 'off',
                    maxlength: '6'
                },
                enableKeyEvents: true,
                listeners: {
                    keyup: function (txtfield, ev) {
                        var valor = txtfield.getValue();
                        txtfield.setValue(valor.toUpperCase());
                    }
                }
            },
            new Ext.form.Checkbox({
                id: 'prohibicion_anotacion',
                fieldLabel: 'Prohibici&oacute;n de gravar/enajenar',
                displayField: 'prohibicion_gravar_enajenar'
            })],
            buttons: [new Ext.Button({
                displayField: 'agregar-ppu',
                handler: function () {
                    var ppu = Ext.getCmp('new_ppu').getValue();
                    if (Ext.isDefined(ppu)) {
                        ppu = ppu.toUpperCase();
                        Ext.getCmp('new_ppu').setValue(ppu);
                    }
                    if (this.validarPPU(ppu)) {
                        this.agregarPPU(ppu, Ext.getCmp('prohibicion_anotacion').getValue());
                    }
                },
                iconCls: 'icon-add-patente',
                text: 'Agregar PPU',
                scope: this
            })],
            labelWidth: 200,
            title: 'Nuevas PPU',
            width: 'auto'
        });
        var resultFieldSet = new Ext.form.FieldSet({
            itemId: 'resultFieldSet',
            title: 'Patentes actuales',
            height: '100%',
            bodyStyle: 'padding: 5px',
            items: [this.ppuGrid]
        });
        return [aggregatorFieldSet, resultFieldSet];
    },
    getJSON: function () {
        this.getComponent('resultFieldSet').getComponent('ppuGrid').getStore().clearFilter(true);
        return this.getComponent('resultFieldSet').getComponent('ppuGrid').getJSON();
    },
    setJSON: function (actuacion) {
        if (actuacion.vehiculos && actuacion.vehiculos.length > 0) {
            var v = actuacion.vehiculos;
            var gridStore = this.getComponent('resultFieldSet').getComponent('ppuGrid').getStore();
            for (var i = v.length - 1; i >= 0; i--) {
                v[i].removed = false;
                gridStore.insert(0, new gridStore.recordType(v[i]));
            }
        }
    },
    isValid: function (validationType) {
        switch (validationType) {
            case TIPO_VALIDACION_ENVIAR_A_FIRMA:
            case TIPO_VALIDACION_REGISTRAR_PAGO:
                var gridValid = this.getComponent('resultFieldSet').getComponent('ppuGrid').isValid();
                return gridValid;
                break;
            case TIPO_VALIDACION_GRABAR:
            default:
                return true
        }
    },
    registrarEventos: function () {
        var validarRegistroPPUEnRVM = new Srp.command.ws.ValidarRegistroPatenteEnRVMCmd();
        validarRegistroPPUEnRVM.setParameter('grid', this.ppuGrid);
        var validarPropietarioPPU = new Srp.command.ws.ValidarPropietarioPPUCmd();
        validarPropietarioPPU.setParameter('grid', this.ppuGrid);
        validarPropietarioPPU.setParameter('constituyentes', Ext.getCmp('card-0').getComponent('tabPanel').getComponent('constituyenteTab'));
        var validarSolicitudesPendientes = new Srp.command.ws.ValidarSolicitudesPendientesCmd();
        validarSolicitudesPendientes.setParameter('grid', this.ppuGrid);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onLoadPPU',
            command: validarRegistroPPUEnRVM
        }, {
            name: 'onLoadPPU',
            command: validarPropietarioPPU
        }, {
            name: 'onLoadPPU',
            command: validarSolicitudesPendientes
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onRemoveFields',
            command: removerEventos
        }, {
            name: 'onLoadPPU.esPropietario',
            command: validarPropietarioPPU
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.HistorialWorkflowListView = Ext.extend(Ext.list.ListView, {
    autoHeight: true,
    initComponent: function () {
        var anotacionesStore = new Ext.data.JsonStore({
            "data": [],
            "autoLoad": true,
            "fields": [{
                name: 'desc'
            }, {
                name: 'createdDate',
                type: 'date'
            }, {
                name: 'owner'
            }, {
                name: 'completedDate',
                type: 'date'
            }, {
                name: 'outcome'
            }]
        });
        this.store = anotacionesStore;
        this.columns = this.buildColumnModel();
        Srp.gui.HistorialWorkflowListView.superclass.initComponent.call(this);
    },
    buildColumnModel: function () {
        var columnModel = [{
            width: 0.25,
            dataIndex: 'desc',
            header: I18n.commons.historial.tarea
        }, {
            width: 0.2,
            dataIndex: 'createdDate',
            header: I18n.commons.historial.fechaCreacion,
            tpl: '{createdDate:date("' + I18n.format.completeDate + '")}'
        }, {
            width: 0.2,
            dataIndex: 'owner',
            header: I18n.commons.historial.asignado
        }, {
            width: 0.2,
            dataIndex: 'completedDate',
            header: I18n.commons.historial.fechaTermino,
            tpl: '{completedDate:date("' + I18n.format.completeDate + '")}'
        }, {
            width: 0.1,
            dataIndex: 'outcome',
            header: I18n.commons.historial.outcome
        }];
        return columnModel;
    },
    loadData: function (list) {
        this.store.loadData(list);
    }
});
Ext.ns('Srp.gui');
Srp.gui.AnotacionesRvmListView = Ext.extend(Ext.list.ListView, {
    initComponent: function () {
        if (this.columnResize) {
            this.colResizer = new Ext.list.ColumnResizer(this.colResizer);
            this.colResizer.init(this);
        }
        if (this.columnSort) {
            this.colSorter = new Ext.list.Sorter(this.columnSort);
            this.colSorter.init(this);
        }
        if (!this.internalTpl) {
            this.internalTpl = new Ext.XTemplate('<div class="x-list-header"><div class="x-list-header-inner">', '<tpl for="columns">', '<div style="width:{[values.width*100]}%;text-align:{align};"><em unselectable="on" id="', this.id, '-xlhd-{#}">', '{header}', '</em></div>', '</tpl>', '<div class="x-clear"></div>', '</div></div>', '<div class="x-list-body"><div class="x-list-body-inner">', '</div></div>');
        }
        if (!this.tpl) {
            this.tpl = new Ext.XTemplate('<tpl for="rows">', '<dl class="{[this.getRowClass(values, xindex - 1)]}">', '<tpl for="parent.columns">', '<dt style="width:{[values.width*100]}%;text-align:{align};">', '<em unselectable="on"<tpl if="cls"> class="{cls}</tpl>">', '{[values.tpl.apply(parent)]}', '</em></dt>', '</tpl>', '<div class="x-clear"></div>', '</dl>', '</tpl>', {
                getRowClass: this.getRowClass
            });
        };
        var cs = this.columns,
            allocatedWidth = 0,
            colsWithWidth = 0,
            len = cs.length,
            columns = [];
        for (var i = 0; i < len; i++) {
            var c = cs[i];
            if (!c.isColumn) {
                c.xtype = c.xtype ? (/^lv/.test(c.xtype) ? c.xtype : 'lv' + c.xtype) : 'lvcolumn';
                c = Ext.create(c);
            }
            if (c.width) {
                allocatedWidth += c.width * 100;
                colsWithWidth++;
            }
            columns.push(c);
        }
        cs = this.columns = columns;
        if (colsWithWidth < len) {
            var remaining = len - colsWithWidth;
            if (allocatedWidth < this.maxWidth) {
                var perCol = ((this.maxWidth - allocatedWidth) / remaining) / 100;
                for (var j = 0; j < len; j++) {
                    var c = cs[j];
                    if (!c.width) {
                        c.width = perCol;
                    }
                }
            }
        }
        Srp.gui.AnotacionesRvmListView.superclass.initComponent.call(this);
    }
});
Ext.reg('anotacionesrvmlistview', Srp.gui.AnotacionesRvmListView);
Ext.ns('Srp.gui');
Srp.gui.AnexosContratoListView = Ext.extend(Ext.list.ListView, {
    autoHeight: true,
    initComponent: function () {
        var anotacionesStore = new Ext.data.JsonStore({
            "data": [],
            "autoLoad": true,
            "fields": [{
                name: NOMBRE_ARCHIVO_ANEXOS
            }, {
                name: URL_ARCHIVO_ANEXOS
            }]
        })
        this.store = anotacionesStore;
        this.columns = this.buildColumnModel();
        Srp.gui.AnexosContratoListView.superclass.initComponent.call(this);
    },
    buildColumnModel: function () {
        var columnModel = [{
            width: 0.5,
            dataIndex: NOMBRE_ARCHIVO_ANEXOS,
            header: I18n.commons.nombreArchivos,
            tpl: new Ext.XTemplate('<a href="{' + URL_ARCHIVO_ANEXOS + '}" target="_blank">{' + NOMBRE_ARCHIVO_ANEXOS + '}</a>')
        }];
        return columnModel;
    },
    loadData: function (response) {
        this.store.loadData(eval(ANEXOS));
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenContratoFieldSet = Ext.extend(Ext.form.FieldSet, {
    layout: 'column',
    autoheight: true,
    showButtonVerContrato: false,
    constructor: function (response) {
        this.response = response;
        Ext.apply(this, {
            title: util.Format.formatTipoActuacion(TIPO_ACTUACION_INSCRIPCION),
            items: this.buildItems(response)
        });
        Srp.gui.ResumenContratoFieldSet.superclass.constructor.call(this);
    },
    onRender: function (ct, position) {
        this.loadData();
        Srp.gui.ResumenContratoFieldSet.superclass.onRender.call(this, ct, position);
    },
    buildItems: function (response) {
        var items = [{
            xtype: 'fieldset',
            border: false,
            columnWidth: 0.5,
            defaults: {
                width: 100,
                labelStyle: 'width:150px;',
                xtype: 'displayfield'
            },
            items: [{
                fieldLabel: I18n.commons.nRepertorio,
                name: 'nRepertorio'
            }]
        }, {
            xtype: 'fieldset',
            border: false,
            columnWidth: 0.5,
            defaults: {
                width: 100,
                labelStyle: 'width:150px;',
                xtype: 'displayfield'
            },
            items: [{
                fieldLabel: I18n.commons.agno,
                name: 'agno'
            }]
        }];
        if (!response.isPrintable && response.inscripcion && this.showButtonVerContrato) {
            items.push({
                xtype: 'fieldset',
                border: false,
                columnWidth: 0.10,
                items: [{
                    text: 'Ver Contrato',
                    xtype: 'button',
                    scope: this,
                    handler: function (btn, ev) {
                        var response = this.response;
                        verContratoWindow = new Srp.gui.VerContratoWindow({
                            actuacion: response.inscripcion
                        });
                        verContratoWindow.show();
                    }
                }]
            });
            items[0].columnWidth = 0.45;
            items[1].columnWidth = 0.45;
        }
        return items;
    },
    loadData: function (response) {
        response = !(response) ? this.response : response;
        this.response = response;
        util.Component.setValue(this, 'nRepertorio', eval(NUMERO_REPERTORIO_INSCRIPCION));
        var agnoRepertorio = eval(AGNO_REPERTORIO_INSCRIPCION);
        if (!Ext.isDefined(agnoRepertorio)) {
            agnoRepertorio = response.contratoInscripcion.agno;
        }
        util.Component.setValue(this, 'agno', agnoRepertorio);
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenModificacionPanel = Ext.extend(Ext.form.FieldSet, {
    title: I18n.commons.tipoModificacion,
    border: 0,
    constructor: function (response) {
        var componentsDefinition;
        var subTitle;
        if (TIPO_MODIFICACION_ALZAMIENTO_PARCIAL == eval(TIPO_MODIFICACION)) {
            componentsDefinition = [
                [ANOTACIONES_RVM + ' && ' + ANOTACIONES_RVM + '.length > 0', 'Srp.gui.ResumenAnotacionesRvmFieldSet(response)']
            ];
            subTitle = I18n.commons.tipoAlzamiento;
        } else if (TIPO_MODIFICACION_OTRO == eval(TIPO_MODIFICACION)) {
            componentsDefinition = [
                [true, 'Srp.gui.ResumenOtraModificacionFieldSet()']
            ];
            subTitle = I18n.commons.otraModificacion;
        } else if (TIPO_MODIFICACION_CAMBIO_ACREEDOR == eval(TIPO_MODIFICACION)) {
            componentsDefinition = [
                [ACREEDOR, 'Srp.gui.ResumenAcreedorFieldSet(response)'],
                [ANOTACIONES_RVM + ' && ' + ANOTACIONES_RVM + '.length > 0', 'Srp.gui.ResumenAnotacionesRvmFieldSet(response)']
            ];
            subTitle = I18n.commons.cambioAcreedor;
        } else if (TIPO_MODIFICACION_PROHIBICION_ACTO == eval(TIPO_MODIFICACION)) {
            componentsDefinition = [
                [ANOTACIONES_RVM + ' && ' + ANOTACIONES_RVM + '.length > 0', 'Srp.gui.ResumenAnotacionesRvmFieldSet(response)']
            ];
            subTitle = I18n.commons.prohibicionActo;
        }
        if (componentsDefinition) {
            this.title += '  ::  ' + subTitle;
            Ext.apply(this, {
                items: util.ComponentUtils.createItems(response, componentsDefinition)
            });
        } else {
            Ext.Msg.alert('El dato tipo de mofificación no viene en el response.');
        }
        Srp.gui.ResumenModificacionPanel.superclass.constructor.call(this);
    },
    loadData: function (response) {
        if (eval(TIPO_MODIFICACION)) {
            util.ComponentUtils.loadData(this.items, response);
        }
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenOtraModificacionFieldSet = Ext.extend(Ext.form.FieldSet, {
    layout: 'hbox',
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.ResumenOtraModificacionFieldSet.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var items = [{
            xtype: 'fieldset',
            flex: 1,
            border: false,
            defaults: {
                labelStyle: 'width:100px;',
                xtype: 'displayfield'
            },
            items: [{
                fieldLabel: I18n.commons.descripcion,
                name: 'descripcion',
                flex: 1
            }]
        }];
        return items;
    },
    loadData: function (response) {
        var descripcion;
        if (Ext.isDefined(response.otroDescripcion)) {
            descripcion = response.otroDescripcion;
        } else {
            descripcion = response.otroModificacion;
        }
        util.ComponentUtils.setValue(this, 'descripcion', descripcion);
        this.parent;
    }
});
Ext.ns('Srp.gui');
Srp.gui.CaracteristicasContratoFieldSet = Ext.extend(Ext.form.FieldSet, {
    layout: 'column',
    title: I18n.commons.caracteristicasContrato,
    constructor: function (response) {
        Ext.apply(this, {
            items: this.buildItems(response)
        });
        Srp.gui.CaracteristicasContratoFieldSet.superclass.constructor.call(this);
    },
    buildItems: function (response) {
        var items = [{
            xtype: 'fieldset',
            padding: '0 0 0 0',
            columnWidth: 0.6,
            border: false,
            defaults: {
                labelStyle: 'width:150px;',
                xtype: 'displayfield'
            },
            items: this.buildDisplayItems(response, true)
        }, {
            xtype: 'fieldset',
            padding: '0 0 0 0',
            columnWidth: 0.4,
            border: false,
            defaults: {
                labelStyle: 'width:150px;',
                xtype: 'displayfield'
            },
            items: this.buildDisplayItems(response, false)
        }];
        return items;
    },
    buildDisplayItems: function (response, isLeft) {
        var items = [];
        var itemsDefinitions = [];
        if (isLeft) {
            itemsDefinitions.push([I18n.commons.tipoDocumento, 'tipoDocumento']);
            if (eval(PROHIBICION_GRAVAR_ENAJENAR)) {
                itemsDefinitions.push([I18n.commons.prohibicionGravarEnajenar, 'prohibicionGravarEnajenar']);
            }
            itemsDefinitions.push([I18n.commons.nRepertorioNotaria, 'nRepertorioNotaria']);
            itemsDefinitions.push([I18n.commons.agno, 'agnoRepertorioNotaria']);
            if (eval(NOMBRE_NOTARIO)) itemsDefinitions.push([I18n.commons.nombreNotario, 'nombreNotario']);
            if (eval(RUN_NOTARIO)) itemsDefinitions.push([I18n.commons.runNotario, 'runNotario']);
        } else {
            if (eval(FECHA_OTORGAMIENTO)) itemsDefinitions.push([I18n.commons.fechaOtorgamiento, 'fechaOtorgamiento']);
            if (eval(FECHA_AUTORIZACION)) itemsDefinitions.push([I18n.commons.fechaAutorizacion, 'fechaAutorizacion']);
            if (eval(FECHA_SUSCRIPCION)) itemsDefinitions.push([I18n.commons.fechaSuscripcion, 'fechaSuscripcion']);
            if (eval(FECHA_PROTOCOLIZACION)) itemsDefinitions.push([I18n.commons.fechaProtocolizacion, 'fechaProtocolizacion']);
            if (eval(DESC_TIPO_MODIFICACION) && response.isCaratula) itemsDefinitions.push([I18n.commons.tipoModificacion, 'tipoModificacion']);
        }
        for (var i = 0; i < itemsDefinitions.length; i++) {
            items.push({
                fieldLabel: itemsDefinitions[i][0],
                name: itemsDefinitions[i][1]
            });
        }
        return items;
    },
    loadData: function (response) {
        util.Component.setValue(this, 'tipoDocumento', Srp.CategoryManager.getCategory(Srp.CategoryManager.TIPO_DOCUMENTO, eval(TIPO_DOCUMENTO)).text);
        util.Component.setValue(this, 'fechaProtocolizacion', util.Format.formatDate(eval(FECHA_PROTOCOLIZACION)));
        util.Component.setValue(this, 'fechaOtorgamiento', util.Format.formatDate(eval(FECHA_OTORGAMIENTO)));
        util.Component.setValue(this, 'fechaSuscripcion', util.Format.formatDate(eval(FECHA_SUSCRIPCION)));
        util.Component.setValue(this, 'fechaAutorizacion', util.Format.formatDate(eval(FECHA_AUTORIZACION)));
        util.Component.setValue(this, 'agnoRepertorioNotaria', eval(AGNO_REPERTORIO_NOTARIA));
        util.Component.setValue(this, 'nRepertorioNotaria', eval(NUMERO_REPERTORIO_NOTARIA));
        util.Component.setValue(this, 'nombreNotario', eval(NOMBRE_NOTARIO));
        util.Component.setValue(this, 'runNotario', util.Format.formatRut(eval(RUN_NOTARIO)));
        util.Component.setValue(this, 'prohibicionGravarEnajenar', util.Format.formatCondicion(eval(PROHIBICION_GRAVAR_ENAJENAR)));
        util.Component.setValue(this, 'tipoModificacion', eval(DESC_TIPO_MODIFICACION));
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenMontosFieldSet = Ext.extend(Ext.Panel, {
    layout: 'column',
    padding: 10,
    width: '97%',
    constructor: function (tipoActuacion) {
        this.tipoActuacion = tipoActuacion;
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.ResumenMontosFieldSet.superclass.constructor.call(this);
    },
    onRender: function (ct, position) {
        Srp.gui.ResumenMontosFieldSet.superclass.onRender.call(this, ct, position);
    },
    buildItems: function () {
        var items = [{
            xtype: 'fieldset',
            columnWidth: 0.30,
            border: false,
            items: [{
                fieldLabel: I18n.commons.medioPago,
                xtype: 'displayfield',
                value: TIPO_MEDIO_PAGO_EFECTIVO
            }]
        }, {
            xtype: 'fieldset',
            itemId: 'pagadaFieldset',
            columnWidth: 0.30,
            border: false
        }, {
            xtype: 'fieldset',
            columnWidth: 0.40,
            border: false,
            defaults: {
                width: 100,
                labelStyle: 'width:130px;'
            },
            items: [{
                fieldLabel: I18n.commons.montoActuacion.replace('%actuacion', util.Format.tipoActuacionRenderer(this.tipoActuacion)),
                name: 'montoInscripcion',
                xtype: 'displayfield'
            }, {
                fieldLabel: I18n.commons.montoAnotacionesRVM,
                name: 'montoAnotacionesRVM',
                xtype: 'displayfield'
            }, {
                fieldLabel: I18n.commons.montoTotal,
                name: 'montoTotal',
                xtype: 'displayfield'
            }]
        }];
        return items;
    },
    loadData: function (response) {
        var montoTotal = 0;
        var montoInscripcion = 0;
        if (response.pagada) {
            montoTotal = reponse.montoTotal;
            montoInscripcion = reponse.montoActuacion;
            montoAnotacionesRVM = reponse.montoTotal - reponse.montoActuacion;
        } else {
            if (!Ext.isDefined(response.montoInscripcion)) {
                Srp.MontosManager.setMontosResumen(response);
            }
            montoInscripcion = Ext.util.Format.number(response.montoInscripcion, I18n.format.amount.textfield);
            montoTotal = Ext.util.Format.number(response.montoTotal, I18n.format.amount.textfield);
            montoAnotacionesRVM = Ext.util.Format.number(response.montoTotal - response.montoInscripcion, I18n.format.amount.textfield);
        }
        util.ComponentUtils.setValue(this, 'montoTotal', montoTotal);
        util.ComponentUtils.setValue(this, 'montoAnotacionesRVM', montoAnotacionesRVM);
        util.ComponentUtils.setValue(this, 'montoInscripcion', montoInscripcion);
        this.getComponent('pagadaFieldset').add({
            fieldLabel: 'PAGADA',
            itemId: 'pagada',
            xtype: 'box',
            html: util.Format.pagada(response.pagado)
        });
    }
});
Ext.ns('Srp.gui');
Srp.gui.ContratoArchivoFieldSet = Ext.extend(Ext.form.FieldSet, {
    title: I18n.commons.contrato,
    defaults: {
        width: 300,
        labelStyle: 'width:150px;'
    },
    constructor: function (response) {
        this.response = response;
        Srp.gui.ContratoArchivoFieldSet.superclass.constructor.call(this);
    },
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.ContratoArchivoFieldSet.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var items = [{
            name: 'archivoAnotacionesRVM',
            xtype: 'displayfield',
            fieldLabel: I18n.commons.nombreArchivo
        }];
        return items;
    },
    loadData: function (response) {
        var fileName = eval(NOMBRE_ARCHIVO_CONTRATO);
        var fileUrl = eval(URL_ARCHIVO_CONTRATO);
        var htmlLink = util.ComponentUtils.getHtmlLink(fileName, fileUrl);
        util.ComponentUtils.setValue(this, 'archivoAnotacionesRVM', htmlLink);
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenAnotacionMargenPanel = Ext.extend(Ext.Panel, {
    padding: 5,
    initComponent: function () {
        Ext.apply(this, {
            items: []
        });
        Srp.gui.ResumenAnotacionMargenPanel.superclass.initComponent.call(this);
        this.loadData(this.actuacion);
    },
    onRender: function (ct, position) {
        Srp.gui.ResumenAnotacionMargenPanel.superclass.onRender.call(this, ct, position);
    },
    buildItems: function (response) {
        var items = [util.Component.buildHorizontalItems(this.getDefItemsContrato(), I18n.unidadPrendas.contratoInscripcion, response), util.Component.buildHorizontalItems(this.getDefItemsSolicitante(response), I18n.unidadPrendas.solicitante, response), util.Component.buildHorizontalItems(this.getDefItemsAnotacion(response), I18n.unidadPrendas.anotacion, response)]
        return items;
    },
    getDefItemsContrato: function () {
        var itemsDefinitions = [];
        itemsDefinitions.push([I18n.commons.nRepertorio, 'numeroRepertorio']);
        itemsDefinitions.push([I18n.commons.agno, 'agnoRepertorio']);
        return itemsDefinitions;
    },
    getDefItemsSolicitante: function (response) {
        var itemsDefinitions = [];
        itemsDefinitions.push([I18n.unidadPrendas.tipoSolicitante, 'solicitanteTipoDesc']);
        var categoryDescripcion = Srp.CategoryManager.getCategoryDescripcion(Srp.CategoryManager.TIPO_SOLICITANTE, eval(SOLICITANTE_TIPO_ID));
        itemsDefinitions.push(['Solicitante', 'solicitanteValor']);
        itemsDefinitions.push([I18n.unidadPrendas.docReferencia, 'docReferencia']);
        return itemsDefinitions;
    },
    getDefItemsAnotacion: function (response) {
        var itemsDefinitions = [];
        itemsDefinitions.push([I18n.unidadPrendas.tipoAnotacion, 'anotacionTipoDesc']);
        if (eval(ANOTACION_TIPO_OTRO)) {
            itemsDefinitions.push([I18n.unidadPrendas.anotacion, 'anotacionTipoOtro']);
        }
        itemsDefinitions.push([I18n.unidadPrendas.descripcion, 'anotacionDescripcion']);
        return itemsDefinitions;
    },
    loadData: function (response) {
        log.Log4JS.debug('this.actuacion: ' + this.actuacion);
        this.removeAll(true);
        var items = this.buildItems(this.actuacion);
        for (var i = 0; i < items.length; i++) {
            this.add(items[i]);
        }
        this.doLayout();
        util.Component.setValue(this, 'agnoRepertorio', eval(ANOTACION_MARGEN_AGNO_ANOTACION));
        util.Component.setValue(this, 'numeroRepertorio', eval(ANOTACION_MARGEN_NUMERO_REPERTORIO));
        var solicitanteTipoDesc = Srp.CategoryManager.getCategoryDescripcion(Srp.CategoryManager.TIPO_SOLICITANTE, eval(SOLICITANTE_TIPO_ID));
        var categoryDescripcion = '';
        if (eval(SOLICITANTE_TIPO_ID) == TIPO_SOLICITANTE_TRIBUNAL) {
            categoryDescripcion = Srp.CategoryManager.getCategoryDescripcion(Srp.CategoryManager.TRIBUNAL, eval(SOLICITANTE_VALOR));
        } else {
            categoryDescripcion = eval(SOLICITANTE_VALOR);
        }
        util.Component.setValue(this, 'solicitanteTipoDesc', solicitanteTipoDesc);
        util.Component.setValue(this, 'solicitanteValor', categoryDescripcion);
        util.Component.setValue(this, 'docReferencia', eval(DOC_REFERENCIA));
        categoryDescripcion = Srp.CategoryManager.getCategoryDescripcion(Srp.CategoryManager.TIPO_ANOTACION, eval(ANOTACION_TIPO_ID));
        util.Component.setValue(this, 'anotacionTipoDesc', categoryDescripcion);
        util.Component.setValue(this, 'anotacionTipoOtro', eval(ANOTACION_TIPO_OTRO));
        util.Component.setValue(this, 'anotacionDescripcion', eval(ANOTACION_DESCRIPCION));
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenComentarioRechazoUPPanel = Ext.extend(Ext.Panel, {
    title: I18n.notaria.actuacion.motivosRechazo,
    padding: 5,
    border: true,
    width: '97%',
    iconCls: 'icon-comentario-rechazo-up',
    initComponent: function () {
        var config = {};
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ResumenComentarioRechazoUPPanel.superclass.initComponent.call(this);
    },
    setJSON: function (response) {
        this.add({
            html: unescape(eval(COMENTARIO_RECHAZO_ABOGADO)),
            border: false,
            boxMaxWidth: 650
        });
    },
    loadData: function (response) {
        this.setJSON(response);
    }
});
Ext.ns('Srp.gui');
Srp.gui.RevisionAnotacionMargenPanel = Ext.extend(Srp.gui.ResumenAnotacionMargenPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.revisionAnotacionMargen);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.RevisionAnotacionMargenPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        var botonRevisar = {
            itemId: 'aprobar-button',
            text: I18n.commons.aprobar,
            xtype: 'button',
            scope: this,
            handler: this.onAprobarRevision,
            iconCls: 'icon-button-aprobar'
        };
        var botonRechazar = {
            itemId: 'rechazar-button',
            text: I18n.commons.rechazar,
            xtype: 'button',
            scope: this,
            handler: this.onRechazarRevision,
            iconCls: 'icon-button-rechazar'
        };
        var botonCancelar = {
            text: I18n.commons.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }
        return [botonRevisar, '-', botonRechazar, {
            xtype: 'tbfill'
        }, botonCancelar];
    },
    onRechazarRevision: function (btn, ev) {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.UP.RECHAZAR_REVISION,
            scope: this,
            success: this.onSuccessRevisar,
            failure: this.onFailureRevisar
        })
    },
    onAprobarRevision: function (btn, ev) {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.UP.APROBAR_REVISION,
            scope: this,
            success: this.onSuccessRevisar,
            failure: this.onFailureRevisar
        })
    },
    onSuccessRevisar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha revisado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onSuccessRechazar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha rechazado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onFailureRevisar: function () {},
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.AprobacionAnotacionMargenPanel = Ext.extend(Srp.gui.ResumenAnotacionMargenPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.aprobacionAnotacionMargen);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.AprobacionAnotacionMargenPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        var botonRevisar = {
            itemId: 'aprobar-button',
            text: I18n.commons.aprobar,
            xtype: 'button',
            scope: this,
            handler: this.onAprobarRevision,
            iconCls: 'icon-button-aprobar'
        };
        var botonCancelar = {
            text: I18n.commons.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        };
        return [botonRevisar, {
            xtype: 'tbfill'
        }, botonCancelar];
    },
    onAprobarRevision: function (btn, ev) {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.UP.APROBAR_APROBACION,
            scope: this,
            success: this.onSuccessRevisar,
            failure: this.onFailureRevisar
        });
    },
    onSuccessRevisar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha revisado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onSuccessRechazar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha rechazado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onFailureRevisar: function () {},
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.InformeRecaudacionPanel = Ext.extend(Ext.Panel, {
    layout: 'form',
    padding: 5,
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.informeRecaudacion);
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildButtons()
        });
        Srp.gui.InformeRecaudacionPanel.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var NOW = new Date();
        var dateNow = new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate(), 0, 0, 0);
        var fechaDesde = {
            xtype: 'datefield',
            fieldLabel: I18n.busqueda.fecha,
            name: 'fechaDesde',
            itemId: 'fechaDesde',
            format: 'd/m/Y',
            editable: false,
            value: dateNow,
            listeners: {
                scope: this,
                change: this.onChange
            }
        };
        var comboTipoFormato = {
            itemId: 'tipoFormato',
            id: 'tipoFormato',
            xtype: 'categoryComboBox',
            fieldLabel: I18n.reportes.titulos.formato,
            name: 'tipoFormato',
            categoryType: Srp.CategoryManager.FORMATO_INFORME,
            width: 115,
            listeners: {
                select: {
                    fn: this.onSelectFormato,
                    scope: this
                }
            },
            value: FORMATO_INFORME_PDF
        };
        var detalle = {
            xtype: 'checkbox',
            name: 'detalle',
            itemId: 'detalle',
            fieldLabel: "Detalle",
            block: false,
            listeners: {
                check: {
                    fn: this.onClickDetalle,
                    scope: this
                }
            },
            checked: true
        };
        var comboTipoInforme = {
            itemId: 'tipoInforme',
            id: 'tipoInforme',
            xtype: 'categoryComboBox',
            fieldLabel: I18n.reportes.titulos.tipoInforme,
            name: 'tipoInforme',
            categoryType: Srp.CategoryManager.TIPO_INFORME,
            width: 115,
            listeners: {
                select: {
                    fn: this.onChange,
                    scope: this
                }
            },
            value: TIPO_INFORME_PPE
        };
        return [fechaDesde, comboTipoFormato, detalle, comboTipoInforme];
    },
    onSelectFormato: function (combo, record, index) {
        var detalle = this.getComponent('detalle');
        if (record.get('id') == FORMATO_INFORME_EXCEL) {
            detalle.setValue(true);
            detalle.block = true;
        } else {
            detalle.block = false;
        }
        this.onChange();
    },
    onClickDetalle: function (chbx, newval, oldval) {
        if (chbx.block) {
            chbx.setValue(true);
        }
        this.onChange();
    },
    onChange: function (field, val, val2) {
        var valueFechaDesde = this.getComponent('fechaDesde').getValue();
        var detalle = this.getComponent('detalle').getValue();
        var formato = this.getComponent('tipoFormato').getValue();
        var tipo = this.getComponent('tipoInforme').getValue();
        var params = {
            fechaDesde: util.Format.formatDateFormat(valueFechaDesde, 'Y-m-d'),
            fechaHasta: util.Format.formatDateFormat(valueFechaDesde, 'Y-m-d'),
            ticket: Srp.WebScriptManager.getTicket(),
            tipo: detalle ? TIPO_DETALLE_INFORME_CON_DETALLE : TIPO_DETALLE_INFORME_SIN_DETALLE,
            formato: formato,
            pago: tipo
        };
        this.getBottomToolbar().getComponent('informe-button').setParams(params);
    },
    buildButtons: function () {
        var botonInforme = {
            xtype: 'linkbutton',
            itemId: 'informe-button',
            text: I18n.reportes.buttons.informe,
            iconCls: 'icon-button-informe',
            href: Srp.WebServiceManager.getDirectUrl('INFORME_RECAUDACION'),
            listeners: {
                scope: this,
                click: this.onChange
            }
        };
        var botonCancelar = {
            text: I18n.commons.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        };
        return [botonInforme, {
            xtype: 'tbfill'
        }, botonCancelar];
    },
    onReportePdf: function (btn, ev) {},
    onReporteExcel: function (btn, ev) {},
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.InformeRecaudacionMasivoPanel = Ext.extend(Ext.Panel, {
    layout: 'form',
    padding: 5,
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.informeRecaudacionMasivo);
        this.informeRecaudacion = Srp.ReportesManager.getInformeRecaudacion();
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildButtons()
        });
        Srp.gui.InformeRecaudacionMasivoPanel.superclass.initComponent.call(this);
        this.registrarEventos();
        if (Ext.isDefined(this.informeRecaudacion)) {
            this.datesQueryRange = this.informeRecaudacion.datesQueryRange;
            this.params = this.informeRecaudacion.params;
            this.taskId = this.informeRecaudacion.taskId;
            Srp.FrontController.fireEvent('onMonitoreoDataInformeRecaudacion', this.taskId);
        }
    },
    onRender: function (ct, position) {
        Srp.gui.InformeRecaudacionMasivoPanel.superclass.onRender.call(this, ct, position);
        Srp.WebScriptManager.revalidateTicket();
    },
    buildItems: function () {
        return [this.buildGenForm(), this.buildDownloadForm()];
    },
    buildGenForm: function () {
        var NOW = new Date();
        var dateNow = new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate(), 0, 0, 0);
        var fechaDesdeValue = fechaHastaValue = dateNow;
        var tipoInformeValue = TIPO_INFORME_PPE;
        if (Ext.isDefined(this.informeRecaudacion)) {
            fechaDesdeValue = this.informeRecaudacion.datesQueryRange.fechaDesde;
            fechaHastaValue = this.informeRecaudacion.datesQueryRange.fechaHasta;
            tipoInformeValue = this.informeRecaudacion.params.pago;
        }
        var fechaDesde = {
            xtype: 'datefield',
            fieldLabel: I18n.busqueda.fechaDesde,
            name: 'fechaDesde',
            itemId: 'fechaDesde',
            format: 'd/m/Y',
            editable: false,
            value: fechaDesdeValue
        };
        var fechaHasta = {
            xtype: 'datefield',
            fieldLabel: I18n.busqueda.fechaHasta,
            name: 'fechaHasta',
            itemId: 'fechaHasta',
            format: 'd/m/Y',
            editable: false,
            value: fechaHastaValue
        };
        var comboTipoInforme = {
            itemId: 'tipoInforme',
            id: 'tipoInforme',
            xtype: 'categoryComboBox',
            fieldLabel: I18n.reportes.titulos.tipoInforme,
            name: 'tipoInforme',
            categoryType: Srp.CategoryManager.TIPO_INFORME,
            width: 115,
            value: tipoInformeValue
        };
        var buttons = [{
            xtype: 'button',
            itemId: 'informe-button',
            text: I18n.reportes.buttons.informe,
            iconCls: 'icon-button-informe',
            listeners: {
                scope: this,
                click: this.onGenerarInforme
            },
            iconAlign: 'left'
        }];
        var searchItems = [{
            columnWidth: 0.25,
            layout: 'form',
            labelWidth: 90,
            border: false,
            itemId: 'column-first',
            items: [fechaDesde]
        }, {
            columnWidth: 0.25,
            layout: 'form',
            labelWidth: 90,
            itemId: 'column-second',
            border: false,
            items: [fechaHasta]
        }, {
            columnWidth: 0.25,
            layout: 'form',
            labelWidth: 70,
            itemId: 'column-third',
            border: false,
            items: [comboTipoInforme]
        }, {
            columnWidth: 0.25,
            layout: 'hbox',
            itemId: 'column-fourth',
            border: false,
            items: buttons,
            layoutConfig: {
                padding: '0',
                pack: 'end',
                align: 'middle'
            }
        }];
        this.genFieldSet = new Ext.form.FieldSet({
            items: searchItems,
            layout: 'column',
            itemId: 'genFieldSet',
            title: 'Generar Archivo',
            padding: 0
        });
        return this.genFieldSet;
    },
    buildDownloadForm: function () {
        var comboTipoFormato = {
            itemId: 'tipoFormato',
            id: 'tipoFormato',
            xtype: 'categoryComboBox',
            fieldLabel: I18n.reportes.titulos.formato,
            name: 'tipoFormato',
            categoryType: Srp.CategoryManager.FORMATO_INFORME,
            width: 115,
            listeners: {
                select: {
                    fn: this.onSelectFormato,
                    scope: this
                }
            },
            value: FORMATO_INFORME_PDF
        };
        var comboTipoDetalle = {
            itemId: 'tipoDetalle',
            id: 'tipoDetalle',
            xtype: 'categoryComboBox',
            fieldLabel: I18n.reportes.titulos.tipoDetalle,
            name: 'tipoDetalle',
            categoryType: Srp.CategoryManager.TIPO_DETALLE_INFORME,
            width: 190,
            listeners: {
                select: {
                    fn: this.onSelectTipoDetalle,
                    scope: this
                }
            },
            value: TIPO_DETALLE_INFORME_CON_DETALLE
        };
        var buttons = [{
            xtype: 'linkbutton',
            itemId: 'descargar-button',
            text: I18n.reportes.buttons.descargar,
            iconCls: 'icon-button-descargar-informe',
            href: Srp.WebServiceManager.getDirectUrl('INFORME_RECAUDACION_MASIVO_DESCARGAR'),
            listeners: {
                scope: this,
                click: this.onDescargarInforme
            },
            disabled: true
        }];
        var searchItems = [{
            columnWidth: 0.4,
            layout: 'form',
            labelWidth: 90,
            border: false,
            itemId: 'column-first',
            items: [comboTipoDetalle]
        }, {
            columnWidth: 0.35,
            layout: 'form',
            labelWidth: 100,
            itemId: 'column-second',
            border: false,
            items: [comboTipoFormato]
        }, {
            columnWidth: 0.25,
            layout: 'hbox',
            itemId: 'column-third',
            border: false,
            items: buttons,
            layoutConfig: {
                padding: '0',
                pack: 'end',
                align: 'middle'
            }
        }];
        this.reporteTituloContainer = new Ext.Container({
            items: [{
                xtype: 'displayfield',
                value: '',
                fieldLabel: "Informe Disponible",
                itemId: 'tituloReporte',
                cls: 'displayfield-titulo-reporte'
            }],
            layout: 'form',
            labelWidth: 130
        });
        this.downloadContainer = new Ext.Container({
            items: searchItems,
            layout: 'column',
            itemId: 'downloadContainer',
            padding: 0,
            margin: 0,
            border: false
        });
        this.downloadFieldSet = {
            xtype: 'fieldset',
            items: [this.reporteTituloContainer, this.downloadContainer],
            padding: 0,
            itemId: 'downloadFieldSet',
            title: 'Descargar Informe'
        };
        return this.downloadFieldSet;
    },
    onSelectFormato: function (combo, record, index) {},
    onSelectTipoDetalle: function (combo, record, index) {
        var formato = this.downloadContainer.getComponent('column-second').getComponent('tipoFormato');
        formato.setReadOnly(false);
        if (record.get('id') == TIPO_DETALLE_INFORME_SIN_DETALLE) {
            formato.setValue(FORMATO_INFORME_PDF);
            formato.setReadOnly(true);
        }
    },
    getParameters: function () {
        var fechaDesde = this.genFieldSet.getComponent('column-first').getComponent('fechaDesde').getValue();
        var fechaHasta = this.genFieldSet.getComponent('column-second').getComponent('fechaHasta').getValue();
        var fechaRango = fechaDesde.getElapsed(fechaHasta) + 86400000;
        this.datesQueryRange = {
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta,
            fechaRango: fechaRango
        };
        var params = {
            fechaDesde: util.Format.formatDateFormat(fechaDesde, 'Y-m-d'),
            fechaHasta: util.Format.formatDateFormat(fechaHasta, 'Y-m-d'),
            pago: this.genFieldSet.getComponent('column-third').getComponent('tipoInforme').getValue(),
            formato: this.downloadContainer.getComponent('column-second').getComponent('tipoFormato').getValue(),
            tipo: this.downloadContainer.getComponent('column-first').getComponent('tipoDetalle').getValue(),
            ticket: Srp.WebScriptManager.getTicket()
        };
        return params;
    },
    onGenerarInforme: function () {
        this.loadMask(I18n.reportes.mensajes.iniciando);
        this.params = this.getParameters();
        var parameters = {
            params: this.params,
            onSuccess: 'onGetTaskIdSuccess',
            onFailure: 'onGetTaskIdFailure'
        };
        Srp.FrontController.fireEvent('onGenerarDataInformeRecaudacion', parameters);
    },
    onGetTaskIdSuccess: function (sessionId, taskId) {
        this.taskId = taskId;
        this.sessionId = sessionId;
        util.crearCookie("JSESSIONID", this.sessionId);
        Srp.ReportesManager.setInformeRecaudacion({
            datesQueryRange: this.datesQueryRange,
            params: this.params,
            taskId: this.taskId
        });
        Srp.FrontController.fireEvent('onMonitoreoDataInformeRecaudacion', this.taskId);
    },
    onGetTaskIdFailure: function () {
        Srp.gui.messageBox.Error({
            msg: I18n.reportes.errores.generarArchivo
        });
        this.removeMask();
    },
    onMonitorearTaskSuccess: function (msg, params) {
        if (msg == 'COMPLETE') {
            return this.onGeneracionCompletada();
        } else {
            var fechaGeneracion = Date.parseDate(msg, "Y-m-d");
            var periodoGenerado = this.datesQueryRange.fechaDesde.getElapsed(fechaGeneracion);
            var porcentaje = Math.round((periodoGenerado / this.datesQueryRange.fechaRango) * 100);
            var mensaje = I18n.reportes.mensajes.progreso.replace("%fecha", util.reverseDate(msg, '/')).replace("%porcentaje", porcentaje);
            this.loadMask(mensaje);
            var timeoutMonitoreoInformeRecaudacion = Srp.conf.Properties.TIMEOUT_MONITOREO_INFORME_RECAUDACION * 1000;
            setTimeout("Srp.FrontController.fireEvent('onMonitoreoDataInformeRecaudacion', '" + this.taskId + "');", timeoutMonitoreoInformeRecaudacion);
        }
    },
    onMonitorearTaskFailure: function () {
        Srp.gui.messageBox.Error({
            msg: I18n.reportes.errores.monitoreoGeneracionArchivo
        });
        this.removeMask();
    },
    setTituloInforme: function () {
        var tituloValue = I18n.reportes.mensajes.tituloReporte.replace('%fechaDesde', util.Format.formatDateFormat(this.datesQueryRange.fechaDesde, 'd-m-Y')).replace('%fechaHasta', util.Format.formatDateFormat(this.datesQueryRange.fechaHasta, 'd-m-Y')).replace('%tipo', this.params.pago);
        this.reporteTituloContainer.getComponent('tituloReporte').setValue(tituloValue);
    },
    onGeneracionCompletada: function () {
        this.loadMask("Completado (100%)");
        this.setTituloInforme();
        this.downloadContainer.getComponent('column-third').getComponent('descargar-button').enable();
        this.removeMask();
    },
    onDescargarInforme: function (field, val, val2) {
        this.params.taskId = this.taskId;
        this.params.formato = this.downloadContainer.getComponent('column-second').getComponent('tipoFormato').getValue();
        this.params.tipo = this.downloadContainer.getComponent('column-first').getComponent('tipoDetalle').getValue();
        this.downloadContainer.getComponent('column-third').getComponent('descargar-button').setParams(this.params);
    },
    buildButtons: function () {
        var botonCancelar = {
            text: I18n.commons.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        };
        return [{
            xtype: 'tbfill'
        }, botonCancelar];
    },
    loadMask: function (msg) {
        this.getEl().mask(msg, "x-mask-loading");
    },
    removeMask: function () {
        this.getEl().unmask();
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    },
    registrarEventos: function () {
        var generarDataInformeRecaudacionCmd = new Srp.command.GenerarDataInformeRecaudacionCmd();
        generarDataInformeRecaudacionCmd.setParameter('obj', this);
        var monitorearDataInformeRecaudacionCmd = new Srp.command.MonitorearDataInformeRecaudacionCmd();
        monitorearDataInformeRecaudacionCmd.setParameter('obj', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onGenerarDataInformeRecaudacion',
            command: generarDataInformeRecaudacionCmd
        }, {
            name: 'onMonitoreoDataInformeRecaudacion',
            command: monitorearDataInformeRecaudacionCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.CalidadFieldSet = Ext.extend(Ext.form.FieldSet, {
    defaultType: 'textfield',
    autoHeight: true,
    padding: 0,
    itemId: 'calidadFieldSet',
    labelWidth: 130,
    eventos: [],
    validarUnicidadContratante: false,
    initComponent: function () {
        var ou = model.user.Usuario.getOrganization();
        this.tipoOU = ou.tipo;
        this.fieldsReadOnly = false;
        this.xtypeField = 'textfield';
        switch (ou.tipo) {
            case TIPO_OU_NOTARIA:
                break;
            case TIPO_OU_OFICINA:
                this.fieldsReadOnly = true;
                this.xtypeField = 'displayfield';
                break;
        }
        Ext.apply(this, {
            items: this.buildItems(),
            listeners: {
                scope: this
            }
        });
        Srp.gui.CalidadFieldSet.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    buildItems: function () {
        var nodeid = new Ext.form.Hidden({
            itemId: 'nodeid',
            name: 'nodeid'
        });
        var comboCalidad = {
            itemId: 'calidadComboBox',
            xtype: 'categoryComboBox',
            fieldLabel: I18n.notaria.actuacion.calidad,
            name: 'personaTipo',
            categoryType: Srp.CategoryManager.TIPO_CALIDAD_PERSONA,
            width: 150,
            listeners: {
                select: {
                    fn: this.putContratanteFields,
                    scope: this
                }
            }
        };
        return [new Ext.form.FormPanel({
            border: false,
            itemId: 'calidadFormPanel',
            items: [comboCalidad, nodeid],
            layout: 'form',
            boxMaxWidth: 650
        })];
    },
    removeFields: function () {
        var form = this.getComponent('calidadFormPanel');
        if (form.getComponent('personaNatural')) {
            form.getComponent('personaNatural').destroy();
        }
        if (form.getComponent('personaJuridica')) {
            form.getComponent('personaJuridica').destroy();
        }
        if (form.getComponent('extranjero')) {
            form.getComponent('extranjero').destroy();
        }
    },
    makeValue: function (data, key) {
        if (data != null) {
            if (data[key] != null) return data[key];
            else return '';
        }
    },
    validateUnicidadContratante: function () {
        if (this.validarUnicidadContratante) {
            return {
                blur: {
                    fn: Srp.gui.ContratantesPanel.checkNewContratante
                }
            };
        }
        return {};
    },
    buildPersonaJuridicaContainer: function (data) {
        var items = [{
            itemId: 'identificadorTipo',
            name: 'identificadorTipo',
            value: IDENTIFICADOR_TIPO_PERSONA_JURIDICA,
            xtype: 'hidden'
        }, {
            contratanteName: this.contratanteName,
            cls: 'credencial',
            itemId: 'rut',
            fieldLabel: 'RUT',
            name: 'identificador',
            value: this.makeValue(data, 'identificador'),
            vtype: 'rut',
            xtype: 'textfield',
            allowBlank: false,
            listeners: this.validateUnicidadContratante(),
            calidadId: CALIDAD_PERSONA_JURIDICA,
            checkNewContratante: Srp.gui.ContratantesPanel.checkNewContratante
        }, {
            cls: 'credencial',
            itemId: 'razonSocial',
            fieldLabel: 'Razón Social',
            name: 'razonSocial',
            value: this.makeValue(data, 'razonSocial'),
            xtype: 'textfield',
            width: 300
        }];
        return {
            xtype: 'container',
            layout: 'form',
            items: items,
            itemId: 'personaJuridica',
            border: false
        };
    },
    buildExtranjeroContainer: function (data) {
        var items = [{
            xtype: 'fieldset',
            columnWidth: 0.5,
            itemId: 'leftColumn',
            border: false,
            items: [{
                cls: 'credencial',
                itemId: 'identificadorTipo',
                fieldLabel: 'Tipo Identificador',
                name: 'identificadorTipo',
                value: this.makeValue(data, 'identificadorTipo'),
                width: 175,
                categoryType: Srp.CategoryManager.IDENTIFICADOR_TIPO_EXTRANJERO,
                xtype: 'categoryComboBox'
            }, {
                contratanteName: this.contratanteName,
                cls: 'credencial',
                fieldLabel: 'Identificador',
                itemId: 'numeroIdentificador',
                name: 'identificador',
                value: this.makeValue(data, 'identificador'),
                xtype: 'textfield',
                listeners: this.validateUnicidadContratante(),
                allowBlank: false,
                calidadId: CALIDAD_EXTRANJERA,
                vtype: 'identificadorExtranjero'
            }]
        }, {
            xtype: 'fieldset',
            columnWidth: 0.5,
            itemId: 'rightColumn',
            border: false,
            items: [{
                cls: 'credencial',
                fieldLabel: 'País',
                itemId: 'pais',
                name: 'pais',
                categoryType: Srp.CategoryManager.PAIS,
                value: this.makeValue(data, 'pais'),
                width: 160,
                xtype: 'categoryComboBox',
                allowBlank: false,
                editable: true
            }, {
                cls: 'credencial',
                fieldLabel: 'Nombre completo',
                itemId: 'nombres',
                name: 'nombres',
                value: this.makeValue(data, 'nombres'),
                xtype: 'textfield',
                width: 160
            }]
        }];
        return {
            xtype: 'container',
            layout: 'column',
            items: items,
            itemId: 'extranjero',
            border: false
        };
    },
    buildPersonaNaturalContainer: function (data) {
        var runlisteners = this.validateUnicidadContratante();
        runlisteners.render = {
            fn: this.onAfterlayout,
            scope: this
        };
        if (!this.fieldsReadOnly) {
            runlisteners.blur = {
                fn: function () {
                    this.checkEstadoValidacion();
                },
                scope: this
            };
        }
        var items = [{
            itemId: 'identificadorTipo',
            name: 'identificadorTipo',
            value: IDENTIFICADOR_TIPO_PERSONA_NATURAL,
            xtype: 'hidden'
        }, {
            xtype: 'fieldset',
            columnWidth: 0.5,
            itemId: 'leftColumn',
            border: false,
            items: [{
                contratanteName: this.contratanteName,
                cls: 'credencial',
                fieldLabel: 'RUN',
                itemId: 'run',
                width: 90,
                name: 'identificador',
                value: this.makeValue(data, 'identificador'),
                vtype: 'rut',
                xtype: 'textfield',
                enableKeyEvents: true,
                listeners: runlisteners,
                allowBlank: false,
                calidadId: CALIDAD_PERSONA_NATURAL
            }, {
                cls: 'credencial-nombre',
                fieldLabel: 'Nombres',
                itemId: 'nombres',
                width: 180,
                name: 'nombres',
                value: this.makeValue(data, 'nombres'),
                xtype: this.xtypeField,
                readOnly: this.fieldsReadOnly
            }, {
                xtype: 'hidden',
                value: this.makeValue(data, 'identificadorvalido'),
                name: 'identificadorvalido',
                itemId: 'identificadorvalido',
                cls: 'calidad-status'
            }]
        }, {
            xtype: 'fieldset',
            columnWidth: 0.5,
            itemId: 'rightColumn',
            border: false,
            defaults: {
                width: 100,
                labelStyle: 'width:130px;'
            },
            items: [{
                cls: 'credencial-nombre',
                fieldLabel: 'Apellido Paterno',
                itemId: 'apellidoPaterno',
                name: 'apellidoPaterno',
                value: this.makeValue(data, 'apellidoPaterno'),
                xtype: this.xtypeField,
                readOnly: this.fieldsReadOnly
            }, {
                cls: 'credencial-nombre',
                fieldLabel: 'Apellido Materno',
                itemId: 'apellidoMaterno',
                name: 'apellidoMaterno',
                value: this.makeValue(data, 'apellidoMaterno'),
                xtype: this.xtypeField,
                readOnly: this.fieldsReadOnly
            }]
        }];
        this.containerPersonaNatural = new Ext.Container({
            layout: 'column',
            items: items,
            itemId: 'personaNatural',
            border: false
        });
        if (this.fieldsReadOnly) {
            this.containerPersonaNatural.getComponent('leftColumn').getComponent('run').on('change', this.obtenerNombreByRun, this);
        } else {
            this.containerPersonaNatural.getComponent('leftColumn').getComponent('run').on('change', this.validarRunNombre, this);
            this.containerPersonaNatural.getComponent('leftColumn').getComponent('nombres').on('change', this.validarRunNombre, this);
            this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoPaterno').on('change', this.validarRunNombre, this);
            this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoMaterno').on('change', this.validarRunNombre, this);
        }
        return this.containerPersonaNatural;
    },
    obtenerNombreByRun: function (cmp) {
        this.containerPersonaNatural.getComponent('leftColumn').getComponent('nombres').setValue('');
        this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoPaterno').setValue('');
        this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoMaterno').setValue('');
        if (cmp.isValid()) {
            cmp.getEl().addClass('loading-spinner');
            var run = cmp.getValue();
            run = util.Format.cleanSafeRunForValidation(run);
            Srp.FrontController.fireEvent('onRunValido_' + this.contratanteName, run);
        } else {
            this.containerPersonaNatural.getComponent('leftColumn').getComponent('identificadorvalido').setValue(CONTRATANTE_ESTADO_INVALIDO);
            this.checkEstadoValidacion(false);
        }
    },
    loadPersonaNatural: function (response, runConsultado) {
        if (this.containerPersonaNatural.getComponent('leftColumn')) {
            this.containerPersonaNatural.getComponent('leftColumn').getComponent('run').getEl().removeClass('loading-spinner');
            var runActual = this.containerPersonaNatural.getComponent('leftColumn').getComponent('run').getValue();
            runActual = util.Format.cleanSafeRunForValidation(runActual);
            if (runConsultado == runActual) {
                if (response.success == true) {
                    var persona = response.data;
                    this.containerPersonaNatural.getComponent('leftColumn').getComponent('nombres').setValue(persona.nombres);
                    this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoPaterno').setValue(persona.paterno);
                    this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoMaterno').setValue(persona.materno);
                    this.containerPersonaNatural.getComponent('leftColumn').getComponent('identificadorvalido').setValue(CONTRATANTE_ESTADO_VALIDO);
                } else {
                    this.containerPersonaNatural.getComponent('leftColumn').getComponent('run').markInvalid(I18n.mensajes.runNombreNoEncontrado);
                    this.containerPersonaNatural.getComponent('leftColumn').getComponent('identificadorvalido').setValue(CONTRATANTE_ESTADO_INVALIDO);
                }
                this.checkEstadoValidacion();
            }
        }
    },
    validarRunNombre: function (cmp, gridListen) {
        if (this.containerPersonaNatural && this.containerPersonaNatural.getComponent('leftColumn')) {
            var identificadorvalido = this.containerPersonaNatural.getComponent('leftColumn').getComponent('identificadorvalido');
            var identificadorvalidoValue = identificadorvalido.getValue();
            identificadorvalido.setValue(CONTRATANTE_ESTADO_DESCONOCIDO);
            var run = this.containerPersonaNatural.getComponent('leftColumn').getComponent('run');
            var nombres = this.containerPersonaNatural.getComponent('leftColumn').getComponent('nombres');
            var appaterno = this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoPaterno');
            var apmaterno = this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoMaterno');
            if (identificadorvalidoValue.length > 0 || (nombres.getValue().length > 0 && appaterno.getValue().length > 0 && run.isValid())) {
                run.getEl().addClass('loading-spinner');
                var runString = run.getValue();
                runString = util.Format.replace(runString, '.', '');
                runString = util.Format.replace(runString, ',', '');
                runString = util.Format.replace(runString, '-', '');
                runString = runString.substring(0, runString.length - 1);
                var nombre = util.Format.strTrim(nombres);
                var paterno = util.Format.strTrim(appaterno);
                var materno = util.Format.strTrim(apmaterno);
                var isEdicion = this.edicion;
                if (gridListen == true) {
                    isEdicion = false;
                }
                var params = {
                    "usuario": 'abc',
                    "run": runString,
                    "nombre": nombre,
                    "paterno": paterno,
                    "materno": materno,
                    'runFull': run.getValue(),
                    'edicion': isEdicion
                };
                Srp.FrontController.fireEvent('onLoadFields_' + this.contratanteName, params);
            }
        } else {}
    },
    validatePersonaNatural: function (response, params) {
        if (this.containerPersonaNatural) {
            if (this.containerPersonaNatural.getComponent('leftColumn')) {
                var runCmp = this.containerPersonaNatural.getComponent('leftColumn').getComponent('run');
                runCmp.getEl().removeClass('loading-spinner');
                var runActual = runCmp.getValue();
                runActual = util.Format.replace(runActual, '.', '');
                runActual = util.Format.replace(runActual, ',', '');
                runActual = util.Format.replace(runActual, '-', '');
                runActual = runActual.substring(0, runActual.length - 1);
                if (params.run == runActual) {
                    if (!response.success) {
                        this.invalidarCamposPersonaNatural();
                        this.checkEstadoValidacion();
                    } else {
                        this.validarCamposPersonaNatural();
                        this.checkEstadoValidacion();
                    }
                }
            }
        } else {
            Log4js.debug(' -> NO encuentro form, no hago nada y confio en la grilla');
        }
    },
    putContratanteFields: function (combo, selectedValue, index) {
        var form = this.getComponent('calidadFormPanel');
        var id = (combo.externalCalidadId != null ? combo.externalCalidadId : form.getComponent('calidadComboBox').getValue());
        this.removeFields();
        switch (id) {
            case CALIDAD_PERSONA_NATURAL:
                form.add(this.buildPersonaNaturalContainer(combo.data));
                break;
            case CALIDAD_PERSONA_JURIDICA:
                form.add(this.buildPersonaJuridicaContainer(combo.data));
                break;
            case CALIDAD_EXTRANJERA:
                form.add(this.buildExtranjeroContainer(combo.data));
                break;
        }
        this.edicion = false;
        if (combo.data && combo.data.edicion) {
            this.edicion = combo.data.edicion;
        }
        form.getForm().cleanDestroyed();
        form.doLayout();
    },
    getJSON: function () {
        var json = this.getComponent('calidadFormPanel').getForm().getFieldValues();
        json = util.JSON.emptyToNull(json);
        if (json.personaTipo === null) {
            return null;
        }
        if (json.identificadorvalido == CONTRATANTE_ESTADO_SPINNER) {
            json.identificadorvalido = CONTRATANTE_ESTADO_DESCONOCIDO;
        }
        if (typeof json.identificador !== 'undefined') {
            if (json['nodeid'] && json['nodeid'].length == 0) delete json['nodeid'];
            return json;
        }
        return json;
    },
    setJSON: function (contratante) {
        if (Ext.isDefined(contratante)) {
            var form = this.getComponent('calidadFormPanel');
            form.getForm().setValues(contratante);
            form.getComponent('calidadComboBox').fireEvent('select', {
                externalCalidadId: contratante.personaTipo,
                data: contratante
            });
        }
    },
    personaNaturalMandatory: function (mandatory) {
        var personaNatural = this.getComponent('calidadFormPanel').getComponent('personaNatural');
        if (Ext.isDefined(personaNatural)) {
            personaNatural.getComponent('leftColumn').getComponent('run').mandatory = mandatory;
            personaNatural.getComponent('leftColumn').getComponent('nombres').mandatory = mandatory;
            personaNatural.getComponent('rightColumn').getComponent('apellidoPaterno').mandatory = mandatory;
        }
    },
    personaJuridicaMandatory: function (mandatory) {
        var personaJuridica = this.getComponent('calidadFormPanel').getComponent('personaJuridica');
        if (Ext.isDefined(personaJuridica)) {
            personaJuridica.getComponent('rut').mandatory = mandatory;
            personaJuridica.getComponent('razonSocial').mandatory = mandatory;
        }
    },
    personaExtranjeroMandatory: function (mandatory) {
        var extranjero = this.getComponent('calidadFormPanel').getComponent('extranjero');
        if (Ext.isDefined(extranjero)) {
            extranjero.getComponent('leftColumn').getComponent('identificadorTipo').mandatory = mandatory;
            extranjero.getComponent('leftColumn').getComponent('numeroIdentificador').mandatory = mandatory;
            extranjero.getComponent('rightColumn').getComponent('pais').mandatory = mandatory;
            extranjero.getComponent('rightColumn').getComponent('nombres').mandatory = mandatory;
        }
    },
    personaNaturalValidarUnicidad: function (mandatory) {
        var personaNatural = this.getComponent('calidadFormPanel').getComponent('personaNatural');
        if (Ext.isDefined(personaNatural)) {
            if (mandatory && this.validarUnicidadContratante) {
                personaNatural.getComponent('leftColumn').getComponent('run').chequearUnicidad = Srp.gui.ContratantesPanel.checkNewContratante;
                return !personaNatural.getComponent('leftColumn').getComponent('run').chequearUnicidad();
            }
        }
        return true;
    },
    personaJuridicaValidarUnicidad: function (mandatory) {
        var personaJuridica = this.getComponent('calidadFormPanel').getComponent('personaJuridica');
        if (Ext.isDefined(personaJuridica)) {
            if (mandatory && this.validarUnicidadContratante) {
                personaJuridica.getComponent('rut').chequearUnicidad = Srp.gui.ContratantesPanel.checkNewContratante;
                return !personaJuridica.getComponent('rut').chequearUnicidad();
            }
        }
        return true;
    },
    personaExtranjeroValidarUnicidad: function (mandatory) {
        var extranjero = this.getComponent('calidadFormPanel').getComponent('extranjero');
        if (Ext.isDefined(extranjero)) {
            if (mandatory && this.validarUnicidadContratante) {
                extranjero.getComponent('leftColumn').getComponent('numeroIdentificador').chequearUnicidad = Srp.gui.ContratantesPanel.checkNewContratante;
                return !extranjero.getComponent('leftColumn').getComponent('numeroIdentificador').chequearUnicidad();
            }
        }
        return true;
    },
    validarUnicidad: function () {
        var form = this.getComponent('calidadFormPanel');
        var tipoPersona = form.getComponent('calidadComboBox').getValue();
        var validPersonaNatural = this.personaNaturalValidarUnicidad(tipoPersona == CALIDAD_PERSONA_NATURAL);
        var validPersonaJuridica = this.personaJuridicaValidarUnicidad(tipoPersona == CALIDAD_PERSONA_JURIDICA);
        var validPersonaExtranjero = this.personaExtranjeroValidarUnicidad(tipoPersona == CALIDAD_EXTRANJERA);
        return validPersonaNatural && validPersonaJuridica && validPersonaExtranjero;
    },
    isValid: function (typeValidation) {
        var form = this.getComponent('calidadFormPanel');
        var tipoPersona = form.getComponent('calidadComboBox').getValue();
        var mandatory = false;
        if (typeValidation != TIPO_VALIDACION_GRABAR) {
            mandatory = true;
        }
        form.getComponent('calidadComboBox').mandatory = mandatory;
        this.personaNaturalMandatory(tipoPersona == CALIDAD_PERSONA_NATURAL && mandatory);
        this.personaJuridicaMandatory(tipoPersona == CALIDAD_PERSONA_JURIDICA && mandatory);
        this.personaExtranjeroMandatory(tipoPersona == CALIDAD_EXTRANJERA && mandatory);
        var validForm = this.getComponent('calidadFormPanel').getForm().isValid();
        var validPersonaNatural = this.personaNaturalValidarUnicidad(tipoPersona == CALIDAD_PERSONA_NATURAL && mandatory);
        var validPersonaJuridica = this.personaJuridicaValidarUnicidad(tipoPersona == CALIDAD_PERSONA_JURIDICA && mandatory);
        var validPersonaExtranjero = this.personaExtranjeroValidarUnicidad(tipoPersona == CALIDAD_EXTRANJERA && mandatory);
        var validacionSrcei = true;
        if (tipoPersona == CALIDAD_PERSONA_NATURAL && typeValidation != TIPO_VALIDACION_GRABAR) {
            var personaNatural = this.getComponent('calidadFormPanel').getComponent('personaNatural');
            var identificadorvalido = personaNatural.getComponent('leftColumn').getComponent('identificadorvalido').getValue();
            if (identificadorvalido != CONTRATANTE_ESTADO_VALIDO) {
                validacionSrcei = false;
            }
        }
        return validForm && validPersonaNatural && validPersonaJuridica && validPersonaExtranjero && validacionSrcei;
    },
    registrarEventos: function () {
        var getPersonaByRunCmd = new Srp.command.ws.GetPersonaByRunCmd();
        getPersonaByRunCmd.setParameter('contratante', this.contratanteName);
        var loadPersonaByRunCmd = new Srp.command.ws.LoadPersonaByRunCmd();
        loadPersonaByRunCmd.setParameter('fieldset', this);
        var validatePersonaRunCmd = new Srp.command.ws.ValidatePersonaRunCmd();
        validatePersonaRunCmd.setParameter('contratante', this.contratanteName);
        var loadPersonaRunCmd = new Srp.command.ws.LoadPersonaRunCmd();
        loadPersonaRunCmd.setParameter('fieldset', this);
        var revalidatePersonaRunCmd = new Srp.command.ws.RevalidatePersonaRunCmd();
        revalidatePersonaRunCmd.setParameter('obj', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onRunValido_' + this.contratanteName,
            command: getPersonaByRunCmd
        }, {
            name: 'onWsGetPersona_' + this.contratanteName,
            command: loadPersonaByRunCmd
        }, {
            name: 'onLoadFields_' + this.contratanteName,
            command: validatePersonaRunCmd
        }, {
            name: 'onWsValidateNombreRun_' + this.contratanteName,
            command: loadPersonaRunCmd
        }, {
            name: 'onEdicionWsValidateNombreRun_' + this.contratanteName,
            command: loadPersonaRunCmd
        }, {
            name: 'onWsRevalidatePersonaRun_' + this.contratanteName,
            command: revalidatePersonaRunCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }, {
            name: 'onRemoveFields',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    checkEstadoValidacion: function (invalidarCampos) {
        if (!Ext.isDefined(invalidarCampos)) {
            invalidarCampos = true;
        }
        if (this.containerPersonaNatural && this.containerPersonaNatural.getComponent('leftColumn')) {
            var runCmp = this.containerPersonaNatural.getComponent('leftColumn').getComponent('run');
            if (runCmp.getValue().length > 0 && !runCmp.validate()) {
                runCmp.markInvalid('El identificador ingresado no es válido.');
            }
            var identificadorvalido = this.containerPersonaNatural.getComponent('leftColumn').getComponent('identificadorvalido');
            switch (identificadorvalido.getValue()) {
                case CONTRATANTE_ESTADO_DESCONOCIDO:
                    runCmp.getEl().parent().addClass('remote-unknow-textfield');
                    runCmp.getEl().parent().removeClass('remote-valid-textfield');
                    runCmp.getEl().parent().removeClass('remote-invalid-textfield');
                    break;
                case CONTRATANTE_ESTADO_INVALIDO:
                    runCmp.getEl().parent().addClass('remote-invalid-textfield');
                    runCmp.getEl().parent().removeClass('remote-valid-textfield');
                    runCmp.getEl().parent().removeClass('remote-unknow-textfield');
                    if (invalidarCampos) {
                        this.invalidarCamposPersonaNatural();
                    }
                    break;
                case CONTRATANTE_ESTADO_VALIDO:
                    runCmp.getEl().parent().addClass('remote-valid-textfield');
                    runCmp.getEl().parent().removeClass('remote-invalid-textfield');
                    runCmp.getEl().parent().removeClass('remote-unknow-textfield');
                    break;
            }
        } else {
            Log4js.debug(' -> No hay container, no puedo poner icono de estado validacion');
        }
    },
    invalidarCamposPersonaNatural: function () {
        this.containerPersonaNatural.getComponent('leftColumn').getComponent('run').markInvalid(I18n.mensajes.runNombreInvadido);
        this.containerPersonaNatural.getComponent('leftColumn').getComponent('nombres').markInvalid(I18n.mensajes.runNombreInvadido);
        this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoPaterno').markInvalid(I18n.mensajes.runNombreInvadido);
        this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoMaterno').markInvalid(I18n.mensajes.runNombreInvadido);
        this.containerPersonaNatural.getComponent('leftColumn').getComponent('identificadorvalido').setValue(CONTRATANTE_ESTADO_INVALIDO);
    },
    validarCamposPersonaNatural: function () {
        this.containerPersonaNatural.getComponent('leftColumn').getComponent('run').clearInvalid();
        this.containerPersonaNatural.getComponent('leftColumn').getComponent('nombres').clearInvalid();
        this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoPaterno').clearInvalid();
        this.containerPersonaNatural.getComponent('rightColumn').getComponent('apellidoMaterno').clearInvalid();
        this.containerPersonaNatural.getComponent('leftColumn').getComponent('identificadorvalido').setValue(CONTRATANTE_ESTADO_VALIDO);
    },
    onAfterlayout: function (container, layout) {
        this.checkEstadoValidacion();
    }
});
Ext.reg('calidadFieldSet', Srp.gui.CalidadFieldSet);
Ext.ns('Srp.gui');
Srp.gui.VerContratoWindow = Ext.extend(Ext.Window, {
    title: I18n.unidadPrendas.contrato,
    width: 700,
    height: 450,
    autoScroll: true,
    layout: 'border',
    y: 10,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            buttons: this.buildButtons(),
            listeners: {
                'destroy': function (win) {
                    Srp.FrontController.fireEvent('onDestroyWindow');
                }
            }
        });
        Srp.gui.VerContratoWindow.superclass.initComponent.call(this);
    },
    buildItems: function () {
        this.resumenActuacion = new Srp.gui.ResumenActuacionPanel({
            region: 'center',
            autoScroll: true,
            itemId: 'resumenActuacionPanel'
        });
        this.resumenActuacion.loadData(this.actuacion);
        return this.resumenActuacion;
    },
    buildButtons: function () {
        var buttons = [];
        if (model.user.Usuario.tienePermiso(Permiso.VER_ACTUACION_COMPROBANTE) && util.hasAvailableComprobante(this.actuacion)) {
            buttons.push({
                xtype: 'linkbutton',
                itemId: 'comprobante-button',
                text: 'Comprobante',
                iconCls: 'icon-button-pdf',
                href: Srp.WebServiceManager.getDirectUrl('COMPROBANTE') + '?tipo=pdf',
                listeners: {
                    scope: this,
                    click: this.onComprobante
                }
            });
        }
        if (model.user.Usuario.tienePermiso(Permiso.VER_CARTA_RECHAZO) && util.isAvailableComentarioRechazoAbogado(this.actuacion)) {
            buttons.push({
                text: I18n.unidadPrendas.button.imprimirOficio,
                scope: this,
                handler: this.onImprimirOficio,
                iconCls: 'icon-button-printer'
            });
        }
        buttons.push({
            text: I18n.commons.cerrar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        });
        return buttons;
    },
    onCancelar: function (btn, ev) {
        this.close();
    },
    onComprobante: function (btn, ev) {
        var ou;
        if (this.actuacion.tipoOu == TIPO_OU_NOTARIA) {
            ou = 'notaria';
        } else {
            ou = 'oai';
        }
        var params = {
            nodeId: this.actuacion.nodeid,
            ticket: Srp.WebScriptManager.getTicket(),
            ou: ou
        };
        btn.setParams(params);
    },
    onImprimirOficio: function (btn, ev) {
        Srp.ReportesManager.getResolucionExenta(this.actuacion);
    }
});
Ext.ns('Srp.gui');
Srp.gui.ResumenPagoWindow = Ext.extend(Ext.Window, {
    title: I18n.commons.pagoGrupo,
    width: 480,
    height: 320,
    autoScroll: true,
    id: 'window-resumen-pago',
    modal: true,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            buttons: this.buildButtons()
        });
        Srp.gui.ResumenPagoWindow.superclass.initComponent.call(this);
    },
    buildItems: function () {
        this.pagoGrupoPanel = new Srp.gui.PagoGrupoPanel({
            window: this,
            rows: this.rows
        });
        return [this.pagoGrupoPanel];
    },
    onRender: function (ct, position) {
        Srp.gui.ResumenPagoWindow.superclass.onRender.call(this, ct, position);
    },
    listeners: {
        'close': function (p) {
            Srp.FrontController.fireEvent('onClosePagoWindow', this);
        }
    },
    buildButtons: function () {
        return [{
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel',
            disabled: true,
            ref: '../cancelButton'
        }, {
            text: I18n.commons.pagar,
            scope: this,
            handler: this.onValidatingRVM,
            iconCls: 'icon-pagar',
            disabled: true,
            ref: '../pagarButton'
        }];
    },
    loadMask: function () {
        var el = this.getEl();
        el.mask(I18n.mensajes.procesandoPago, "x-mask-loading");
    },
    removeMask: function () {
        var el = this.getEl();
        el.unmask();
    },
    onSuccess: function () {
        this.close();
        Srp.Canvas.goHome();
    },
    onFailure: function () {
        this.close();
        Srp.Canvas.goHome();
    },
    onValidatingRVM: function () {
        this.setDisabledButtons(true);
        this.pagoGrupoPanel.validatePPUsRVM(this);
    },
    doPago: function () {
        this.loadMask();
        var actuaciones = this.pagoGrupoPanel.getActuaciones();
        Srp.PagoManager.setActuaciones(actuaciones);
        Srp.PagoManager.setCallback(this);
        Srp.PagoManager.pagar();
    },
    setDisabledButtons: function (disabled) {
        this.cancelButton.setDisabled(disabled);
        this.pagarButton.setDisabled(disabled);
    },
    onCancelar: function () {
        this.close();
    },
    doAbort: function () {
        this.setDisabledButtons(false);
    }
});
Ext.ns('Srp.gui');
Srp.gui.LoginWindow = Ext.extend(Ext.Window, {
    id: 'login_window',
    layout: 'fit',
    width: 300,
    height: 150,
    closable: false,
    resizable: false,
    plain: true,
    border: false,
    initComponent: function () {
        Ext.apply(this, {
            onLogin: this.onLogin,
            items: this.buildItems()
        });
        Srp.gui.LoginWindow.superclass.initComponent.call(this);
    },
    buildItems: function () {
        this.login = new Ext.FormPanel({
            labelWidth: 80,
            url: Srp.WebScriptManager.getUrl('WS_GET_TICKET'),
            frame: true,
            title: 'Ingrese Usuario y Contrase&ntilde;a',
            defaultType: 'textfield',
            monitorValid: true,
            items: [{
                id: 'user',
                fieldLabel: 'Usuario',
                name: 'u',
                allowBlank: false,
                listeners: {
                    scope: this,
                    specialkey: function (f, e) {
                        if (e.getKey() == e.ENTER) {
                            this.doLogin();
                        }
                    }
                }
            }, {
                id: 'pass',
                fieldLabel: 'Contrase&ntilde;a',
                name: 'pw',
                inputType: 'password',
                allowBlank: false,
                listeners: {
                    scope: this,
                    specialkey: function (f, e) {
                        if (e.getKey() == e.ENTER) {
                            this.doLogin();
                        }
                    }
                }
            }],
            buttons: [{
                text: 'Entrar',
                formBind: true,
                scope: this,
                handler: this.doLogin
            }]
        });
        return this.login;
    },
    doLogin: function () {
        Ext.Ajax.request({
            scope: this,
            url: Srp.WebScriptManager.getUrl('WS_GET_TICKET'),
            method: 'GET',
            params: {
                u: this.login.get('user').getValue(),
                pw: this.login.get('pass').getValue()
            },
            success: function (response, opts) {
                var re = /<ticket>([\w]+)<\/ticket>/;
                var match = re.exec(response.responseText);
                var alf_ticket = match[1];
                Srp.WebScriptManager.setTicket(alf_ticket);
                Srp.WebServiceManager.setTicket(alf_ticket);
                this.onLogin();
                this.close();
            },
            failure: function (response, opts) {
                Ext.MessageBox.alert('Acceso denegado', 'Usuario o clave incorrectas');
            }
        });
    }
});
Ext.ns('Srp.gui');
Srp.gui.HelpWindow = Ext.extend(Ext.Window, {
    title: I18n.commons.help,
    width: 380,
    height: 150,
    autoScroll: true,
    layout: 'border',
    y: 10,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            buttons: this.buildButtons()
        });
        Srp.gui.HelpWindow.superclass.initComponent.call(this);
    },
    buildItems: function () {
        return {
            xtype: 'panel',
            region: 'center',
            html: '<p>Para ayuda, favor cont&aacute;ctese con nuestro Call Center (600 370 2000) </p>',
            padding: 5
        };
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.cerrar,
            scope: this,
            handler: this.onCancelar
        }];
    },
    onCancelar: function (btn, ev) {
        this.close();
    }
});
Ext.ns('Srp.gui');
Srp.gui.ContactWindow = Ext.extend(Ext.Window, {
    title: I18n.commons.contact,
    width: 380,
    height: 150,
    autoScroll: true,
    layout: 'border',
    y: 10,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            buttons: this.buildButtons()
        });
        Srp.gui.ContactWindow.superclass.initComponent.call(this);
    },
    buildItems: function () {
        return {
            xtype: 'panel',
            region: 'center',
            html: '<p>Para ayuda, favor cont&aacute;ctese con nuestro Call Center (600 370 2000) </p>',
            padding: 10
        };
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.cerrar,
            scope: this,
            handler: this.onCancelar
        }];
    },
    onCancelar: function (btn, ev) {
        this.close();
    }
});
Ext.ns('Srp.gui');
Srp.gui.RechazoContratoWindow = Ext.extend(Ext.Window, {
    width: 450,
    height: 450,
    autoScroll: true,
    layout: 'border',
    y: 10,
    modal: true,
    editMode: false,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            buttons: this.buildButtons(),
            title: I18n.commons.rechazoContrato + " N&ordm; Repertorio " + this.actuacion.numeroRepertorio + "-" + this.actuacion.agnoRepertorio
        });
        Srp.gui.RechazoContratoWindow.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var comentarioValue = "";
        if (Ext.isDefined(this.actuacion.comentariorechazoabogado)) {
            comentarioValue = unescape(this.actuacion.comentariorechazoabogado);
            comentarioValue = comentarioValue.br2nl();
        }
        return [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            region: 'center',
            xtype: 'textarea',
            itemId: 'comentario',
            enableColors: false,
            enableAlignments: false,
            enableFont: false,
            enableLists: false,
            enableFontSize: false,
            enableLinks: false,
            enableAlignments: false,
            enableFormat: false,
            enableSourceEdit: false,
            value: comentarioValue
        }];
    },
    buildButtons: function () {
        var buttons = [];
        var textBtnRechazo = I18n.commons.rechazarContrato;
        if (this.editMode) {
            textBtnRechazo = I18n.commons.editarRechazoContrato;
        }
        buttons.push({
            text: textBtnRechazo,
            scope: this,
            iconCls: 'icon-rechazar',
            handler: this.onRechazarContrato
        });
        buttons.push({
            text: I18n.commons.cancelar,
            scope: this,
            iconCls: 'icon-cancel',
            handler: this.onCancelar
        });
        return buttons;
    },
    onCancelar: function (btn, ev) {
        this.close();
    },
    onRechazarContrato: function (btn, ev) {
        var confirmacionRechazo = I18n.mensajes.confirmacionRechazoContrato;
        if (this.editMode) {
            confirmacionRechazo = I18n.mensajes.confirmacionEditarRechazoContrato;
        }
        Srp.gui.messageBox.YesNo({
            msg: confirmacionRechazo,
            fn: function (id) {
                if (id === 'yes') {
                    this.saveComentarioRechazo();
                }
            },
            scope: this
        });
    },
    saveComentarioRechazo: function () {
        var urlWS;
        switch (this.actuacion.tipoActuacion) {
            case TIPO_ACTUACION_INSCRIPCION:
                urlWS = 'WS_ACTUACION_INSCRIPCION_SAVE';
                break;
            case TIPO_ACTUACION_MODIFICACION:
                urlWS = 'WS_ACTUACION_MODIFICACION_SAVE';
                break;
            case TIPO_ACTUACION_ALZAMIENTO:
                urlWS = 'WS_ACTUACION_ALZAMIENTO_SAVE';
                break;
        }
        var _actuacion = {
            nodeid: this.actuacion.nodeid
        };
        if (this.tipoComentario == TIPO_COMENTARIO_HISTORICO) {
            this.actuacion[this.field] = this.buildComentarioHistorico(this.actuacion[this.field]);
        } else {
            this.actuacion[this.field] = this.buildComentarioSimple();
        }
        _actuacion[this.field] = this.actuacion[this.field];
        var actuacionJSON = Ext.util.JSON.encode(_actuacion);
        Log4js.debug(actuacionJSON);
        var saveFormPanel = this.getComponent('saveFormPanel');
        saveFormPanel.getComponent('info').setValue(actuacionJSON);
        if (saveFormPanel.getForm().isValid()) {
            var uploadURL = Srp.WebScriptManager.getUrl(urlWS);
            saveFormPanel.getForm().doAction("restfulsubmit", {
                clientValidation: true,
                url: uploadURL,
                scope: this,
                success: this.onSuccessSaveComentarioRechazo,
                failure: this.onFailureSaveComentarioRechazo
            });
        }
    },
    buildComentarioHistorico: function (comentarioAnterior) {
        var dt = new Date();
        var comentario = '<div class="comentario">' + '<table border="0">' + '<tr>' + '<td><label class="x-form-item-label">' + dt.format(I18n.format.fullDate) + '</label></td>' + '<td>' + this.getComponent('comentario').getValue() + '</td>' + '</tr>' + '</table>' + '</div>';
        if (!Ext.isDefined(comentarioAnterior)) {
            comentarioAnterior = '';
        }
        return escape(comentario) + comentarioAnterior;
    },
    buildComentarioSimple: function () {
        return escape(Ext.util.Format.nl2br(this.getComponent('comentario').getValue()));
    },
    html_entity_decode: function (str) {
        var ta = document.createElement("textarea");
        ta.innerHTML = str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return ta.value;
    },
    onSuccessSaveComentarioRechazo: function () {
        Log4js.debug('Exitosamente guardado el mensaje');
        this.enviarActuacion();
    },
    onFailureSaveComentarioRechazo: function (form, action) {
        Srp.WebScriptManager.onFailureSaveActuacion(form, action);
        Log4js.debug('No se pudo enviar a rechazo pero la muevo igual');
        this.enviarActuacion();
    },
    enviarActuacion: function () {
        if (Ext.isDefined(this.transition)) {
            Srp.WorkflowManager.advanceTo({
                taskid: this.actuacion.taskid,
                transition: this.transition,
                success: this.onSuccessEnviarActuacion,
                failure: this.onFailureEnviarActuacion,
                scope: this
            });
        } else {
            this.onSuccessEnviarActuacion();
        }
    },
    onSuccessEnviarActuacion: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: this.message
        });
        if (Ext.isDefined(this.commandReturn)) {
            this.commandReturn.onExecuteNextStep();
        } else {
            Srp.Canvas.goHome();
        }
        this.close();
    },
    onFailureEnviarActuacion: function () {
        Log4js.debug('Falló cambio de estado de actuación');
        this.commandReturn.onExecuteNextStep();
        this.close();
    }
});
Ext.ns('Srp.gui');
Srp.gui.WizardToolbar = Ext.extend(Ext.Toolbar, {
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            wizard: this.wizard
        });
        Srp.gui.WizardToolbar.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    buildItems: function () {
        var onFirst = this.onFirst;
        var navHandler = function (incr) {
            var l = this.wizard.getLayout();
            var i = l.activeItem.id.split('card-')[1];
            var next = parseInt(i, 10) + incr;
            l.setActiveItem(next);
            Ext.getCmp('card-prev').setDisabled(next == 0);
            if (next == 0) {
                onFirst();
            } else if (next == (this.steps - 1)) {
                this.onLast();
            }
            Ext.getCmp('card-next').setDisabled(next == (this.steps - 1));
            this.onChange();
        };
        return this.buildButtons(navHandler, this);
    },
    navigateTo: function (idx) {
        var l = this.wizard.getLayout();
        var current = parseInt(l.activeItem.id.split('card-')[1], 10);
        var incr = idx - current;
        var next = current + incr;
        l.setActiveItem(next);
        Ext.getCmp('card-prev').setDisabled(next == 0);
        if (next == 0) {
            this.onFirst();
        } else if (next == (this.steps - 1)) {
            this.onLast();
        }
        Ext.getCmp('card-next').setDisabled(next == (this.steps - 1));
        this.onChange();
    },
    buildButtons: function (navHandler, toolbar) {
        return [{
            xtype: 'tbfill'
        }, {
            id: 'card-prev',
            itemId: 'card-prev',
            text: I18n.notaria.actuacion.wizard.button.anterior,
            handler: navHandler.createDelegate(toolbar, [-1]),
            disabled: true,
            iconCls: 'icon-button-back'
        }, '-', {
            text: I18n.notaria.actuacion.wizard.button.grabar,
            itemId: 'save-button',
            iconCls: 'icon-save',
            scope: toolbar,
            handler: this.onSave
        }, {
            xtype: 'tbseparator',
            itemId: 'save-button-separator'
        }, {
            text: I18n.notaria.actuacion.wizard.button.grabarYSalir,
            itemId: 'save-exit-button',
            iconCls: 'icon-save-exit',
            scope: toolbar,
            handler: this.onSaveAndExit
        }, '-', {
            text: I18n.notaria.actuacion.wizard.button.cancelar,
            iconCls: 'icon-cancel',
            itemId: 'cancel-button',
            handler: this.onCancel,
            scope: this
        }, '-', {
            id: 'card-next',
            itemId: 'card-next',
            text: I18n.notaria.actuacion.wizard.button.siguiente,
            handler: navHandler.createDelegate(toolbar, [1]),
            iconCls: 'icon-button-next',
            iconAlign: 'right'
        }];
    },
    onSave: function () {
        var l = this.wizard.getLayout();
        var current = parseInt(l.activeItem.id.split('card-')[1], 10);
        var actions = ['onLoadMask', 'onValidate', 'onSave', 'onGetTaskId', 'onTakeTask', 'onRefreshForm', 'onRemoveMask'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            typeValidation: TIPO_VALIDACION_GRABAR,
            extraParams: {
                pageWizardToolbar: current
            }
        });
    },
    onSaveAndExit: function () {
        var actions = ['onLoadMask', 'onValidate', 'onSave', 'onGetTaskId', 'onTakeTask', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            typeValidation: TIPO_VALIDACION_GRABAR
        });
    },
    onCancel: function () {
        if (Srp.Canvas.hasChanged(this.wizard)) {
            Srp.gui.messageBox.YesNo({
                msg: I18n.mensajes.perderDatos,
                fn: function (id) {
                    if (id === 'yes') {
                        Srp.Canvas.goHome();
                    }
                }
            });
        } else {
            Srp.Canvas.goHome();
        }
    },
    onFirst: function () {},
    onChange: function () {},
    onLast: function () {},
    getSteps: function () {
        return this.steps;
    },
    getStep: function () {
        var l = this.wizard.getLayout();
        return parseInt(l.activeItem.id.split('card-')[1]) + 1;
    },
    registrarEventos: function () {
        var movePageWizardToolbarCmd = new Srp.command.MovePageWizardToolbarCmd();
        movePageWizardToolbarCmd.setParameter('toolbar', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onMovePageWizard',
            command: movePageWizardToolbarCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui.oai');
Srp.gui.oai.WizardToolbar = Ext.extend(Srp.gui.WizardToolbar, {
    initComponent: function () {
        var items = Array();
        Ext.apply(this, {
            items: items,
            wizard: this.wizard
        });
        Srp.gui.oai.WizardToolbar.superclass.initComponent.call(this);
        this.getComponent('card-prev').handler = this.getNavHandler.createDelegate(this, [-1]);
        this.getComponent('card-next').handler = this.getNavHandler.createDelegate(this, [1]);
        this.insert(0, {
            itemId: 'pago-button',
            text: I18n.commons.pago,
            handler: this.onPago,
            scope: this,
            iconCls: "icon-pagar"
        });
        this.insert(0, {
            xtype: 'linkbutton',
            itemId: 'comprobante-button',
            text: 'Comprobante',
            iconCls: 'icon-button-pdf',
            hidden: true,
            href: Srp.WebServiceManager.getDirectUrl('COMPROBANTE') + '?tipo=pdf',
            listeners: {
                click: this.onComprobante
            }
        });
    },
    onRender: function (ct, position) {
        Srp.gui.oai.WizardToolbar.superclass.onRender.call(this, ct, position);
    },
    getNavHandler: function (incr) {
        var l = this.wizard.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        this.stepIndex = parseInt(i) + parseInt(incr);
        var next = parseInt(i, 10) + incr;
        var prevButton = this.getComponent('card-prev');
        var nextButton = this.getComponent('card-next');
        var saveButton = this.getComponent('save-button');
        var saveExitButton = this.getComponent('save-exit-button');
        var cancelButton = this.getComponent('cancel-button');
        var pagoButton = this.getComponent('pago-button');
        if (incr == 0) {
            var caratulaButton = this.getComponent('caratula-button');
            var comprobanteButton = this.getComponent('comprobante-button');
            var pagoSeparador = this.getComponent('separador-caratula');
            pagoButton.hide();
            comprobanteButton.show();
            saveButton.setDisabled(true);
            saveExitButton.setDisabled(true);
            cancelButton.setDisabled(true);
            prevButton.setDisabled(true);
            nextButton.setDisabled(true);
            return;
        } else if (this.stepIndex == (this.steps - 1)) {} else {}
        this.doLayout();
        l.setActiveItem(next);
        prevButton.setDisabled(next == 0);
        nextButton.setDisabled(next == (this.steps - 1));
    },
    onPago: function () {
        var actions = ['onLoadMask', 'onValidate', 'onConfirm', 'onSave', 'onGetTaskId', 'onGetTerminal', 'onRegistrarIngresoCaja', 'onPago', 'onGet', 'onRemoveMask'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            typeValidation: TIPO_VALIDACION_REGISTRAR_PAGO,
            confirmMessage: I18n.mensajes.confirm.registrarPago,
            estadoAnotacion: ESTADO_ANOTACION_INGRESADA
        });
    },
    onComprobante: function (field) {
        var toolbar = this.findParentByType(Srp.gui.oai.WizardToolbar);
        var params = {
            nodeId: toolbar.wizard.response.nodeid,
            ticket: Srp.WebScriptManager.getTicket(),
            ou: 'oai'
        };
        field.setParams(params);
    },
    registrarEventos: function () {
        var cambiarButtonsCmd = new Srp.command.CambiarButtonsCmd();
        cambiarButtonsCmd.setParameter('toolbar', this);
        this.eventos = [{
            name: 'WizardToolbar.onChange',
            command: cambiarButtonsCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
        Srp.gui.oai.WizardToolbar.superclass.registrarEventos.call(this);
    }
});
Ext.ns('Srp.gui.notaria');
Srp.gui.notaria.WizardToolbar = Ext.extend(Srp.gui.WizardToolbar, {
    initComponent: function () {
        var items = Array();
        Ext.apply(this, {
            items: items,
            wizard: this.wizard
        });
        Srp.gui.notaria.WizardToolbar.superclass.initComponent.call(this);
    },
    onLast: function () {
        if (this.wizard.getJSON().taskid) {
            this.firmaButton.enable();
        }
    },
    onChange: function () {},
    onRender: function (ct, position) {
        this.firmaButton = new Ext.Button({
            text: 'Enviar a Firma',
            iconCls: 'icon-firmar',
            scope: this,
            handler: this.onEnviarAFirma
        });
        this.insert(0, '-');
        this.insert(0, this.firmaButton);
        Srp.gui.notaria.WizardToolbar.superclass.onRender.call(this, ct, position);
    },
    onEnviarAFirma: function () {
        var actions = ['onForceCheckRepertorioNotariaUnico', 'onValidate', 'onConfirm', 'onSave', 'onGetTaskId', 'onCheckAutomaticValidation', 'onEnviarAFirma', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            typeValidation: TIPO_VALIDACION_ENVIAR_A_FIRMA,
            confirmMessage: I18n.mensajes.confirm.enviarAFirma
        });
    }
});
Ext.ns('Srp.gui.up');
Srp.gui.up.WizardToolbar = Ext.extend(Srp.gui.WizardToolbar, {
    initComponent: function () {
        var items = Array();
        Ext.apply(this, {
            items: items,
            wizard: this.wizard
        });
        Srp.gui.up.WizardToolbar.superclass.initComponent.call(this);
        this.getComponent('save-button').hide();
        this.getComponent('save-button-separator').hide();
    },
    onSaveAndExit: function () {
        var actions = ['onLoadMask', 'onValidate', 'onCheckModificacionAlzamiento', 'onSave', 'onFinishBuscador'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            typeValidation: TIPO_VALIDACION_GRABAR,
            log: true
        });
    }
});
Ext.ns('Srp.gui.notaria');
Srp.gui.notaria.InscripcionWizard = Ext.extend(Ext.Panel, {
    id: 'ingreso-wizard',
    activeItem: 0,
    layout: 'card',
    border: true,
    plain: true,
    region: 'center',
    editOnly: false,
    initComponent: function () {
        var config = {
            items: this.buildItems(),
            bbar: this.buildBottomBar()
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.notaria.InscripcionWizard.superclass.initComponent.apply(this, arguments);
        this.registrarEventos();
        var title = I18n.commons.inscripcionContratoPrendas;
        if (this.actuacion) {
            this.actuacionPrevia = this.actuacion;
            this.setJSON(this.actuacion);
            this.losesChanges = true;
            if (this.actuacion.inUPEdition) {
                title = title + " (Corrección: " + this.actuacion.numeroRepertorio + "-" + this.actuacion.agnoRepertorio + ")";
                this.makeValidationRepNot = false;
            }
        }
        Srp.FrontController.fireEvent('All.onChangeContent', title);
    },
    buildItems: function () {
        return [this.buildContratantesPanel(), this.buildAntecedentesPanel(), this.buildArchivosPanel(), this.buildResumenPanel()];
    },
    buildContratantesPanel: function () {
        var contratantesPanel = new Srp.gui.ContratantesPanel({
            id: 'card-0',
            itemId: 'contratantesPanel',
            title: I18n.notaria.actuacion.wizard.title.contratantes,
            iconCls: 'icon-wizard-step-1'
        });
        return contratantesPanel;
    },
    buildAntecedentesPanel: function () {
        var paso2AntecedentesFormPanel = new Ext.Panel({
            itemId: 'antecedentesPanel',
            title: I18n.commons.antecedentes,
            border: false,
            items: [new Srp.gui.ContratoDocumentoPanel({
                itemId: 'contratoDocumentoPanel',
                border: false,
                makeValidationRepNot: !this.editOnly
            })]
        });
        var paso2AnotacionesPanel = new Srp.gui.AnotacionesRVMPanel({
            itemId: 'anotacionesRVMPanel'
        });
        return new Ext.Panel({
            itemId: 'antecedentesPanel',
            border: false,
            id: 'card-1',
            iconCls: 'icon-wizard-step-2',
            items: [new Ext.TabPanel({
                activeTab: 0,
                itemId: 'antecedentesTabPanel',
                bodyStyle: "padding: 5px",
                border: false,
                region: 'center',
                items: [paso2AntecedentesFormPanel, paso2AnotacionesPanel]
            })],
            layout: 'border',
            title: I18n.notaria.actuacion.wizard.title.antecedentes,
            getJSON: function () {
                var jsonUnion = {};
                var json1 = paso2AntecedentesFormPanel.getComponent('contratoDocumentoPanel').getJSON();
                var json3 = paso2AnotacionesPanel.getJSON();
                var jsonUnion = util.JSON.join([json1, json3]);
                return jsonUnion;
            }
        });
    },
    buildArchivosPanel: function () {
        var adjuntosPanel = new Srp.gui.AdjuntosPanel({
            id: 'card-2',
            border: false,
            padding: 5,
            iconCls: 'icon-wizard-step-3',
            autoScroll: true,
            itemId: 'adjuntosPanel'
        });
        return adjuntosPanel;
    },
    buildResumenPanel: function () {
        return {
            xtype: 'resumenActuacion',
            id: 'card-3',
            iconCls: 'icon-wizard-step-3',
            title: I18n.commons.resumen,
            autoScroll: true,
            padding: 10,
            firma: true,
            inWizard: true
        };
    },
    buildBottomBar: function () {
        var bbar;
        if (this.editOnly) {
            bbar = new Srp.gui.up.WizardToolbar({
                wizard: this,
                steps: 4
            });
        } else {
            bbar = new Srp.gui.notaria.WizardToolbar({
                wizard: this,
                steps: 4
            });
        }
        return bbar;
    },
    getJSON: function (isResumen) {
        var json = {
            tramite: TIPO_ACTUACION_INSCRIPCION
        };
        if (this.actuacion) {
            json.nodeid = this.actuacion.nodeid;
            json.taskid = this.actuacion.taskid;
            json.type = this.actuacion.type;
            json.tramite = this.actuacion.tramite;
            json.pagado = this.actuacion.pagado;
        }
        util.JSON.addItems(json, this.getComponent('contratantesPanel').getJSON());
        util.JSON.addItems(json, this.getComponent('antecedentesPanel').getJSON());
        util.JSON.addItems(json, this.getComponent('adjuntosPanel').getJSON(isResumen));
        if (this.editOnly && Srp.MontosManager.hasMontos(this.actuacionPrevia)) {
            Srp.MontosManager.recuperarMontos(json, this.actuacionPrevia);
        } else {
            Srp.MontosManager.populateMontos(json, json.vehiculos);
            Srp.MontosManager.setMontosActuacion(json);
        }
        return json;
    },
    setJSON: function (actuacion) {
        this.getComponent('contratantesPanel').setJSON(actuacion);
        var tab = this.getComponent('antecedentesPanel').getComponent('antecedentesTabPanel');
        tab.getComponent('antecedentesPanel').getComponent('contratoDocumentoPanel').setJSON(actuacion);
        tab.getComponent('anotacionesRVMPanel').setJSON(actuacion);
        this.getComponent('adjuntosPanel').setJSON(actuacion);
    },
    getActuacionPrevia: function () {
        return this.actuacionPrevia;
    },
    isValid: function (validationType) {
        var contratantesValidation = this.getComponent('contratantesPanel').isValid(validationType);
        var tab = this.getComponent('antecedentesPanel').getComponent('antecedentesTabPanel');
        var antecedentesValidation = tab.getComponent('antecedentesPanel').getComponent('contratoDocumentoPanel').isValid(validationType);
        var anotacionesValidation = tab.getComponent('anotacionesRVMPanel').isValid(validationType);
        var erroresAntecedentesList = [];
        if (!antecedentesValidation) {
            erroresAntecedentesList.push('Antecedentes');
        }
        if (!anotacionesValidation) {
            erroresAntecedentesList.push('Anotaciones al RVM');
        }
        var erroresAntecedentes = {
            parent: 'Antecedentes',
            children: erroresAntecedentesList
        };
        Srp.MessagesManager.add(erroresAntecedentes);
        var adjuntosValidation = this.getComponent('adjuntosPanel').isValid(validationType);
        var erroresAdjuntosList = [];
        if (!adjuntosValidation) {
            erroresAdjuntosList.push('Contrato');
        }
        var erroresAdjuntos = {
            parent: 'Adjuntos',
            children: erroresAdjuntosList
        };
        Srp.MessagesManager.add(erroresAdjuntos);
        return contratantesValidation && antecedentesValidation && anotacionesValidation && adjuntosValidation;
    },
    registrarEventos: function () {
        var cargarActuacionCmd = new Srp.command.CargarActuacionCmd();
        cargarActuacionCmd.setParameter('wizard', this);
        var save = new Srp.command.SaveActuacionCmd();
        save.setParameter('wizard', this);
        save.setParameter('urlWs', 'WS_ACTUACION_INSCRIPCION_SAVE');
        save.setParameter('saveForm', this.getComponent('contratantesPanel').getComponent('tabPanel').getComponent('acreedorPanel').getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'ResumenActuacion.onShowResumen',
            command: cargarActuacionCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: save
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    }
});
Ext.reg('ingresowizard', Srp.gui.notaria.InscripcionWizard);
Ext.ns('Srp.gui.notaria');
Srp.gui.notaria.AlzamientoWizard = Ext.extend(Ext.Panel, {
    id: 'alzamiento-wizard',
    activeItem: 0,
    layout: 'card',
    border: false,
    plain: true,
    region: 'center',
    height: 600,
    editOnly: false,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildBottomBar()
        });
        Ext.getCmp('card-next').disable();
        Srp.gui.notaria.AlzamientoWizard.superclass.initComponent.call(this);
        this.registrarEventos();
        var title = I18n.commons.alzamientoContratoPrendas;
        if (this.actuacion) {
            this.actuacionPrevia = this.actuacion;
            this.setJSON(this.actuacion);
            if (this.actuacion.inUPEdition) {
                title = title + " (Corrección: " + this.actuacion.numeroRepertorio + "-" + this.actuacion.agnoRepertorio + ")";
            }
        }
        Srp.FrontController.fireEvent('All.onChangeContent', title);
    },
    buildItems: function () {
        return [this.buildAntecedentesPanel(), this.buildArchivosPanel(), this.buildResumenPanel()];
    },
    buildAntecedentesPanel: function () {
        var filtrarInscripcionVigente = Ext.isDefined(this.actuacion) ? !this.actuacion.inUPEdition : true;
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'contratoSelectorInscripcion',
            itemId: 'contratoBuscador',
            filtrarInscripcionVigente: filtrarInscripcionVigente
        }, {
            xtype: 'comentarioRechazoFieldSet',
            itemId: 'comentariosRechazo'
        }, {
            xtype: 'contratoDocumento',
            title: 'Tipo Contrato',
            itemId: 'contratoDocumento',
            hidden: true,
            showProhibicion: false
        }, {
            xtype: 'fieldset',
            title: 'Anotaciones al RVM',
            id: 'anotacionesRVMFieldset',
            hidden: true,
            items: [{
                xtype: 'ppuCambioAcreedorGrid',
                id: 'ppuAlzamientoGrid',
                itemId: 'ppuAlzamientoGrid',
                bbar: [I18n.commons.alzamientoGrillaMensaje]
            }]
        }];
        return {
            xtype: 'panel',
            id: 'card-0',
            padding: 5,
            iconCls: 'icon-wizard-step-1',
            title: 'Antecedentes',
            items: items,
            width: '400',
            autoScroll: true,
            itemId: 'antecedentesPanel'
        };
    },
    buildArchivosPanel: function () {
        return {
            xtype: 'adjuntosPanel',
            id: 'card-1',
            padding: 5,
            iconCls: 'icon-wizard-step-2',
            autoScroll: true,
            itemId: 'adjuntosPanel'
        };
    },
    buildResumenPanel: function () {
        return {
            xtype: 'resumenActuacion',
            id: 'card-2',
            iconCls: 'icon-wizard-step-3',
            title: 'Resumen',
            autoScroll: true,
            padding: 10,
            inWizard: true
        };
    },
    buildBottomBar: function () {
        var bbar;
        if (this.editOnly) {
            bbar = new Srp.gui.up.WizardToolbar({
                wizard: this,
                steps: 3
            });
        } else {
            bbar = new Srp.gui.notaria.WizardToolbar({
                wizard: this,
                steps: 3
            });
        }
        return bbar;
    },
    getJSON: function (isResumen) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        var actuacion = {
            tipoActuacion: ACTUACION_ALZAMIENTO,
            tramite: TIPO_ACTUACION_ALZAMIENTO
        };
        if (this.actuacion) {
            actuacion.nodeid = this.actuacion.nodeid;
            actuacion.taskid = this.actuacion.taskid;
            actuacion.type = this.actuacion.type;
            actuacion.tramite = this.actuacion.tramite;
            actuacion.pagado = this.actuacion.pagado;
        }
        if (!Ext.isDefined(this.actuacion) || isResumen) {
            util.JSON.addItems(actuacion, {
                contratoInscripcion: antecedentesPanel.getComponent('contratoBuscador').getJSON()
            });
            util.JSON.addItems(actuacion, {
                nodeidref: actuacion.contratoInscripcion.nodeid
            });
            var vehiculos = {};
            var ppuList = antecedentesPanel.getComponent('anotacionesRVMFieldset').getComponent('ppuAlzamientoGrid').getJSON();
            if (!Ext.isEmpty(ppuList)) {
                vehiculos.vehiculos = ppuList;
            }
            util.JSON.addItems(actuacion, vehiculos);
        }
        util.JSON.addItems(actuacion, antecedentesPanel.getComponent('contratoDocumento').getJSON());
        util.JSON.addItems(actuacion, this.getComponent('adjuntosPanel').getJSON(isResumen));
        if (this.editOnly && Srp.MontosManager.hasMontos(this.actuacionPrevia)) {
            Srp.MontosManager.recuperarMontos(actuacion, this.actuacionPrevia);
        } else {
            Srp.MontosManager.populateMontos(actuacion, actuacion.vehiculos);
            Srp.MontosManager.setMontosActuacion(actuacion);
        }
        if (isResumen) {
            var inscripcion = antecedentesPanel.getComponent('contratoBuscador').getActuacion();
            util.JSON.addItems(actuacion, {
                inscripcion: inscripcion
            });
        }
        return actuacion;
    },
    setJSON: function (actuacion) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoBuscador').setJSON(actuacion);
        antecedentesPanel.getComponent('contratoDocumento').setJSON(actuacion);
        antecedentesPanel.getComponent('anotacionesRVMFieldset').getComponent('ppuAlzamientoGrid').setJSON(actuacion.vehiculos);
        this.getComponent('adjuntosPanel').setJSON(actuacion);
        if (actuacion.comentariorechazonotario) {
            antecedentesPanel.getComponent('comentariosRechazo').setJSON(actuacion.comentariorechazonotario);
        }
    },
    getActuacionPrevia: function () {
        return this.actuacionPrevia;
    },
    isValid: function (typeValidation) {
        var erroresAntecedentesList = [];
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        var isValidContratoBuscador = antecedentesPanel.getComponent('contratoBuscador').isValid();
        if (!isValidContratoBuscador) {
            erroresAntecedentesList.push('Contrato Inscripción');
        }
        var isValidContratoDocumento = antecedentesPanel.getComponent('contratoDocumento').isValid(typeValidation);
        if (!isValidContratoDocumento) {
            erroresAntecedentesList.push('Tipo Contrato');
        }
        var erroresAntecedentes = {
            parent: 'Antecedentes',
            children: erroresAntecedentesList
        };
        Srp.MessagesManager.add(erroresAntecedentes);
        var isValidAdjuntosPanel = this.getComponent('adjuntosPanel').isValid(typeValidation);
        var erroresAdjuntosList = [];
        if (!isValidAdjuntosPanel) {
            erroresAdjuntosList.push('Contrato');
        }
        var erroresAdjuntos = {
            parent: 'Adjuntos',
            children: erroresAdjuntosList
        };
        Srp.MessagesManager.add(erroresAdjuntos);
        return isValidContratoBuscador && isValidContratoDocumento && isValidAdjuntosPanel;
    },
    registrarEventos: function () {
        cargarActuacionCmd = new Srp.command.CargarActuacionCmd();
        cargarActuacionCmd.setParameter('wizard', this);
        habilitarWizardCmd = new Srp.command.HabilitarModificacionWizardCmd();
        habilitarWizardCmd.setParameter('wizard', this);
        deshabilitarWizardCmd = new Srp.command.DeshabilitarModificacionWizardCmd();
        deshabilitarWizardCmd.setParameter('wizard', this);
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('urlWs', 'WS_ACTUACION_ALZAMIENTO_SAVE');
        saveActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd.setParameter('saveForm', this.getComponent('antecedentesPanel').getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'ResumenActuacion.onShowResumen',
            command: cargarActuacionCmd
        }, {
            name: 'onSetActuacion',
            command: habilitarWizardCmd
        }, {
            name: 'onUnSetActuacion',
            command: deshabilitarWizardCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    enablePanels: function (showRvmPanel) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoDocumento').show();
        antecedentesPanel.getComponent('contratoDocumento').doLayout();
        if (showRvmPanel == true) {
            antecedentesPanel.getComponent('anotacionesRVMFieldset').show();
            antecedentesPanel.getComponent('anotacionesRVMFieldset').doLayout();
        } else {
            antecedentesPanel.getComponent('anotacionesRVMFieldset').hide();
        }
    },
    hidePanels: function () {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoDocumento').hide();
        antecedentesPanel.getComponent('anotacionesRVMFieldset').hide();
    }
});
Ext.ns('Srp.gui.notaria');
Srp.gui.notaria.ModificacionWizard = Ext.extend(Ext.Panel, {
    id: 'modificacion-actuacion-wizard',
    activeItem: 0,
    layout: 'card',
    border: false,
    plain: true,
    region: 'center',
    height: 600,
    editOnly: false,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildBottomBar()
        });
        Ext.getCmp('card-next').disable();
        Srp.gui.notaria.ModificacionWizard.superclass.initComponent.call(this);
        this.registrarEventos();
        var title = I18n.commons.modificacionContratoPrendas;
        if (this.actuacion) {
            this.actuacionPrevia = this.actuacion;
            this.setJSON(this.actuacion);
            if (this.actuacion.inUPEdition) {
                title = title + " (Corrección: " + this.actuacion.numeroRepertorio + "-" + this.actuacion.agnoRepertorio + ")";
            }
        }
        Srp.FrontController.fireEvent('All.onChangeContent', title);
    },
    buildItems: function () {
        return [this.buildAntecedentesPanel(), this.buildArchivosPanel(), this.buildResumenPanel()];
    },
    buildAntecedentesPanel: function () {
        var filtrarInscripcionVigente = Ext.isDefined(this.actuacion) ? !this.actuacion.inUPEdition : true;
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'contratoSelectorInscripcion',
            itemId: 'contratoBuscador',
            filtrarInscripcionVigente: filtrarInscripcionVigente
        }, {
            xtype: 'comentarioRechazoFieldSet',
            itemId: 'comentariosRechazo'
        }, {
            xtype: 'contratoDocumento',
            title: 'Tipo Contrato',
            itemId: 'contratoDocumento',
            hidden: true,
            showProhibicion: false
        }, {
            xtype: 'contratoModificacion',
            hidden: true,
            itemId: 'contratoModificacion'
        }];
        return {
            xtype: 'panel',
            id: 'card-0',
            padding: 5,
            iconCls: 'icon-wizard-step-1',
            title: I18n.notaria.modificacion.wizard.title.antecedentes,
            items: items,
            itemId: 'antecedentesPanel',
            autoScroll: true
        };
    },
    buildArchivosPanel: function () {
        return {
            xtype: 'adjuntosPanel',
            id: 'card-1',
            padding: 5,
            iconCls: 'icon-wizard-step-2',
            itemId: 'adjuntosPanel',
            scope: this,
            autoScroll: true
        };
    },
    buildResumenPanel: function () {
        return {
            xtype: 'resumenActuacion',
            id: 'card-2',
            response: actuacionCompleta,
            iconCls: 'icon-wizard-step-3',
            title: I18n.commons.resumen,
            autoScroll: true,
            padding: 10,
            inWizard: true
        };
    },
    buildBottomBar: function () {
        var bbar;
        if (this.editOnly) {
            bbar = new Srp.gui.up.WizardToolbar({
                wizard: this,
                steps: 3
            });
        } else {
            bbar = new Srp.gui.notaria.WizardToolbar({
                wizard: this,
                steps: 3
            });
        }
        return bbar;
    },
    getJSON: function (isResumen) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        var actuacion = {
            tipoActuacion: ACTUACION_MODIFICACION,
            tramite: TIPO_ACTUACION_MODIFICACION
        };
        if (this.actuacion) {
            actuacion.nodeid = this.actuacion.nodeid;
            actuacion.taskid = this.actuacion.taskid;
            actuacion.type = this.actuacion.type;
            actuacion.tramite = this.actuacion.tramite;
            actuacion.pagado = this.actuacion.pagado;
        }
        if (!Ext.isDefined(this.actuacion) || isResumen) {
            util.JSON.addItems(actuacion, {
                contratoInscripcion: antecedentesPanel.getComponent('contratoBuscador').getJSON()
            });
            util.JSON.addItems(actuacion, {
                nodeidref: actuacion.contratoInscripcion.nodeid
            });
        }
        util.JSON.addItems(actuacion, antecedentesPanel.getComponent('contratoDocumento').getJSON());
        util.JSON.addItems(actuacion, antecedentesPanel.getComponent('contratoModificacion').getJSON());
        util.JSON.addItems(actuacion, this.getComponent('adjuntosPanel').getJSON(isResumen));
        if (this.editOnly && Srp.MontosManager.hasMontos(this.actuacionPrevia)) {
            Srp.MontosManager.recuperarMontos(actuacion, this.actuacionPrevia);
        } else {
            Srp.MontosManager.populateMontos(actuacion, actuacion.vehiculos);
            Srp.MontosManager.setMontosActuacion(actuacion);
        }
        if (isResumen) {
            var inscripcion = this.getComponent('antecedentesPanel').getComponent('contratoBuscador').getActuacion();
            util.JSON.addItems(actuacion, {
                inscripcion: inscripcion
            });
        }
        return actuacion;
    },
    isValid: function (typeValidation) {
        var erroresAntecedentesList = [];
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        var isValidContratoBuscador = antecedentesPanel.getComponent('contratoBuscador').isValid();
        if (!isValidContratoBuscador) {
            erroresAntecedentesList.push('Contrato Inscripción');
        }
        var isValidContratoDocumento = antecedentesPanel.getComponent('contratoDocumento').isValid(typeValidation);
        if (!isValidContratoDocumento) {
            erroresAntecedentesList.push('Tipo Contrato');
        }
        var isValidContratoModificacion = antecedentesPanel.getComponent('contratoModificacion').isValid(typeValidation);
        if (!isValidContratoModificacion) {
            erroresAntecedentesList.push('Modificación');
        }
        var erroresAntecedentes = {
            parent: 'Antecedentes',
            children: erroresAntecedentesList
        };
        Srp.MessagesManager.add(erroresAntecedentes);
        var isValidAdjuntosPanel = this.getComponent('adjuntosPanel').isValid(typeValidation);
        var erroresAdjuntosList = [];
        if (!isValidAdjuntosPanel) {
            erroresAdjuntosList.push('Contrato');
        }
        var erroresAdjuntos = {
            parent: 'Adjuntos',
            children: erroresAdjuntosList
        };
        Srp.MessagesManager.add(erroresAdjuntos);
        return isValidContratoBuscador && isValidContratoDocumento && isValidContratoModificacion && isValidAdjuntosPanel;
    },
    setJSON: function (actuacion) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoBuscador').setJSON(actuacion);
        antecedentesPanel.getComponent('contratoDocumento').setJSON(actuacion);
        antecedentesPanel.getComponent('contratoModificacion').setJSON(actuacion);
        this.getComponent('adjuntosPanel').setJSON(actuacion);
        if (actuacion.comentariorechazonotario) {
            antecedentesPanel.getComponent('comentariosRechazo').setJSON(actuacion.comentariorechazonotario);
        }
    },
    getActuacionPrevia: function () {
        return this.actuacionPrevia;
    },
    registrarEventos: function () {
        cargarActuacionCmd = new Srp.command.CargarActuacionCmd();
        cargarActuacionCmd.setParameter('wizard', this);
        habilitarWizardCmd = new Srp.command.HabilitarModificacionWizardCmd();
        habilitarWizardCmd.setParameter('wizard', this);
        deshabilitarWizardCmd = new Srp.command.DeshabilitarModificacionWizardCmd();
        deshabilitarWizardCmd.setParameter('wizard', this);
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('urlWs', 'WS_ACTUACION_MODIFICACION_SAVE');
        saveActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd.setParameter('saveForm', this.getComponent('antecedentesPanel').getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'ResumenActuacion.onShowResumen',
            command: cargarActuacionCmd
        }, {
            name: 'onSetActuacion',
            command: habilitarWizardCmd
        }, {
            name: 'onUnSetActuacion',
            command: deshabilitarWizardCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    enablePanels: function () {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoDocumento').show();
        antecedentesPanel.getComponent('contratoModificacion').show();
        antecedentesPanel.getComponent('contratoDocumento').doLayout();
        antecedentesPanel.getComponent('contratoModificacion').doLayout();
    },
    hidePanels: function () {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoDocumento').hide();
        antecedentesPanel.getComponent('contratoModificacion').hide();
    }
});
Ext.ns('Srp.gui.oai');
Srp.gui.oai.InscripcionWizard = Ext.extend(Ext.Panel, {
    id: 'ingreso-wizard',
    activeItem: 0,
    layout: 'card',
    border: true,
    plain: true,
    region: 'center',
    indexCard: 0,
    indexPanel: 1,
    editOnly: false,
    initComponent: function () {
        var config = {
            items: this.buildItems(),
            bbar: this.buildBottomBar()
        };
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.oai.InscripcionWizard.superclass.initComponent.apply(this, arguments);
        this.registrarEventos();
        var title = I18n.commons.inscripcionContratoPrendas;
        if (this.actuacion) {
            this.actuacionPrevia = this.actuacion;
            this.setJSON(this.actuacion);
            this.losesChanges = true;
            if (this.actuacion.inUPEdition) {
                title = title + " (Corrección: " + this.actuacion.numeroRepertorio + "-" + this.actuacion.agnoRepertorio + ")";
            }
        }
        Srp.FrontController.fireEvent('All.onChangeContent', title);
    },
    buildItems: function () {
        var paneles = [];
        paneles.push(this.buildContratantesPanel());
        paneles.push(this.buildAntecedentesPanel());
        paneles.push(this.buildRequirentePanel());
        if (this.editOnly) {
            paneles.push(this.buildArchivosPanel());
        }
        paneles.push(this.buildResumenPanel());
        return paneles;
    },
    getIndexCard: function () {
        var currentIndexCard = this.indexCard;
        this.indexCard = this.indexCard + 1;
        return currentIndexCard;
    },
    getIndexPanel: function () {
        var currentIndexPanel = this.indexPanel;
        this.indexPanel = this.indexPanel + 1;
        return currentIndexPanel;
    },
    buildContratantesPanel: function () {
        var contratantesPanel = new Srp.gui.ContratantesPanel({
            id: 'card-' + this.getIndexCard(),
            itemId: 'contratantesPanel',
            title: I18n.commons.contratantes,
            iconCls: 'icon-wizard-step-' + this.getIndexPanel()
        });
        return contratantesPanel;
    },
    buildAntecedentesPanel: function () {
        var paso2AntecedentesFormPanel = new Ext.Panel({
            itemId: 'antecedentesPanel',
            title: I18n.commons.antecedentes,
            border: false,
            autoScroll: true,
            items: [{
                xtype: 'contratoDocumento',
                title: 'Tipo Contrato',
                itemId: 'contratoDocumentoPanel'
            }, {
                xtype: 'contratoNotariaPanel',
                title: I18n.commons.informacionNotaria,
                itemId: 'contratoNotariaPanel'
            }]
        });
        var paso2AnotacionesPanel = new Srp.gui.AnotacionesRVMPanel({
            itemId: 'anotacionesRVMPanel'
        });
        return new Ext.Panel({
            itemId: 'antecedentesPanel',
            border: false,
            id: 'card-' + this.getIndexCard(),
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            items: [new Ext.TabPanel({
                activeTab: 0,
                itemId: 'antecedentesTabPanel',
                bodyStyle: "padding: 5px",
                border: false,
                region: 'center',
                items: [paso2AntecedentesFormPanel, paso2AnotacionesPanel]
            })],
            layout: 'border',
            title: I18n.notaria.actuacion.wizard.title.antecedentes,
            getJSON: function (isResumen) {
                var jsonUnion = {};
                var json1 = paso2AntecedentesFormPanel.getComponent('contratoDocumentoPanel').getJSON();
                var json3 = paso2AnotacionesPanel.getJSON();
                var json4 = paso2AntecedentesFormPanel.getComponent('contratoNotariaPanel').getJSON();
                var jsonUnion = util.JSON.join([json1, json3, json4]);
                return jsonUnion;
            }
        });
    },
    buildRequirentePanel: function () {
        return {
            xtype: 'requirentePanel',
            itemId: 'requirentePanel',
            id: 'card-' + this.getIndexCard(),
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            title: 'Requirente',
            autoScroll: true,
            padding: 10,
            rowHeight: 1
        };
    },
    buildArchivosPanel: function () {
        var adjuntosPanel = new Srp.gui.AdjuntosPanel({
            id: 'card-' + this.getIndexCard(),
            border: false,
            padding: 5,
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            autoScroll: true,
            itemId: 'adjuntosPanel'
        });
        return adjuntosPanel;
    },
    buildResumenPanel: function () {
        return {
            xtype: 'resumenActuacion',
            itemId: 'resumenActuacion',
            id: 'card-' + this.getIndexCard(),
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            title: I18n.commons.resumen,
            autoScroll: true,
            padding: 10,
            rowHeight: 1,
            inWizard: true
        };
    },
    buildBottomBar: function () {
        var bbar;
        if (this.editOnly) {
            bbar = new Srp.gui.up.WizardToolbar({
                wizard: this,
                steps: this.getIndexCard()
            });
        } else {
            bbar = new Srp.gui.oai.WizardToolbar({
                wizard: this,
                steps: this.getIndexCard()
            });
        }
        return bbar;
    },
    getJSON: function (isResumen) {
        var json = {
            tramite: TIPO_ACTUACION_INSCRIPCION
        };
        if (this.actuacion) {
            json = {
                nodeid: this.actuacion.nodeid,
                taskid: this.actuacion.taskid,
                type: this.actuacion.type,
                tramite: this.actuacion.tramite,
                pagado: this.actuacion.pagado
            };
        }
        util.JSON.addItems(json, this.getComponent('contratantesPanel').getJSON(isResumen));
        util.JSON.addItems(json, this.getComponent('antecedentesPanel').getJSON(isResumen));
        util.JSON.addItems(json, this.getComponent('requirentePanel').getJSON(isResumen));
        if (this.editOnly) {
            util.JSON.addItems(json, this.getComponent('adjuntosPanel').getJSON(isResumen));
        }
        if (this.editOnly && Srp.MontosManager.hasMontos(this.actuacionPrevia)) {
            Srp.MontosManager.recuperarMontos(json, this.actuacionPrevia);
        } else {
            Srp.MontosManager.populateMontos(json, json.vehiculos);
            Srp.MontosManager.setMontosActuacion(json);
        }
        return json;
    },
    setJSON: function (actuacion) {
        log.Log4JS.debug('Retrieved: \n' + Ext.util.JSON.encode(actuacion));
        this.getComponent('contratantesPanel').setJSON(actuacion);
        var tab = this.getComponent('antecedentesPanel').getComponent('antecedentesTabPanel');
        tab.getComponent('antecedentesPanel').getComponent('contratoDocumentoPanel').setJSON(actuacion);
        tab.getComponent('antecedentesPanel').getComponent('contratoNotariaPanel').setJSON(actuacion);
        tab.getComponent('anotacionesRVMPanel').setJSON(actuacion);
        this.getComponent('requirentePanel').setJSON(actuacion);
        if (this.editOnly) {
            this.getComponent('adjuntosPanel').setJSON(actuacion);
        }
    },
    getActuacionPrevia: function () {
        return this.actuacionPrevia;
    },
    isValid: function (validationType) {
        var contratantesValidation = this.getComponent('contratantesPanel').isValid(validationType);
        var tab = this.getComponent('antecedentesPanel').getComponent('antecedentesTabPanel');
        var antecedentesValidation = tab.getComponent('antecedentesPanel').getComponent('contratoDocumentoPanel').isValid(validationType);
        var anotacionesValidation = tab.getComponent('anotacionesRVMPanel').isValid(validationType);
        var contratoNotariaValidation = tab.getComponent('antecedentesPanel').getComponent('contratoNotariaPanel').isValid(validationType);
        var erroresAntecedentesList = [];
        if (!antecedentesValidation) {
            erroresAntecedentesList.push('Antecedentes');
        }
        if (!contratoNotariaValidation) {
            erroresAntecedentesList.push('Información Notaria');
        }
        if (!anotacionesValidation) {
            erroresAntecedentesList.push('Anotaciones al RVM');
        }
        var erroresAntecedentes = {
            parent: 'Antecedentes',
            children: erroresAntecedentesList
        };
        Srp.MessagesManager.add(erroresAntecedentes);
        var requirenteValidation = this.getComponent('requirentePanel').isValid(validationType);
        var adjuntosValidation = true;
        if (this.editOnly) {
            adjuntosValidation = this.getComponent('adjuntosPanel').isValid(validationType);
            var erroresAdjuntosList = [];
            if (!adjuntosValidation) {
                erroresAdjuntosList.push('Contrato');
            }
            var erroresAdjuntos = {
                parent: 'Adjuntos',
                children: erroresAdjuntosList
            };
            Srp.MessagesManager.add(erroresAdjuntos);
        }
        return contratantesValidation && antecedentesValidation && anotacionesValidation && contratoNotariaValidation && requirenteValidation && adjuntosValidation;
    },
    registrarEventos: function () {
        var cargarActuacionCmd = new Srp.command.CargarActuacionCmd();
        cargarActuacionCmd.setParameter('wizard', this);
        var save = new Srp.command.SaveActuacionCmd();
        save.setParameter('wizard', this);
        save.setParameter('urlWs', 'WS_ACTUACION_INSCRIPCION_SAVE');
        save.setParameter('saveForm', this.getComponent('contratantesPanel').getComponent('tabPanel').getComponent('acreedorPanel').getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'ResumenActuacion.onShowResumen',
            command: cargarActuacionCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: save
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    }
});
Ext.reg('ingresowizardOAI', Srp.gui.oai.InscripcionWizard);
Ext.ns('Srp.gui');
Srp.gui.TaskAbstractPanel = Ext.extend(Ext.Panel, {
    autoScroll: true,
    layout: 'border',
    showComentarioNotario: false,
    showRVMDetail: false,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        Srp.gui.TaskAbstractPanel.superclass.initComponent.call(this);
        this.resumenActuacion.loadData(this.actuacion);
    },
    buildItems: function () {
        this.resumenActuacion = new Srp.gui.ResumenActuacionPanel({
            region: 'center',
            padding: 5,
            autoScroll: true,
            showComentarioNotario: this.showComentarioNotario,
            showRVMDetail: this.showRVMDetail
        });
        return this.resumenActuacion;
    },
    loadMask: function (msg) {
        var el = this.getEl();
        el.mask(msg, "x-mask-loading");
    },
    removeMask: function () {
        var el = this.getEl();
        el.unmask();
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskRevisionActuacionPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.revisarContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskRevisionActuacionPanel.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.aprobarRevisar,
            scope: this,
            handler: this.onAprobarRevision,
            iconCls: 'icon-button-aprobar'
        }, '-', {
            text: I18n.commons.rechazarRevision,
            scope: this,
            handler: this.onRechazarRevision,
            iconCls: 'icon-button-rechazar'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    getJSON: function () {
        return this.actuacion;
    },
    isValid: function () {
        return true;
    },
    onAprobarRevision: function (btn, ev) {
        var actions = ['onLoadMask', 'onValidate', 'onAprobarActuacion', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            confirmMessage: I18n.mensajes.confirm.actuacionRevisadaAprobada,
            transition: Srp.WorkflowManager.WORKFLOW.OAI.REVISAR_ACTUACION
        });
    },
    onRechazarRevision: function (btn, ev) {
        var actions = ['onValidate', 'onRechazarActuacion', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            confirmMessage: I18n.mensajes.alert.actuacionRechazada,
            estadoAnotacion: ESTADO_ANOTACION_RECHAZADA,
            transition: Srp.WorkflowManager.WORKFLOW.OAI.RECHAZAR_ACTUACION
        });
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    },
    registrarEventos: function () {
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('wizard', this);
        removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskExaminarActuacionPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.revisarContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskExaminarActuacionPanel.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    buildButtons: function () {
        var disableTerminarBtn = true;
        if (this.actuacion.pagado) {
            disableTerminarBtn = false;
        }
        return [{
            text: I18n.commons.terminar,
            scope: this,
            handler: this.onTerminar,
            iconCls: 'icon-button-aprobar',
            disabled: disableTerminarBtn
        }, '-', {
            text: I18n.commons.rechazarRevision,
            scope: this,
            handler: this.onRechazarRevision,
            iconCls: 'icon-button-rechazar'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    getJSON: function () {
        return this.actuacion;
    },
    isValid: function () {
        return true;
    },
    onRechazarRevision: function (btn, ev) {
        var actions = ['onValidate', 'onRechazarActuacion', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            confirmMessage: I18n.mensajes.alert.actuacionRechazada,
            estadoAnotacion: ESTADO_ANOTACION_RECHAZADA,
            transition: Srp.WorkflowManager.WORKFLOW.NOTARIA.RECHAZAR_ACTUACION
        });
    },
    onTerminar: function (btn, ev) {
        var actions = ['onLoadMask', 'onValidate', 'onAprobarActuacion', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            confirmMessage: I18n.mensajes.confirm.actuacionRevisadaAprobada,
            estadoAnotacion: ESTADO_ANOTACION_ACEPTADA,
            transition: Srp.WorkflowManager.WORKFLOW.NOTARIA.APROBAR_ACTUACION
        });
    },
    onSuccessRevisar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha revisado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onFailureRevisar: function () {},
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    },
    registrarEventos: function () {
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('wizard', this);
        removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskExaminarActuacionRechazoPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.revisarRechazoContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskExaminarActuacionRechazoPanel.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    buildButtons: function () {
        var disableTerminarBtn = true;
        if (this.actuacion.pagado) {
            disableTerminarBtn = false;
        }
        return [{
            text: I18n.commons.rechazarRevision,
            scope: this,
            handler: this.onRechazarRevision,
            iconCls: 'icon-button-rechazar'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    getJSON: function () {
        return this.actuacion;
    },
    isValid: function () {
        return true;
    },
    onRechazarRevision: function (btn, ev) {
        var actions = ['onValidate', 'onRechazarActuacion', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            confirmMessage: I18n.mensajes.alert.actuacionRechazada,
            estadoAnotacion: ESTADO_ANOTACION_RECHAZADA,
            transition: Srp.WorkflowManager.WORKFLOW.UP.RECHAZO_RECHAZAR_REVISION
        });
    },
    onSuccessRevisar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha revisado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onFailureRevisar: function () {},
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    },
    registrarEventos: function () {
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('wizard', this);
        removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskExaminacionPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.revisarContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskExaminacionPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.aprobarRevisar,
            scope: this,
            handler: this.onAprobarRevision
        }, {
            text: I18n.commons.rechazarRevision,
            scope: this,
            handler: this.onRechazarRevision
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar
        }];
    },
    onRechazarRevision: function (btn, ev) {
        Ext.Ajax.request({
            url: Srp.getWsUrl('WS_AVANZAR_WORKFLOW'),
            method: 'POST',
            scope: this,
            params: {
                taskid: this.actuacion.taskid.substring(5),
                transicion: Srp.getWsPath('RECHAZAR_EXAMINACION_ACTUACION')
            },
            success: this.onSuccessRechazar,
            failure: this.onFailureRevisar
        });
    },
    onAprobarRevision: function (btn, ev) {
        Ext.Ajax.request({
            url: Srp.getWsUrl('WS_AVANZAR_WORKFLOW'),
            method: 'POST',
            scope: this,
            params: {
                taskid: this.actuacion.taskid.substring(5),
                transicion: Srp.getWsPath('APROBAR_EXAMINACION_ACTUACION')
            },
            success: this.onSuccessRevisar,
            failure: this.onFailureRevisar
        });
    },
    onSuccessRevisar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha revisado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onSuccessRechazar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha rechazado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onFailureRevisar: function () {},
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskPagoPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    actualizandoMontos: false,
    showRVMDetail: true,
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.pagarContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskPagoPanel.superclass.initComponent.call(this);
        this.buildFormSaveActuacion();
        var actuacionActual = Srp.MontosManager.getCopiaActuacionActualMontos(this.actuacion);
        var actuacionActualizada = Srp.MontosManager.getCopiaActuacionActualizadaMontos(this.actuacion);
        if (Srp.MontosManager.chequearCambioMontos(actuacionActual, actuacionActualizada)) {
            this.actualizarMontosActuacion(actuacionActualizada);
        }
    },
    onRender: function (ct, position) {
        Srp.gui.TaskPagoPanel.superclass.onRender.call(this, ct, position);
        if (this.actualizandoMontos) {
            this.loadMask(I18n.mensajes.actualizandoMontos);
        }
    },
    getConstituyentes: function () {
        return {
            actuacion: this.actuacion,
            getJSON: function () {
                return this.actuacion.constituyentes;
            }
        };
    },
    actualizarMontosActuacion: function (actuacionActualizada) {
        this.actualizandoMontos = true;
        this.actuacionActualizada = actuacionActualizada;
        Srp.MontosManager.updateMontosActuacion({
            actuacion: this.actuacionActualizada,
            scope: this,
            success: this.onSuccessActualizarMontosActuacion,
            failure: this.onFailureActualizarMontosActuacion
        });
    },
    onSuccessActualizarMontosActuacion: function () {
        this.resumenActuacion.loadData(this.actuacionActualizada);
        this.removeMask();
    },
    onFailureSaveComentarioRechazo: function (form, action) {
        Srp.WebScriptManager.onFailureSaveActuacion(form, action);
        Log4js.debug('No se pudo actualizar montos');
    },
    buildFormSaveActuacion: function () {
        this.add({
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        });
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.pagar,
            scope: this,
            handler: this.onValidatePPUs,
            iconCls: 'icon-pagar'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    loadMask: function (msg) {
        var el = this.getEl();
        el.mask(msg, "x-mask-loading");
    },
    removeMask: function () {
        var el = this.getEl();
        el.unmask();
    },
    onValidatePPUs: function () {
        Log4js.debug('TaskPagoPanel.onValidatePPUs()');
        if (this.actuacion.vehiculos.length > 0 && this.actuacion.tipoActuacion == TIPO_ACTUACION_INSCRIPCION) {
            this.loadMask(I18n.mensajes.validandoPPUs);
            Srp.FrontController.fireEvent('onValidatingPPU', this);
        } else {
            this.doPago();
        }
    },
    doPago: function (btn, ev) {
        this.loadMask(I18n.mensajes.procesando);
        var actuaciones = [this.actuacion];
        Srp.PagoManager.setActuaciones(actuaciones);
        Srp.PagoManager.setCallback(this);
        Srp.PagoManager.pagar();
    },
    onSuccess: function () {
        this.removeMask();
        Srp.Canvas.goHome();
    },
    onFailure: function () {
        Srp.Canvas.goHome();
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    },
    doAbort: function () {
        Srp.gui.messageBox.Error({
            msg: I18n.mensajes.error.validacionPPUs
        });
        this.removeMask();
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskRePagoPanel = Ext.extend(Srp.gui.TaskPagoPanel, {
    showRVMDetail: false,
    initComponent: function () {
        Srp.gui.TaskRePagoPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.pagar,
            scope: this,
            handler: this.doPago,
            iconCls: 'icon-pagar'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskAbortarPagoPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.abortarPagoContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskAbortarPagoPanel.superclass.initComponent.call(this);
        this.buildFormAbortarPago();
    },
    buildFormAbortarPago: function () {
        this.formAbortarPago = new Ext.form.FormPanel({
            fileUpload: true,
            url: Srp.WebScriptManager.getUrl('WS_CARRO_REPAGAR'),
            items: [{
                xtype: 'hidden',
                name: 'path',
                itemId: 'path',
                value: ''
            }, {
                xtype: 'hidden',
                name: 'idpago',
                itemId: 'idpago',
                value: ''
            }]
        });
        this.resumenActuacion.add(this.formAbortarPago);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.abortarPago,
            scope: this,
            handler: this.onAbortarPago,
            iconCls: 'icon-button-abortar-pago'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onAbortarPago: function (btn, ev) {
        this.obtenerCarro();
    },
    obtenerCarro: function () {
        Ext.Ajax.request({
            url: Srp.getWsUrl('WS_GET_CARRO_BY_NODEID'),
            method: 'GET',
            params: {
                nodeid: this.actuacion.nodeid
            },
            scope: this,
            success: this.onSuccessObtenerCarro,
            failure: Srp.WebScriptManager.connectionError
        });
    },
    onSuccessObtenerCarro: function (response) {
        var carros = Ext.util.JSON.decode(response.responseText);
        if (carros.total > 0) {
            if (carros.total > 1) {
                Log4js.debug('Warning: La actuación está en varios carros');
            }
            var carroId = carros.rows[0];
            for (var i = 0; i < carros.rows.length; ++i) {
                if (carros.rows[i] > carroId) {
                    carroId = carros.rows[i];
                }
            }
            this.carroId = carroId;
            this.repagar();
        } else {
            Srp.gui.messageBox.Error({
                msg: I18n.commons.actuacionNoTieneActuacion
            });
        }
    },
    repagar: function () {
        this.formAbortarPago.getComponent('path').setValue(Srp.WorkflowManager.WORKFLOW.NOTARIA.PAGO.REPAGAR);
        this.formAbortarPago.getComponent('idpago').setValue(this.carroId);
        if (this.formAbortarPago.getForm().isValid()) {
            this.formAbortarPago.getForm().doAction("restfulsubmit", {
                scope: this,
                success: this.onSuccessRepagar,
                failure: Srp.WebScriptManager.connectionError
            });
        }
    },
    onSuccessRepagar: function () {
        Srp.gui.messageBox.Info({
            msg: I18n.commons.actuacionMovidaARepagar
        });
        Srp.Canvas.goHome();
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskFirmaPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.firmarContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons(),
            showComentarioNotario: true
        });
        Srp.gui.TaskFirmaPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        var buttons = [];
        buttons.push({
            text: I18n.commons.firmar,
            scope: this,
            handler: this.onFirmar,
            iconCls: 'icon-firmar'
        });
        if (Srp.conf.Properties.DEVELOPMENT_MODE) {
            buttons.push('-');
            buttons.push({
                text: "Firmar Sin Token",
                scope: this,
                handler: function (btv, ev) {
                    Srp.WorkflowManager.advanceTo({
                        taskid: this.actuacion.taskid,
                        transition: Srp.WorkflowManager.WORKFLOW.NOTARIA.FIRMAR,
                        success: function (response, opts) {
                            Srp.gui.messageBox.Info({
                                msg: 'Se ha firmado la actuación sin usar token.'
                            });
                            Srp.Canvas.goHome();
                        },
                        failure: function () {}
                    });
                },
                iconCls: 'icon-firmar'
            });
        }
        buttons.push('-');
        buttons.push({
            text: I18n.commons.devolverEdicion,
            scope: this,
            handler: this.onDevolver,
            iconCls: 'icon-editar'
        });
        buttons.push({
            xtype: 'tbfill'
        });
        buttons.push({
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        });
        return buttons;
    },
    onFirmar: function (btn, ev) {
        Srp.Canvas.updateBoxMenu(this.buildApplet());
    },
    onDevolver: function (btv, ev) {
        rechazoContratoWindow = new Srp.gui.RechazoContratoWindow({
            actuacion: this.actuacion,
            transition: Srp.WorkflowManager.WORKFLOW.NOTARIA.DEVOLVER_EDICION,
            field: 'comentariorechazonotario',
            message: I18n.mensajes.alert.actuacionDevueltaAEdicion,
            tipoComentario: TIPO_COMENTARIO_HISTORICO
        });
        rechazoContratoWindow.show();
    },
    buildApplet: function () {
        var nodeIds = [this.actuacion.nodeid];
        var taskIds = [this.actuacion.taskid];
        return util.Signature.obtenerAppletHtml(nodeIds, taskIds, false);
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskAdjuntarPanel = Ext.extend(Ext.Panel, {
    border: false,
    plain: true,
    region: 'center',
    height: 600,
    padding: 5,
    autoScroll: true,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildButtons()
        });
        Srp.gui.TaskAdjuntarPanel.superclass.initComponent.call(this);
        this.registrarEventos();
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.digitarlizarAdjuntarArchivos);
        if (this.actuacion) {
            this.setJSON(this.actuacion);
        }
    },
    buildItems: function () {
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'contratoBuscador',
            itemId: 'contratoBuscador',
            title: 'Actuación'
        }, {
            xtype: 'adjuntosPanel',
            itemId: 'adjuntosPanel',
            title: '',
            border: false
        }];
        return items;
    },
    getJSON: function (isResumen) {
        var actuacion = {};
        if (this.actuacion) {
            actuacion.nodeid = this.actuacion.nodeid;
            actuacion.taskid = this.actuacion.taskid;
            actuacion.tieneAnotaciones = true;
        }
        actuacion.tipoOu = this.actuacion.tipoOu;
        actuacion.grpNotariaRef = this.actuacion.grpNotariaRef;
        actuacion.nombreNotarioRef = this.actuacion.nombreNotarioRef;
        actuacion.runNotarioRef = this.actuacion.runNotarioRef;
        util.JSON.addItems(actuacion, this.getComponent('adjuntosPanel').getJSON());
        return actuacion;
    },
    setJSON: function (actuacion) {
        var actuacionRef = {
            agno: actuacion.agnoRepertorio,
            numeroRepertorioPrendas: actuacion.numeroRepertorio,
            nodeId: actuacion.nodeid
        };
        this.getComponent('contratoBuscador').setJSON({
            contratoInscripcion: actuacionRef
        });
        this.getComponent('adjuntosPanel').setJSON(actuacion);
    },
    getUrlWsByTipoActuacion: function (tipoActuacion) {
        switch (tipoActuacion) {
            case TIPO_ACTUACION_INSCRIPCION:
                return 'WS_ACTUACION_INSCRIPCION_SAVE';
            case TIPO_ACTUACION_MODIFICACION:
                return 'WS_ACTUACION_MODIFICACION_SAVE';
            case TIPO_ACTUACION_ALZAMIENTO:
                return 'WS_ACTUACION_ALZAMIENTO_SAVE';
        }
    },
    registrarEventos: function () {
        var wsUrl;
        cargarActuacionCmd = new Srp.command.CargarActuacionCmd();
        cargarActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('urlWs', this.getUrlWsByTipoActuacion(this.actuacion.tipoActuacion));
        saveActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd.setParameter('saveForm', this.getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'ResumenActuacion.onShowResumen',
            command: cargarActuacionCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.terminar,
            scope: this,
            handler: this.onSaveAdjuntos,
            iconCls: 'icon-button-save-attachment'
        }, '-', {
            text: I18n.notaria.actuacion.wizard.button.grabarYSalir,
            scope: this,
            handler: this.onSave,
            iconCls: 'icon-save'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.commons.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onCancelar: function () {
        Srp.Canvas.goHome();
    },
    isValid: function () {
        return this.getComponent('adjuntosPanel').isValid(TIPO_VALIDACION_ENVIAR_A_FIRMA);
    },
    onSaveAdjuntos: function () {
        var actions = ['onLoadMask', 'onValidate', 'onSave', 'onAdjuntar', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            errorMessage: I18n.unidadPrendas.mensajes.contratoNoEncontrado,
            estadoAnotacion: ESTADO_ANOTACION_ACEPTADA
        });
    },
    onSave: function () {
        var actions = ['onLoadMask', 'onValidate', 'onSave', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            errorMessage: I18n.unidadPrendas.mensajes.contratoNoEncontrado
        });
    }
});
Ext.ns('Srp.gui');
Srp.gui.ContratoRecepcionarPanel = Ext.extend(Ext.Panel, {
    padding: 5,
    loseChangesMessage: I18n.mensajes.perderDatosRecepcion,
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.recepcionarContratoPrendas);
        Ext.apply(this, {
            items: this.buildItems(),
            actuaciones: [],
            bbar: this.buildButtons()
        });
        Srp.gui.ContratoRecepcionarPanel.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    buildItems: function () {
        this.recepcionGrid = new Srp.gui.RecepcionActuacionGrid({
            itemId: 'recepcionActuacionGrid'
        });
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'fieldset',
            title: 'Buscar Número de Repertorio',
            items: [{
                fieldLabel: 'Nº Repertorio',
                name: 'numeroRepertorioPrendas',
                id: 'numeroRepertorioPrendas',
                xtype: 'textfield',
                vtype: 'repertorioagno',
                enableKeyEvents: true,
                listeners: {
                    scope: this,
                    keypress: this.onAddActuacion
                },
                autoCreate: {
                    tag: 'input',
                    type: 'text',
                    size: '14',
                    autocomplete: 'off',
                    maxlength: '12'
                },
                cls: 'non-enterToTab'
            }]
        }, {
            xtype: 'fieldset',
            title: 'Actuaciones a Recepcionar',
            items: [this.recepcionGrid]
        }];
        return items;
    },
    onAddActuacion: function (cmp, e) {
        if (e.getKey() == Ext.EventObject.ENTER && cmp.isValid() && cmp.getValue().length > 0) {
            var recepcionStore = this.recepcionGrid.getStore();
            var numeroRepertorioAgno = cmp.getValue();
            numeroRepertorioAgno = numeroRepertorioAgno.substring(0, numeroRepertorioAgno.length - 1);
            while (numeroRepertorioAgno.charAt(0) == '0') {
                numeroRepertorioAgno = numeroRepertorioAgno.substring(1);
            }
            var numeroRepertorio = numeroRepertorioAgno.substring(0, numeroRepertorioAgno.length - 4);
            var agnoRepertorio = numeroRepertorioAgno.substring(numeroRepertorioAgno.length - 4, numeroRepertorioAgno.length);
            var indexNumero = recepcionStore.findExact('numeroRepertorioPrendas', numeroRepertorio);
            var indexAgno = recepcionStore.findExact('agnoRepertorioPrendas', agnoRepertorio);
            if (indexNumero != indexAgno || (indexNumero == -1 && indexAgno == -1)) {
                var indice = recepcionStore.getCount();
                var actuacion = {
                    numeroRepertorioPrendas: numeroRepertorio,
                    agnoRepertorioPrendas: agnoRepertorio,
                    estado: RECEPCION_ESTADO_ESPERANDO,
                    numeroRepertorioAgnoPrendas: numeroRepertorioAgno
                };
                recepcionStore.insert(indice, new recepcionStore.recordType(actuacion));
                cmp.reset();
            } else {
                cmp.markInvalid(I18n.mensajes.numeroRepertorioYaIngresado);
            }
        }
    },
    discardChanges: function () {
        var hasChanges = false;
        var recepcionStore = this.recepcionGrid.getStore();
        var nActuaciones = recepcionStore.getCount();
        if (nActuaciones > 0) {
            var nActuacionesEnEspera = recepcionStore.query('estado', RECEPCION_ESTADO_ESPERANDO);
            if (nActuacionesEnEspera.length > 0) {
                hasChanges = true;
            }
        }
        return hasChanges;
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.recepcionar,
            handler: this.onRecepcionar,
            scope: this,
            iconCls: 'icon-button-recepcionar',
            ref: '../recepcionarButton'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    getJSON: function () {
        var actuaciones = [];
        var recepcionStore = this.recepcionGrid.getStore();
        if (recepcionStore.getCount() > 0) {
            for (var i = 0; i < recepcionStore.getCount(); ++i) {
                var actuacion = recepcionStore.getAt(i);
                actuaciones.push({
                    numero: parseInt(actuacion.get('numeroRepertorioPrendas')),
                    agno: parseInt(actuacion.get('agnoRepertorioPrendas'))
                });
            }
            return {
                rows: actuaciones
            };
        }
    },
    onRecepcionar: function (evt, but) {
        var recepcionStore = this.recepcionGrid.getStore();
        var nActuaciones = recepcionStore.getCount();
        if (nActuaciones > 0) {
            this.recepcionarButton.disable();
            var actions = ['onValidate', 'onSave', 'onShowResults'];
            Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
                actions: actions,
                source: this
            });
        }
    },
    isValid: function () {
        return true;
    },
    showResults: function () {
        var msg = {};
        if (this.response.success) {
            if (this.response.rows.length > 0) {
                for (var i = 0; i < this.response.rows.length; ++i) {
                    var actuacion = this.response.rows[i];
                    msg[actuacion.numero + '_' + actuacion.agno] = actuacion.msg;
                }
            }
        }
        var recepcionStore = this.recepcionGrid.getStore();
        var nActuacionesRecepcionadas = 0;
        if (recepcionStore.getCount() > 0) {
            for (var i = 0; i < recepcionStore.getCount(); ++i) {
                var actuacion = recepcionStore.getAt(i);
                var indice = actuacion.get('numeroRepertorioPrendas') + '_' + actuacion.get('agnoRepertorioPrendas');
                if (msg[indice] == 'OK') {
                    actuacion.set('estado', RECEPCION_ESTADO_OK);
                    ++nActuacionesRecepcionadas;
                } else {
                    actuacion.set('estado', RECEPCION_ESTADO_ERROR);
                }
            }
        }
        Srp.gui.messageBox.Info({
            msg: 'Se recepcionaron ' + nActuacionesRecepcionadas + ' actuaciones.'
        });
    },
    registrarEventos: function () {
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('urlWs', 'WS_RECEPCIONAR_WORKFLOW');
        saveActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd.setParameter('saveForm', this.getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    onCancelar: function (btn, ev) {
        Srp.gui.messageBox.YesNo({
            msg: I18n.mensajes.perderDatosRecepcion,
            fn: function (id) {
                if (id === 'yes') {
                    Srp.Canvas.updateContent(new Srp.gui.TareaGrid());
                }
            }
        });
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskAdjuntarPanel = Ext.extend(Ext.Panel, {
    border: false,
    plain: true,
    region: 'center',
    height: 600,
    padding: 5,
    autoScroll: true,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildButtons()
        });
        Srp.gui.TaskAdjuntarPanel.superclass.initComponent.call(this);
        this.registrarEventos();
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.digitarlizarAdjuntarArchivos);
        if (this.actuacion) {
            this.setJSON(this.actuacion);
        }
    },
    buildItems: function () {
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'contratoBuscador',
            itemId: 'contratoBuscador',
            title: 'Actuación'
        }, {
            xtype: 'adjuntosPanel',
            itemId: 'adjuntosPanel',
            title: '',
            border: false
        }];
        return items;
    },
    getJSON: function (isResumen) {
        var actuacion = {};
        if (this.actuacion) {
            actuacion.nodeid = this.actuacion.nodeid;
            actuacion.taskid = this.actuacion.taskid;
            actuacion.tieneAnotaciones = true;
        }
        actuacion.tipoOu = this.actuacion.tipoOu;
        actuacion.grpNotariaRef = this.actuacion.grpNotariaRef;
        actuacion.nombreNotarioRef = this.actuacion.nombreNotarioRef;
        actuacion.runNotarioRef = this.actuacion.runNotarioRef;
        util.JSON.addItems(actuacion, this.getComponent('adjuntosPanel').getJSON());
        return actuacion;
    },
    setJSON: function (actuacion) {
        var actuacionRef = {
            agno: actuacion.agnoRepertorio,
            numeroRepertorioPrendas: actuacion.numeroRepertorio,
            nodeId: actuacion.nodeid
        };
        this.getComponent('contratoBuscador').setJSON({
            contratoInscripcion: actuacionRef
        });
        this.getComponent('adjuntosPanel').setJSON(actuacion);
    },
    getUrlWsByTipoActuacion: function (tipoActuacion) {
        switch (tipoActuacion) {
            case TIPO_ACTUACION_INSCRIPCION:
                return 'WS_ACTUACION_INSCRIPCION_SAVE';
            case TIPO_ACTUACION_MODIFICACION:
                return 'WS_ACTUACION_MODIFICACION_SAVE';
            case TIPO_ACTUACION_ALZAMIENTO:
                return 'WS_ACTUACION_ALZAMIENTO_SAVE';
        }
    },
    registrarEventos: function () {
        var wsUrl;
        cargarActuacionCmd = new Srp.command.CargarActuacionCmd();
        cargarActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('urlWs', this.getUrlWsByTipoActuacion(this.actuacion.tipoActuacion));
        saveActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd.setParameter('saveForm', this.getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'ResumenActuacion.onShowResumen',
            command: cargarActuacionCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.terminar,
            scope: this,
            handler: this.onSaveAdjuntos,
            iconCls: 'icon-button-save-attachment'
        }, '-', {
            text: I18n.notaria.actuacion.wizard.button.grabarYSalir,
            scope: this,
            handler: this.onSave,
            iconCls: 'icon-save'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.commons.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onCancelar: function () {
        Srp.Canvas.goHome();
    },
    isValid: function () {
        return this.getComponent('adjuntosPanel').isValid(TIPO_VALIDACION_ENVIAR_A_FIRMA);
    },
    onSaveAdjuntos: function () {
        var actions = ['onLoadMask', 'onValidate', 'onSave', 'onAdjuntar', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            errorMessage: I18n.unidadPrendas.mensajes.contratoNoEncontrado,
            estadoAnotacion: ESTADO_ANOTACION_ACEPTADA
        });
    },
    onSave: function () {
        var actions = ['onLoadMask', 'onValidate', 'onSave', 'onFinish'];
        Srp.FrontController.fireEvent('WizardToolbar.onSubmit', {
            actions: actions,
            errorMessage: I18n.unidadPrendas.mensajes.contratoNoEncontrado
        });
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskRecepcionarPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.recepcionarContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskRecepcionarPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    },
    onRecepcionar: function (btn, ev) {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.OAI.RECEPCIONAR,
            scope: this,
            success: this.onSuccessRecepcionar,
            failure: this.onFailureRecepcionar
        });
    },
    onSuccessRecepcionar: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha recepcionado la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onFailureRecepcionar: function () {}
});
Ext.ns('Srp.gui');
Srp.gui.TaskConfirmarPagoPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.confirmarPagoContratoPrendas);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskConfirmarPagoPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.confirmarPago,
            scope: this,
            handler: this.onConfirmarPago,
            iconCls: 'icon-button-confirmar-pago'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onConfirmarPago: function (btn, ev) {
        Ext.Ajax.request({
            url: Srp.getWsUrl('WS_ACTUACION_CONFIRMAR_PAGO'),
            method: 'POST',
            params: {
                idpago: this.actuacion.taskid.substring(5)
            },
            scope: this,
            success: this.onSuccessConfirmarPago,
            failure: this.onFailureConfirmarPago
        });
    },
    onSuccessConfirmarPago: function (response, opts) {
        Srp.gui.messageBox.Info({
            msg: 'Se ha confirmado el pago de la actuación.'
        });
        Srp.Canvas.goHome();
    },
    onFailureConfirmarPago: function () {},
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskProcesarRechazoPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.procesarRechazoActuacion);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskProcesarRechazoPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            text: I18n.unidadPrendas.button.enviar,
            scope: this,
            handler: this.onEnviar,
            iconCls: 'icon-send',
            itemId: 'send-button'
        }, {
            xtype: 'tbseparator',
            itemId: 'send-button-separator'
        }, {
            text: I18n.unidadPrendas.button.reconsiderar,
            scope: this,
            handler: this.onReconsiderar,
            iconCls: 'icon-reconsiderar',
            itemId: 'reconsiderar-button'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onImprimirOficio: function (btn, ev) {
        Log4js.debug('onImprimirOficio');
        Srp.ReportesManager.getResolucionExenta(this.actuacion);
    },
    onEnviar: function (btn, ev) {
        this.loadMask(I18n.mensajes.procesandoRechazo);
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.UP.ENVIAR_A_OU,
            scope: this,
            success: this.onEnviarSuccess,
            failure: function () {
                Srp.gui.messageBox.Error({
                    msg: I18n.mensajes.errorSesionInvalida
                });
            }
        });
    },
    onEnviarSuccess: function (response, opts) {
        this.removeMask();
        Srp.gui.messageBox.Info({
            msg: I18n.commons.actuacionEnviadaAOu
        });
        Srp.Canvas.goHome();
    },
    onReconsiderar: function (btn, ev) {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.UP.RECONSIDERAR,
            success: function (response, opts) {
                Srp.gui.messageBox.Info({
                    msg: I18n.commons.reconsiderarExitosamente
                });
                Srp.Canvas.goHome();
            },
            failure: function () {
                Srp.gui.messageBox.Error({
                    msg: I18n.mensajes.error.reconsiderar
                });
            }
        });
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskRechazoProcesarRechazoPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.procesarRechazoActuacion);
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskRechazoProcesarRechazoPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            text: I18n.unidadPrendas.button.enviar,
            scope: this,
            handler: this.onEnviar,
            iconCls: 'icon-send',
            itemId: 'send-button'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onImprimirOficio: function (btn, ev) {
        Log4js.debug('onImprimirOficio');
        Srp.ReportesManager.getResolucionExenta(this.actuacion);
    },
    onEnviar: function (btn, ev) {
        this.loadMask(I18n.mensajes.procesandoRechazo);
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.UP.RECHAZO_ENVIAR_A_OU,
            scope: this,
            success: this.onEnviarSuccess,
            failure: function () {
                Srp.gui.messageBox.Error({
                    msg: I18n.mensajes.errorSesionInvalida
                });
            }
        });
    },
    onEnviarSuccess: function (response, opts) {
        this.removeMask();
        Srp.gui.messageBox.Info({
            msg: I18n.commons.actuacionEnviadaAOu
        });
        Srp.Canvas.goHome();
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskTomarConocimientoPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.tomaConocimientoRechazo);
        this.actuacion.comentarioRechazoUP = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.';
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskTomarConocimientoPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.aceptar,
            scope: this,
            handler: this.onAceptar,
            iconCls: 'icon-button-exit'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    },
    onAceptar: function (btn, ev) {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.NOTARIA.TERMINAR,
            scope: this,
            success: this.onSuccessAceptar,
            failure: this.onFailureAceptar
        });
    },
    onSuccessAceptar: function (response, opts) {
        Srp.Canvas.goHome();
    },
    onFailureAceptar: function () {
        Log4js.debug('Error en Notaria > Workflow > terminar ');
    }
});
Ext.ns('Srp.gui');
Srp.gui.TaskRealizarEgresoPanel = Ext.extend(Srp.gui.TaskAbstractPanel, {
    initComponent: function () {
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.resolucionRechazo);
        this.actuacion.comentarioRechazoUP = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.';
        Ext.apply(this, {
            actuacion: this.actuacion,
            bbar: this.buildButtons()
        });
        Srp.gui.TaskRealizarEgresoPanel.superclass.initComponent.call(this);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.aceptar,
            scope: this,
            handler: this.onAceptar,
            iconCls: 'icon-button-exit'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onCancelar: function (btn, ev) {
        Srp.Canvas.goHome();
    },
    onAceptar: function (btn, ev) {
        Srp.gui.messageBox.YesNo({
            msg: I18n.mensajes.confirm.realizarEgreso,
            fn: this.onConfirmAceptar,
            scope: this
        });
    },
    onConfirmAceptar: function (id) {
        Log4js.debug('TaskRealizarEgresoPanel.onConfirmAceptar()');
        if (id === 'yes') {
            this.registrarEgreso();
        }
    },
    registrarEgreso: function () {
        Srp.PagoManager.registrarEgreso({
            actuacion: this.actuacion,
            scope: this,
            onSuccess: this.onSuccessRegistrarEgreso,
            onFailure: this.onFailureRegistrarEgreso
        })
    },
    onSuccessRegistrarEgreso: function (response, opts) {
        this.terminarWorkflow();
    },
    onFailureRegistrarEgreso: function () {
        Srp.gui.messageBox.Info({
            msg: I18n.mensajes.error.PRD002
        });
    },
    terminarWorkflow: function () {
        Srp.WorkflowManager.advanceTo({
            taskid: this.actuacion.taskid,
            transition: Srp.WorkflowManager.WORKFLOW.OAI.TERMINAR,
            scope: this,
            success: this.onSuccessTerminarWorkflow,
            failure: this.onFailureTerminarWorkflow
        });
    },
    onSuccessTerminarWorkflow: function (response, opts) {
        Srp.Canvas.goHome();
    },
    onFailureTerminarWorkflow: function () {
        Log4js.debug('Error en OAI > Workflow > terminar ');
    }
});
Ext.ns('Srp.gui');
Srp.gui.ContratanteTab = Ext.extend(Ext.Panel, {
    border: false,
    autoScroll: true,
    initComponent: function () {
        var config = {
            items: this.buildItems()
        };
        this.hasRowsModifieds = false;
        Ext.apply(this, Ext.apply(this.initialConfig, config));
        Srp.gui.ContratanteTab.superclass.initComponent.call(this);
    },
    buildItems: function () {
        var contratante = this.contratante;
        var contratanteCopia = this.contratanteCopia;
        var messageBox = {
            xtype: 'box',
            itemId: 'errorMessage',
            html: I18n.commons.contratanteNoAgregado + this.contratante,
            height: 20,
            cls: 'msg-error',
            hidden: 'true'
        };
        var contratanteGrid = new Srp.gui.ContratanteGrid({
            id: contratante + 'Grid',
            itemId: 'contratanteGrid',
            contratante: this.contratante,
            contratanteCopia: this.contratanteCopia
        });
        contratanteGrid.on('click', function () {
            var records = contratanteGrid.getSelectionModel().getSelections();
            if (records.length == 1) {
                var record = records[0];
                var selectedCalidadId = record.get('calidadId');
                var calidadFormPanel = contratanteFieldSet.getComponent('calidadFormPanel');
                var calidadComboBox = calidadFormPanel.getComponent('calidadComboBox');
                var data = {
                    'edicion': true
                };
                for (property in record.data) {
                    if (record.get(property) != null) {
                        data[property] = record.get(property);
                    }
                }
                calidadComboBox.fireEvent('select', {
                    externalCalidadId: selectedCalidadId,
                    data: data
                });
                calidadComboBox.setValue(selectedCalidadId);
                contratanteGrid.enableButtons();
            }
        });
        var contratanteGridPanel = new Ext.Panel({
            itemId: 'contratanteGridPanel',
            id: contratante + 'contratanteGridPanel',
            border: false,
            height: '100%',
            items: [messageBox, contratanteGrid]
        });
        var makeCredencial = function (containerItemId) {
            Log4js.debug('ContratanteTab.buildItems.makeCredencial()');
            var cred = '';
            var credPersonaNatural = false;
            Ext.select('.credencial', true, containerItemId).each(function (cmp) {
                var extCmp = Ext.getCmp(cmp.id);
                if (!extCmp.isXType('hidden')) {
                    cred += cmp.getValue() + ', ';
                }
            });
            Ext.select('.credencial-nombre', true, containerItemId).each(function (cmp) {
                var extCmp = Ext.getCmp(cmp.id);
                if (!extCmp.isXType('hidden')) {
                    cred += extCmp.getValue() + ' ';
                }
                credPersonaNatural = true;
            });
            if (credPersonaNatural) {
                cred = cred.substr(0, cred.length - 1);
            } else {
                cred = cred.substr(0, cred.length - 2);
            }
            return cred;
        };
        var cleanFields = function (combo, form) {
            combo.setValue('');
            if (form.getComponent('personaNatural')) {
                form.getComponent('personaNatural').destroy();
            }
            if (form.getComponent('personaJuridica')) {
                form.getComponent('personaJuridica').destroy();
            }
            if (form.getComponent('extranjero')) {
                form.getComponent('extranjero').destroy();
            }
        };
        var addButton = new Ext.Button({
            handler: function () {
                var calidadFormPanel = Ext.getCmp('calidad_fieldset_' + contratante).getComponent('calidadFormPanel');
                var acreedorField = Ext.getCmp('ingreso-wizard').getComponent('contratantesPanel').getComponent('tabPanel').getComponent('acreedorPanel').getComponent('calidadFieldSet').getComponent('calidadFormPanel').find('name', 'identificador')[0];
                var calidadComboBox = calidadFormPanel.getComponent('calidadComboBox');
                var selectedCalidad = calidadComboBox.getRawValue();
                var selectedCalidadId = calidadComboBox.getValue();
                var grid = Ext.getCmp(contratante + 'Tab').getComponent('contratanteGridPanel').getComponent('contratanteGrid');
                var gridStore = grid.getStore();
                var defaultData = {
                    removed: false
                };
                var cred = makeCredencial(calidadFormPanel.getId());
                var exists = false;
                var textfieldTarget = null;
                if (calidadFormPanel.getForm().isValid()) {
                    Log4js.debug(' -> Formulario es valido');
                    var errorMessage = I18n.commons.contratanteEnGrilla.replace('%contratante', contratante);
                    if (selectedCalidad == 'Persona Natural') {
                        var container = calidadFormPanel.getComponent('personaNatural');
                        var identificador = container.getComponent('leftColumn').getComponent('run').getValue();
                        defaultData['personaTipo'] = calidadComboBox.getValue();
                        defaultData['identificadorTipo'] = IDENTIFICADOR_TIPO_PERSONA_NATURAL;
                        defaultData['calidadId'] = calidadComboBox.getValue();
                        defaultData['credencial'] = cred;
                        defaultData['identificador'] = identificador;
                        defaultData['nombres'] = container.getComponent('leftColumn').getComponent('nombres').getValue();
                        defaultData['apellidoPaterno'] = container.getComponent('rightColumn').getComponent('apellidoPaterno').getValue();
                        defaultData['apellidoMaterno'] = container.getComponent('rightColumn').getComponent('apellidoMaterno').getValue();
                        var identificadorvalido = container.getComponent('leftColumn').getComponent('identificadorvalido').getValue();
                        if (identificadorvalido == '') {
                            identificadorvalido = CONTRATANTE_ESTADO_SPINNER;
                        }
                        defaultData['identificadorvalido'] = identificadorvalido;
                        exists = grid.isConstituyenteInGrid(CALIDAD_PERSONA_NATURAL, container.getComponent('leftColumn').getComponent('run').getValue());
                        textfieldTarget = container.getComponent('leftColumn').getComponent('run');
                    } else {
                        if (selectedCalidad == 'Persona Jurídica') {
                            var container = calidadFormPanel.getComponent('personaJuridica');
                            var identificador = container.getComponent('rut').getValue();
                            defaultData['personaTipo'] = calidadComboBox.getValue();
                            defaultData['identificadorTipo'] = IDENTIFICADOR_TIPO_PERSONA_JURIDICA;
                            defaultData['calidadId'] = calidadComboBox.getValue();
                            defaultData['credencial'] = cred;
                            defaultData['identificador'] = identificador;
                            defaultData['razonSocial'] = container.getComponent('razonSocial').getValue();
                            var identificadorvalido = CONTRATANTE_ESTADO_LOCAL_INVALIDO;
                            if (defaultData['razonSocial'].length > 0) {
                                identificadorvalido = CONTRATANTE_ESTADO_LOCAL_VALIDO;
                            }
                            defaultData['identificadorvalido'] = identificadorvalido;
                            exists = grid.isConstituyenteInGrid(CALIDAD_PERSONA_JURIDICA, container.getComponent('rut').getValue());
                            textfieldTarget = container.getComponent('rut');
                        } else {
                            if (selectedCalidad == 'Extranjero') {
                                var container = calidadFormPanel.getComponent('extranjero');
                                var identificador = container.getComponent('leftColumn').getComponent('numeroIdentificador').getValue();
                                defaultData['personaTipo'] = calidadComboBox.getValue();
                                defaultData['identificadorTipo'] = container.getComponent('leftColumn').getComponent('identificadorTipo').getValue();
                                defaultData['calidadId'] = calidadComboBox.getValue();
                                defaultData['credencial'] = cred;
                                defaultData['identificador'] = identificador;
                                defaultData['nombres'] = container.getComponent('rightColumn').getComponent('nombres').getValue();
                                defaultData['pais'] = container.getComponent('rightColumn').getComponent('pais').getValue();
                                var identificadorvalido = CONTRATANTE_ESTADO_LOCAL_INVALIDO;
                                if (defaultData['identificadorTipo'].length > 0 && defaultData['nombres'].length > 0) {
                                    identificadorvalido = CONTRATANTE_ESTADO_LOCAL_VALIDO;
                                }
                                defaultData['identificadorvalido'] = identificadorvalido;
                                exists = grid.isConstituyenteInGrid(CALIDAD_EXTRANJERA, container.getComponent('leftColumn').getComponent('numeroIdentificador').getValue(), defaultData['pais']);
                                textfieldTarget = container.getComponent('leftColumn').getComponent('numeroIdentificador');
                            }
                        }
                    }
                    if (exists) {
                        textfieldTarget.markInvalid(errorMessage);
                        if (textfieldTarget.calidadId == CALIDAD_EXTRANJERA) {
                            container.getComponent('rightColumn').getComponent('pais').markInvalid(errorMessage);
                        }
                    } else {
                        if (Ext.isDefined(textfieldTarget) && textfieldTarget != null) {
                            textfieldTarget.checkNewContratante = Srp.gui.ContratantesPanel.checkNewContratante;
                            var validacionCheckNewContratante = textfieldTarget.checkNewContratante();
                            if (!validacionCheckNewContratante) {
                                var rec = new gridStore.recordType(defaultData);
                                gridStore.insert(0, rec);
                                cleanFields(calidadComboBox, calidadFormPanel);
                                this.getComponent("contratanteGridPanel").getComponent('errorMessage').hide();
                                if (contratante == 'constituyente') {
                                    Ext.getCmp('ppu_grid').validatePPUs();
                                }
                            }
                        }
                    }
                }
            },
            text: I18n.common.button.agregar[contratante],
            iconCls: 'icon-button-agregar-contratante',
            scope: this
        });
        var contratanteFieldSet = new Srp.gui.CalidadFieldSet({
            id: 'calidad_fieldset_' + contratante,
            contratanteName: contratante,
            itemId: 'contratanteFieldSet',
            border: true,
            title: 'Nuevo ' + I18n.common.contratantes[contratante],
            validarUnicidadContratante: true
        });
        var contratantePanel = new Ext.Panel({
            id: contratante + 'Panel',
            itemId: 'contratantePanel',
            border: false,
            items: [contratanteFieldSet],
            labelWidth: 150,
            buttons: [addButton]
        });
        return [contratantePanel, contratanteGridPanel];
    },
    makeCredencial: function (calidadId, values) {
        var data = {};
        if (calidadId == CALIDAD_PERSONA_NATURAL) {
            data = [{
                fieldLabel: 'RUN',
                value: values['identificador'],
                cls: 'RUN'
            }, {
                fieldLabel: 'Nombres',
                value: values['nombres'],
                cls: 'NOMBRE'
            }, {
                fieldLabel: 'Apellido Paterno',
                value: values['apellidoPaterno'],
                cls: 'NOMBRE'
            }, {
                fieldLabel: 'Apellido Materno',
                value: values['apellidoMaterno'],
                cls: 'NOMBRE'
            }];
        } else if (calidadId == CALIDAD_PERSONA_JURIDICA) {
            data = [{
                fieldLabel: 'RUT',
                value: values['identificador']
            }, {
                fieldLabel: 'Raz&oacute;n Social',
                value: values['razonSocial']
            }];
        } else if (calidadId == CALIDAD_EXTRANJERA) {
            data = [{
                fieldLabel: 'Tipo Documento',
                value: Srp.CategoryManager.getCategory(Srp.CategoryManager.IDENTIFICADOR_TIPO_EXTRANJERO, values['identificadorTipo']).text
            }, {
                fieldLabel: 'Identificador',
                value: values['identificador']
            }, {
                fieldLabel: 'Pa&iacute;s',
                value: Srp.CategoryManager.getCategory(Srp.CategoryManager.PAIS, values['pais']).text
            }, {
                fieldLabel: 'Nombre completo',
                value: values['nombres']
            }];
        }
        var cred = '';
        var credPersonaNatural = false;
        for (var i = 0; i < data.length; i++) {
            if (Ext.isDefined(data[i].cls) && data[i].cls == 'NOMBRE') {
                cred += data[i].value + ' ';
                var credPersonaNatural = true;
            } else {
                cred += data[i].value + ', ';
            }
        }
        if (credPersonaNatural) {
            cred = cred.substr(0, cred.length - 1);
        } else {
            cred = cred.substr(0, cred.length - 2);
        }
        return cred;
    },
    getJSON: function () {
        var json = [];
        var i = 0;
        var dirty = false;
        var store = this.getComponent('contratanteGridPanel').getComponent('contratanteGrid').getProcessStore();
        store.each(function (r) {
            var calidadId = r.get('calidadId');
            var identificadorvalido = r.get('identificadorvalido');
            if (identificadorvalido == CONTRATANTE_ESTADO_SPINNER) {
                identificadorvalido = CONTRATANTE_ESTADO_DESCONOCIDO;
            }
            if (typeof (r.get('nodeid')) !== 'undefined' && r.get('nodeid').length > 0) {
                json[i] = {
                    nodeid: r.get('nodeid'),
                    identificador: r.get('identificador'),
                    personaTipo: r.get('personaTipo'),
                    identificadorTipo: r.get('identificadorTipo'),
                    removed: r.get('removed'),
                    identificadorvalido: identificadorvalido
                };
                if (r.get('removed') || r.dirty) {
                    dirty = true;
                }
            } else {
                json[i] = {
                    identificador: r.get('identificador'),
                    personaTipo: r.get('personaTipo'),
                    identificadorTipo: r.get('identificadorTipo'),
                    removed: r.get('removed'),
                    identificadorvalido: identificadorvalido
                };
                dirty = true;
            }
            if (calidadId == CALIDAD_PERSONA_NATURAL) {
                json[i].nombres = r.get('nombres');
                json[i].apellidoPaterno = r.get('apellidoPaterno');
                json[i].apellidoMaterno = r.get('apellidoMaterno');
            } else if (calidadId == CALIDAD_PERSONA_JURIDICA) {
                json[i].razonSocial = r.get('razonSocial');
            } else if (calidadId == CALIDAD_EXTRANJERA) {
                json[i].nombres = r.get('nombres');
                json[i].pais = r.get('pais');
            }
            json[i] = util.JSON.emptyToNull(json[i]);
            i++;
        });
        return {
            rows: json,
            dirty: dirty
        }
    },
    setJSON: function (contratantes) {
        var gridStore = this.getComponent('contratanteGridPanel').getComponent('contratanteGrid').getStore();
        for (var i = contratantes.length - 1; i >= 0; i--) {
            var contratante = contratantes[i];
            contratante.credencial = this.makeCredencial(contratante.personaTipo, contratante);
            contratante.calidadId = contratante.personaTipo;
            contratante.removed = false;
            gridStore.insert(0, new gridStore.recordType(contratante));
        }
    },
    isValid: function (validationType) {
        var isValid = true;
        var contratanteGrid = this.getComponent("contratanteGridPanel").getComponent("contratanteGrid");
        if (validationType == TIPO_VALIDACION_GRABAR) {} else {
            var JSON = this.getJSON();
            var contratantes = util.JSON.filterBy(JSON.rows, CONTRATANTE_REMOVED, false);
            if (contratantes.length < 1) {
                this.getComponent("contratanteGridPanel").getComponent('errorMessage').show();
                isValid = false;
            } else {
                this.getComponent("contratanteGridPanel").getComponent('errorMessage').hide();
                for (var i = 0; i < contratantes.length; ++i) {
                    var contratante = contratantes[i];
                    if (contratante.identificadorvalido != CONTRATANTE_ESTADO_VALIDO && contratante.identificadorvalido != CONTRATANTE_ESTADO_LOCAL_VALIDO) {
                        isValid = false;
                        break;
                    }
                }
            }
        }
        return isValid;
    }
});
Ext.ns('Srp.gui.oai');
Srp.gui.oai.AlzamientoWizard = Ext.extend(Ext.Panel, {
    id: 'alzamiento-wizard',
    activeItem: 0,
    layout: 'card',
    plain: true,
    region: 'center',
    height: 600,
    inUPEdition: false,
    indexCard: 0,
    indexPanel: 1,
    editOnly: false,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildBottomBar()
        });
        Ext.getCmp('card-next').disable();
        Srp.gui.notaria.AlzamientoWizard.superclass.initComponent.call(this);
        this.registrarEventos();
        var title = I18n.commons.alzamientoContratoPrendas;
        if (this.actuacion) {
            this.actuacionPrevia = this.actuacion;
            this.setJSON(this.actuacion);
            if (this.actuacion.inUPEdition) {
                title = title + " (Corrección: " + this.actuacion.numeroRepertorio + "-" + this.actuacion.agnoRepertorio + ")";
            }
        }
        Srp.FrontController.fireEvent('All.onChangeContent', title);
    },
    getIndexCard: function () {
        var currentIndexCard = this.indexCard;
        this.indexCard = this.indexCard + 1;
        return currentIndexCard;
    },
    getIndexPanel: function () {
        var currentIndexPanel = this.indexPanel;
        this.indexPanel = this.indexPanel + 1;
        return currentIndexPanel;
    },
    buildItems: function () {
        var paneles = [];
        paneles.push(this.buildAntecedentesPanel());
        paneles.push(this.buildRequirentePanel());
        if (this.editOnly) {
            paneles.push(this.buildArchivosPanel());
        }
        paneles.push(this.buildResumenPanel());
        return paneles;
    },
    buildAntecedentesPanel: function () {
        var filtrarInscripcionVigente = Ext.isDefined(this.actuacion) ? !this.actuacion.inUPEdition : true;
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'contratoSelectorInscripcion',
            itemId: 'contratoBuscador',
            filtrarInscripcionVigente: filtrarInscripcionVigente
        }, {
            xtype: 'contratoDocumento',
            title: 'Tipo Contrato',
            itemId: 'contratoDocumento',
            hidden: true,
            showProhibicion: false
        }, {
            xtype: 'contratoNotariaPanel',
            title: I18n.commons.informacionNotaria,
            itemId: 'contratoNotariaPanel',
            hidden: true
        }, {
            xtype: 'fieldset',
            title: 'Anotaciones al RVM',
            id: 'anotacionesRVMFieldset',
            hidden: true,
            items: [{
                xtype: 'ppuCambioAcreedorGrid',
                id: 'ppuAlzamientoGrid',
                itemId: 'ppuAlzamientoGrid',
                bbar: [I18n.commons.alzamientoGrillaMensaje]
            }]
        }];
        return {
            xtype: 'panel',
            id: 'card-' + this.getIndexCard(),
            padding: 5,
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            title: 'Antecedentes',
            items: items,
            width: '400',
            autoScroll: true,
            itemId: 'antecedentesPanel',
            border: false
        };
    },
    buildRequirentePanel: function () {
        return {
            xtype: 'requirentePanel',
            itemId: 'requirentePanel',
            id: 'card-' + this.getIndexCard(),
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            title: 'Requirente',
            autoScroll: true,
            padding: 10,
            rowHeight: 1
        };
    },
    buildArchivosPanel: function () {
        var adjuntosPanel = new Srp.gui.AdjuntosPanel({
            id: 'card-' + this.getIndexCard(),
            border: false,
            padding: 5,
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            autoScroll: true,
            itemId: 'adjuntosPanel'
        });
        return adjuntosPanel;
    },
    buildResumenPanel: function () {
        return {
            xtype: 'resumenActuacion',
            itemId: 'resumenActuacion',
            id: 'card-' + this.getIndexCard(),
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            title: 'Resumen',
            autoScroll: true,
            padding: 10,
            inWizard: true
        };
    },
    buildBottomBar: function () {
        var bbar;
        if (this.editOnly) {
            bbar = new Srp.gui.up.WizardToolbar({
                wizard: this,
                steps: this.getIndexCard()
            });
        } else {
            bbar = new Srp.gui.oai.WizardToolbar({
                wizard: this,
                steps: this.getIndexCard()
            });
        }
        return bbar;
    },
    getJSON: function (isResumen) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        var actuacion = {
            tipoActuacion: ACTUACION_ALZAMIENTO,
            tramite: TIPO_ACTUACION_ALZAMIENTO
        };
        if (this.actuacion) {
            actuacion.nodeid = this.actuacion.nodeid;
            actuacion.taskid = this.actuacion.taskid;
            actuacion.type = this.actuacion.type;
            actuacion.tramite = this.actuacion.tramite;
            actuacion.pagado = this.actuacion.pagado;
        }
        if (!Ext.isDefined(this.actuacion) || isResumen) {
            util.JSON.addItems(actuacion, {
                contratoInscripcion: antecedentesPanel.getComponent('contratoBuscador').getJSON()
            });
            util.JSON.addItems(actuacion, {
                nodeidref: actuacion.contratoInscripcion.nodeid
            });
        }
        var vehiculos = {};
        var ppuList = antecedentesPanel.getComponent('anotacionesRVMFieldset').getComponent('ppuAlzamientoGrid').getJSON();
        if (!Ext.isEmpty(ppuList)) {
            vehiculos.vehiculos = ppuList;
        }
        util.JSON.addItems(actuacion, vehiculos);
        util.JSON.addItems(actuacion, antecedentesPanel.getComponent('contratoDocumento').getJSON());
        util.JSON.addItems(actuacion, antecedentesPanel.getComponent('contratoNotariaPanel').getJSON());
        if (this.editOnly && Srp.MontosManager.hasMontos(this.actuacionPrevia)) {
            Srp.MontosManager.recuperarMontos(actuacion, this.actuacionPrevia);
        } else {
            Srp.MontosManager.populateMontos(actuacion, actuacion.vehiculos);
            Srp.MontosManager.setMontosActuacion(actuacion);
        }
        if (isResumen) {
            var inscripcion = antecedentesPanel.getComponent('contratoBuscador').getActuacion();
            util.JSON.addItems(actuacion, {
                inscripcion: inscripcion
            });
        }
        util.JSON.addItems(actuacion, this.getComponent('requirentePanel').getJSON());
        if (this.editOnly) {
            util.JSON.addItems(actuacion, this.getComponent('adjuntosPanel').getJSON(isResumen));
        }
        return actuacion;
    },
    setJSON: function (actuacion) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoBuscador').setJSON(actuacion);
        antecedentesPanel.getComponent('contratoDocumento').setJSON(actuacion);
        antecedentesPanel.getComponent('contratoNotariaPanel').setJSON(actuacion);
        antecedentesPanel.getComponent('anotacionesRVMFieldset').getComponent('ppuAlzamientoGrid').setJSON(actuacion.vehiculos);
        this.getComponent('requirentePanel').setJSON(actuacion);
        if (this.editOnly) {
            this.getComponent('adjuntosPanel').setJSON(actuacion);
        }
    },
    getActuacionPrevia: function () {
        return this.actuacionPrevia;
    },
    isValid: function (typeValidation) {
        var erroresAntecedentesList = [];
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        var isValidContratoBuscador = antecedentesPanel.getComponent('contratoBuscador').isValid();
        if (!isValidContratoBuscador) {
            erroresAntecedentesList.push('Contrato Inscripción');
        }
        var isValidContratoDocumento = antecedentesPanel.getComponent('contratoDocumento').isValid(typeValidation);
        if (!isValidContratoDocumento) {
            erroresAntecedentesList.push('Tipo Contrato');
        }
        var isValidContratoNotaria = antecedentesPanel.getComponent('contratoNotariaPanel').isValid(typeValidation);
        if (!isValidContratoNotaria) {
            erroresAntecedentesList.push('Información Notaria');
        }
        var erroresAntecedentes = {
            parent: 'Antecedentes',
            children: erroresAntecedentesList
        };
        Srp.MessagesManager.add(erroresAntecedentes);
        var requirenteValidation = this.getComponent('requirentePanel').isValid(typeValidation);
        var isValidAdjuntosPanel = true;
        if (this.editOnly) {
            isValidAdjuntosPanel = this.getComponent('adjuntosPanel').isValid(typeValidation);
            var erroresAdjuntosList = [];
            if (!isValidAdjuntosPanel) {
                erroresAdjuntosList.push('Contrato');
            }
            var erroresAdjuntos = {
                parent: 'Adjuntos',
                children: erroresAdjuntosList
            };
            Srp.MessagesManager.add(erroresAdjuntos);
        }
        return isValidContratoBuscador && isValidContratoDocumento && isValidContratoNotaria && requirenteValidation && isValidAdjuntosPanel;
    },
    registrarEventos: function () {
        var cargarActuacionCmd = new Srp.command.CargarActuacionCmd();
        cargarActuacionCmd.setParameter('wizard', this);
        var habilitarWizardCmd = new Srp.command.HabilitarModificacionWizardCmd();
        habilitarWizardCmd.setParameter('wizard', this);
        var deshabilitarWizardCmd = new Srp.command.DeshabilitarModificacionWizardCmd();
        deshabilitarWizardCmd.setParameter('wizard', this);
        var saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('urlWs', 'WS_ACTUACION_ALZAMIENTO_SAVE');
        saveActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd.setParameter('saveForm', this.getComponent('antecedentesPanel').getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'ResumenActuacion.onShowResumen',
            command: cargarActuacionCmd
        }, {
            name: 'onSetActuacion',
            command: habilitarWizardCmd
        }, {
            name: 'onUnSetActuacion',
            command: deshabilitarWizardCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    enablePanels: function (showRvmPanel) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoDocumento').show();
        antecedentesPanel.getComponent('contratoDocumento').doLayout();
        antecedentesPanel.getComponent('contratoNotariaPanel').show();
        antecedentesPanel.getComponent('contratoNotariaPanel').doLayout();
        if (showRvmPanel == true) {
            antecedentesPanel.getComponent('anotacionesRVMFieldset').show();
            antecedentesPanel.getComponent('anotacionesRVMFieldset').doLayout();
        } else {
            antecedentesPanel.getComponent('anotacionesRVMFieldset').hide();
        }
    },
    hidePanels: function () {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoDocumento').hide();
        antecedentesPanel.getComponent('contratoNotariaPanel').hide();
        antecedentesPanel.getComponent('anotacionesRVMFieldset').hide();
    }
});
Ext.ns('Srp.gui.oai');
Srp.gui.oai.ModificacionWizard = Ext.extend(Ext.Panel, {
    id: 'modificacion-actuacion-wizard',
    activeItem: 0,
    layout: 'card',
    plain: true,
    region: 'center',
    height: 600,
    indexCard: 0,
    indexPanel: 1,
    editOnly: false,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildBottomBar()
        });
        Ext.getCmp('card-next').disable();
        Srp.gui.oai.ModificacionWizard.superclass.initComponent.call(this);
        this.registrarEventos();
        var title = I18n.commons.modificacionContratoPrendas;
        if (this.actuacion) {
            this.actuacionPrevia = this.actuacion;
            this.setJSON(this.actuacion);
            if (this.actuacion.inUPEdition) {
                title = title + title + " (Corrección: " + this.actuacion.numeroRepertorio + "-" + this.actuacion.agnoRepertorio + ")";
            }
        }
        Srp.FrontController.fireEvent('All.onChangeContent', title);
    },
    getIndexCard: function () {
        var currentIndexCard = this.indexCard;
        this.indexCard = this.indexCard + 1;
        return currentIndexCard;
    },
    getIndexPanel: function () {
        var currentIndexPanel = this.indexPanel;
        this.indexPanel = this.indexPanel + 1;
        return currentIndexPanel;
    },
    buildItems: function () {
        var paneles = [];
        paneles.push(this.buildAntecedentesPanel());
        paneles.push(this.buildRequirentePanel());
        if (this.editOnly) {
            paneles.push(this.buildArchivosPanel());
        }
        paneles.push(this.buildResumenPanel());
        return paneles;
    },
    buildAntecedentesPanel: function () {
        var filtrarInscripcionVigente = Ext.isDefined(this.actuacion) ? !this.actuacion.inUPEdition : true;
        var items = [{
            xtype: 'saveFormPanel',
            itemId: 'saveFormPanel'
        }, {
            xtype: 'contratoSelectorInscripcion',
            itemId: 'contratoBuscador',
            filtrarInscripcionVigente: filtrarInscripcionVigente
        }, {
            xtype: 'contratoDocumento',
            title: 'Tipo Contrato',
            itemId: 'contratoDocumento',
            hidden: true,
            showProhibicion: false
        }, {
            xtype: 'contratoNotariaPanel',
            title: I18n.commons.informacionNotaria,
            itemId: 'contratoNotariaPanel',
            hidden: true
        }, {
            xtype: 'contratoModificacion',
            itemId: 'contratoModificacion',
            hidden: true
        }];
        return {
            xtype: 'panel',
            id: 'card-' + this.getIndexCard(),
            padding: 5,
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            title: I18n.notaria.modificacion.wizard.title.antecedentes,
            items: items,
            itemId: 'antecedentesPanel',
            autoScroll: true,
            border: false
        };
    },
    buildRequirentePanel: function () {
        return {
            xtype: 'requirentePanel',
            itemId: 'requirentePanel',
            id: 'card-' + this.getIndexCard(),
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            title: 'Requirente',
            autoScroll: true,
            padding: 10,
            rowHeight: 1
        };
    },
    buildArchivosPanel: function () {
        var adjuntosPanel = new Srp.gui.AdjuntosPanel({
            id: 'card-' + this.getIndexCard(),
            border: false,
            padding: 5,
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            autoScroll: true,
            itemId: 'adjuntosPanel'
        });
        return adjuntosPanel;
    },
    buildResumenPanel: function () {
        return {
            xtype: 'resumenActuacion',
            itemId: 'resumenActuacion',
            id: 'card-' + this.getIndexCard(),
            response: actuacionCompleta,
            iconCls: 'icon-wizard-step-' + this.getIndexPanel(),
            title: I18n.commons.resumen,
            autoScroll: true,
            padding: 10,
            inWizard: true
        };
    },
    buildBottomBar: function () {
        var bbar;
        if (this.editOnly) {
            bbar = new Srp.gui.up.WizardToolbar({
                wizard: this,
                steps: this.getIndexCard()
            });
        } else {
            bbar = new Srp.gui.oai.WizardToolbar({
                wizard: this,
                steps: this.getIndexCard()
            });
        }
        return bbar;
    },
    getJSON: function (isResumen) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        var actuacion = {
            tipoActuacion: ACTUACION_MODIFICACION,
            tramite: TIPO_ACTUACION_MODIFICACION
        };
        if (this.actuacion) {
            actuacion.nodeid = this.actuacion.nodeid;
            actuacion.taskid = this.actuacion.taskid;
            actuacion.type = this.actuacion.type;
            actuacion.tramite = this.actuacion.tramite;
            actuacion.pagado = this.actuacion.pagado;
        }
        if (!Ext.isDefined(this.actuacion) || isResumen) {
            util.JSON.addItems(actuacion, {
                contratoInscripcion: antecedentesPanel.getComponent('contratoBuscador').getJSON()
            });
            util.JSON.addItems(actuacion, {
                nodeidref: actuacion.contratoInscripcion.nodeid
            });
        }
        util.JSON.addItems(actuacion, antecedentesPanel.getComponent('contratoDocumento').getJSON());
        util.JSON.addItems(actuacion, antecedentesPanel.getComponent('contratoNotariaPanel').getJSON());
        util.JSON.addItems(actuacion, antecedentesPanel.getComponent('contratoModificacion').getJSON());
        if (this.editOnly) {
            util.JSON.addItems(actuacion, this.getComponent('adjuntosPanel').getJSON(isResumen));
        }
        if (this.editOnly && Srp.MontosManager.hasMontos(this.actuacionPrevia)) {
            Srp.MontosManager.recuperarMontos(actuacion, this.actuacionPrevia);
        } else {
            Srp.MontosManager.populateMontos(actuacion, actuacion.vehiculos);
            Srp.MontosManager.setMontosActuacion(actuacion);
        }
        if (isResumen) {
            var inscripcion = this.getComponent('antecedentesPanel').getComponent('contratoBuscador').getActuacion();
            util.JSON.addItems(actuacion, {
                inscripcion: inscripcion
            });
        }
        util.JSON.addItems(actuacion, this.getComponent('requirentePanel').getJSON());
        return actuacion;
    },
    setJSON: function (actuacion) {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoBuscador').setJSON(actuacion);
        antecedentesPanel.getComponent('contratoDocumento').setJSON(actuacion);
        antecedentesPanel.getComponent('contratoNotariaPanel').setJSON(actuacion);
        antecedentesPanel.getComponent('contratoModificacion').setJSON(actuacion);
        this.getComponent('requirentePanel').setJSON(actuacion);
        if (this.editOnly) {
            this.getComponent('adjuntosPanel').setJSON(actuacion);
        }
    },
    getActuacionPrevia: function () {
        return this.actuacionPrevia;
    },
    isValid: function (typeValidation) {
        var erroresAntecedentesList = [];
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        var isValidContratoBuscador = antecedentesPanel.getComponent('contratoBuscador').isValid();
        if (!isValidContratoBuscador) {
            erroresAntecedentesList.push('Contrato Inscripción');
        }
        var isValidContratoDocumento = antecedentesPanel.getComponent('contratoDocumento').isValid(typeValidation);
        if (!isValidContratoDocumento) {
            erroresAntecedentesList.push('Tipo Contrato');
        }
        var isValidContratoModificacion = antecedentesPanel.getComponent('contratoModificacion').isValid(typeValidation);
        if (!isValidContratoModificacion) {
            erroresAntecedentesList.push('Modificación');
        }
        var isValidContratoNotaria = antecedentesPanel.getComponent('contratoNotariaPanel').isValid(typeValidation);
        if (!isValidContratoNotaria) {
            erroresAntecedentesList.push('Información Notaria');
        }
        var erroresAntecedentes = {
            parent: 'Antecedentes',
            children: erroresAntecedentesList
        };
        Srp.MessagesManager.add(erroresAntecedentes);
        var requirenteValidation = this.getComponent('requirentePanel').isValid(typeValidation);
        var isValidAdjuntosPanel = true;
        if (this.editOnly) {
            isValidAdjuntosPanel = this.getComponent('adjuntosPanel').isValid(typeValidation);
            var erroresAdjuntosList = [];
            if (!isValidAdjuntosPanel) {
                erroresAdjuntosList.push('Contrato');
            }
            var erroresAdjuntos = {
                parent: 'Adjuntos',
                children: erroresAdjuntosList
            };
            Srp.MessagesManager.add(erroresAdjuntos);
        }
        return isValidContratoBuscador && isValidContratoDocumento && isValidContratoModificacion && isValidContratoNotaria && requirenteValidation && isValidAdjuntosPanel;
    },
    registrarEventos: function () {
        var cargarActuacionCmd = new Srp.command.CargarActuacionCmd();
        cargarActuacionCmd.setParameter('wizard', this);
        var habilitarWizardCmd = new Srp.command.HabilitarModificacionWizardCmd();
        habilitarWizardCmd.setParameter('wizard', this);
        var deshabilitarWizardCmd = new Srp.command.DeshabilitarModificacionWizardCmd();
        deshabilitarWizardCmd.setParameter('wizard', this);
        var saveActuacionCmd = new Srp.command.SaveActuacionCmd();
        saveActuacionCmd.setParameter('urlWs', 'WS_ACTUACION_MODIFICACION_SAVE');
        saveActuacionCmd.setParameter('wizard', this);
        saveActuacionCmd.setParameter('saveForm', this.getComponent('antecedentesPanel').getComponent('saveFormPanel'));
        this.eventos = [{
            name: 'ResumenActuacion.onShowResumen',
            command: cargarActuacionCmd
        }, {
            name: 'onSetActuacion',
            command: habilitarWizardCmd
        }, {
            name: 'onUnSetActuacion',
            command: deshabilitarWizardCmd
        }, {
            name: 'WizardToolbar.onSubmit',
            command: saveActuacionCmd
        }];
        Srp.FrontController.registerEvents(this.eventos);
    },
    beforeDestroy: function () {
        Srp.FrontController.unregisterEvents(this.eventos);
    },
    enablePanels: function () {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoDocumento').show();
        antecedentesPanel.getComponent('contratoDocumento').doLayout();
        antecedentesPanel.getComponent('contratoNotariaPanel').show();
        antecedentesPanel.getComponent('contratoNotariaPanel').doLayout();
        antecedentesPanel.getComponent('contratoModificacion').show();
        antecedentesPanel.getComponent('contratoModificacion').doLayout();
    },
    hidePanels: function () {
        var antecedentesPanel = this.getComponent('antecedentesPanel');
        antecedentesPanel.getComponent('contratoDocumento').hide();
        antecedentesPanel.getComponent('contratoNotariaPanel').hide();
        antecedentesPanel.getComponent('contratoModificacion').hide();
    }
});
Ext.ns('Srp.gui');
Srp.gui.AdminTaskAbstractPanel = Ext.extend(Ext.Panel, {
    autoScroll: true,
    layout: 'border',
    border: false,
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems(),
            bbar: this.buildButtons()
        });
        Srp.gui.AdminTaskAbstractPanel.superclass.initComponent.call(this);
        this.registrarEventos();
    },
    buildItems: function () {
        var items = [{
            columnWidth: 0.7,
            layout: 'form',
            labelWidth: 140,
            border: false,
            items: [{
                id: 'numeroRepertorioPrendas',
                itemId: 'numeroRepertorioPrendas',
                xtype: 'numeroRepertorioPrendasfield',
                name: 'numeroRepertorio',
                fieldLabel: I18n.busqueda.repertorioPrenda,
                allowBlank: false
            }]
        }, {
            columnWidth: 0.3,
            layout: 'form',
            labelWidth: 40,
            border: false,
            items: [{
                id: 'agnoRepertorioPrendas',
                xtype: 'numberfield',
                maxLength: 4,
                fieldLabel: I18n.commons.agno,
                name: 'agnoRepertorio',
                vtype: 'agno',
                width: 50,
                allowBlank: false
            }]
        }];
        this.searchFieldSet = new Ext.form.FieldSet({
            items: items,
            layout: 'column',
            itemId: 'searchFieldSet',
            title: 'B&uacute;squeda de Actuación',
            padding: 0
        });
        return [{
            region: 'center',
            padding: 5,
            autoScroll: true,
            items: this.searchFieldSet,
            xtype: 'form',
            itemId: 'searchForm'
        }];
    },
    buscarActuacion: function () {
        this.loadMask(I18n.mensajes.buscandoActuacion);
        var searchForm = this.getComponent('searchForm').getForm();
        if (searchForm.isValid()) {
            var nRepertorio = Ext.getCmp('numeroRepertorioPrendas').getValue();
            var agno = Ext.getCmp('agnoRepertorioPrendas').getValue();
            this.nRepertorio = nRepertorio;
            this.agno = agno;
            if (Ext.isNumber(nRepertorio) && Ext.isNumber(agno)) {
                Srp.FrontController.fireEvent('onDatosIngresados', {
                    nRepertorio: nRepertorio,
                    agno: agno,
                    buscarEnRVM: false
                });
            }
        } else {
            this.removeMask();
        }
    },
    onCancelar: function () {
        Srp.Canvas.goHome();
    },
    loadMask: function (msg) {
        var el = this.getEl();
        el.mask(msg, "x-mask-loading");
    },
    removeMask: function () {
        var el = this.getEl();
        el.unmask();
    }
});
Ext.ns('Srp.gui');
Srp.gui.AdminTaskAceptarActuacionRechazadaPanel = Ext.extend(Srp.gui.AdminTaskAbstractPanel, {
    autoScroll: true,
    layout: 'border',
    border: false,
    initComponent: function () {
        Srp.gui.AdminTaskAceptarActuacionRechazadaPanel.superclass.initComponent.call(this);
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.aceptarActuacionRechazada);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.aceptar,
            scope: this,
            handler: this.onAceptarActuacion,
            iconCls: 'icon-button-aprobar'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onAceptarActuacion: function () {
        this.nRepertorio = Ext.getCmp('numeroRepertorioPrendas').getValue();
        this.agno = Ext.getCmp('agnoRepertorioPrendas').getValue();
        return this.buscarActuacion();
    },
    processActuacion: function (actuacion) {
        if (!Ext.isDefined(actuacion.nodeid)) {
            this.removeMask();
            Ext.getCmp('numeroRepertorioPrendas').markInvalid(I18n.mensajes.error.actuacionNoExiste);
            Ext.getCmp('agnoRepertorioPrendas').markInvalid(I18n.mensajes.error.actuacionNoExiste);
            return;
        }
        if (actuacion.numeroRepertorio == this.nRepertorio && actuacion.agnoRepertorio == this.agno) {
            this.validarActuacion(actuacion);
        } else {
            this.validarInscripcion(actuacion);
        }
    },
    validarActuacion: function (actuacion) {
        this.actuacion = actuacion;
        this.removeMask();
        if (actuacion.estado == TIPO_ESTADO_ACTUACION_RECHAZADO) {
            if (actuacion.tipoActuacion == TIPO_ACTUACION_INSCRIPCION) {
                this.validarSolicitudesPendientes(actuacion);
            } else {
                this.obtenerInscripcion(actuacion);
            }
        } else {
            Ext.getCmp('numeroRepertorioPrendas').markInvalid(I18n.mensajes.error.actacionNoRechazada);
            Ext.getCmp('agnoRepertorioPrendas').markInvalid(I18n.mensajes.error.actacionNoRechazada);
        }
    },
    obtenerInscripcion: function (actuacion) {
        this.loadMask(I18n.mensajes.validandoInscripcion);
        Srp.FrontController.fireEvent('onDatosIngresados', {
            nodeid: actuacion.contratoInscripcion.nodeId,
            buscarEnRVM: false
        });
    },
    validarInscripcion: function (actuacion) {
        this.removeMask();
        if (actuacion.estado == TIPO_ESTADO_ACTUACION_VIGENTE) {
            this.validarSolicitudesPendientes(actuacion);
        } else {
            var mensaje = I18n.mensajes.error.inscripcionNoVigente.replace('%estado', actuacion.estado);
            Ext.getCmp('numeroRepertorioPrendas').markInvalid(mensaje);
            Ext.getCmp('agnoRepertorioPrendas').markInvalid(mensaje);
        }
    },
    validarSolicitudesPendientes: function (actuacion) {
        this.loadMask(I18n.mensajes.validandoSolicitudesPendientes);
        Srp.FrontController.fireEvent('onLoadSolicitudPendiente', actuacion);
    },
    processSolicitudesPendientes: function (response) {
        this.removeMask();
        if (!Ext.isDefined(response.result) || eval(response.result)) {
            Ext.getCmp('numeroRepertorioPrendas').markInvalid(this.getMessageSolicitudPendiente(response.solicitud));
            Ext.getCmp('agnoRepertorioPrendas').markInvalid(this.getMessageSolicitudPendiente(response.solicitud));
        } else {
            this.confirmAceptarActuacion();
        }
    },
    getMessageSolicitudPendiente: function (solicitud) {
        var message = I18n.mensajes.error.actuacionSolicitudPendiente;
        for (property in solicitud) {
            if (Ext.isDefined(solicitud[property])) {
                message = message.replace('{' + property + '}', solicitud[property]);
            }
        }
        return message;
    },
    confirmAceptarActuacion: function () {
        var msg = I18n.mensajes.confirm.aceptarActuacionRechazada.replace('%repertorio', this.actuacion.numeroRepertorio + '-' + this.actuacion.agnoRepertorio);
        Srp.gui.messageBox.YesNo({
            msg: msg,
            fn: this.aceptarActuacionRechazada,
            scope: this
        });
    },
    aceptarActuacionRechazada: function (id) {
        if (id === 'yes') {
            this.loadMask(I18n.mensajes.aceptandoActuacion);
            Srp.FrontController.fireEvent('onAceptarActuacion', {
                numero: this.nRepertorio,
                agno: this.agno,
                onSuccess: 'onSuccessActuacion',
                onFailure: 'onFailureActuacion'
            });
        }
    },
    onSuccessActuacion: function () {
        this.removeMask();
        Srp.gui.messageBox.Info({
            msg: I18n.mensajes.ok.actuacionRechazadaAceptadaExitosamente
        });
        Srp.Canvas.goHome();
    },
    onFailureActuacion: function () {
        this.removeMask();
        Srp.gui.messageBox.Error({
            msg: I18n.mensajes.error.aceptarActuacionRechazada
        });
        Srp.Canvas.goHome();
    },
    registrarEventos: function () {
        var buscarActuacionCmd = new Srp.command.BuscarActuacionCmd('ACEPTAR_ACTUACION_PANEL');
        var recuperarActuacionCmd = new Srp.command.RecuperarActuacionCmd('ACEPTAR_ACTUACION_PANEL');
        recuperarActuacionCmd.setParameter('obj', this);
        var iniciarWorkflowAceptacionCmd = new Srp.command.IniciarWorkflowAceptacionCmd();
        iniciarWorkflowAceptacionCmd.setParameter('obj', this);
        var ValidarSolicitudesPendientesCmd = new Srp.command.ValidarSolicitudesPendientesCmd('CONTRATO_BUSCADOR_PANEL');
        ValidarSolicitudesPendientesCmd.setParameter('obj', this);
        ValidarSolicitudesPendientesCmd.setParameter('callBack', 'processSolicitudesPendientes');
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onDatosIngresados',
            command: buscarActuacionCmd
        }, {
            name: 'onLoadActuacion',
            command: recuperarActuacionCmd
        }, {
            name: 'onAceptarActuacion',
            command: iniciarWorkflowAceptacionCmd
        }, {
            name: 'onLoadSolicitudPendiente',
            command: ValidarSolicitudesPendientesCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.ns('Srp.gui');
Srp.gui.AdminTaskRechazarActuacionVigentePanel = Ext.extend(Srp.gui.AdminTaskAbstractPanel, {
    autoScroll: true,
    layout: 'border',
    border: false,
    initComponent: function () {
        Srp.gui.AdminTaskRechazarActuacionVigentePanel.superclass.initComponent.call(this);
        Srp.FrontController.fireEvent('All.onChangeContent', I18n.commons.rechazarActuacionVigente);
    },
    buildButtons: function () {
        return [{
            text: I18n.commons.rechazar,
            scope: this,
            handler: this.onRechazarActuacion,
            iconCls: 'icon-button-rechazar'
        }, {
            xtype: 'tbfill'
        }, {
            text: I18n.unidadPrendas.button.cancelar,
            scope: this,
            handler: this.onCancelar,
            iconCls: 'icon-cancel'
        }];
    },
    onRechazarActuacion: function () {
        return this.buscarActuacion();
    },
    processActuacion: function (actuacion) {
        this.actuacion = actuacion;
        this.removeMask();
        if (actuacion.estado == TIPO_ESTADO_ACTUACION_VIGENTE) {
            var msg = I18n.mensajes.confirm.rechazarActuacionVigente.replace('%repertorio', this.actuacion.numeroRepertorio + '-' + this.actuacion.agnoRepertorio);
            Srp.gui.messageBox.YesNo({
                msg: msg,
                fn: this.rechazarActuacionVigente,
                scope: this
            });
        } else {
            Ext.getCmp('numeroRepertorioPrendas').markInvalid(I18n.mensajes.error.actacionNoVigente);
            Ext.getCmp('agnoRepertorioPrendas').markInvalid(I18n.mensajes.error.actacionNoVigente);
        }
    },
    rechazarActuacionVigente: function (id) {
        if (id === 'yes') {
            this.loadMask(I18n.mensajes.inciandoWorkflowRechazo);
            Srp.FrontController.fireEvent('onRechazandoActuacion', {
                numero: this.nRepertorio,
                agno: this.agno,
                onSuccess: 'onSuccessActuacion',
                onFailure: 'onFailureActuacion'
            });
        }
    },
    onSuccessActuacion: function () {
        this.removeMask();
        Srp.gui.messageBox.Info({
            msg: I18n.mensajes.ok.inicioWorkflowRechazo
        });
        Srp.Canvas.goHome();
    },
    onFailureActuacion: function () {
        this.removeMask();
        Srp.gui.messageBox.Error({
            msg: I18n.mensajes.error.inicioWorkflowRechazo
        });
        Srp.Canvas.goHome();
    },
    registrarEventos: function () {
        var buscarActuacionCmd = new Srp.command.BuscarActuacionCmd('RECHAZAR_ACTUACION_PANEL');
        var recuperarActuacionCmd = new Srp.command.RecuperarActuacionCmd('RECHAZAR_ACTUACION_PANEL');
        recuperarActuacionCmd.setParameter('obj', this);
        var iniciarWorkflowRechazoCmd = new Srp.command.IniciarWorkflowRechazoCmd();
        iniciarWorkflowRechazoCmd.setParameter('obj', this);
        var removerEventos = new Srp.command.RemoverEventosCmd();
        removerEventos.setParameter('obj', this);
        this.eventos = [{
            name: 'onDatosIngresados',
            command: buscarActuacionCmd
        }, {
            name: 'onLoadActuacion',
            command: recuperarActuacionCmd
        }, {
            name: 'onRechazandoActuacion',
            command: iniciarWorkflowRechazoCmd
        }, {
            name: 'Menu.onUpdateContent',
            command: removerEventos
        }];
        Srp.FrontController.registerEvents(this.eventos);
    }
});
Ext.BLANK_IMAGE_URL = 'lib/ext/resources/images/default/s.gif';
Ext.ns('Srp');
Srp.Canvas = (function () {
    var header;
    var footer;
    var center;
    var west;
    var content;
    var infoBox;
    var helpWin;
    var contactWin;
    buildHeader = function () {
        return {
            region: 'north',
            xtype: 'panel',
            height: 65,
            contentEl: 'header',
            border: true
        };
    };
    buildFooter = function () {
        return {
            region: 'south',
            xtype: 'panel',
            contentEl: 'footer',
            border: true
        };
    };
    buildContent = function () {
        return new Ext.Panel({
            id: 'main-content',
            border: false,
            region: 'center',
            layout: 'fit'
        });
    };
    buildInfoBox = function () {
        var org = model.user.Usuario.getOrganization();
        var infoBox = new Srp.gui.InfoPanel({
            id: 'info-box',
            region: 'north',
            section: I18n.commons.listadoTareas,
            user: model.user.Usuario.getName(),
            username: model.user.Usuario.getUsername(),
            ouType: org.tipo,
            ouName: org.nombre
        });
        return infoBox;
    };
    buildCenter = function () {
        infoBox = buildInfoBox();
        content = buildContent();
        return new Ext.Panel({
            border: false,
            region: 'center',
            margins: '0 5 0 0',
            layout: 'border',
            items: [infoBox, content]
        });
    };
    buildWest = function () {
        return new Ext.Panel({
            region: 'west',
            width: 160,
            split: true,
            collapsible: true,
            collapseMode: 'mini',
            animCollapse: false,
            border: false,
            margins: '5 5 5 5',
            header: false,
            baseCls: 'x-plain',
            id: 'sidebar'
        });
    };
    buildMainMenu = function () {
        var help = Ext.get("help");
        help.on({
            'click': {
                fn: function () {}
            }
        });
        var contact = Ext.get("contact");
        contact.on({
            'click': {
                fn: function () {
                    contactWin = new Srp.gui.ContactWindow();
                    contactWin.show();
                }
            }
        });
        var logOut = Ext.get("logout");
        logOut.on({
            'click': {
                fn: function () {
                    Srp.gui.messageBox.YesNo({
                        msg: I18n.mensajes.confirmarSalir,
                        fn: function (id) {
                            if (id === 'yes') {
                                var _canvas = Ext.getCmp('canvas-app');
                                var el = _canvas.getEl();
                                el.mask(I18n.mensajes.cerrandoSesion, "x-mask-loading");
                                Ext.Ajax.request({
                                    scope: this,
                                    url: Srp.WebScriptManager.getUrl('WS_GET_TICKET', "/ticket/" + Srp.WebScriptManager.getTicket()),
                                    method: 'DELETE',
                                    success: function () {
                                        Ext.util.Cookies.set("_ticket", null);
                                        Srp.WebScriptManager.setTicket(undefined);
                                        window.location.reload();
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    };
    return {
        initLayout: function () {
            header = buildHeader();
            footer = buildFooter();
            center = buildCenter();
            west = buildWest();
        },
        initComponent: function () {
            this.opcionesMenu = new Srp.gui.OpcionesMenu();
            west.add(this.opcionesMenu);
            west.add(new Srp.gui.VersionMenu());
            var clock = new Srp.gui.ClockBox();
            clock.init();
            west.add(clock);
            west.add(new Srp.gui.BoxMenu());
            west.add(new Srp.gui.MensajeMenu());
            content.add(new Srp.gui.TareaGrid());
        },
        render: function () {
            this.initLayout();
            this.initComponent();
            var viewport = new Ext.Viewport({
                layout: 'border',
                boxMaxWidth: 800,
                items: [header, west, center, footer],
                id: 'canvas-app'
            });
            content.doLayout();
            buildMainMenu();
            if (Ext.getDom('boxCompMensajeMenu') != undefined) {
                new Srp.command.ObtenerMensajeMenuCmd().onExecute(Ext.getDom('boxCompMensajeMenu'));
            }
        },
        updateContent: function (el, params) {
            Srp.WebScriptManager.removeTimeout();
            if (typeof (el) == 'string') {
                el = eval('new ' + el + '(' + Ext.util.JSON.encode(params) + ')');
            }
            content.removeAll(true);
            content.add(el);
            content.doLayout();
            Srp.FrontController.setIgnoreEvents(false);
        },
        goHome: function () {
            Srp.FrontController.fireEvent('Menu.onUpdateContent');
            tareaGrid = new Srp.gui.TareaGrid({
                region: 'center'
            });
            this.updateContent(tareaGrid);
        },
        goBuscador: function () {
            var buscador = new Srp.gui.BuscadorActuacionUPPanel();
            this.updateContent(buscador);
            buscador.doQuery(Srp.Canvas.cacheValues);
        },
        checkLogin: function () {
            if (!Srp.WebScriptManager.checkLoginTicket()) {
                var win = new Srp.gui.LoginWindow({
                    onLogin: this.init
                });
                win.show();
                return false;
            } else {
                return true;
            }
        },
        init: function () {
            model.user.Usuario.requestUser(function () {
                Srp.CategoryManager.loadRemoteOus();
                Srp.CategoryManager.loadRemoteCategories();
                Srp.Canvas.render();
                var cp = new Ext.state.CookieProvider({
                    expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 1)),
                    domain: "extjs.com"
                });
                Ext.state.Manager.setProvider(cp);
                Ext.util.Cookies.set("_ticket", Srp.WebScriptManager.getTicket());
                Srp.WebScriptManager.registrarEventos();
            });
        },
        hasChanged: function (canvasContent) {
            return typeof canvasContent !== 'undefined' && ((typeof canvasContent.losesChanges !== 'undefined' && canvasContent.losesChanges) || (typeof canvasContent.discardChanges !== 'undefined' && canvasContent.discardChanges()));
        },
        confirmUpdate: function (menu, actionId) {
            var canvasContent = Ext.getCmp(content.getId()).getComponent('content');
            if (Srp.Canvas.hasChanged(canvasContent)) {
                var msg = typeof (canvasContent.loseChangesMessage) !== 'undefined' ? canvasContent.loseChangesMessage : I18n.mensajes.perderDatos;
                Srp.gui.messageBox.YesNo({
                    msg: msg,
                    fn: function (id) {
                        if (id === 'yes') {
                            menu.dispatchAction(actionId);
                        }
                    }
                });
            } else {
                menu.dispatchAction(actionId);
            }
        },
        updateBoxMenu: function (c) {
            Ext.getCmp('boxMenu').show();
            Ext.getCmp('boxMenu').getComponent('applet-firma').update(c);
            Ext.getCmp('boxMenu').doLayout();
        },
        clean: function () {
            Ext.getCmp('boxMenu').hide();
            Srp.Canvas.goHome();
        }
    };
})();
Ext.onReady(function () {
    var valor = Ext.util.Cookies.get("_ticket");
    if (valor != 'null' && valor != null && valor != undefined) {
        Srp.WebScriptManager.setTicket(valor);
        Srp.WebServiceManager.setTicket(valor);
    }
    Ext.QuickTips.init();
    if (Srp.Canvas.checkLogin()) {
        Srp.Canvas.init();
    }
});

---
title: Verschiedenes
mediaId: work_misc
tags: work
locale: de
sort: 05
permalink: false
---
* Für das auf phpBB3 basierende [Team-Andro-Forum](https://www.team-andro.com/phpBB3/) habe ich diverse Modifikationen entwickelt, z.&#8239;B. das Facebook-Signin, ein eigenes Abonnement-System und einen <i lang="en">Log Wizard</i> für die Online-Coaching-Programme.

* Ich habe das PWA-Feature **Web-Push-Notifications** in die Team-Andro-Plattform integriert. Angemeldete Besucher können Benachrichtigungen aktivieren, z.&#8239;B. zu ihren persönlichen Abonnements, zu neuen Videos, zu neuen Fachartikeln e.&#8239;t.&#8239;c. Ein eigenes **Service-Worker**-Script und eine Erweiterung der phpBB-Benachrichtigungen sind für die Push-Abonnements in mobilen und Desktop-Browsern zuständig. Die Push-Nachrichten werden über einen eigenen node.js-Server versandt, der die [Web-Push-Library](https://github.com/web-push-libs/web-push) nutzt.

* Ich habe **Git als Versionsverwaltung** für die Software-Entwicklung bei Team-Andro etabliert. Es wird derzeit mit dem Branching-Modell von [Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/) eingesetzt (<i lang="en">Gitflow Workflow</i>).